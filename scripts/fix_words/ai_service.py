"""
AI服务客户端模块
用于与AI服务通信,生成单词数据
"""
import json
import re
import requests
from typing import List, Dict


class AIServiceClient:
    """AI服务客户端类"""
    
    def __init__(self, api_key: str, base_url: str, model: str):
        """
        初始化AI服务客户端
        
        Args:
            api_key: API密钥
            base_url: API基础URL
            model: 模型名称
        """
        self.api_key = api_key
        self.base_url = base_url.rstrip('/')
        self.model = model
        
    def generate_word_data(self, words: List[str]) -> List[Dict]:
        """
        为单词列表生成完整的语言数据
        
        Args:
            words: 单词列表
            
        Returns:
            包含完整数据的单词对象列表
            
        Raises:
            Exception: API调用失败或响应解析失败
        """
        prompt = self.build_prompt(words)
        
        # 构建请求
        headers = {
            'Authorization': f'Bearer {self.api_key}',
            'Content-Type': 'application/json'
        }
        
        data = {
            'model': self.model,
            'messages': [
                {
                    'role': 'system',
                    'content': '你是一个专业的英语词典编辑,擅长为英语学习者提供准确、简洁的单词学习数据。'
                },
                {
                    'role': 'user',
                    'content': prompt
                }
            ],
            'temperature': 0.3,  # 降低随机性,提高准确性
            'response_format': {'type': 'json_object'} if 'gpt' in self.model.lower() else None
        }
        
        # 移除不支持的参数
        if data['response_format'] is None:
            del data['response_format']
        
        # 调用API
        try:
            response = requests.post(
                f'{self.base_url}/chat/completions',
                headers=headers,
                json=data,
                timeout=60
            )
            response.raise_for_status()
            result = response.json()
            
            # 提取响应内容
            content = result['choices'][0]['message']['content']
            
            # 解析响应
            return self.parse_response(content)
            
        except requests.exceptions.RequestException as e:
            raise Exception(f"API调用失败: {e}")
        except (KeyError, IndexError) as e:
            raise Exception(f"API响应格式错误: {e}")
    
    def build_prompt(self, words: List[str]) -> str:
        """
        构建AI提示词
        
        Args:
            words: 单词列表
            
        Returns:
            完整的提示词字符串
        """
        word_list = ', '.join(words)
        
        prompt = f"""请为以下英语单词生成准确的学习数据。

要求：
1. phonetic: 使用IPA国际音标,格式为 [音标],包含重音符号(ˈ表示主重音,ˌ表示次重音)
2. meaning: 词性缩写 + 中文释义,多个词性用分号分隔,每个释义不超过10个汉字
   - 词性缩写: n. (名词), v. (动词), adj. (形容词), adv. (副词), prep. (介词), conj. (连词), pron. (代词), interj. (感叹词)
3. example: 10-20个单词的自然英文例句,使用简单词汇,清晰展示单词用法
4. exampleCn: 准确流畅的中文翻译,不超过30个汉字

单词列表: {word_list}

请以JSON格式返回,包含一个"words"数组,每个对象包含: word, phonetic, meaning, example, exampleCn

示例格式:
{{
  "words": [
    {{
      "word": "abandon",
      "phonetic": "[əˈbændən]",
      "meaning": "v. 放弃;抛弃",
      "example": "They had to abandon their home because of the flood.",
      "exampleCn": "由于洪水,他们不得不放弃家园。"
    }}
  ]
}}"""
        
        return prompt
    
    def parse_response(self, response: str) -> List[Dict]:
        """
        解析AI返回的JSON数据
        
        Args:
            response: AI返回的响应字符串
            
        Returns:
            单词数据列表
            
        Raises:
            ValueError: JSON解析失败或格式不正确
        """
        try:
            # 尝试直接解析JSON
            data = json.loads(response)
            
            # 检查是否包含words数组
            if 'words' in data and isinstance(data['words'], list):
                words = data['words']
            elif isinstance(data, list):
                # 如果直接是数组
                words = data
            else:
                raise ValueError("响应格式不正确: 缺少words数组")
            
            # 验证每个单词对象的必需字段
            required_fields = ['word', 'phonetic', 'meaning', 'example', 'exampleCn']
            for word_data in words:
                for field in required_fields:
                    if field not in word_data:
                        raise ValueError(f"单词数据缺少必需字段: {field}")
            
            return words
            
        except json.JSONDecodeError as e:
            # 尝试提取JSON部分(有时AI会在JSON前后添加说明文字)
            json_match = re.search(r'\{[\s\S]*\}', response)
            if json_match:
                try:
                    data = json.loads(json_match.group(0))
                    if 'words' in data and isinstance(data['words'], list):
                        return data['words']
                except:
                    pass
            raise ValueError(f"JSON解析失败: {e}")
