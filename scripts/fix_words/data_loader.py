"""
数据加载器模块
用于加载和解析words.js文件
"""
import re
import json
from typing import List, Dict


class DataLoader:
    """数据加载器类"""
    
    def load_words_file(self, file_path: str) -> List[Dict]:
        """
        加载words.js文件并解析为Python对象列表
        
        Args:
            file_path: words.js文件路径
            
        Returns:
            单词对象列表
            
        Raises:
            FileNotFoundError: 文件不存在
            ValueError: 文件格式错误
        """
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            return self.extract_words_array(content)
        except FileNotFoundError:
            raise FileNotFoundError(f"文件不存在: {file_path}")
        except Exception as e:
            raise ValueError(f"加载文件失败: {e}")
    
    def extract_words_array(self, content: str) -> List[Dict]:
        """
        从JavaScript文件内容中提取words数组
        
        Args:
            content: JavaScript文件内容
            
        Returns:
            单词对象列表
            
        Raises:
            ValueError: 无法提取words数组或JSON解析失败
        """
        # 使用正则表达式提取 const words = [...] 数组
        pattern = r'const\s+words\s*=\s*(\[[\s\S]*?\]);'
        match = re.search(pattern, content)
        
        if not match:
            raise ValueError("无法在文件中找到 'const words = [...]' 数组")
        
        array_str = match.group(1)
        
        try:
            # 解析JSON
            words = json.loads(array_str)
            return words
        except json.JSONDecodeError as e:
            raise ValueError(f"JSON解析失败: {e}")
