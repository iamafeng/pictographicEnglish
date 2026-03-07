"""
数据验证器模块
用于验证生成数据的格式和质量
"""
import re
from typing import Dict, Tuple, List


class DataValidator:
    """数据验证器类"""
    
    # IPA音标常用符号(不完全列表,但涵盖常见符号)
    IPA_SYMBOLS = set('əɪʊɑɔæɛɜɒʌɐɨʉɘɵɤɯaeiouɚɝɹɾɫŋθðʃʒʧʤʍhwjlrmnpbtdkgfvszˈˌːˑ̆')
    
    # 词性缩写列表
    PART_OF_SPEECH = {'n.', 'v.', 'adj.', 'adv.', 'prep.', 'conj.', 'pron.', 'interj.'}
    
    def validate_word_data(self, word_data: Dict) -> Tuple[bool, List[str]]:
        """
        验证单个单词数据
        
        Args:
            word_data: 单词数据字典
            
        Returns:
            (是否通过, 错误列表)元组
        """
        errors = []
        
        # 验证必需字段存在
        required_fields = ['word', 'phonetic', 'meaning', 'example', 'exampleCn']
        for field in required_fields:
            if field not in word_data:
                errors.append(f"缺少必需字段: {field}")
        
        if errors:
            return False, errors
        
        # 验证各个字段
        if not self.validate_phonetic(word_data['phonetic']):
            errors.append(f"音标格式不正确: {word_data['phonetic']}")
        
        if not self.validate_meaning(word_data['meaning']):
            errors.append(f"词义格式不正确: {word_data['meaning']}")
        
        if not self.validate_example(word_data['example']):
            errors.append(f"例句格式不正确: {word_data['example']}")
        
        if not self.validate_translation(word_data['exampleCn']):
            errors.append(f"中文翻译不正确: {word_data['exampleCn']}")
        
        # 验证例句包含目标单词
        if not self._example_contains_word(word_data['example'], word_data['word']):
            errors.append(f"例句不包含目标单词: {word_data['word']}")
        
        return len(errors) == 0, errors
    
    def validate_phonetic(self, phonetic: str) -> bool:
        """
        验证音标格式
        
        验证规则:
        - 必须以 [ 开头、] 结尾
        - 包含有效的IPA符号
        - 不为空,不包含 [...]
        
        Args:
            phonetic: 音标字符串
            
        Returns:
            是否有效
        """
        if not phonetic:
            return False
        
        # 检查方括号格式
        if not (phonetic.startswith('[') and phonetic.endswith(']')):
            return False
        
        # 检查是否为占位符
        if phonetic == '[...]':
            return False
        
        # 提取方括号内的内容
        content = phonetic[1:-1]
        
        # 检查是否为空
        if not content:
            return False
        
        # 检查是否包含有效的IPA符号或重音符号
        has_ipa_symbol = any(char in self.IPA_SYMBOLS for char in content)
        
        return has_ipa_symbol
    
    def validate_meaning(self, meaning: str) -> bool:
        """
        验证词义格式
        
        验证规则:
        - 包含词性标注(n./v./adj./adv./prep.等)
        - 包含中文字符
        - 不包含"核心词汇"
        
        Args:
            meaning: 词义字符串
            
        Returns:
            是否有效
        """
        if not meaning:
            return False
        
        # 检查是否包含占位符文本
        if '核心词汇' in meaning:
            return False
        
        # 检查是否包含词性标注
        has_pos = any(pos in meaning for pos in self.PART_OF_SPEECH)
        if not has_pos:
            return False
        
        # 检查是否包含中文字符
        has_chinese = any('\u4e00' <= char <= '\u9fff' for char in meaning)
        if not has_chinese:
            return False
        
        return True
    
    def validate_example(self, example: str) -> bool:
        """
        验证例句格式
        
        验证规则:
        - 长度在10-20个单词之间
        - 不匹配 "This is {word}." 模式
        
        Args:
            example: 例句字符串
            
        Returns:
            是否有效
        """
        if not example:
            return False
        
        # 检查是否匹配占位符模式
        if re.match(r'^This is \w+\.$', example):
            return False
        
        # 计算单词数量
        words = example.split()
        word_count = len(words)
        
        # 检查长度范围
        if word_count < 10 or word_count > 20:
            return False
        
        return True
    
    def validate_translation(self, translation: str) -> bool:
        """
        验证中文翻译
        
        验证规则:
        - 不为空
        - 包含中文字符
        - 不为"示例句子"
        - 长度<=30字
        
        Args:
            translation: 中文翻译字符串
            
        Returns:
            是否有效
        """
        if not translation:
            return False
        
        # 检查是否为占位符
        if translation == '示例句子':
            return False
        
        # 检查是否包含中文字符
        has_chinese = any('\u4e00' <= char <= '\u9fff' for char in translation)
        if not has_chinese:
            return False
        
        # 计算中文字符数量
        chinese_count = sum(1 for char in translation if '\u4e00' <= char <= '\u9fff')
        
        # 检查长度限制
        if chinese_count > 30:
            return False
        
        return True
    
    def _example_contains_word(self, example: str, word: str) -> bool:
        """
        检查例句是否包含目标单词
        
        Args:
            example: 例句
            word: 目标单词
            
        Returns:
            是否包含
        """
        # 转换为小写进行比较
        example_lower = example.lower()
        word_lower = word.lower()
        
        # 使用单词边界匹配,避免部分匹配
        pattern = r'\b' + re.escape(word_lower) + r'\b'
        return bool(re.search(pattern, example_lower))
