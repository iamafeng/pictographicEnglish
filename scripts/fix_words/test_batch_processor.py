"""
批处理器的简单测试脚本
"""
import json
import logging
import sys
import os

# 添加父目录到路径以支持导入
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# 现在可以导入模块
from batch_processor import BatchProcessor
from ai_service import AIServiceClient
from data_validator import DataValidator

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)

def test_checkpoint_roundtrip():
    """测试checkpoint的保存和加载"""
    print("测试 checkpoint 往返一致性...")
    
    # 创建测试数据
    test_data = {
        0: {
            'word': 'test',
            'phonetic': '[test]',
            'meaning': 'n. 测试',
            'example': 'This is a test example sentence for validation.',
            'exampleCn': '这是一个测试例句。'
        },
        1: {
            'word': 'example',
            'phonetic': '[ɪɡˈzɑːmpl]',
            'meaning': 'n. 例子',
            'example': 'Can you give me an example of this word?',
            'exampleCn': '你能给我一个这个词的例子吗?'
        }
    }
    
    # 创建批处理器(使用mock对象)
    processor = BatchProcessor(
        ai_client=None,  # 不需要真实的AI客户端
        validator=None,  # 不需要真实的验证器
        batch_size=25,
        max_retries=3
    )
    
    # 保存checkpoint
    checkpoint_file = 'test_checkpoint.json'
    processor.save_checkpoint(test_data, checkpoint_file)
    
    # 加载checkpoint
    loaded_data = processor.load_checkpoint(checkpoint_file)
    
    # 验证数据一致性
    assert loaded_data == test_data, "加载的数据与原始数据不一致"
    
    print("✓ Checkpoint往返一致性测试通过")
    
    # 清理测试文件
    import os
    if os.path.exists(checkpoint_file):
        os.remove(checkpoint_file)

def test_batch_creation():
    """测试批次创建"""
    print("\n测试批次创建...")
    
    # 创建测试单词列表
    test_words = [(i, {'word': f'word{i}'}) for i in range(50)]
    
    # 创建批处理器
    processor = BatchProcessor(
        ai_client=None,
        validator=None,
        batch_size=25,
        max_retries=3
    )
    
    # 创建批次
    batches = processor._create_batches(test_words)
    
    # 验证批次数量
    assert len(batches) == 2, f"期望2个批次,实际得到{len(batches)}个"
    
    # 验证每个批次的大小
    assert len(batches[0]) == 25, f"第一个批次期望25个单词,实际{len(batches[0])}个"
    assert len(batches[1]) == 25, f"第二个批次期望25个单词,实际{len(batches[1])}个"
    
    print("✓ 批次创建测试通过")

def test_batch_size_constraint():
    """测试批次大小约束"""
    print("\n测试批次大小约束...")
    
    # 测试不同的批次大小
    for batch_size in [20, 25, 30, 40, 50]:
        processor = BatchProcessor(
            ai_client=None,
            validator=None,
            batch_size=batch_size,
            max_retries=3
        )
        assert processor.batch_size == batch_size, f"批次大小设置失败"
    
    print("✓ 批次大小约束测试通过")

if __name__ == '__main__':
    print("开始测试 BatchProcessor...\n")
    
    try:
        test_checkpoint_roundtrip()
        test_batch_creation()
        test_batch_size_constraint()
        
        print("\n所有测试通过! ✓")
        
    except AssertionError as e:
        print(f"\n测试失败: {e}")
    except Exception as e:
        print(f"\n测试出错: {e}")
