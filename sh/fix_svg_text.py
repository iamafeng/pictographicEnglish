"""
fix_svg_text.py
修复 word.json 中 SVG 的 <text> 截断问题：
  - 将 SVG 里的 <text> 内容替换为正确的完整单词（大写）
  - 根据单词长度动态调整字号，防止溢出
  - 保持其他 SVG 图形元素不变
"""

import json
import re
import sys
import os

INPUT_FILE  = r"D:\defsoftware\ai\gemini\word.json"
OUTPUT_FILE = r"D:\defsoftware\ai\gemini\word_fixed.json"

# viewBox 宽度为 120，根据单词长度动态计算合适的字号
def calc_font_size(word: str) -> int:
    n = len(word)
    if n <= 4:
        return 28
    elif n <= 5:
        return 24
    elif n <= 6:
        return 20
    elif n <= 7:
        return 18
    elif n <= 8:
        return 16
    elif n <= 10:
        return 14
    else:
        return 12

# 修复单条 SVG：把 <text …>XXX</text> 替换为正确内容
def fix_svg(svg: str, word: str) -> str:
    upper = word.upper()
    fs = calc_font_size(word)

    # 匹配 <text ...>任意大写内容</text>
    pattern = r'(<text\b[^>]*font-size=\\?")(\d+)(\\?"[^>]*>)[A-Z]+(<\/text>)'

    def replacer(m):
        return f'{m.group(1)}{fs}{m.group(3)}{upper}{m.group(4)}'

    new_svg, count = re.subn(pattern, replacer, svg)

    if count == 0:
        # 尝试不带转义的版本
        pattern2 = r'(<text\b[^>]*font-size=")(\d+)("[^>]*>)[A-Z]+(<\/text>)'
        new_svg, count2 = re.subn(pattern2, replacer, svg)
        if count2 == 0:
            print(f"  [WARN] 未匹配到 <text>: word={word}")

    return new_svg

def main():
    print(f"读取: {INPUT_FILE}")
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    total = len(data)
    fixed = 0
    skipped = 0

    for entry in data:
        word = entry.get("word", "")
        svg  = entry.get("svg", "")
        if not svg or not word:
            skipped += 1
            continue

        # 检查 SVG 文字内容是否正确
        # 匹配 >XXX< 中的大写字母
        m = re.search(r'>([A-Z]+)<\/text>', svg)
        if m:
            current_text = m.group(1)
            if current_text != word.upper():
                new_svg = fix_svg(svg, word)
                entry["svg"] = new_svg
                fixed += 1
                # 验证修复结果
                m2 = re.search(r'>([A-Z]+)<\/text>', new_svg)
                if m2 and m2.group(1) == word.upper():
                    pass  # OK
                else:
                    print(f"  [ERROR] 修复失败: word={word}, svg_text={m2.group(1) if m2 else 'N/A'}")
        else:
            skipped += 1

    print(f"\n统计: 总计={total}, 已修复={fixed}, 跳过={skipped}")
    print(f"写出: {OUTPUT_FILE}")

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print("完成！")

if __name__ == "__main__":
    main()
