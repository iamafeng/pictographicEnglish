# AI 单词生成提示词模板

本文档提供完整的 AI 提示词模板,用于生成符合 Pictographic Learn 应用格式的英语单词数据。

## 🎯 使用场景

- **单个单词生成**: 需要添加1-10个单词时
- **批量单词生成**: 需要扩充词汇库(10-1000+个单词)时
- **适用的 AI 服务**: ChatGPT, Claude, DeepSeek, 文心一言, 通义千问等

---

## 📋 单个单词生成提示词

### 提示词模板

```
请为英语单词 "[单词]" 生成完整的学习数据,返回 JSON 格式。

要求:
1. phonetic: IPA 国际音标,用方括号包裹,如 [ˈæpl]
2. meaning: 中文含义,格式为 "词性. 中文",如 "n. 苹果"
3. example: 英文例句,简单实用,10-15个单词
4. exampleCn: 例句的中文翻译
5. svg: 象形 SVG 代码,要求:
   - viewBox="0 0 120 60"
   - 包含单词文本(大写、居中、加粗)
   - 添加简单的象形图形元素
   - 使用 fill="currentColor" 或 stroke="currentColor"
   - 扁平极简风格

返回格式(纯 JSON,不要用 markdown 代码块):
{
  "word": "apple",
  "phonetic": "[ˈæpl]",
  "meaning": "n. 苹果",
  "example": "I eat an apple every day.",
  "exampleCn": "我每天吃一个苹果。",
  "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"35\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"bold\" fill=\"currentColor\">APPLE</text><circle cx=\"30\" cy=\"30\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/></svg>"
}
```

### 使用示例

**输入:**
```
请为英语单词 "adventure" 生成完整的学习数据...
```

**期望输出:**
```json
{
  "word": "adventure",
  "phonetic": "[ədˈventʃər]",
  "meaning": "n. 冒险;奇遇",
  "example": "Life is an adventure full of surprises.",
  "exampleCn": "生活是一场充满惊喜的冒险。",
  "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"35\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\">ADVENTURE</text><path d=\"M 20 45 L 40 15 L 60 45 L 80 15 L 100 45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/></svg>"
}
```

---

## 📦 批量单词生成提示词

### 提示词模板

```
请为以下英语单词列表生成完整的学习数据,返回 JSON 数组格式。

单词列表:
[单词1], [单词2], [单词3], ...

每个单词需要包含:
1. word: 英语单词(小写)
2. phonetic: IPA 国际音标,用方括号包裹
3. meaning: 中文含义,格式为 "词性. 中文"
4. example: 英文例句,简单实用,10-15个单词
5. exampleCn: 例句的中文翻译
6. svg: 象形 SVG 代码,要求:
   - viewBox="0 0 120 60"
   - 包含单词文本(大写、居中、加粗)
   - 添加简单的象形图形元素
   - 使用 fill="currentColor" 或 stroke="currentColor"
   - 扁平极简风格

返回格式(纯 JSON 数组,不要用 markdown 代码块):
[
  {
    "word": "apple",
    "phonetic": "[ˈæpl]",
    "meaning": "n. 苹果",
    "example": "I eat an apple every day.",
    "exampleCn": "我每天吃一个苹果。",
    "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"35\" text-anchor=\"middle\" font-size=\"24\" font-weight=\"bold\" fill=\"currentColor\">APPLE</text><circle cx=\"30\" cy=\"30\" r=\"15\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/></svg>"
  },
  {
    "word": "banana",
    "phonetic": "[bəˈnɑːnə]",
    "meaning": "n. 香蕉",
    "example": "Bananas are rich in potassium.",
    "exampleCn": "香蕉富含钾元素。",
    "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"35\" text-anchor=\"middle\" font-size=\"22\" font-weight=\"bold\" fill=\"currentColor\">BANANA</text><path d=\"M 40 20 Q 50 10, 60 20 T 80 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/></svg>"
  }
]
```

### 使用示例

**输入:**
```
请为以下英语单词列表生成完整的学习数据...

单词列表:
adventure, beautiful, challenge, discover, energy
```

**期望输出:**
```json
[
  {
    "word": "adventure",
    "phonetic": "[ədˈventʃər]",
    "meaning": "n. 冒险;奇遇",
    "example": "Life is an adventure full of surprises.",
    "exampleCn": "生活是一场充满惊喜的冒险。",
    "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"35\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\">ADVENTURE</text><path d=\"M 20 45 L 40 15 L 60 45 L 80 15 L 100 45\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.4\"/></svg>"
  },
  {
    "word": "beautiful",
    "phonetic": "[ˈbjuːtɪfl]",
    "meaning": "adj. 美丽的;漂亮的",
    "example": "She has a beautiful smile.",
    "exampleCn": "她有一个美丽的笑容。",
    "svg": "<svg viewBox=\"0 0 120 60\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"60\" y=\"35\" text-anchor=\"middle\" font-size=\"18\" font-weight=\"bold\" fill=\"currentColor\">BEAUTIFUL</text><circle cx=\"60\" cy=\"30\" r=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.3\"/><circle cx=\"60\" cy=\"30\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" opacity=\"0.5\"/></svg>"
  }
]
```

---

## 🎨 SVG 设计规范

### 基本要求

1. **ViewBox**: 必须使用 `viewBox="0 0 120 60"`
2. **文本元素**: 
   - 单词文本必须大写
   - 居中对齐: `x="60" text-anchor="middle"`
   - 垂直位置: `y="35"` (可根据字体大小微调)
   - 字体大小: 根据单词长度调整(短词24px,长词16-18px)
   - 加粗: `font-weight="bold"`
3. **颜色**: 使用 `fill="currentColor"` 或 `stroke="currentColor"`
4. **装饰元素**: 设置 `opacity="0.3-0.5"` 保持简洁

### SVG 示例

#### 简单圆形装饰
```xml
<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="35" text-anchor="middle" font-size="24" font-weight="bold" fill="currentColor">WORD</text>
  <circle cx="30" cy="30" r="15" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"/>
</svg>
```

#### 波浪线装饰
```xml
<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="35" text-anchor="middle" font-size="22" font-weight="bold" fill="currentColor">WAVE</text>
  <path d="M 10 45 Q 30 35, 50 45 T 90 45" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"/>
</svg>
```

#### 星形装饰
```xml
<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
  <text x="60" y="35" text-anchor="middle" font-size="20" font-weight="bold" fill="currentColor">STAR</text>
  <polygon points="20,25 22,30 27,30 23,33 25,38 20,35 15,38 17,33 13,30 18,30" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.4"/>
</svg>
```

---

## 💡 最佳实践

### 选择合适的 AI 服务

| AI 服务 | 推荐度 | 优点 | 缺点 |
|---------|--------|------|------|
| ChatGPT (GPT-4) | ⭐⭐⭐⭐⭐ | JSON 格式准确,SVG 质量高 | 需要付费账号 |
| Claude | ⭐⭐⭐⭐⭐ | 理解能力强,输出稳定 | 需要账号 |
| DeepSeek | ⭐⭐⭐⭐ | 免费,中文支持好 | SVG 可能需要调整 |
| 文心一言 | ⭐⭐⭐ | 免费,中文原生 | JSON 格式偶尔不准确 |
| 通义千问 | ⭐⭐⭐ | 免费,响应快 | SVG 质量一般 |

### 提示词优化技巧

1. **明确格式要求**: 强调"纯 JSON,不要用 markdown 代码块"
2. **提供示例**: 在提示词中包含完整的示例输出
3. **分批处理**: 批量生成时,每次不超过50个单词
4. **验证输出**: 使用应用的"校验并预览"功能检查格式

### 常见问题解决

#### 问题1: AI 返回的是 markdown 代码块而不是纯 JSON

**解决方案**: 
- 在提示词中强调"返回纯 JSON,不要用 ```json 代码块"
- 手动删除 ```json 和 ``` 标记
- 使用支持更好的 AI 服务(如 ChatGPT)

#### 问题2: SVG 代码中的引号被转义

**解决方案**:
- 检查 JSON 中的 svg 字段,确保引号正确转义
- 使用 JSON 验证工具检查格式
- 在应用中粘贴后使用"校验并预览"功能

#### 问题3: 音标格式不正确

**解决方案**:
- 在提示词中明确要求"IPA 国际音标,用方括号包裹"
- 提供示例: `[ˈæpl]`
- 手动检查并修正音标

---

## 🔧 应用内使用流程

### 单个单词添加流程

1. 打开应用,点击"➕ 添加单词"按钮
2. 切换到"📝 单词添加"标签页
3. 输入单词,点击"🤖 AI自动补全"按钮
   - 成功: 自动填充音标、含义、例句
   - 失败: 使用外部 AI 生成,手动填写
4. 点击"基础方案"或"AI 视觉生成"生成 SVG
5. 预览确认无误后,点击"保存单词"

### 批量导入流程

1. 准备单词列表(如: adventure, beautiful, challenge)
2. 复制本文档的"批量单词生成提示词"
3. 将单词列表填入提示词,发送给 AI 服务
4. 复制 AI 返回的 JSON 数组
5. 在应用中切换到"🚀 快速注入"标签页
6. 粘贴 JSON 数组
7. 点击"校验并预览"检查格式
8. 确认无误后,点击"立即注入到库"

---

## 📞 技术支持

如果遇到问题:
1. 检查 JSON 格式是否正确(使用在线 JSON 验证工具)
2. 确认所有必需字段都已填写
3. 查看浏览器控制台的错误信息
4. 参考应用内的"❓ 使用说明"标签页

---

## 📝 更新日志

- **v1.0** (2024-03): 初始版本,包含单个和批量生成提示词
