# Pictographic Learn

> **Visualizing vocabulary for long-term memory**

A web-based English vocabulary learning application that uses visual memory techniques (pictographic/象形 method) to help users memorize English words more effectively through SVG pictograms and spaced repetition.

[中文文档](README_CN.md) | English

---

## ✨ Features

### Core Learning Features
- **📚 Visual Word Cards** - Each word paired with custom SVG pictograms for visual association
- **🎯 Spaced Repetition System (SRS)** - Optimized review scheduling based on memory retention
- **⭐ Difficulty-Based Filtering** - 5-level difficulty system (976 words pre-categorized)
- **🏷️ Smart Categorization** - Automatic word categorization by part of speech, difficulty, and tags
- **🔊 Text-to-Speech (TTS)** - Multi-provider pronunciation support (browser native, OpenAI-compatible APIs)

### Learning Modes
- **Word Plaza** - Browse and learn new words from the complete vocabulary
- **My Library** - Review words you've already learned
- **Random Challenge** - Test yourself with randomly selected word sets
- **🧩 Connect Game** - Match words with their pictograms in an interactive game
- **🎬 Cinema Mode** - Immersive slideshow learning experience

### Customization
- **➕ Custom Word Management** - Add your own words with AI-powered SVG generation
- **🤖 AI Integration** - Automatic SVG pictogram generation using Pollinations (free) or custom APIs
- **⚙️ Flexible API Configuration** - Support for multiple TTS and image generation providers

### Technical Features
- **📱 Progressive Web App (PWA)** - Installable, works offline
- **💾 Local Storage** - All user data stored in browser (privacy-first)
- **🚀 Zero Build System** - Runs directly in browser, no npm/webpack required
- **♿ Accessibility** - ARIA labels, keyboard navigation, screen reader support

---

## 🎯 Target Users

Chinese-speaking English learners who benefit from visual memory techniques and want an efficient, self-paced vocabulary learning experience.

---

## 🚀 Quick Start

### Method 1: Direct Open (Simplest)

1. Download or clone this repository
2. Open `index.html` directly in your browser
   - **Windows**: Double-click `index.html` or right-click → Open with → Browser
   - **macOS/Linux**: Double-click or use `open index.html`

**Note**: Some features (PWA, Service Worker) may be limited when using `file://` protocol.

### Method 2: Local Server (Recommended)

#### Using Python (Built-in)
```bash
cd pictographicEnglish
python -m http.server 8000
# Then open http://localhost:8000 in your browser
```

#### Using VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

#### Using Provided Scripts (Windows)
```bash
cd sh
./start.sh    # Start server
./status.sh   # Check status
./stop.sh     # Stop server
```

---

## 📋 Browser Requirements

- **Chrome 90+** (Recommended)
- **Edge 90+**
- **Firefox 88+**
- **Safari 14+**

**Requirements**:
- JavaScript must be enabled
- localStorage must be enabled (for saving progress)
- Modern CSS support (Flexbox, Grid, CSS Variables)

---

## 🎓 How to Use

### Basic Workflow

1. **Browse Words** - Start in "Word Plaza" to see all available words
2. **Filter by Difficulty** - Use the difficulty dropdown to filter words (⭐ to ⭐⭐⭐⭐⭐)
3. **Learn Words** - Click cards to flip and see meanings, examples, and pronunciation
4. **Mark as Learned** - Click "记下了?" button to add words to "My Library"
5. **Review** - Switch to "My Library" tab to review learned words
6. **Challenge Yourself** - Click "开始挑战" to test your knowledge with random quizzes

### Learning Modes

#### Word Plaza (单词广场)
- Browse all 976 system words
- Filter by difficulty level (1-5 stars)
- Search by word or meaning
- Click cards to flip and see details
- Mark words as learned

#### My Library (我的词库)
- Review words you've marked as learned
- Same filtering and search capabilities
- Track your learning progress
- Remove words if needed

#### Challenge Modes (挑战模式)
- **Random Plaza Challenge**: Test yourself on unlearned words
- **Library Review**: Quiz yourself on learned words
- **Connect Game (连连看)**: Match words with their pictograms

#### Cinema Mode (影院模式)
- Immersive full-screen slideshow
- Auto-play or manual navigation
- Perfect for passive review sessions

### Adding Custom Words

1. Click the ➕ button in the header
2. Choose from three methods:
   - **Single Word**: Add one word at a time with AI auto-complete
   - **Bulk Import**: Import multiple words from JSON
   - **Usage Guide**: View detailed instructions and AI prompt templates

3. For AI-powered SVG generation:
   - Use the built-in Pollinations integration (free, no API key required)
   - Or configure your own API in Settings (SiliconFlow, OpenAI, etc.)

---

## ⚙️ API Configuration

### Text-to-Speech (TTS)

The app supports multiple TTS providers:

| Provider | Cost | API Key Required | Quality |
|----------|------|------------------|---------|
| Browser Native | Free | No | Good |
| Edge TTS | Free | No | Excellent |
| Google TTS | Free | No | Good |
| SiliconFlow | Paid | Yes | Excellent |
| DeepSeek | Paid | Yes | Excellent |
| OpenAI | Paid | Yes | Excellent |

**Configuration**:
1. Click the ⚙️ Settings button
2. Select your preferred TTS provider
3. Enter API URL and Key (if required)
4. Save settings

### Image Generation (T2I)

For custom word SVG generation:

| Provider | Cost | API Key Required | Quality |
|----------|------|------------------|---------|
| Pollinations | Free | No | Good |
| SiliconFlow | Paid | Yes | Excellent |
| OpenAI DALL-E 3 | Paid | Yes | Excellent |

**Configuration**: Same as TTS, in the Settings panel under "AI 生图 (T2I)"

---

## 📊 Data Architecture

### System Words (Read-Only)
- **Location**: `words.js`
- **Count**: 976 pre-loaded words
- **Format**: JavaScript array of word objects
- **Content**: Complete with SVG pictograms, phonetics, meanings, examples, difficulty ratings, and tags

### User Words (Read-Write)
- **Location**: Browser localStorage
- **Management**: Through Custom Word Manager UI
- **Persistence**: Stored locally in your browser
- **Backup**: Export/import functionality available

### Word Object Structure

```javascript
{
    word: "example",              // Required: The English word
    phonetic: "[ɪɡˈzɑːmpl]",     // Required: IPA pronunciation
    meaning: "n. 例子",           // Required: Part of speech + Chinese meaning
    example: "For example...",    // Required: English example sentence
    exampleCn: "例如...",         // Required: Chinese translation of example
    svg: "<svg>...</svg>",        // Required: SVG pictogram markup
    
    category: "noun",             // Auto-detected: verb, noun, adjective, etc.
    difficulty: 1,                // Auto-calculated: 1-5 scale
    tags: ["basic", "common"],    // Auto-generated: descriptive tags
    
    custom: false,                // System vs user word
    source: "system",             // "system" | "user" | "import"
    createdAt: 1234567890         // Timestamp (for user words)
}
```

---

## 🏗️ Technology Stack

### Core Technologies
- **Frontend**: Vanilla JavaScript (ES6+)
- **Styling**: CSS3 (Flexbox, Grid, CSS Variables)
- **Storage**: Browser localStorage
- **Graphics**: SVG for pictograms
- **PWA**: Service Worker + Web App Manifest

### No Build System
This project runs directly in the browser without any build step. No npm, webpack, or bundler required.

### Key Services
- **TTSService**: Text-to-speech with multiple provider support
- **AIService**: AI integration for image generation
- **StorageService**: localStorage wrapper for user data
- **SRSService**: Spaced Repetition System algorithm
- **SVGGeneratorService**: AI-powered SVG generation
- **CategoryDetector**: Automatic word categorization

---

## 📁 Project Structure

```
pictographicEnglish/
├── index.html                      # Main entry point
├── app.js                          # Main application logic
├── words.js                        # Word database (976 words)
├── styles.css                      # Main styles
├── manifest.json                   # PWA manifest
├── sw.js                           # Service Worker
│
├── src/
│   ├── components/                 # UI Components
│   │   ├── CinemaController.js    # Cinema mode
│   │   ├── ConnectGame.js         # Connect game
│   │   ├── CustomWordManager.js   # Custom word CRUD
│   │   └── StatsPanel.js          # Statistics display
│   │
│   ├── services/                   # Core Business Logic
│   │   ├── AIService.js           # AI API integration
│   │   ├── CategoryDetector.js    # Auto-categorization
│   │   ├── SRSService.js          # Spaced Repetition
│   │   ├── StorageService.js      # localStorage wrapper
│   │   ├── SVGGeneratorService.js # SVG generation
│   │   └── TTSService.js          # Text-to-Speech
│   │
│   ├── styles/                     # Additional CSS
│   │   ├── difficulty-filter.css  # Filter UI styles
│   │   ├── enhancements.css       # Feature enhancements
│   │   └── ui-polish.css          # UI polish
│   │
│   └── utils/                      # Utility Functions
│       ├── keyboard.js            # Keyboard navigation
│       ├── performance.js         # Performance optimizations
│       └── toast.js               # Toast notifications
│
├── scripts/                        # Utility Scripts
│   ├── audit-difficulty.js        # Difficulty distribution audit
│   ├── migrate-difficulty.js      # Difficulty re-evaluation
│   └── simplified-difficulty-algorithm.js
│
└── sh/                             # Shell Scripts
    ├── start.sh                   # Start local server
    ├── status.sh                  # Check server status
    └── stop.sh                    # Stop local server
```

---

## 🔧 Adding New Words

See [VOCABULARY_EXPANSION.md](VOCABULARY_EXPANSION.md) for detailed instructions on:
- Word object structure and validation
- Difficulty assignment criteria
- SVG pictogram requirements
- Testing new words
- Using AI for word generation

[中文版词汇扩展指南](VOCABULARY_EXPANSION_CN.md)

**Quick Example**:

```javascript
// Add to words.js array
{
    word: "apple",
    phonetic: "[ˈæpl]",
    meaning: "n. 苹果",
    example: "An apple a day keeps the doctor away.",
    exampleCn: "一天一个苹果,医生远离我。",
    svg: "<svg>...</svg>",
    category: "noun",
    difficulty: 1,
    tags: ["food", "fruit", "basic"]
}
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Report Bugs**: Open an issue with detailed reproduction steps
2. **Suggest Features**: Share your ideas in the issues section
3. **Add Words**: Contribute new words with pictograms
4. **Improve Documentation**: Help make docs clearer
5. **Fix Bugs**: Submit pull requests with bug fixes

### Code Style Guidelines
- Use ES6+ JavaScript features
- Follow existing naming conventions (camelCase for variables, PascalCase for classes)
- Add comments for complex logic
- Test in multiple browsers before submitting

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgments

- **Pollinations.ai** - Free AI image generation API
- **Font**: Inter by Rasmus Andersson
- **Icons**: Emoji characters for UI elements
- **Inspiration**: Visual memory techniques from cognitive psychology research

---

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/iamafeng/pictographicEnglish/issues)
- **Documentation**: See additional docs in the repository
- **Updates**: Check the repository for latest features

---

## 🗺️ Roadmap

- [ ] Mobile app version (React Native)
- [ ] Vocabulary expansion to 1000+ words
- [ ] Community word sharing platform
- [ ] Advanced SRS algorithm with forgetting curve
- [ ] Gamification features (achievements, streaks)
- [ ] Multi-language support (beyond Chinese)

---

**Made with ❤️ for visual learners**
