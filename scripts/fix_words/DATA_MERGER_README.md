# 数据合并器 (DataMerger) 使用文档

## 概述

`DataMerger` 是单词翻译数据修复工具的核心组件之一，负责将AI生成的修复数据安全地合并到原始单词列表中，同时保护关键字段不被修改。

## 主要功能

1. **安全合并**: 将修复后的数据合并到原始单词列表
2. **字段保护**: 确保 `word`、`svg`、`category`、`difficulty`、`tags` 字段不被修改
3. **系统单词保护**: 前61个系统单词完全不变
4. **数据完整性验证**: 验证合并后的数据完整性

## 核心方法

### 1. merge_fixed_data()

合并修复后的数据到原始单词列表。

```python
def merge_fixed_data(self, original_words: List[Dict], 
                    fixed_data: Dict[int, Dict]) -> List[Dict]:
    """
    Args:
        original_words: 原始单词列表
        fixed_data: 修复后的数据，格式为 {索引: 修复后数据}
    
    Returns:
        合并后的单词列表
    """
```

**使用示例**:

```python
from data_merger import DataMerger

# 创建合并器实例
merger = DataMerger()

# 原始单词列表
original_words = [
    {
        'word': 'test',
        'phonetic': '[...]',
        'meaning': 'n./v. 核心词汇',
        'example': 'This is test.',
        'exampleCn': '示例句子',
        'svg': '<svg>test</svg>',
        'category': 'noun',
        'difficulty': 1,
        'tags': ['basic']
    }
]

# 修复后的数据（索引: 数据）
fixed_data = {
    0: {
        'word': 'test',
        'phonetic': '[test]',
        'meaning': 'n. 测试',
        'example': 'This is a test example with enough words.',
        'exampleCn': '这是一个测试例句。'
    }
}

# 合并数据
merged_words = merger.merge_fixed_data(original_words, fixed_data)
```

### 2. update_word_fields()

更新单词的特定字段，仅修改允许的字段。

```python
def update_word_fields(self, original: Dict, fixed: Dict) -> Dict:
    """
    仅更新 phonetic、meaning、example、exampleCn 四个字段
    
    Args:
        original: 原始单词对象
        fixed: 修复后的数据
    
    Returns:
        更新后的单词对象
    """
```

### 3. validate_merge_integrity()

验证合并后的数据完整性。

```python
def validate_merge_integrity(self, original_words: List[Dict], 
                             merged_words: List[Dict]) -> bool:
    """
    检查:
    1. 单词数量不变
    2. 单词顺序不变
    3. 保护字段未被修改
    4. 前61个系统单词完全不变
    
    Returns:
        是否通过验证
    """
```

## 字段说明

### 可更新字段 (UPDATABLE_FIELDS)

这些字段可以被修复数据更新：

- `phonetic`: IPA音标
- `meaning`: 词性和中文释义
- `example`: 英文例句
- `exampleCn`: 中文翻译

### 保护字段 (PROTECTED_FIELDS)

这些字段永远不会被修改：

- `word`: 单词文本
- `svg`: SVG图形
- `category`: 词性分类
- `difficulty`: 难度等级
- `tags`: 标签列表

### 系统单词保护

前61个单词（索引 0-60）是系统单词，**所有字段**都不会被修改，即使提供了修复数据。

## 完整工作流程示例

```python
from data_loader import DataLoader
from problem_detector import ProblemDetector
from ai_service import AIServiceClient
from data_validator import DataValidator
from batch_processor import BatchProcessor
from data_merger import DataMerger

# 1. 加载原始数据
loader = DataLoader()
original_words = loader.load_words_file('words.js')

# 2. 检测问题单词
detector = ProblemDetector()
problem_words = detector.detect_placeholder_words(original_words)
print(f"检测到 {len(problem_words)} 个问题单词")

# 3. 批量处理修复（使用AI服务）
ai_client = AIServiceClient(api_key="your_key", base_url="...", model="...")
validator = DataValidator()
processor = BatchProcessor(ai_client, validator)
fixed_data = processor.process_words(problem_words)

# 4. 合并修复数据
merger = DataMerger()
merged_words = merger.merge_fixed_data(original_words, fixed_data)

# 5. 验证数据完整性
if merger.validate_merge_integrity(original_words, merged_words):
    print("✓ 数据完整性验证通过")
else:
    print("✗ 数据完整性验证失败")

# 6. 验证修复效果
remaining_problems = detector.detect_placeholder_words(merged_words)
print(f"剩余问题单词: {len(remaining_problems)}")
```

## 测试

### 运行单元测试

```bash
cd scripts/fix_words
python test_data_merger.py
```

### 运行集成测试

```bash
cd scripts/fix_words
python test_integration_merger.py
```

## 设计原则

1. **不可变性**: 原始数据不会被修改，总是创建新的副本
2. **防御性编程**: 多层验证确保数据安全
3. **明确的职责**: 只负责数据合并，不涉及AI调用或文件操作
4. **可追溯性**: 详细的日志记录每个操作

## 错误处理

合并器本身不会抛出异常，但会通过日志记录警告和错误信息。验证方法会返回布尔值指示是否通过验证。

## 性能考虑

- 对于大量单词（如273个），合并操作是O(n)时间复杂度
- 内存使用：创建完整的副本，需要约2倍原始数据的内存
- 建议在合并前先验证修复数据的质量，避免无效合并

## 相关模块

- `problem_detector.py`: 检测占位符数据
- `data_validator.py`: 验证修复数据质量
- `batch_processor.py`: 批量处理和AI集成
- `file_generator.py`: 生成最终的words.js文件

## 版本历史

- v1.0.0 (2024): 初始版本，实现基本的合并和验证功能
