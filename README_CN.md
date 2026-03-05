# Pictographic Learn - 象形英语学习

> **通过视觉化记忆，实现长期记忆**

一个基于 Web 的英语词汇学习应用，通过视觉记忆技术（象形方法）和 SVG 象形图，结合间隔重复系统，帮助用户更有效地记忆英语单词。

中文文档 | [English](README.md)

---

## ✨ 功能特性

### 核心学习功能
- **📚 视觉单词卡片** - 每个单词配有定制的 SVG 象形图，通过视觉联想加深记忆
- **🎯 间隔重复系统 (SRS)** - 基于记忆保持曲线的优化复习计划
- **⭐ 难度分级过滤** - 5 级难度系统（976 个单词已预分类）
- **🏷️ 智能分类** - 自动按词性、难度和标签分类单词
- **🔊 文本转语音 (TTS)** - 多提供商发音支持（浏览器原生、OpenAI 兼容 API）

### 学习模式
- **单词广场** - 浏览和学习完整词汇库中的新单词
- **我的词库** - 复习已学习的单词
- **随机挑战** - 通过随机选择的单词集测试自己
- **🧩 连连看游戏** - 在互动游戏中将单词与象形图匹配
- **🎬 影院模式** - 沉浸式幻灯片学习体验

### 自定义功能
- **➕ 自定义单词管理** - 添加自己的单词，支持 AI 驱动的 SVG 生成
- **🤖 AI 集成** - 使用 Pollinations（免费）或自定义 API 自动生成 SVG 象形图
- **⚙️ 灵活的 API 配置** - 支持多个 TTS 和图像生成提供商

### 技术特性
- **📱 渐进式 Web 应用 (PWA)** - 可安装，支持离线使用
- **💾 本地存储** - 所有用户数据存储在浏览器中（隐私优先）
- **🚀 零构建系统** - 直接在浏览器中运行，无需 npm/webpack
- **♿ 无障碍访问** - ARIA 标签、键盘导航、屏幕阅读器支持

---

## 🎯 目标用户

希望通过视觉记忆技术高效学习英语词汇的中文用户，适合自主学习和自定进度的学习者。

---

## 🚀 快速开始

### 方法 1：直接打开（最简单）

1. 下载或克隆此仓库
2. 直接在浏览器中打开 `index.html`
   - **Windows**: 双击 `index.html` 或右键 → 打开方式 → 浏览器
   - **macOS/Linux**: 双击或使用 `open index.html`

**注意**: 使用 `file://` 协议时，某些功能（PWA、Service Worker）可能受限。

### 方法 2：本地服务器（推荐）

#### 使用 Python（内置）
```bash
cd pictographicEnglish
python -m http.server 8000
# 然后在浏览器中打开 http://localhost:8000
```

#### 使用 VS Code Live Server
1. 在 VS Code 中安装 "Live Server" 扩展
2. 右键 `index.html` → "Open with Live Server"

#### 使用提供的脚本（Windows）
```bash
cd sh
./start.sh    # 启动服务器
./status.sh   # 检查状态
./stop.sh     # 停止服务器
```

---

## 📋 浏览器要求

- **Chrome 90+**（推荐）
- **Edge 90+**
- **Firefox 88+**
- **Safari 14+**

**要求**:
- 必须启用 JavaScript
- 必须启用 localStorage（用于保存进度）
- 支持现代 CSS（Flexbox、Grid、CSS 变量）

---

## 🎓 使用方法

### 基本工作流程

1. **浏览单词** - 从"单词广场"开始查看所有可用单词
2. **按难度过滤** - 使用难度下拉菜单过滤单词（⭐ 到 ⭐⭐⭐⭐⭐）
3. **学习单词** - 点击卡片翻转查看含义、例句和发音
4. **标记为已学** - 点击"记下了?"按钮将单词添加到"我的词库"
5. **复习** - 切换到"我的词库"标签复习已学单词
6. **挑战自己** - 点击"开始挑战"通过随机测验测试知识

### 学习模式

#### 单词广场
- 浏览所有 976 个系统单词
- 按难度级别过滤（1-5 星）
- 按单词或含义搜索
- 点击卡片翻转查看详情
- 标记单词为已学

#### 我的词库
- 复习已标记为已学的单词
- 相同的过滤和搜索功能
- 跟踪学习进度
- 可以移除单词

#### 挑战模式
- **广场随机探索**: 测试未学单词
- **回顾记忆库**: 测验已学单词
- **连连看游戏**: 将单词与象形图匹配

#### 影院模式
- 沉浸式全屏幻灯片
- 自动播放或手动导航
- 适合被动复习

### 添加自定义单词

1. 点击标题栏中的 ➕ 按钮
2. 从三种方法中选择：
   - **单个单词**: 一次添加一个单词，支持 AI 自动补全
   - **批量导入**: 从 JSON 导入多个单词
   - **使用指南**: 查看详细说明和 AI 提示模板

3. AI 驱动的 SVG 生成：
   - 使用内置的 Pollinations 集成（免费，无需 API 密钥）
   - 或在设置中配置自己的 API（SiliconFlow、OpenAI 等）

---

## ⚙️ API 配置

### 文本转语音 (TTS)

应用支持多个 TTS 提供商：

| 提供商 | 费用 | 需要 API 密钥 | 质量 |
|--------|------|---------------|------|
| 浏览器原生 | 免费 | 否 | 良好 |
| Edge TTS | 免费 | 否 | 优秀 |
| Google TTS | 免费 | 否 | 良好 |
| 硅基流动 (SiliconFlow) | 付费 | 是 | 优秀 |
| DeepSeek | 付费 | 是 | 优秀 |
| OpenAI | 付费 | 是 | 优秀 |

**配置方法**:
1. 点击 ⚙️ 设置按钮
2. 选择首选的 TTS 提供商
3. 输入 API 地址和密钥（如需要）
4. 保存设置

### 图像生成 (T2I)

用于自定义单词 SVG 生成：

| 提供商 | 费用 | 需要 API 密钥 | 质量 |
|--------|------|---------------|------|
| Pollinations | 免费 | 否 | 良好 |
| 硅基流动 (SiliconFlow) | 付费 | 是 | 优秀 |
| OpenAI DALL-E 3 | 付费 | 是 | 优秀 |

**配置方法**: 与 TTS 相同，在设置面板的"AI 生图 (T2I)"部分

---

## 📊 数据架构

### 系统单词（只读）
- **位置**: `words.js`
- **数量**: 976 个预加载单词
- **格式**: JavaScript 单词对象数组
- **内容**: 包含 SVG 象形图、音标、含义、例句、难度评级和标签

### 用户单词（读写）
- **位置**: 浏览器 localStorage
- **管理**: 通过自定义单词管理器 UI
- **持久化**: 本地存储在浏览器中
- **备份**: 提供导出/导入功能

### 单词对象结构

```javascript
{
    word: "example",              // 必需：英文单词
    phonetic: "[ɪɡˈzɑːmpl]",     // 必需：IPA 发音
    meaning: "n. 例子",           // 必需：词性 + 中文含义
    example: "For example...",    // 必需：英文例句
    exampleCn: "例如...",         // 必需：例句中文翻译
    svg: "<svg>...</svg>",        // 必需：SVG 象形图标记
    
    category: "noun",             // 自动检测：动词、名词、形容词等
    difficulty: 1,                // 自动计算：1-5 级
    tags: ["basic", "common"],    // 自动生成：描述性标签
    
    custom: false,                // 系统单词 vs 用户单词
    source: "system",             // "system" | "user" | "import"
    createdAt: 1234567890         // 时间戳（用户单词）
}
```

---

## 🏗️ 技术栈

### 核心技术
- **前端**: Vanilla JavaScript (ES6+)
- **样式**: CSS3（Flexbox、Grid、CSS 变量）
- **存储**: 浏览器 localStorage
- **图形**: SVG 象形图
- **PWA**: Service Worker + Web App Manifest

### 无构建系统
此项目直接在浏览器中运行，无需任何构建步骤。不需要 npm、webpack 或打包工具。

### 关键服务
- **TTSService**: 支持多提供商的文本转语音
- **AIService**: 图像生成的 AI 集成
- **StorageService**: 用户数据的 localStorage 包装器
- **SRSService**: 间隔重复系统算法
- **SVGGeneratorService**: AI 驱动的 SVG 生成
- **CategoryDetector**: 自动单词分类

---

## 📁 项目结构

```
pictographicEnglish/
├── index.html                      # 主入口
├── app.js                          # 主应用逻辑
├── words.js                        # 单词数据库（976 个单词）
├── styles.css                      # 主样式
├── manifest.json                   # PWA 清单
├── sw.js                           # Service Worker
│
├── src/
│   ├── components/                 # UI 组件
│   │   ├── CinemaController.js    # 影院模式
│   │   ├── ConnectGame.js         # 连连看游戏
│   │   ├── CustomWordManager.js   # 自定义单词 CRUD
│   │   └── StatsPanel.js          # 统计显示
│   │
│   ├── services/                   # 核心业务逻辑
│   │   ├── AIService.js           # AI API 集成
│   │   ├── CategoryDetector.js    # 自动分类
│   │   ├── SRSService.js          # 间隔重复
│   │   ├── StorageService.js      # localStorage 包装器
│   │   ├── SVGGeneratorService.js # SVG 生成
│   │   └── TTSService.js          # 文本转语音
│   │
│   ├── styles/                     # 附加 CSS
│   │   ├── difficulty-filter.css  # 过滤器 UI 样式
│   │   ├── enhancements.css       # 功能增强
│   │   └── ui-polish.css          # UI 优化
│   │
│   └── utils/                      # 工具函数
│       ├── keyboard.js            # 键盘导航
│       ├── performance.js         # 性能优化
│       └── toast.js               # Toast 通知
│
├── scripts/                        # 实用脚本
│   ├── audit-difficulty.js        # 难度分布审计
│   ├── migrate-difficulty.js      # 难度重新评估
│   └── simplified-difficulty-algorithm.js
│
└── sh/                             # Shell 脚本
    ├── start.sh                   # 启动本地服务器
    ├── status.sh                  # 检查服务器状态
    └── stop.sh                    # 停止服务器
```

---

## 🔧 添加新单词

查看 [VOCABULARY_EXPANSION.md](VOCABULARY_EXPANSION.md) 了解详细说明：
- 单词对象结构和验证
- 难度分配标准
- SVG 象形图要求
- 测试新单词
- 使用 AI 生成单词

**快速示例**:

```javascript
// 添加到 words.js 数组
{
    word: "apple",
    phonetic: "[ˈæpl]",
    meaning: "n. 苹果",
    example: "An apple a day keeps the doctor away.",
    exampleCn: "一天一个苹果，医生远离我。",
    svg: "<svg>...</svg>",
    category: "noun",
    difficulty: 1,
    tags: ["food", "fruit", "basic"]
}
```

---

## 🤝 贡献

欢迎贡献！以下是您可以帮助的方式：

1. **报告错误**: 提交包含详细重现步骤的 issue
2. **建议功能**: 在 issues 部分分享您的想法
3. **添加单词**: 贡献带有象形图的新单词
4. **改进文档**: 帮助使文档更清晰
5. **修复错误**: 提交包含错误修复的 pull request

### 代码风格指南
- 使用 ES6+ JavaScript 特性
- 遵循现有命名约定（变量用 camelCase，类用 PascalCase）
- 为复杂逻辑添加注释
- 提交前在多个浏览器中测试

---

## 📄 许可证

此项目是开源的，可用于教育目的。

---

## 🙏 致谢

- **Pollinations.ai** - 免费 AI 图像生成 API
- **字体**: Inter by Rasmus Andersson
- **图标**: UI 元素使用 Emoji 字符
- **灵感**: 来自认知心理学研究的视觉记忆技术

---

## 📞 支持

- **问题反馈**: [GitHub Issues](https://github.com/iamafeng/pictographicEnglish/issues)
- **文档**: 查看仓库中的其他文档
- **更新**: 查看仓库获取最新功能

---

## 🗺️ 路线图

- [ ] 移动应用版本（React Native）
- [ ] 词汇扩展到 1000+ 个单词
- [ ] 社区单词分享平台
- [ ] 高级 SRS 算法与遗忘曲线
- [ ] 游戏化功能（成就、连续打卡）
- [ ] 多语言支持（中文以外）

---

**用 ❤️ 为视觉学习者打造**
