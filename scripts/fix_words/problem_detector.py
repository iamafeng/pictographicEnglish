"""
问题检测器模块
用于识别包含占位符数据的单词
"""
from typing import List, Dict, Tuple


class ProblemDetector:
    """问题检测器类"""
    
    def detect_placeholder_words(self, words: List[Dict]) -> List[Tuple[int, Dict]]:
        """
        检测包含占位符的单词
        
        Args:
            words: 单词对象列表
            
        Returns:
            (索引, 单词对象)元组列表
        """
        problem_words = []
        for i, word in enumerate(words):
            if self._is_problem_word(word):
                problem_words.append((i, word))
        return problem_words
    
    def _is_problem_word(self, word: Dict) -> bool:
        """检查单词是否包含占位符"""
        return (
            self.is_placeholder_phonetic(word.get('phonetic', '')) or
            self.is_placeholder_meaning(word.get('meaning', '')) or
            self.is_placeholder_example(word.get('example', ''), word.get('word', '')) or
            self.is_placeholder_translation(word.get('exampleCn', ''))
        )
    
    def is_placeholder_phonetic(self, phonetic: str) -> bool:
        """检查音标是否为占位符"""
        return phonetic == '[...]'
    
    def is_placeholder_meaning(self, meaning: str) -> bool:
        """检查词义是否为占位符"""
        return meaning == 'n./v. 核心词汇'
    
    def is_placeholder_example(self, example: str, word: str) -> bool:
        """检查例句是否为占位符"""
        return example == f'This is {word}.'
    
    def is_placeholder_translation(self, translation: str) -> bool:
        """检查翻译是否为占位符"""
        return translation == '示例句子'
