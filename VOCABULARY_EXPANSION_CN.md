# 词汇扩展指南

> **向 Pictographic Learn 添加新单词的完整指南**

本文档提供了扩展词汇数据库的详细说明，包括单词对象结构、难度分配、SVG 生成和测试流程。

中文版本 | [English](VOCABULARY_EXPANSION.md)

---

## 目录

1. [单词对象结构](#单词对象结构)
2. [难度分配](#难度分配)
3. [SVG 象形图要求](#svg-象形图要求)
4. [向 words.js 添加单词](#向-wordsjs-添加单词)
5. [测试新单词](#测试新单词)
6. [使用 AI 生成单词](#使用-ai-生成单词)
7. [最佳实践](#最佳实践)

---

## 单词对象结构

### 必填字段

每个单词对象必须包含以下字段：

```javascript
{
    // === 必填字段 ===
    word: "example",              // 英文单词（小写，无空格）
    phonetic: "[ɪɡˈzɑːmpl]",     // IPA 音标
    meaning: "n. 例子",           // 词性 + 中文含义
    example: "For example...",    // 英文例句
    exampleCn: "例如...",         // 例句中文翻译
    svg: "<svg>...</svg>",        // SVG 象形图标记
    
    // === 自动生成字段 ===
    category: "noun",             // 从 meaning 自动检测
    difficulty: 1,                // 自动计算（1-5）
    tags: ["basic", "common"],    // 自动生成的描述性标签
    
    // === 元数据（用于自定义单词）===
    custom: false,                // 用户添加的单词为 true
    source: "system",             // "system" | "user" | "import"
    createdAt: 1234567890         // Unix 时间戳
}
```

### 字段规范

#### `word`（字符串，必填）
- **格式**：小写英文单词
- **规则**：
  - 无空格（复合词使用连字符："ice-cream"）
  - 除连字符外无特殊字符
  - 在数据库中必须唯一
- **示例**：`"apple"`、`"run"`、`"beautiful"`、`"ice-cream"`

#### `phonetic`（字符串，必填）
- **格式**：IPA（国际音标）标记
- **规则**：
  - 用方括号括起来：`[...]`
  - 使用标准 IPA 符号
  - 包含重音标记（ˈ 表示主重音，ˌ 表示次重音）
- **示例**：
  - `"[ˈæpl]"`（apple）
  - `"[rʌn]"`（run）
  - `"[ˈbjuːtɪfl]"`（beautiful）
- **资源**：
  - [剑桥词典](https://dictionary.cambridge.org/)
  - [韦氏词典](https://www.merriam-webster.com/)

#### `meaning`（字符串，必填）
- **格式**：词性缩写 + 中文翻译
- **词性缩写**：
  - `n.` - 名词
  - `v.` - 动词
  - `adj.` - 形容词
  - `adv.` - 副词
  - `prep.` - 介词
  - `conj.` - 连词
  - `pron.` - 代词
  - `interj.` - 感叹词
- **示例**：
  - `"n. 苹果"`
  - `"v. 跑步"`
  - `"adj. 美丽的"`
  - `"adv. 快速地"`

#### `example`（字符串，必填）
- **格式**：使用该单词的完整英文句子
- **规则**：
  - 必须是完整句子（主语 + 动词）
  - 应展示典型用法
  - 保持简单清晰（理想长度 10-20 个单词）
  - 使用正确的大小写和标点符号
- **示例**：
  - `"I eat an apple every day."`
  - `"She runs in the park every morning."`
  - `"The sunset is beautiful tonight."`

#### `exampleCn`（字符串，必填）
- **格式**：例句的中文翻译
- **规则**：
  - 必须准确翻译英文例句
  - 使用自然的中文表达
  - 包含正确的标点符号（。！？）
- **示例**：
  - `"我每天吃一个苹果。"`
  - `"她每天早上在公园跑步。"`
  - `"今晚的日落很美。"`

#### `svg`（字符串，必填）
- **格式**：完整的 SVG 标记字符串
- **要求**：参见 [SVG 象形图要求](#svg-象形图要求)

#### `category`（字符串，自动生成）
- **值**：`"noun"`、`"verb"`、`"adjective"`、`"adverb"`、`"preposition"`、`"conjunction"`、`"pronoun"`、`"interjection"`、`"other"`
- **自动检测**：由 CategoryDetector 服务从 `meaning` 字段提取
- **手动覆盖**：如果自动检测失败，可以手动设置

#### `difficulty`（数字，自动生成）
- **范围**：1-5（1 = 最简单，5 = 最难）
- **自动计算**：基于多个因素（参见[难度分配](#难度分配)）
- **手动覆盖**：如有需要可以手动调整

#### `tags`（数组，自动生成）
- **格式**：小写描述性字符串数组
- **示例**：`["food", "fruit", "basic"]`、`["action", "sport", "movement"]`
- **自动生成**：基于单词类别和语义分析
- **手动添加**：可根据需要添加自定义标签

---

## 难度分配

### 难度等级

| 等级 | 描述 | 特征 | 示例 |
|------|------|------|------|
| ⭐ 1 | 入门 | 非常常见、短、具体 | apple, run, big |
| ⭐⭐ 2 | 初级 | 常见、结构简单 | happy, quickly, because |
| ⭐⭐⭐ 3 | 中级 | 中等频率、有一定复杂性 | beautiful, although, consider |
| ⭐⭐⭐⭐ 4 | 高级 | 不太常见、抽象概念 | magnificent, nevertheless, contemplate |
| ⭐⭐⭐⭐⭐ 5 | 专家 | 罕见、高度抽象或技术性 | ephemeral, notwithstanding, juxtapose |

### 自动计算算法

难度使用多因素算法自动计算：

```javascript
// 简化算法（参见 scripts/simplified-difficulty-algorithm.js）
difficulty = calculateDifficulty(word) {
    // 因素 1：单词长度（40% 权重）
    lengthScore = getLengthScore(word.length)
    
    // 因素 2：音节数（35% 权重）
    syllableScore = getSyllableScore(countSyllables(word))
    
    // 因素 3：词性（15% 权重）
    posScore = getPartOfSpeechScore(word.category)
    
    // 因素 4：抽象度（10% 权重）
    abstractScore = getAbstractnessScore(word.tags)
    
    // 加权平均
    finalScore = (lengthScore * 0.4) + 
                 (syllableScore * 0.35) + 
                 (posScore * 0.15) + 
                 (abstractScore * 0.1)
    
    // 四舍五入到 1-5 范围
    return Math.max(1, Math.min(5, Math.round(finalScore)))
}
```

### 因素说明

#### 1. 单词长度（40% 权重）
- **1-3 个字母**：得分 1（例如："run"、"big"、"cat"）
- **4-5 个字母**：得分 2（例如："apple"、"happy"）
- **6-7 个字母**：得分 3（例如："beautiful"、"quickly"）
- **8-10 个字母**：得分 4（例如："wonderful"、"carefully"）
- **11+ 个字母**：得分 5（例如："magnificent"、"unfortunately"）

#### 2. 音节数（35% 权重）
- **1 个音节**：得分 1（例如："run"、"big"）
- **2 个音节**：得分 2（例如："ap-ple"、"hap-py"）
- **3 个音节**：得分 3（例如："beau-ti-ful"）
- **4+ 个音节**：得分 4-5（例如："mag-nif-i-cent"）

#### 3. 词性（15% 权重）
- **较简单**：名词、动词（得分 1-2）
  - 具体、易于可视化
- **中等**：形容词、介词（得分 2-3）
  - 描述性、有一定抽象性
- **较难**：副词、连词（得分 3-4）
  - 更抽象、用法复杂

#### 4. 抽象度（10% 权重）
- **具体**（得分 1-2）：物理对象、动作
  - 标签：food、animal、color、action、sport
- **半抽象**（得分 3）：品质、状态
  - 标签：emotion、quality、state
- **抽象**（得分 4-5）：概念、想法
  - 标签：concept、abstract、philosophical

### 手动调整指南

如果自动计算的难度似乎不正确：

1. **检查单词频率**：非常常见的单词应该是 1-2 级
2. **考虑学习语境**：早期教授的单词应该更简单
3. **评估抽象度**：是否容易可视化？
4. **与相似单词比较**：保持一致性

**调整示例**：
- "love"（4 个字母，1 个音节）→ 自动：1，手动：2（抽象概念）
- "the"（3 个字母，1 个音节）→ 自动：1，保持：1（最常见单词）
- "although"（8 个字母，2 个音节）→ 自动：3，手动：3（正确）

---

## SVG 象形图要求

### 技术要求

#### SVG 结构
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- SVG 内容 -->
</svg>
```

**必需属性**：
- `xmlns="http://www.w3.org/2000/svg"` - XML 命名空间
- `viewBox="0 0 200 200"` - 坐标系统（推荐：200x200）
- `width="200"` 和 `height="200"` - 默认尺寸

#### 样式指南

1. **简洁性**：保持设计简单易识别
   - 避免过多细节
   - 使用基本形状（圆形、矩形、路径）
   - 限制为 2-3 个主要元素

2. **色彩方案**：
   - **主色**：`#6366f1`（紫蓝色）
   - **强调色**：`#a855f7`（紫色）
   - **中性色**：`#94a3b8`（灰色）
   - **高亮色**：`#818cf8`（浅蓝色）
   - 最多使用 2-3 种颜色

3. **描边和填充**：
   - 主要元素的描边宽度：2-4px
   - 同时使用填充和描边以增加深度
   - 一致的 stroke-linecap："round" 或 "square"

4. **构图**：
   - 主要元素居中
   - 距边缘留出 10-20px 的内边距
   - 适当使用对称性
   - 确保在小尺寸（50x50px）下可识别

### 设计原则

#### 视觉关联
象形图应与单词含义建立强烈的视觉联系：

- **名词**：直接描绘对象
  - "apple" → 苹果形状
  - "house" → 房屋轮廓
  
- **动词**：展示动作或其结果
  - "run" → 奔跑的人物
  - "eat" → 嘴巴和食物
  
- **形容词**：可视化品质
  - "big" → 大物体 vs 小物体
  - "happy" → 笑脸
  
- **抽象词**：使用隐喻或符号
  - "love" → 心形
  - "time" → 时钟或沙漏

#### 示例

**好的象形图**（apple）：
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- 苹果主体 -->
    <circle cx="100" cy="110" r="60" fill="#ef4444" stroke="#dc2626" stroke-width="3"/>
    <!-- 叶子 -->
    <ellipse cx="110" cy="45" rx="15" ry="25" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
    <!-- 茎 -->
    <rect x="95" y="40" width="10" height="20" fill="#78350f" rx="2"/>
</svg>
```

**特点**：
- 简单、易识别的形状
- 有限的色彩方案（红色、绿色、棕色）
- 与"苹果"有清晰的视觉关联
- 在小尺寸下缩放良好

---

## 向 words.js 添加单词

### 分步流程

#### 1. 准备单词对象

创建包含所有必填字段的完整单词对象：

```javascript
const newWord = {
    word: "butterfly",
    phonetic: "[ˈbʌtərflaɪ]",
    meaning: "n. 蝴蝶",
    example: "A colorful butterfly landed on the flower.",
    exampleCn: "一只色彩斑斓的蝴蝶落在花上。",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        <!-- SVG 内容 -->
    </svg>`,
    category: "noun",
    difficulty: 2,
    tags: ["animal", "insect", "nature"]
};
```

#### 2. 查找插入位置

`words.js` 中的单词按**字母顺序**存储（不区分大小写）。

```javascript
// 查找 "butterfly" 应该放在哪里
// ... "button", "buy", "butterfly" 应该在这里, "by", "cake" ...
```

#### 3. 插入单词

打开 `words.js` 并在正确的字母位置插入新单词对象：

```javascript
const words = [
    // ... 现有单词 ...
    {
        word: "button",
        // ... button 数据 ...
    },
    {
        word: "butterfly",  // ← 在这里插入
        phonetic: "[ˈbʌtərflaɪ]",
        meaning: "n. 蝴蝶",
        example: "A colorful butterfly landed on the flower.",
        exampleCn: "一只色彩斑斓的蝴蝶落在花上。",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
            <!-- SVG 内容 -->
        </svg>`,
        category: "noun",
        difficulty: 2,
        tags: ["animal", "insect", "nature"]
    },
    {
        word: "buy",
        // ... buy 数据 ...
    },
    // ... 更多单词 ...
];
```

#### 4. 验证语法

确保 JavaScript 语法正确：
- 每个对象后面有逗号（最后一个除外）
- 正确的字符串转义（多行 SVG 使用反引号）
- 括号和大括号匹配

#### 5. 测试加载

在浏览器中打开 `index.html` 并检查控制台：
```
✅ 已加载 977 个系统单词  // 应该增加 1
```

---

## 测试新单词

### 验证清单

在提交新单词之前，请验证：

#### ✅ 数据完整性
- [ ] 所有必填字段都存在
- [ ] `word` 是唯一的（无重复）
- [ ] `phonetic` 使用有效的 IPA 标记
- [ ] `meaning` 包含词性前缀
- [ ] `example` 是完整句子
- [ ] `exampleCn` 准确翻译例句
- [ ] `svg` 包含有效的 SVG 标记

#### ✅ 视觉质量
- [ ] SVG 在浏览器中正确显示
- [ ] 象形图在 50x50px 下可识别
- [ ] 颜色与应用主题匹配
- [ ] 设计简单清晰
- [ ] 与单词的视觉关联强烈

#### ✅ 功能性
- [ ] 单词出现在单词广场中
- [ ] 卡片正确翻转
- [ ] TTS 发音有效
- [ ] 难度过滤器包含该单词
- [ ] 搜索能找到该单词
- [ ] 可以标记为已学

#### ✅ 字母顺序
- [ ] 单词在正确的字母位置
- [ ] 未引入排序错误

### 测试流程

1. **加载测试**：
   ```bash
   # 在浏览器中打开 index.html
   # 检查控制台中的单词计数
   ```

2. **视觉测试**：
   - 导航到单词广场
   - 搜索新单词
   - 验证卡片正确显示
   - 检查 SVG 渲染

3. **交互测试**：
   - 点击卡片翻转
   - 测试 TTS 按钮
   - 标记为已学
   - 在我的词库中验证

4. **过滤器测试**：
   - 应用难度过滤器
   - 验证单词出现在正确级别
   - 测试搜索功能

5. **跨浏览器测试**：
   - 在 Chrome、Firefox、Safari、Edge 中测试
   - 验证一致的渲染

### 常见问题和解决方案

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 单词未出现 | words.js 中的语法错误 | 检查控制台错误，验证 JSON |
| SVG 未显示 | 无效的 SVG 标记 | 使用在线验证器验证 SVG |
| 难度错误 | 自动计算偏差 | 手动调整难度值 |
| 卡片布局损坏 | 缺少必填字段 | 添加所有必填字段 |
| TTS 不工作 | 单词中有特殊字符 | 使用标准英文字符 |

---

## 使用 AI 生成单词

### 内置 AI 自动补全

应用包含用于生成单词数据的内置 AI 集成：

1. 点击标题栏中的 ➕ 按钮
2. 选择"单个单词"标签
3. 输入英文单词
4. 点击"AI 自动补全"按钮
5. 查看并编辑生成的数据
6. 点击"添加单词"保存

**AI 提供商**：Pollinations（免费，无需 API 密钥）

### 外部 AI 服务

为了获得更好的质量或批量生成，请使用提供的提示模板配合外部 AI 服务。

#### 推荐服务

| 服务 | 质量 | 速度 | 费用 | 最适合 |
|------|------|------|------|--------|
| ChatGPT (GPT-4) | 优秀 | 快速 | 付费 | 高质量单个单词 |
| Claude (Anthropic) | 优秀 | 快速 | 付费 | 批量生成 |
| DeepSeek | 良好 | 快速 | 便宜 | 经济实惠的批量 |
| Gemini (Google) | 良好 | 快速 | 免费层 | 免费替代方案 |

#### AI 提示模板

完整的提示模板请参见 `ai-word-generation-prompt.md`。

**快速模板**：

```
为英文单词"[WORD]"生成完整的单词对象，遵循以下结构：

{
    word: "[小写单词]",
    phonetic: "[IPA 音标]",
    meaning: "[词性]. [中文翻译]",
    example: "[英文例句]",
    exampleCn: "[例句中文翻译]",
    svg: "[SVG 象形图标记]",
    category: "[自动检测的类别]",
    difficulty: [1-5],
    tags: ["标签1", "标签2", "标签3"]
}

要求：
- 音标使用 IPA 标记
- 例句保持简单（10-20 个单词）
- SVG 应为 200x200 viewBox，简单设计，2-3 种颜色
- 难度基于单词长度、音节和抽象度
- 标签应具有描述性和相关性

为以下单词生成完整对象：[YOUR_WORD]
```

#### 工作流程

1. **准备单词列表**：创建要添加的单词列表
2. **使用 AI 生成**：对每个单词使用提示模板
3. **审查输出**：检查所有字段的准确性
4. **验证 SVG**：在浏览器中测试 SVG 渲染
5. **调整难度**：验证难度分配
6. **添加到 words.js**：按字母顺序插入
7. **测试**：遵循上述测试流程

---

## 最佳实践

### 单词选择

✅ **应该**：
- 选择常见、有用的单词
- 优先考虑高频词汇
- 包含多样的单词类型（名词、动词、形容词）
- 考虑学习者水平（初学者到高级）
- 选择可以可视化的单词

❌ **不应该**：
- 添加晦涩或很少使用的单词
- 包含冒犯性或不当的单词
- 添加过于相似的单词（同义词）
- 选择无法可视化的单词

### SVG 创建

✅ **应该**：
- 保持设计简单和标志性
- 使用一致的色彩方案
- 在多种尺寸下测试
- 优化 SVG 代码（删除不必要的元素）
- 使用语义形状（圆形、矩形、路径）

❌ **不应该**：
- 创建过于复杂的设计
- 使用过多颜色（限制为 2-3 种）
- 在 SVG 中包含文本（仅使用形状）
- 使用光栅图像或外部资源
- 使设计过于详细

### 质量控制

✅ **应该**：
- 仔细检查所有必填字段
- 验证 IPA 音标准确性
- 在多个浏览器中测试
- 保持字母顺序
- 审查难度分配
- 获取用户反馈

❌ **不应该**：
- 跳过验证步骤
- 假设自动生成的数据是完美的
- 未经测试就添加单词
- 破坏字母顺序
- 忽略用户反馈

### 批量添加

添加多个单词时：

1. **提前规划**：创建包含所有单词数据的电子表格
2. **分批生成**：一次使用 AI 生成 10-20 个单词
3. **系统审查**：彻底检查每个单词
4. **增量测试**：分小批次添加和测试（5-10 个单词）
5. **频繁提交**：每批后进行 git 提交
6. **记录更改**：在提交消息中注明添加了哪些单词

---

## 资源

### 发音
- [剑桥词典](https://dictionary.cambridge.org/) - IPA 音标
- [韦氏词典](https://www.merriam-webster.com/) - 美式发音
- [Forvo](https://forvo.com/) - 母语者发音

### SVG 工具
- [SVG 编辑器（在线）](https://svg-edit.github.io/svgedit/) - 在浏览器中创建 SVG
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - 优化 SVG 文件
- [SVG 路径可视化器](https://svg-path-visualizer.netlify.app/) - 调试 SVG 路径

### 单词频率
- [COCA（当代美国英语语料库）](https://www.english-corpora.org/coca/)
- [牛津 3000](https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000)
- [CEFR 词汇](https://www.englishprofile.org/wordlists)

### AI 服务
- [ChatGPT](https://chat.openai.com/) - GPT-4 用于单词生成
- [Claude](https://claude.ai/) - Anthropic 的 AI 助手
- [DeepSeek](https://www.deepseek.com/) - 经济实惠的替代方案
- [Pollinations](https://pollinations.ai/) - 免费图像生成

---

## 支持

需要添加单词方面的帮助？

- **问题反馈**：[GitHub Issues](https://github.com/iamafeng/pictographicEnglish/issues)
- **讨论**：[GitHub Discussions](https://github.com/iamafeng/pictographicEnglish/discussions)
- **文档**：查看仓库中的其他文档

---

**祝添加单词愉快！🎉**
