"""
数据合并器模块
用于合并修复后的数据到原始单词列表
"""
from typing import List, Dict
import logging


class DataMerger:
    """数据合并器类"""
    
    # 前61个系统单词的索引范围
    SYSTEM_WORDS_COUNT = 61
    
    # 允许修改的字段
    UPDATABLE_FIELDS = {'phonetic', 'meaning', 'example', 'exampleCn'}
    
    # 不允许修改的字段
    PROTECTED_FIELDS = {'word', 'svg', 'category', 'difficulty', 'tags'}
    
    def __init__(self):
        """初始化数据合并器"""
        self.logger = logging.getLogger(__name__)
    
    def merge_fixed_data(self, original_words: List[Dict], 
                        fixed_data: Dict[int, Dict]) -> List[Dict]:
        """
        合并修复后的数据到原始单词列表
        
        Args:
            original_words: 原始单词列表
            fixed_data: 修复后的数据,格式为{索引: 修复后数据}
            
        Returns:
            合并后的单词列表
        """
        # 创建原始列表的深拷贝,避免修改原始数据
        merged_words = []
        
        for idx, original_word in enumerate(original_words):
            # 检查是否为系统单词(前61个)
            if idx < self.SYSTEM_WORDS_COUNT:
                # 系统单词完全不变
                merged_words.append(original_word.copy())
                self.logger.debug(f"保持系统单词不变: {original_word.get('word', 'unknown')} (索引 {idx})")
                continue
            
            # 检查是否有修复数据
            if idx in fixed_data:
                # 合并修复数据
                merged_word = self.update_word_fields(original_word, fixed_data[idx])
                merged_words.append(merged_word)
                self.logger.info(f"合并修复数据: {original_word.get('word', 'unknown')} (索引 {idx})")
            else:
                # 没有修复数据,保持原样
                merged_words.append(original_word.copy())
                self.logger.debug(f"保持原始数据: {original_word.get('word', 'unknown')} (索引 {idx})")
        
        return merged_words
    
    def update_word_fields(self, original: Dict, fixed: Dict) -> Dict:
        """
        更新单词的特定字段
        
        仅更新 phonetic、meaning、example、exampleCn 四个字段,
        保持其他字段(word、svg、category、difficulty、tags)不变
        
        Args:
            original: 原始单词对象
            fixed: 修复后的数据
            
        Returns:
            更新后的单词对象
        """
        # 创建原始对象的副本
        updated = original.copy()
        
        # 仅更新允许修改的字段
        for field in self.UPDATABLE_FIELDS:
            if field in fixed:
                updated[field] = fixed[field]
                self.logger.debug(f"更新字段 {field}: {fixed[field][:50]}...")
        
        # 验证保护字段未被修改
        for field in self.PROTECTED_FIELDS:
            if field in original:
                # 确保保护字段保持不变
                updated[field] = original[field]
        
        return updated
    
    def validate_merge_integrity(self, original_words: List[Dict], 
                                 merged_words: List[Dict]) -> bool:
        """
        验证合并后的数据完整性
        
        检查:
        1. 单词数量不变
        2. 单词顺序不变
        3. 保护字段未被修改
        4. 前61个系统单词完全不变
        
        Args:
            original_words: 原始单词列表
            merged_words: 合并后的单词列表
            
        Returns:
            是否通过验证
        """
        # 检查数量
        if len(original_words) != len(merged_words):
            self.logger.error(f"单词数量不一致: 原始 {len(original_words)}, 合并后 {len(merged_words)}")
            return False
        
        # 检查每个单词
        for idx, (original, merged) in enumerate(zip(original_words, merged_words)):
            # 检查单词顺序(通过word字段)
            if original.get('word') != merged.get('word'):
                self.logger.error(f"索引 {idx} 单词顺序改变: {original.get('word')} -> {merged.get('word')}")
                return False
            
            # 检查保护字段
            for field in self.PROTECTED_FIELDS:
                if field in original:
                    if original[field] != merged[field]:
                        self.logger.error(f"索引 {idx} 保护字段 {field} 被修改: {original[field]} -> {merged[field]}")
                        return False
            
            # 检查系统单词(前61个)完全不变
            if idx < self.SYSTEM_WORDS_COUNT:
                if original != merged:
                    self.logger.error(f"系统单词 {idx} 被修改: {original.get('word')}")
                    return False
        
        self.logger.info("数据完整性验证通过")
        return True
