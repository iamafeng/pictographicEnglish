"""
数据合并器集成测试
测试与其他模块的集成
"""
import sys
import logging

# 配置日志
logging.basicConfig(level=logging.INFO)

from data_merger import DataMerger
from problem_detector import ProblemDetector


def test_full_workflow():
    """测试完整的工作流程"""
    print("\n" + "="*60)
    print("测试完整工作流程")
    print("="*60 + "\n")
    
    # 1. 创建测试数据（模拟words.js中的数据）
    print("1. 创建测试数据...")
    original_words = []
    
    # 前61个系统单词（不应被修改）
    for i in range(61):
        original_words.append({
            'word': f'system{i}',
            'phonetic': f'[sɪstəm{i}]',
            'meaning': f'n. 系统单词{i}',
            'example': f'This is system word {i}.',
            'exampleCn': f'这是系统单词{i}。',
            'svg': f'<svg>system{i}</svg>',
            'category': 'noun',
            'difficulty': 1,
            'tags': ['system']
        })
    
    # 添加10个需要修复的单词（索引61-70）
    for i in range(61, 71):
        original_words.append({
            'word': f'word{i}',
            'phonetic': '[...]',
            'meaning': 'n./v. 核心词汇',
            'example': f'This is word{i}.',
            'exampleCn': '示例句子',
            'svg': f'<svg>word{i}</svg>',
            'category': 'noun',
            'difficulty': 2,
            'tags': ['placeholder']
        })
    
    print(f"   创建了 {len(original_words)} 个单词")
    print(f"   - 系统单词: 61个")
    print(f"   - 需要修复的单词: 10个")
    
    # 2. 检测问题单词
    print("\n2. 检测问题单词...")
    detector = ProblemDetector()
    problem_words = detector.detect_placeholder_words(original_words)
    print(f"   检测到 {len(problem_words)} 个问题单词")
    
    assert len(problem_words) == 10, f"应该检测到10个问题单词，实际检测到{len(problem_words)}个"
    
    # 验证检测到的都是索引61-70的单词
    problem_indices = [idx for idx, _ in problem_words]
    assert problem_indices == list(range(61, 71)), "检测到的问题单词索引不正确"
    print("   ✓ 问题单词检测正确")
    
    # 3. 模拟AI生成修复数据
    print("\n3. 模拟AI生成修复数据...")
    fixed_data = {}
    for idx, word_data in problem_words:
        fixed_data[idx] = {
            'word': word_data['word'],
            'phonetic': f'[fɪkst{idx}]',
            'meaning': f'n. 修复的单词{idx}',
            'example': f'This is a fixed example for word {idx} with enough words to meet the requirement.',
            'exampleCn': f'这是单词{idx}的修复例句。'
        }
    print(f"   生成了 {len(fixed_data)} 个修复数据")
    
    # 4. 合并数据
    print("\n4. 合并修复数据...")
    merger = DataMerger()
    merged_words = merger.merge_fixed_data(original_words, fixed_data)
    print(f"   合并完成，共 {len(merged_words)} 个单词")
    
    # 5. 验证合并结果
    print("\n5. 验证合并结果...")
    
    # 验证数量
    assert len(merged_words) == len(original_words), "合并后单词数量改变"
    print("   ✓ 单词数量正确")
    
    # 验证系统单词未被修改
    for i in range(61):
        assert merged_words[i] == original_words[i], f"系统单词{i}被修改"
    print("   ✓ 前61个系统单词保持不变")
    
    # 验证修复的单词
    for i in range(61, 71):
        # 检查可更新字段已更新
        assert merged_words[i]['phonetic'] == f'[fɪkst{i}]', f"单词{i}的音标未更新"
        assert merged_words[i]['meaning'] == f'n. 修复的单词{i}', f"单词{i}的词义未更新"
        assert '修复例句' in merged_words[i]['exampleCn'], f"单词{i}的中文翻译未更新"
        
        # 检查保护字段未被修改
        assert merged_words[i]['word'] == original_words[i]['word'], f"单词{i}的word字段被修改"
        assert merged_words[i]['svg'] == original_words[i]['svg'], f"单词{i}的svg字段被修改"
        assert merged_words[i]['category'] == original_words[i]['category'], f"单词{i}的category字段被修改"
        assert merged_words[i]['difficulty'] == original_words[i]['difficulty'], f"单词{i}的difficulty字段被修改"
        assert merged_words[i]['tags'] == original_words[i]['tags'], f"单词{i}的tags字段被修改"
    
    print("   ✓ 修复的单词数据正确")
    print("   ✓ 保护字段未被修改")
    
    # 6. 验证数据完整性
    print("\n6. 验证数据完整性...")
    integrity_ok = merger.validate_merge_integrity(original_words, merged_words)
    assert integrity_ok, "数据完整性验证失败"
    print("   ✓ 数据完整性验证通过")
    
    # 7. 验证修复后没有占位符
    print("\n7. 验证修复后没有占位符...")
    remaining_problems = detector.detect_placeholder_words(merged_words)
    assert len(remaining_problems) == 0, f"修复后仍有{len(remaining_problems)}个占位符"
    print("   ✓ 所有占位符已修复")
    
    print("\n" + "="*60)
    print("✓ 所有集成测试通过！")
    print("="*60 + "\n")
    
    return True


def test_partial_fix_workflow():
    """测试部分修复的工作流程"""
    print("\n" + "="*60)
    print("测试部分修复工作流程")
    print("="*60 + "\n")
    
    # 创建测试数据
    print("1. 创建测试数据...")
    original_words = []
    
    # 前61个系统单词
    for i in range(61):
        original_words.append({
            'word': f'system{i}',
            'phonetic': f'[sɪstəm{i}]',
            'meaning': f'n. 系统单词{i}',
            'example': f'This is system word {i}.',
            'exampleCn': f'这是系统单词{i}。',
            'svg': f'<svg>system{i}</svg>',
            'category': 'noun',
            'difficulty': 1,
            'tags': ['system']
        })
    
    # 添加10个需要修复的单词
    for i in range(61, 71):
        original_words.append({
            'word': f'word{i}',
            'phonetic': '[...]',
            'meaning': 'n./v. 核心词汇',
            'example': f'This is word{i}.',
            'exampleCn': '示例句子',
            'svg': f'<svg>word{i}</svg>',
            'category': 'noun',
            'difficulty': 2,
            'tags': ['placeholder']
        })
    
    print(f"   创建了 {len(original_words)} 个单词")
    
    # 只修复部分单词（索引62, 64, 66, 68）
    print("\n2. 只修复部分单词...")
    fixed_data = {
        62: {
            'word': 'word62',
            'phonetic': '[fɪkst62]',
            'meaning': 'n. 修复的单词62',
            'example': 'This is a fixed example for word 62 with enough words.',
            'exampleCn': '这是单词62的修复例句。'
        },
        64: {
            'word': 'word64',
            'phonetic': '[fɪkst64]',
            'meaning': 'n. 修复的单词64',
            'example': 'This is a fixed example for word 64 with enough words.',
            'exampleCn': '这是单词64的修复例句。'
        },
        66: {
            'word': 'word66',
            'phonetic': '[fɪkst66]',
            'meaning': 'n. 修复的单词66',
            'example': 'This is a fixed example for word 66 with enough words.',
            'exampleCn': '这是单词66的修复例句。'
        },
        68: {
            'word': 'word68',
            'phonetic': '[fɪkst68]',
            'meaning': 'n. 修复的单词68',
            'example': 'This is a fixed example for word 68 with enough words.',
            'exampleCn': '这是单词68的修复例句。'
        }
    }
    print(f"   修复了 {len(fixed_data)} 个单词")
    
    # 合并数据
    print("\n3. 合并数据...")
    merger = DataMerger()
    merged_words = merger.merge_fixed_data(original_words, fixed_data)
    
    # 验证
    print("\n4. 验证结果...")
    
    # 验证修复的单词
    for idx in [62, 64, 66, 68]:
        assert merged_words[idx]['phonetic'] == f'[fɪkst{idx}]', f"单词{idx}未正确修复"
    print("   ✓ 修复的单词正确")
    
    # 验证未修复的单词保持原样
    for idx in [61, 63, 65, 67, 69, 70]:
        assert merged_words[idx]['phonetic'] == '[...]', f"单词{idx}不应被修改"
    print("   ✓ 未修复的单词保持原样")
    
    # 检测剩余问题
    detector = ProblemDetector()
    remaining_problems = detector.detect_placeholder_words(merged_words)
    assert len(remaining_problems) == 6, f"应该剩余6个问题单词，实际{len(remaining_problems)}个"
    print(f"   ✓ 剩余 {len(remaining_problems)} 个问题单词（符合预期）")
    
    print("\n" + "="*60)
    print("✓ 部分修复测试通过！")
    print("="*60 + "\n")
    
    return True


if __name__ == '__main__':
    try:
        success1 = test_full_workflow()
        success2 = test_partial_fix_workflow()
        
        if success1 and success2:
            print("\n" + "🎉 "*20)
            print("所有集成测试通过！数据合并器工作正常。")
            print("🎉 "*20 + "\n")
            sys.exit(0)
        else:
            sys.exit(1)
    except Exception as e:
        print(f"\n❌ 测试失败: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
