# 技术架构文档 (Technical Architecture)

> **Pictographic Learn 完整技术架构说明**

本文档详细说明了项目的技术栈、架构设计、核心服务、数据流程和最佳实践。

[English Version](ARCHITECTURE.md) | 中文版本

---

## 目录

1. [技术栈](#技术栈)
2. [项目结构](#项目结构)
3. [核心服务](#核心服务)
4. [数据架构](#数据架构)
5. [API 配置](#api-配置)
6. [开发指南](#开发指南)

---

## 技术栈

### 核心技术

| 技术 | 版本 | 用途 | 说明 |
|------|------|------|------|
| **HTML5** | - | 页面结构 | 语义化标签，无障碍支持 |
| **CSS3** | - | 样式设计 | Flexbox/Grid 布局，CSS 变量 |
| **JavaScript** | ES6+ | 应用逻辑 | 原生 JS，无框架依赖 |
| **SVG** | 1.1 | 矢量图形 | 象形图标，可缩放 |
| **localStorage** | Web API | 数据存储 | 用户数据持久化 |
| **Service Worker** | - | PWA 支持 | 离线缓存，应用安装 |
| **Web Speech API** | - | 语音合成 | 浏览器原生 TTS |

### 无构建系统

本项目采用**零构建**架构：
- ✅ 无需 npm/yarn 安装依赖
- ✅ 无需 webpack/vite 打包
- ✅ 直接在浏览器运行
- ✅ 开发即生产环境

**优势**：
- 快速启动，无编译等待
- 易于理解和调试
- 部署简单，只需静态文件服务器
- 适合学习和快速原型开发

### 浏览器要求

| 浏览器 | 最低版本 | 推荐版本 | 说明 |
|--------|----------|----------|------|
| Chrome | 90+ | 最新版 | 完整支持所有功能 |
| Edge | 90+ | 最新版 | 基于 Chromium，完整支持 |
| Firefox | 88+ | 最新版 | 部分 TTS 功能受限 |
| Safari | 14+ | 最新版 | PWA 支持有限 |

**必需功能**：
- JavaScript 启用
- localStorage 启用
- 支持 ES6+ 语法
- 支持 CSS Grid/Flexbox

---

## 项目结构

### 文件组织

```
pictographicEnglish/
│
├── index.html                      # 主入口文件
├── app.js                          # 主应用逻辑
├── words.js                        # 单词数据库 (976 个单词)
├── styles.css                      # 主样式文件
├── manifest.json                   # PWA 清单
├── sw.js                           # Service Worker
│
├── src/
│   ├── components/                 # UI 组件
│   │   ├── CinemaController.js    # 影院模式控制器
│   │   ├── ConnectGame.js         # 连连看游戏
│   │   ├── CustomWordManager.js   # 自定义单词管理
│   │   └── StatsPanel.js          # 统计面板
│   │
│   ├── services/                   # 核心服务
│   │   ├── TTSService.js          # 语音合成服务
│   │   ├── AIService.js           # AI 集成服务
│   │   ├── StorageService.js      # 存储服务
│   │   ├── SRSService.js          # 间隔重复算法
│   │   ├── SVGGeneratorService.js # SVG 生成服务
│   │   └── CategoryDetector.js    # 分类检测服务
│   │
│   ├── styles/                     # 模块化样式
│   │   ├── enhancements.css       # 功能增强样式
│   │   ├── ui-polish.css          # UI 优化样式
│   │   └── difficulty-filter.css  # 难度过滤样式
│   │
│   └── utils/                      # 工具函数
│       ├── toast.js               # 提示消息系统
│       ├── keyboard.js            # 键盘导航
│       └── performance.js         # 性能优化
│
├── scripts/                        # 维护脚本
│   ├── audit-difficulty.js        # 难度审计
│   ├── migrate-difficulty.js      # 难度迁移
│   └── simplified-difficulty-algorithm.js  # 难度算法
│
├── sh/                             # Shell 脚本
│   ├── start.sh                   # 启动服务器
│   ├── stop.sh                    # 停止服务器
│   └── status.sh                  # 检查状态
│
└── docs/                           # 文档
    ├── README.md                  # 项目说明
    ├── README_CN.md               # 中文说明
    ├── VOCABULARY_EXPANSION.md    # 词汇扩展指南
    ├── VOCABULARY_EXPANSION_CN.md # 中文词汇指南
    ├── ARCHITECTURE.md            # 架构文档
    ├── QUICK_START.md             # 快速开始
    └── HOW_TO_RUN.md              # 运行指南
```

### 脚本加载顺序

**关键原则**：依赖关系决定加载顺序

```html
<!-- 1. 数据层 -->
<script src="words.js"></script>

<!-- 2. 服务层 -->
<script src="src/services/TTSService.js"></script>
<script src="src/services/AIService.js"></script>
<script src="src/services/StorageService.js"></script>
<script src="src/services/SRSService.js"></script>
<script src="src/services/SVGGeneratorService.js"></script>
<script src="src/services/CategoryDetector.js"></script>

<!-- 3. 工具层 -->
<script src="src/utils/toast.js"></script>
<script src="src/utils/keyboard.js"></script>
<script src="src/utils/performance.js"></script>

<!-- 4. 组件层 -->
<script src="src/components/StatsPanel.js"></script>
<script src="src/components/CustomWordManager.js"></script>
<script src="src/components/CinemaController.js"></script>
<script src="src/components/ConnectGame.js"></script>

<!-- 5. 应用层 -->
<script src="app.js"></script>
<script src="src/app-enhancements.js"></script>
```

**为什么这样排序？**
- 数据必须先加载（words.js）
- 服务层被组件层依赖
- 工具层被所有层使用
- 组件层依赖服务和工具
- 应用层最后初始化

---

## 核心服务

### 1. TTSService（语音合成服务）

**文件**：`src/services/TTSService.js`

**功能**：
- 多提供商支持（浏览器原生、OpenAI、SiliconFlow、Edge TTS、Google TTS）
- 自动降级到浏览器 TTS
- 音频缓存优化
- 配置持久化

**API**：
```javascript
// 初始化
const tts = new TTSService();

// 朗读文本
tts.speak("Hello world");

// 保存配置
tts.saveConfig(provider, url, key);

// 停止朗读
tts.stop();
```

**支持的提供商**：

| 提供商 | 需要 API Key | 费用 | 质量 | 推荐场景 |
|--------|-------------|------|------|----------|
| browser | ❌ | 免费 | 中等 | 默认选项 |
| edgetts | ❌ | 免费 | 良好 | 免费高质量 |
| googletts | ❌ | 免费 | 良好 | 免费备选 |
| siliconflow | ✅ | 付费 | 优秀 | 生产环境 |
| openai | ✅ | 付费 | 优秀 | 高质量需求 |
| deepseek | ✅ | 付费 | 良好 | 经济实惠 |

**配置示例**：
```javascript
// 使用浏览器原生 TTS（免费）
tts.saveConfig('browser', '', '');

// 使用 SiliconFlow
tts.saveConfig(
    'siliconflow',
    'https://api.siliconflow.cn/v1',
    'sk-your-api-key'
);
```

### 2. AIService（AI 集成服务）

**文件**：`src/services/AIService.js`

**功能**：
- AI 图像生成（T2I）
- 单词详情自动补全
- 多提供商支持
- 智能降级

**API**：
```javascript
const aiService = new AIService();

// 生成图像
const imageUrl = await aiService.generateImage({
    word: "apple",
    meaning: "n. 苹果"
});

// 自动补全单词详情
const details = await aiService.generateWordDetails("apple");
// 返回: { phonetic, meaning, example, exampleCn }
```

**支持的提供商**：

| 提供商 | 需要 API Key | 费用 | 质量 | 推荐场景 |
|--------|-------------|------|------|----------|
| pollinations | ❌ | 免费 | 中等 | 默认选项 |
| siliconflow | ✅ | 付费 | 优秀 | 生产环境 |
| openai | ✅ | 付费 | 优秀 | 高质量需求 |

### 3. StorageService（存储服务）

**文件**：`src/services/StorageService.js`

**功能**：
- 统一的 localStorage 管理
- 学习数据持久化
- 自定义单词管理
- 数据导入/导出
- 学习统计

**API**：
```javascript
const storage = new StorageService();

// 学习数据
storage.getLearnedWords();
storage.saveLearnedWords(words);

// 自定义单词
storage.getCustomWords();
storage.addCustomWord(wordData);

// 学习统计
storage.getStats();
storage.recordDailyStudy(duration);

// 数据导入导出
const data = storage.exportData();
storage.importData(data);
```

**存储键**：
```javascript
{
    LEARNED_WORDS: 'learned_words',      // 已学单词
    CUSTOM_WORDS: 'custom_words',        // 自定义单词
    AI_IMAGES: 'ai_images',              // AI 图片缓存
    LEARNING_STATS: 'learning_stats',    // 学习统计
    USER_SETTINGS: 'user_settings'       // 用户设置
}
```

### 4. SRSService（间隔重复服务）

**文件**：`src/services/SRSService.js`

**功能**：
- 基于 SuperMemo 2 算法
- 智能复习计划
- 掌握度追踪
- 学习进度统计

**API**：
```javascript
const srs = new SRSService();

// 更新单词进度
const updated = srs.updateWordProgress(word, isCorrect);

// 获取待复习单词
const dueWords = srs.getDueWords(learnedWords);

// 获取学习计划
const plan = srs.getStudyPlan(learnedWords, newWords, 20);

// 掌握度统计
const stats = srs.getMasteryStats(learnedWords);
```

**复习间隔**：
```javascript
{
    1: 1 天,    // 初学
    2: 3 天,    // 熟悉
    3: 7 天,    // 掌握
    4: 14 天    // 精通
}
```

### 5. CategoryDetector（分类检测服务）

**文件**：`src/services/CategoryDetector.js`

**功能**：
- 自动词性检测
- 难度自动计算
- 标签自动生成
- 多因素分析

**API**：
```javascript
// 检测词性
const category = detectCategory("n. 苹果");  // "noun"

// 计算难度
const difficulty = calculateDifficulty(wordData);  // 1-5

// 生成标签
const tags = detectTags("apple", "n. 苹果");  // ["food", "fruit"]
```

**难度算法**：
```javascript
difficulty = (
    lengthScore * 0.4 +      // 单词长度 40%
    syllableScore * 0.35 +   // 音节数 35%
    posScore * 0.15 +        // 词性 15%
    abstractScore * 0.1      // 抽象度 10%
)
```

### 6. SVGGeneratorService（SVG 生成服务）

**文件**：`src/services/SVGGeneratorService.js`

**功能**：
- AI 驱动的 SVG 生成
- 象形图样式优化
- 批量生成支持
- 缓存管理

---

## 数据架构

### 设计理念

**核心原则**：
1. **分离关注点**：系统单词（只读）vs 用户单词（可读写）
2. **数据驱动**：分类信息存储在数据对象中，不依赖文件结构
3. **灵活扩展**：支持自动分类、自定义标签、多维度筛选
4. **用户友好**：自动合并、去重、分类

---

## 架构设计

### 数据分层

```
┌─────────────────────────────────────┐
│   应用层 (Application Layer)        │
│   - 显示单词                         │
│   - 搜索筛选                         │
│   - 学习统计                         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│   数据合并层 (Data Merge Layer)     │
│   - 合并系统单词和用户单词           │
│   - 去重处理                         │
│   - 分类筛选                         │
└──────────────┬──────────────────────┘
               │
       ┌───────┴───────┐
       │               │
┌──────▼──────┐ ┌─────▼──────┐
│ 系统单词库   │ │ 用户单词库  │
│ (只读)      │ │ (可读写)    │
│             │ │             │
│ words.js    │ │ localStorage│
│ (静态文件)  │ │ (动态存储)  │
└─────────────┘ └────────────┘
```

---

## 📦 数据结构

### 单词对象结构

```javascript
{
    // 必填字段
    word: "example",           // 单词
    phonetic: "[ɪɡˈzɑːmpl]",  // 音标
    meaning: "n. 例子",        // 含义
    example: "For example...", // 例句
    exampleCn: "例如...",      // 例句翻译
    svg: "<svg>...</svg>",     // SVG 图形
    
    // 可选字段（用于分类和筛选）
    category: "noun",          // 词性分类
    difficulty: 1,             // 难度 1-5
    tags: ["basic", "common"], // 标签数组
    
    // 系统字段
    custom: false,             // 是否为用户自定义
    createdAt: 1234567890,     // 创建时间戳
    source: "system"           // 来源：system/user/import
}
```

### 分类系统

```javascript
// 词性分类 (category)
const CATEGORIES = {
    verb: "动词",
    noun: "名词",
    adjective: "形容词",
    adverb: "副词",
    preposition: "介词",
    pronoun: "代词",
    conjunction: "连词",
    interjection: "感叹词"
};

// 难度等级 (difficulty)
const DIFFICULTY_LEVELS = {
    1: "入门",  // 最基础的单词
    2: "初级",  // 常用单词
    3: "中级",  // 一般单词
    4: "高级",  // 较难单词
    5: "专业"   // 专业术语
};

// 标签系统 (tags)
const COMMON_TAGS = [
    "action",      // 动作
    "movement",    // 移动
    "direction",   // 方向
    "position",    // 位置
    "color",       // 颜色
    "shape",       // 形状
    "number",      // 数字
    "food",        // 食物
    "daily",       // 日常
    "study",       // 学习
    "sport",       // 运动
    "nature",      // 自然
    "water",       // 水
    // ... 可以无限扩展
];
```

---

## 🔄 数据流程

### 1. 应用启动时

```javascript
// 在 index-v2.html 或 app.js 中
function initializeWords() {
    // 1. 加载系统单词（静态）
    const systemWords = words; // 从 words.js
    
    // 2. 加载用户单词（动态）
    const customWords = storageService.getCustomWords();
    
    // 3. 合并单词
    const allWords = [...systemWords, ...customWords];
    
    // 4. 去重（基于 word 字段）
    const uniqueWords = removeDuplicates(allWords);
    
    // 5. 返回合并后的单词
    return uniqueWords;
}

function removeDuplicates(words) {
    const seen = new Set();
    return words.filter(w => {
        if (seen.has(w.word)) return false;
        seen.add(w.word);
        return true;
    });
}
```

### 2. 用户添加单词时

```javascript
// 在 CustomWordManager.js 中
function addCustomWord(wordData) {
    // 1. 添加系统字段
    wordData.custom = true;
    wordData.createdAt = Date.now();
    wordData.source = 'user';
    
    // 2. 自动分类（可选）
    if (!wordData.category) {
        wordData.category = detectCategory(wordData.meaning);
    }
    
    // 3. 自动标签（可选）
    if (!wordData.tags) {
        wordData.tags = detectTags(wordData.word, wordData.meaning);
    }
    
    // 4. 保存到 localStorage
    storageService.addCustomWord(wordData);
    
    // 5. 刷新显示
    refreshWordList();
}
```

### 3. 用户导入单词时

```javascript
// 在 StorageService.js 中
function importWords(wordsArray) {
    wordsArray.forEach(word => {
        // 1. 验证数据格式
        if (!validateWordData(word)) {
            console.warn('Invalid word data:', word);
            return;
        }
        
        // 2. 添加系统字段
        word.custom = true;
        word.createdAt = Date.now();
        word.source = 'import';
        
        // 3. 自动分类和标签
        word.category = word.category || detectCategory(word.meaning);
        word.tags = word.tags || detectTags(word.word, word.meaning);
        
        // 4. 保存
        addCustomWord(word);
    });
}
```

---

## 🔍 分类和筛选

### 自动分类逻辑

```javascript
// 在 SVGGeneratorService.js 或新建 CategoryDetector.js
function detectCategory(meaning) {
    const meaningLower = meaning.toLowerCase();
    
    // 动词检测
    if (meaningLower.includes('v.') || 
        meaningLower.match(/\b(做|去|来|吃|喝|跑|走)\b/)) {
        return 'verb';
    }
    
    // 名词检测
    if (meaningLower.includes('n.') || 
        meaningLower.match(/\b(人|物|地方|东西)\b/)) {
        return 'noun';
    }
    
    // 形容词检测
    if (meaningLower.includes('adj.') || 
        meaningLower.match(/\b(的|大|小|好|坏)\b/)) {
        return 'adjective';
    }
    
    // 副词检测
    if (meaningLower.includes('adv.') || 
        meaningLower.match(/\b(地|很|非常)\b/)) {
        return 'adverb';
    }
    
    // 介词检测
    if (meaningLower.includes('prep.') || 
        meaningLower.match(/\b(在|从|到|向)\b/)) {
        return 'preposition';
    }
    
    // 默认
    return 'other';
}

function detectTags(word, meaning) {
    const tags = [];
    const text = (word + ' ' + meaning).toLowerCase();
    
    // 动作相关
    if (text.match(/\b(run|walk|jump|go|come|move|跑|走|跳|动)\b/)) {
        tags.push('action', 'movement');
    }
    
    // 方向相关
    if (text.match(/\b(up|down|left|right|上|下|左|右)\b/)) {
        tags.push('direction');
    }
    
    // 颜色相关
    if (text.match(/\b(red|blue|green|color|颜色|红|蓝|绿)\b/)) {
        tags.push('color');
    }
    
    // 形状相关
    if (text.match(/\b(round|square|circle|shape|圆|方|形状)\b/)) {
        tags.push('shape');
    }
    
    // 食物相关
    if (text.match(/\b(eat|drink|food|吃|喝|食物)\b/)) {
        tags.push('food');
    }
    
    return tags;
}
```

### 筛选功能

```javascript
// 在 app.js 中
function filterWords(words, filters) {
    let filtered = words;
    
    // 按分类筛选
    if (filters.category) {
        filtered = filtered.filter(w => w.category === filters.category);
    }
    
    // 按难度筛选
    if (filters.difficulty) {
        filtered = filtered.filter(w => w.difficulty === filters.difficulty);
    }
    
    // 按标签筛选
    if (filters.tags && filters.tags.length > 0) {
        filtered = filtered.filter(w => 
            w.tags && filters.tags.some(tag => w.tags.includes(tag))
        );
    }
    
    // 按来源筛选
    if (filters.source) {
        filtered = filtered.filter(w => w.source === filters.source);
    }
    
    // 按关键词搜索
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        filtered = filtered.filter(w => 
            w.word.toLowerCase().includes(keyword) ||
            w.meaning.toLowerCase().includes(keyword)
        );
    }
    
    return filtered;
}
```

---

## 📂 文件组织

### 推荐的文件结构

```
pictographicEnglish/
│
├── words-complete.js          # 完整的系统单词库（推荐）⭐
│   └── 包含所有预置单词 + 分类信息
│
├── words.js                   # 原有单词（保留兼容）
├── words-batch1.js            # 批次1（可选，用于分批加载）
├── words-batch2.js            # 批次2（可选）
├── words-batch3.js            # 批次3（可选）
│
└── localStorage               # 用户单词（运行时）
    └── custom_words: [...]    # 用户自定义单词数组
```

### 加载策略

**方案 A：单文件加载（推荐）**
```html
<script src="words-complete.js"></script>
```
- 优点：简单、快速、易维护
- 缺点：初始加载稍大（但可接受）

**方案 B：分批加载（可选）**
```html
<script src="words.js"></script>
<script src="words-batch1.js"></script>
<script src="words-batch2.js"></script>
<script>
    // 合并
    const allWords = [...words, ...wordsBatch1, ...wordsBatch2];
</script>
```
- 优点：可按需加载
- 缺点：维护复杂

**方案 C：动态加载（高级）**
```javascript
async function loadWords() {
    const response = await fetch('words-complete.js');
    const text = await response.text();
    eval(text); // 或使用更安全的方式
    return words;
}
```
- 优点：完全动态
- 缺点：需要服务器

---

## 🎯 最佳实践

### 1. 系统单词（只读）
- ✅ 存储在 `words-complete.js`
- ✅ 包含完整的分类信息
- ✅ 定期更新和维护
- ❌ 不要让用户修改

### 2. 用户单词（可读写）
- ✅ 存储在 `localStorage`
- ✅ 通过 UI 界面添加
- ✅ 支持导入/导出
- ✅ 自动分类和标签

### 3. 数据合并
- ✅ 应用启动时合并
- ✅ 用户单词优先（覆盖系统单词）
- ✅ 去重处理
- ✅ 缓存合并结果

### 4. 分类管理
- ✅ 分类信息存储在数据中
- ✅ 支持自动检测
- ✅ 允许用户修改
- ✅ 提供筛选功能

---

## 🔄 迁移方案

### 从旧架构迁移到新架构

```javascript
// 迁移脚本
function migrateToNewArchitecture() {
    // 1. 加载所有旧数据
    const oldWords = [...words, ...wordsBatch1, ...wordsBatch2, ...wordsBatch3];
    
    // 2. 添加新字段
    const newWords = oldWords.map(word => ({
        ...word,
        category: detectCategory(word.meaning),
        difficulty: 1, // 默认难度
        tags: detectTags(word.word, word.meaning),
        custom: false,
        source: 'system'
    }));
    
    // 3. 生成新文件
    const content = `const words = ${JSON.stringify(newWords, null, 4)};`;
    downloadFile('words-complete.js', content);
}
```

---

## API 配置

### TTS API 配置

#### 1. 浏览器原生 TTS（推荐新手）

**优点**：
- ✅ 完全免费
- ✅ 无需配置
- ✅ 开箱即用

**缺点**：
- ❌ 音质一般
- ❌ 语音选择有限

**配置步骤**：
1. 打开设置（⚙️ 按钮）
2. 选择"浏览器原生"
3. 保存即可

#### 2. SiliconFlow（推荐生产）

**优点**：
- ✅ 音质优秀
- ✅ 速度快
- ✅ 价格实惠

**配置步骤**：
1. 注册账号：https://siliconflow.cn
2. 获取 API Key
3. 在设置中填写：
   - 提供商：SiliconFlow
   - API 地址：`https://api.siliconflow.cn/v1`
   - API Key：`sk-your-key`
   - 模型：`fishaudio/fish-speech-1.4`

#### 3. OpenAI（高质量）

**配置步骤**：
1. 获取 OpenAI API Key
2. 在设置中填写：
   - 提供商：OpenAI
   - API 地址：`https://api.openai.com/v1`
   - API Key：`sk-your-key`
   - 模型：`tts-1` 或 `tts-1-hd`

### 图像生成 API 配置

#### 1. Pollinations（推荐新手）

**优点**：
- ✅ 完全免费
- ✅ 无需 API Key
- ✅ 开箱即用

**配置步骤**：
1. 选择"Pollinations"
2. 无需其他配置

#### 2. SiliconFlow（推荐生产）

**配置步骤**：
1. 在设置中填写：
   - 提供商：SiliconFlow
   - API 地址：`https://api.siliconflow.cn/v1`
   - API Key：`sk-your-key`
   - 模型：`flux-1-schnell` 或 `stable-diffusion-3-medium`

#### 3. OpenAI DALL-E

**配置步骤**：
1. 在设置中填写：
   - 提供商：OpenAI
   - API 地址：`https://api.openai.com/v1`
   - API Key：`sk-your-key`
   - 模型：`dall-e-3`

### API 安全最佳实践

**⚠️ 重要提示**：
- 不要在公开代码中硬编码 API Key
- 使用环境变量或配置文件
- 定期轮换 API Key
- 监控 API 使用量和费用

---

## 开发指南

### 本地开发环境

#### 方法 1：直接打开（最简单）

```bash
# Windows
双击 index.html

# macOS/Linux
open index.html
```

**限制**：
- ❌ Service Worker 无法注册
- ❌ 某些 API 可能受限
- ✅ 基本功能可用

#### 方法 2：Python HTTP 服务器（推荐）

```bash
# Python 3
cd pictographicEnglish
python -m http.server 8000

# 然后访问 http://localhost:8000
```

**优点**：
- ✅ 完整功能支持
- ✅ Service Worker 可用
- ✅ PWA 可安装

#### 方法 3：VS Code Live Server

1. 安装 "Live Server" 扩展
2. 右键 `index.html` → "Open with Live Server"
3. 自动打开浏览器

**优点**：
- ✅ 自动刷新
- ✅ 开发体验好

### 添加新功能

#### 1. 添加新服务

**步骤**：
1. 在 `src/services/` 创建新文件
2. 定义服务类
3. 导出单例实例
4. 在 `index.html` 中引入

**示例**：
```javascript
// src/services/NewService.js
class NewService {
    constructor() {
        // 初始化
    }
    
    doSomething() {
        // 功能实现
    }
}

// 导出单例
window.newService = new NewService();
```

```html
<!-- index.html -->
<script src="src/services/NewService.js"></script>
```

#### 2. 添加新组件

**步骤**：
1. 在 `src/components/` 创建新文件
2. 定义组件类或函数
3. 在 `index.html` 中引入
4. 在 `app.js` 中初始化

**示例**：
```javascript
// src/components/NewComponent.js
class NewComponent {
    constructor(container) {
        this.container = container;
        this.init();
    }
    
    init() {
        // 初始化 UI
    }
    
    render() {
        // 渲染逻辑
    }
}

window.NewComponent = NewComponent;
```

#### 3. 添加新样式

**步骤**：
1. 在 `src/styles/` 创建新 CSS 文件
2. 在 `index.html` 中引入

**示例**：
```html
<!-- index.html -->
<link rel="stylesheet" href="src/styles/new-feature.css">
```

### 代码规范

#### 命名约定

**文件命名**：
- 组件：`PascalCase.js`（例如：`CinemaController.js`）
- 服务：`PascalCase.js`（例如：`TTSService.js`）
- 工具：`camelCase.js`（例如：`toast.js`）
- 样式：`kebab-case.css`（例如：`ui-polish.css`）

**代码命名**：
- 变量：`camelCase`（例如：`currentTab`）
- 常量：`UPPER_SNAKE_CASE`（例如：`ITEMS_PER_PAGE`）
- 函数：`camelCase`（例如：`createCard`）
- 类：`PascalCase`（例如：`GameSession`）

#### 注释规范

```javascript
// ========================================
// 模块标题
// ========================================

/**
 * 函数说明
 * @param {string} text - 参数说明
 * @returns {Promise<void>}
 */
async function speak(text) {
    // 实现逻辑
}

// 单行注释用于简短说明
const result = calculate(); // 行尾注释
```

### 调试技巧

#### 1. 控制台日志

```javascript
// 使用表情符号区分日志类型
console.log('✅ Success:', data);
console.warn('⚠️ Warning:', message);
console.error('❌ Error:', error);
console.log('🔊 Playing:', text);
console.log('🎨 Generating:', prompt);
```

#### 2. 浏览器开发工具

**Chrome DevTools**：
- `F12` 打开开发工具
- `Application` → `Local Storage` 查看存储
- `Network` 查看 API 请求
- `Console` 查看日志和错误

#### 3. Service Worker 调试

1. 打开 `chrome://serviceworker-internals/`
2. 找到你的应用
3. 点击 "Unregister" 清除缓存
4. 刷新页面重新注册

### 性能优化

#### 1. 图片优化

- 使用 SVG 而非位图
- 压缩 SVG 代码
- 懒加载图片

#### 2. 脚本优化

- 按需加载组件
- 使用事件委托
- 避免频繁 DOM 操作

#### 3. 存储优化

- 定期清理过期数据
- 压缩存储数据
- 使用 IndexedDB 存储大量数据

### 测试

#### 手动测试清单

**基本功能**：
- [ ] 单词卡片正常显示
- [ ] 卡片翻转动画流畅
- [ ] TTS 语音播放正常
- [ ] 搜索功能正常
- [ ] 分页功能正常

**学习功能**：
- [ ] 标记已学功能正常
- [ ] 我的词库显示正确
- [ ] 挑战模式正常
- [ ] 影院模式正常
- [ ] 连连看游戏正常

**自定义单词**：
- [ ] 添加单词功能正常
- [ ] AI 自动补全正常
- [ ] SVG 生成正常
- [ ] 单词保存成功
- [ ] 单词显示正确

**难度过滤**：
- [ ] 过滤器显示正确
- [ ] 过滤功能正常
- [ ] 计数显示准确
- [ ] 切换标签重置过滤

#### 跨浏览器测试

测试矩阵：

| 功能 | Chrome | Edge | Firefox | Safari |
|------|--------|------|---------|--------|
| 基本显示 | ✅ | ✅ | ✅ | ✅ |
| TTS | ✅ | ✅ | ⚠️ | ⚠️ |
| PWA | ✅ | ✅ | ❌ | ⚠️ |
| Service Worker | ✅ | ✅ | ✅ | ⚠️ |

### 部署

#### 静态网站托管

**推荐平台**：
1. **GitHub Pages**（免费）
   - 推送到 GitHub 仓库
   - 启用 Pages 功能
   - 访问 `https://username.github.io/repo`

2. **Vercel**（免费）
   - 连接 GitHub 仓库
   - 自动部署
   - 支持自定义域名

3. **Netlify**（免费）
   - 拖拽文件夹部署
   - 自动 HTTPS
   - 支持表单和函数

#### 部署清单

- [ ] 测试所有功能
- [ ] 检查 API Key 安全
- [ ] 更新 manifest.json
- [ ] 测试 Service Worker
- [ ] 验证 PWA 可安装
- [ ] 测试移动端适配
- [ ] 检查 HTTPS 配置

### 故障排除

#### 常见问题

**1. TTS 不工作**

**症状**：点击播放按钮无反应

**解决方案**：
```javascript
// 检查 TTS 服务是否加载
console.log(typeof tts);  // 应该是 'object'

// 检查配置
console.log(tts.config);

// 尝试浏览器 TTS
tts.saveConfig('browser', '', '');
```

**2. Service Worker 缓存问题**

**症状**：更新代码后页面没有变化

**解决方案**：
1. 打开 DevTools
2. Application → Service Workers
3. 点击 "Unregister"
4. 硬刷新（Ctrl+Shift+R）

**3. localStorage 满了**

**症状**：无法保存新数据

**解决方案**：
```javascript
// 清理过期数据
storageService.clearAll();

// 或导出后清理
const backup = storageService.exportData();
storageService.clearAll();
storageService.importData(backup);
```

**4. 单词不显示**

**症状**：单词广场空白

**解决方案**：
```javascript
// 检查单词数据
console.log(words.length);  // 应该是 976

// 检查过滤器
console.log(currentDifficultyFilter);

// 重置过滤器
currentDifficultyFilter = 'all';
render();
```

---

## 贡献指南

### 如何贡献

1. **Fork 仓库**
2. **创建分支**：`git checkout -b feature/your-feature`
3. **提交更改**：`git commit -m "Add: your feature"`
4. **推送分支**：`git push origin feature/your-feature`
5. **创建 Pull Request**

### 提交规范

**格式**：`<type>: <description>`

**类型**：
- `Add`: 新功能
- `Fix`: 修复 bug
- `Update`: 更新功能
- `Refactor`: 重构代码
- `Docs`: 文档更新
- `Style`: 样式调整
- `Test`: 测试相关

**示例**：
```
Add: difficulty filter for word plaza
Fix: card flip animation on mobile
Update: TTS service to support more providers
Docs: add API configuration guide
```

---

## 资源链接

### 官方文档
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev](https://web.dev/)
- [PWA Builder](https://www.pwabuilder.com/)

### API 文档
- [OpenAI API](https://platform.openai.com/docs)
- [SiliconFlow API](https://docs.siliconflow.cn/)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

### 工具
- [SVG Editor](https://svg-edit.github.io/svgedit/)
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [Can I Use](https://caniuse.com/)

---

## 许可证

MIT License - 详见 LICENSE 文件

---

**更新日期**：2024-02-13  
**版本**：v2.2.0  
**维护者**：Pictographic Learn Team



### 核心原则

1. **分离关注点**
   - 系统单词 = 静态文件（只读）
   - 用户单词 = localStorage（可读写）

2. **数据驱动分类**
   - 分类信息存储在数据中
   - 不依赖文件名或文件结构

3. **灵活扩展**
   - 支持自动分类
   - 支持自定义标签
   - 支持多维度筛选

4. **用户友好**
   - 自动合并数据
   - 自动去重
   - 自动分类

### 回答你的问题

**Q: 用户录入或导入单词时，会逐个判断放到对应分类的 JS 文件中吗？**

**A: 不会！新架构的设计是：**
- ❌ 不会修改任何 JS 文件
- ✅ 用户单词存储在 localStorage
- ✅ 分类信息存储在数据对象的 `category` 字段中
- ✅ 通过代码逻辑进行筛选，而非文件分离
- ✅ 自动检测分类，用户也可手动修改

这样设计的好处：
1. 用户数据和系统数据分离
2. 不需要修改静态文件
3. 灵活的分类和标签系统
4. 易于维护和扩展

---

**更新日期**: 2024-02-13  
**版本**: v2.2.0  
**架构**: 数据驱动分类系统
