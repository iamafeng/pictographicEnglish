"""
数据合并器单元测试
"""
import sys
import logging

# 配置日志
logging.basicConfig(level=logging.WARNING)

try:
    import pytest
    HAS_PYTEST = True
except ImportError:
    HAS_PYTEST = False
    print("警告: pytest未安装，使用简单测试模式")

from data_merger import DataMerger


class TestDataMerger:
    """测试DataMerger类"""
    
    def setup_method(self):
        """每个测试方法前的设置"""
        self.merger = DataMerger()
    
    def test_update_word_fields_only_updatable(self):
        """测试仅更新允许修改的字段"""
        original = {
            'word': 'test',
            'phonetic': '[...]',
            'meaning': 'n./v. 核心词汇',
            'example': 'This is test.',
            'exampleCn': '示例句子',
            'svg': '<svg>original</svg>',
            'category': 'noun',
            'difficulty': 1,
            'tags': ['basic']
        }
        
        fixed = {
            'word': 'test',
            'phonetic': '[test]',
            'meaning': 'n. 测试',
            'example': 'This is a test example.',
            'exampleCn': '这是一个测试例句。'
        }
        
        result = self.merger.update_word_fields(original, fixed)
        
        # 验证可更新字段已更新
        assert result['phonetic'] == '[test]'
        assert result['meaning'] == 'n. 测试'
        assert result['example'] == 'This is a test example.'
        assert result['exampleCn'] == '这是一个测试例句。'
        
        # 验证保护字段未被修改
        assert result['word'] == 'test'
        assert result['svg'] == '<svg>original</svg>'
        assert result['category'] == 'noun'
        assert result['difficulty'] == 1
        assert result['tags'] == ['basic']
    
    def test_update_word_fields_protected_fields_unchanged(self):
        """测试保护字段不会被修改"""
        original = {
            'word': 'test',
            'phonetic': '[...]',
            'meaning': 'n./v. 核心词汇',
            'example': 'This is test.',
            'exampleCn': '示例句子',
            'svg': '<svg>original</svg>',
            'category': 'noun',
            'difficulty': 1,
            'tags': ['basic']
        }
        
        # 尝试修改保护字段
        fixed = {
            'word': 'modified',  # 尝试修改
            'phonetic': '[test]',
            'meaning': 'n. 测试',
            'example': 'This is a test example.',
            'exampleCn': '这是一个测试例句。',
            'svg': '<svg>modified</svg>',  # 尝试修改
            'category': 'verb',  # 尝试修改
            'difficulty': 5,  # 尝试修改
            'tags': ['advanced']  # 尝试修改
        }
        
        result = self.merger.update_word_fields(original, fixed)
        
        # 验证保护字段保持原值
        assert result['word'] == 'test'
        assert result['svg'] == '<svg>original</svg>'
        assert result['category'] == 'noun'
        assert result['difficulty'] == 1
        assert result['tags'] == ['basic']
    
    def test_merge_fixed_data_system_words_unchanged(self):
        """测试前61个系统单词完全不变"""
        # 创建包含系统单词的列表
        original_words = []
        for i in range(65):
            original_words.append({
                'word': f'word{i}',
                'phonetic': '[...]',
                'meaning': 'n./v. 核心词汇',
                'example': f'This is word{i}.',
                'exampleCn': '示例句子',
                'svg': f'<svg>{i}</svg>',
                'category': 'noun',
                'difficulty': 1,
                'tags': ['basic']
            })
        
        # 尝试修复前61个单词(应该被忽略)
        fixed_data = {}
        for i in range(65):
            fixed_data[i] = {
                'word': f'word{i}',
                'phonetic': f'[fixed{i}]',
                'meaning': f'n. 修复{i}',
                'example': f'This is a fixed example {i}.',
                'exampleCn': f'这是修复的例句{i}。'
            }
        
        result = self.merger.merge_fixed_data(original_words, fixed_data)
        
        # 验证前61个单词完全不变
        for i in range(61):
            assert result[i] == original_words[i]
            assert result[i]['phonetic'] == '[...]'
            assert result[i]['meaning'] == 'n./v. 核心词汇'
        
        # 验证第62个及以后的单词被修复
        for i in range(61, 65):
            assert result[i]['phonetic'] == f'[fixed{i}]'
            assert result[i]['meaning'] == f'n. 修复{i}'
    
    def test_merge_fixed_data_preserves_order(self):
        """测试合并后保持单词顺序"""
        original_words = [
            {'word': 'apple', 'phonetic': '[...]', 'meaning': 'n./v. 核心词汇', 
             'example': 'This is apple.', 'exampleCn': '示例句子'},
            {'word': 'banana', 'phonetic': '[...]', 'meaning': 'n./v. 核心词汇',
             'example': 'This is banana.', 'exampleCn': '示例句子'},
            {'word': 'cherry', 'phonetic': '[...]', 'meaning': 'n./v. 核心词汇',
             'example': 'This is cherry.', 'exampleCn': '示例句子'}
        ]
        
        fixed_data = {
            1: {'word': 'banana', 'phonetic': '[bəˈnænə]', 'meaning': 'n. 香蕉',
                'example': 'I like banana.', 'exampleCn': '我喜欢香蕉。'}
        }
        
        result = self.merger.merge_fixed_data(original_words, fixed_data)
        
        # 验证顺序不变
        assert len(result) == 3
        assert result[0]['word'] == 'apple'
        assert result[1]['word'] == 'banana'
        assert result[2]['word'] == 'cherry'
    
    def test_merge_fixed_data_partial_fix(self):
        """测试部分单词修复"""
        # 创建70个单词(前61个系统单词 + 9个需要修复的)
        original_words = []
        for i in range(70):
            original_words.append({
                'word': f'word{i}',
                'phonetic': '[...]',
                'meaning': 'n./v. 核心词汇',
                'example': f'This is word{i}.',
                'exampleCn': '示例句子',
                'svg': f'<svg>{i}</svg>',
                'category': 'noun',
                'difficulty': 1,
                'tags': ['basic']
            })
        
        # 只修复部分单词(索引62, 64, 66)
        fixed_data = {
            62: {'word': 'word62', 'phonetic': '[fixed62]', 'meaning': 'n. 修复62',
                 'example': 'This is a fixed example 62.', 'exampleCn': '这是修复的例句62。'},
            64: {'word': 'word64', 'phonetic': '[fixed64]', 'meaning': 'n. 修复64',
                 'example': 'This is a fixed example 64.', 'exampleCn': '这是修复的例句64。'},
            66: {'word': 'word66', 'phonetic': '[fixed66]', 'meaning': 'n. 修复66',
                 'example': 'This is a fixed example 66.', 'exampleCn': '这是修复的例句66。'}
        }
        
        result = self.merger.merge_fixed_data(original_words, fixed_data)
        
        # 验证修复的单词
        assert result[62]['phonetic'] == '[fixed62]'
        assert result[64]['phonetic'] == '[fixed64]'
        assert result[66]['phonetic'] == '[fixed66]'
        
        # 验证未修复的单词保持原样
        assert result[63]['phonetic'] == '[...]'
        assert result[65]['phonetic'] == '[...]'
        assert result[67]['phonetic'] == '[...]'
    
    def test_validate_merge_integrity_success(self):
        """测试数据完整性验证通过"""
        # 创建65个单词（前61个系统单词 + 4个可修复的单词）
        original_words = []
        for i in range(65):
            original_words.append({
                'word': f'word{i}',
                'phonetic': '[...]',
                'meaning': 'n./v. 核心词汇',
                'example': f'This is word{i}.',
                'exampleCn': '示例句子',
                'svg': f'<svg>{i}</svg>',
                'category': 'noun',
                'difficulty': 1,
                'tags': ['basic']
            })
        
        # 创建合并后的单词列表
        merged_words = []
        for i in range(65):
            if i < 61:
                # 前61个系统单词保持不变
                merged_words.append(original_words[i].copy())
            else:
                # 第62个及以后的单词可以修改可更新字段
                word = original_words[i].copy()
                word['phonetic'] = f'[fixed{i}]'
                word['meaning'] = f'n. 修复{i}'
                word['example'] = f'This is a fixed example {i}.'
                word['exampleCn'] = f'这是修复的例句{i}。'
                merged_words.append(word)
        
        assert self.merger.validate_merge_integrity(original_words, merged_words) is True
    
    def test_validate_merge_integrity_count_mismatch(self):
        """测试数量不一致时验证失败"""
        original_words = [
            {'word': 'test1', 'phonetic': '[...]', 'meaning': 'n./v. 核心词汇'}
        ]
        
        merged_words = [
            {'word': 'test1', 'phonetic': '[test1]', 'meaning': 'n. 测试1'},
            {'word': 'test2', 'phonetic': '[test2]', 'meaning': 'n. 测试2'}
        ]
        
        assert self.merger.validate_merge_integrity(original_words, merged_words) is False
    
    def test_validate_merge_integrity_order_changed(self):
        """测试顺序改变时验证失败"""
        original_words = [
            {'word': 'test1', 'phonetic': '[...]'},
            {'word': 'test2', 'phonetic': '[...]'}
        ]
        
        merged_words = [
            {'word': 'test2', 'phonetic': '[test2]'},  # 顺序错误
            {'word': 'test1', 'phonetic': '[test1]'}
        ]
        
        assert self.merger.validate_merge_integrity(original_words, merged_words) is False
    
    def test_validate_merge_integrity_protected_field_changed(self):
        """测试保护字段被修改时验证失败"""
        original_words = [
            {'word': 'test1', 'phonetic': '[...]', 'svg': '<svg>original</svg>',
             'category': 'noun', 'difficulty': 1, 'tags': ['basic']}
        ]
        
        merged_words = [
            {'word': 'test1', 'phonetic': '[test1]', 'svg': '<svg>modified</svg>',  # 被修改
             'category': 'noun', 'difficulty': 1, 'tags': ['basic']}
        ]
        
        assert self.merger.validate_merge_integrity(original_words, merged_words) is False
    
    def test_empty_fixed_data(self):
        """测试空的修复数据"""
        original_words = [
            {'word': 'test1', 'phonetic': '[...]', 'meaning': 'n./v. 核心词汇'},
            {'word': 'test2', 'phonetic': '[...]', 'meaning': 'n./v. 核心词汇'}
        ]
        
        fixed_data = {}
        
        result = self.merger.merge_fixed_data(original_words, fixed_data)
        
        # 验证返回原始数据的副本
        assert len(result) == 2
        assert result[0]['word'] == 'test1'
        assert result[1]['word'] == 'test2'
    
    def test_empty_original_words(self):
        """测试空的原始单词列表"""
        original_words = []
        fixed_data = {}
        
        result = self.merger.merge_fixed_data(original_words, fixed_data)
        
        assert result == []


def run_simple_tests():
    """运行简单测试（不依赖pytest）"""
    test = TestDataMerger()
    test_methods = [method for method in dir(test) if method.startswith('test_')]
    
    passed = 0
    failed = 0
    
    print(f"\n运行 {len(test_methods)} 个测试...\n")
    
    for method_name in test_methods:
        try:
            test.setup_method()
            method = getattr(test, method_name)
            method()
            print(f"✓ {method_name}")
            passed += 1
        except AssertionError as e:
            print(f"✗ {method_name}: {e}")
            failed += 1
        except Exception as e:
            print(f"✗ {method_name}: 错误 - {e}")
            failed += 1
    
    print(f"\n{'='*60}")
    print(f"测试结果: {passed} 通过, {failed} 失败")
    print(f"{'='*60}\n")
    
    return failed == 0


if __name__ == '__main__':
    if HAS_PYTEST:
        pytest.main([__file__, '-v'])
    else:
        success = run_simple_tests()
        sys.exit(0 if success else 1)
