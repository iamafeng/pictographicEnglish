"""
批处理管理器模块
用于管理批量处理流程,支持断点续传和重试机制
"""
import json
import time
import logging
from typing import List, Dict, Tuple

try:
    from .ai_service import AIServiceClient
    from .data_validator import DataValidator
except ImportError:
    from ai_service import AIServiceClient
    from data_validator import DataValidator


class BatchProcessor:
    """批处理管理器类"""
    
    def __init__(self, ai_client: AIServiceClient, validator: DataValidator,
                 batch_size: int = 25, max_retries: int = 3):
        """
        初始化批处理器
        
        Args:
            ai_client: AI服务客户端
            validator: 数据验证器
            batch_size: 批次大小(默认25)
            max_retries: 最大重试次数(默认3)
        """
        self.ai_client = ai_client
        self.validator = validator
        self.batch_size = batch_size
        self.max_retries = max_retries
        self.logger = logging.getLogger(__name__)
        
    def process_words(self, problem_words: List[Tuple[int, Dict]]) -> Dict[int, Dict]:
        """
        批量处理单词,返回修复后的数据
        
        Args:
            problem_words: 需要修复的单词列表,格式为[(索引, 单词对象), ...]
            
        Returns:
            {索引: 修复后数据}字典
        """
        processed_data = {}
        total = len(problem_words)
        
        # 创建批次
        batches = self._create_batches(problem_words)
        
        self.logger.info(f"开始处理 {total} 个单词,分为 {len(batches)} 个批次")
        
        for batch_idx, batch in enumerate(batches, 1):
            self.logger.info(f"处理批次 {batch_idx}/{len(batches)} ({len(batch)} 个单词)")
            
            try:
                # 处理单个批次
                batch_result = self.process_batch(batch)
                processed_data.update(batch_result)
                
                self.logger.info(f"批次 {batch_idx} 处理成功")
                
            except Exception as e:
                self.logger.error(f"批次 {batch_idx} 处理失败: {e}")
                # 继续处理下一批次
                continue
        
        return processed_data
    
    def process_batch(self, batch: List[Tuple[int, Dict]]) -> Dict[int, Dict]:
        """
        处理单个批次
        
        Args:
            batch: 批次中的单词列表,格式为[(索引, 单词对象), ...]
            
        Returns:
            {索引: 修复后数据}字典
            
        Raises:
            Exception: 处理失败且重试次数用尽
        """
        # 提取单词文本
        words = [word_data['word'] for _, word_data in batch]
        
        # 重试机制
        for attempt in range(self.max_retries):
            try:
                # 调用AI服务生成数据
                self.logger.info(f"调用AI服务生成数据 (尝试 {attempt + 1}/{self.max_retries})")
                generated_data = self.ai_client.generate_word_data(words)
                
                # 验证生成的数据
                validated_data = {}
                all_valid = True
                
                for idx, (original_idx, original_word) in enumerate(batch):
                    if idx >= len(generated_data):
                        self.logger.warning(f"单词 '{original_word['word']}' 未生成数据")
                        all_valid = False
                        continue
                    
                    word_data = generated_data[idx]
                    
                    # 验证数据
                    is_valid, errors = self.validator.validate_word_data(word_data)
                    
                    if is_valid:
                        validated_data[original_idx] = word_data
                        self.logger.info(f"单词 '{word_data['word']}' 验证通过")
                    else:
                        self.logger.warning(f"单词 '{word_data['word']}' 验证失败: {', '.join(errors)}")
                        all_valid = False
                
                # 如果所有数据都验证通过,返回结果
                if all_valid and len(validated_data) == len(batch):
                    return validated_data
                
                # 如果部分失败,记录并重试
                self.logger.warning(f"批次验证未完全通过,准备重试")
                
                # 指数退避
                if attempt < self.max_retries - 1:
                    wait_time = 2 ** attempt  # 1s, 2s, 4s
                    self.logger.info(f"等待 {wait_time} 秒后重试")
                    time.sleep(wait_time)
                
            except Exception as e:
                self.logger.error(f"批次处理出错 (尝试 {attempt + 1}/{self.max_retries}): {e}")
                
                # 指数退避
                if attempt < self.max_retries - 1:
                    wait_time = 2 ** attempt  # 1s, 2s, 4s
                    self.logger.info(f"等待 {wait_time} 秒后重试")
                    time.sleep(wait_time)
                else:
                    # 最后一次尝试失败,抛出异常
                    raise
        
        # 如果重试次数用尽仍未完全成功,返回部分结果
        self.logger.warning(f"批次处理未完全成功,返回部分结果 ({len(validated_data)}/{len(batch)})")
        return validated_data
    
    def save_checkpoint(self, processed_data: Dict[int, Dict], checkpoint_file: str):
        """
        保存处理进度到JSON文件
        
        Args:
            processed_data: 已处理的数据,格式为{索引: 修复后数据}
            checkpoint_file: checkpoint文件路径
        """
        try:
            with open(checkpoint_file, 'w', encoding='utf-8') as f:
                json.dump(processed_data, f, ensure_ascii=False, indent=2)
            self.logger.info(f"Checkpoint已保存到 {checkpoint_file}")
        except Exception as e:
            self.logger.error(f"保存checkpoint失败: {e}")
    
    def load_checkpoint(self, checkpoint_file: str) -> Dict[int, Dict]:
        """
        加载处理进度
        
        Args:
            checkpoint_file: checkpoint文件路径
            
        Returns:
            已处理的数据,格式为{索引: 修复后数据}
        """
        try:
            with open(checkpoint_file, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            # 将字符串键转换为整数键
            processed_data = {int(k): v for k, v in data.items()}
            
            self.logger.info(f"从 {checkpoint_file} 加载了 {len(processed_data)} 条记录")
            return processed_data
            
        except FileNotFoundError:
            self.logger.info(f"Checkpoint文件不存在: {checkpoint_file}")
            return {}
        except Exception as e:
            self.logger.error(f"加载checkpoint失败: {e}")
            return {}
    
    def _create_batches(self, items: List[Tuple[int, Dict]]) -> List[List[Tuple[int, Dict]]]:
        """
        将单词列表分成批次
        
        Args:
            items: 单词列表
            
        Returns:
            批次列表
        """
        batches = []
        for i in range(0, len(items), self.batch_size):
            batch = items[i:i + self.batch_size]
            batches.append(batch)
        return batches
