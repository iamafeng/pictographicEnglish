# Vocabulary Expansion Guide

> **Complete guide for adding new words to Pictographic Learn**

This document provides detailed instructions for expanding the vocabulary database, including word object structure, difficulty assignment, SVG generation, and testing procedures.

[中文版本](VOCABULARY_EXPANSION_CN.md) | English

---

## Table of Contents

1. [Word Object Structure](#word-object-structure)
2. [Difficulty Assignment](#difficulty-assignment)
3. [SVG Pictogram Requirements](#svg-pictogram-requirements)
4. [Adding Words to words.js](#adding-words-to-wordsjs)
5. [Testing New Words](#testing-new-words)
6. [Using AI for Word Generation](#using-ai-for-word-generation)
7. [Best Practices](#best-practices)

---

## Word Object Structure

### Required Fields

Every word object must include the following fields:

```javascript
{
    // === REQUIRED FIELDS ===
    word: "example",              // English word (lowercase, no spaces)
    phonetic: "[ɪɡˈzɑːmpl]",     // IPA pronunciation notation
    meaning: "n. 例子",           // Part of speech + Chinese meaning
    example: "For example...",    // English example sentence
    exampleCn: "例如...",         // Chinese translation of example
    svg: "<svg>...</svg>",        // SVG pictogram markup
    
    // === AUTO-GENERATED FIELDS ===
    category: "noun",             // Auto-detected from meaning
    difficulty: 1,                // Auto-calculated (1-5)
    tags: ["basic", "common"],    // Auto-generated descriptive tags
    
    // === METADATA (for custom words) ===
    custom: false,                // true for user-added words
    source: "system",             // "system" | "user" | "import"
    createdAt: 1234567890         // Unix timestamp
}
```

### Field Specifications

#### `word` (string, required)
- **Format**: Lowercase English word
- **Rules**:
  - No spaces (use hyphens for compound words: "ice-cream")
  - No special characters except hyphens
  - Must be unique in the database
- **Examples**: `"apple"`, `"run"`, `"beautiful"`, `"ice-cream"`

#### `phonetic` (string, required)
- **Format**: IPA (International Phonetic Alphabet) notation
- **Rules**:
  - Enclosed in square brackets: `[...]`
  - Use standard IPA symbols
  - Include stress marks (ˈ for primary, ˌ for secondary)
- **Examples**: 
  - `"[ˈæpl]"` (apple)
  - `"[rʌn]"` (run)
  - `"[ˈbjuːtɪfl]"` (beautiful)
- **Resources**: 
  - [Cambridge Dictionary](https://dictionary.cambridge.org/)
  - [Merriam-Webster](https://www.merriam-webster.com/)

#### `meaning` (string, required)
- **Format**: Part of speech abbreviation + Chinese translation
- **Part of Speech Abbreviations**:
  - `n.` - noun (名词)
  - `v.` - verb (动词)
  - `adj.` - adjective (形容词)
  - `adv.` - adverb (副词)
  - `prep.` - preposition (介词)
  - `conj.` - conjunction (连词)
  - `pron.` - pronoun (代词)
  - `interj.` - interjection (感叹词)
- **Examples**:
  - `"n. 苹果"`
  - `"v. 跑步"`
  - `"adj. 美丽的"`
  - `"adv. 快速地"`

#### `example` (string, required)
- **Format**: Complete English sentence using the word
- **Rules**:
  - Must be a complete sentence (subject + verb)
  - Should demonstrate typical usage
  - Keep it simple and clear (10-20 words ideal)
  - Use proper capitalization and punctuation
- **Examples**:
  - `"I eat an apple every day."`
  - `"She runs in the park every morning."`
  - `"The sunset is beautiful tonight."`

#### `exampleCn` (string, required)
- **Format**: Chinese translation of the example sentence
- **Rules**:
  - Must accurately translate the English example
  - Use natural Chinese expression
  - Include proper punctuation (。！？)
- **Examples**:
  - `"我每天吃一个苹果。"`
  - `"她每天早上在公园跑步。"`
  - `"今晚的日落很美。"`

#### `svg` (string, required)
- **Format**: Complete SVG markup as a string
- **Requirements**: See [SVG Pictogram Requirements](#svg-pictogram-requirements)

#### `category` (string, auto-generated)
- **Values**: `"noun"`, `"verb"`, `"adjective"`, `"adverb"`, `"preposition"`, `"conjunction"`, `"pronoun"`, `"interjection"`, `"other"`
- **Auto-detection**: Extracted from the `meaning` field by CategoryDetector service
- **Manual Override**: Can be set manually if auto-detection fails

#### `difficulty` (number, auto-generated)
- **Range**: 1-5 (1 = easiest, 5 = hardest)
- **Auto-calculation**: Based on multiple factors (see [Difficulty Assignment](#difficulty-assignment))
- **Manual Override**: Can be adjusted manually if needed

#### `tags` (array, auto-generated)
- **Format**: Array of lowercase descriptive strings
- **Examples**: `["food", "fruit", "basic"]`, `["action", "sport", "movement"]`
- **Auto-generation**: Based on word category and semantic analysis
- **Manual Addition**: Can add custom tags as needed

---

## Difficulty Assignment

### Difficulty Scale

| Level | Description | Characteristics | Examples |
|-------|-------------|-----------------|----------|
| ⭐ 1 | Beginner | Very common, short, concrete | apple, run, big |
| ⭐⭐ 2 | Elementary | Common, simple structure | happy, quickly, because |
| ⭐⭐⭐ 3 | Intermediate | Moderate frequency, some complexity | beautiful, although, consider |
| ⭐⭐⭐⭐ 4 | Advanced | Less common, abstract concepts | magnificent, nevertheless, contemplate |
| ⭐⭐⭐⭐⭐ 5 | Expert | Rare, highly abstract or technical | ephemeral, notwithstanding, juxtapose |

### Auto-Calculation Algorithm

The difficulty is automatically calculated using a multi-factor algorithm:

```javascript
// Simplified algorithm (see scripts/simplified-difficulty-algorithm.js)
difficulty = calculateDifficulty(word) {
    // Factor 1: Word Length (40% weight)
    lengthScore = getLengthScore(word.length)
    
    // Factor 2: Syllable Count (35% weight)
    syllableScore = getSyllableScore(countSyllables(word))
    
    // Factor 3: Part of Speech (15% weight)
    posScore = getPartOfSpeechScore(word.category)
    
    // Factor 4: Abstractness (10% weight)
    abstractScore = getAbstractnessScore(word.tags)
    
    // Weighted average
    finalScore = (lengthScore * 0.4) + 
                 (syllableScore * 0.35) + 
                 (posScore * 0.15) + 
                 (abstractScore * 0.1)
    
    // Round to 1-5 scale
    return Math.max(1, Math.min(5, Math.round(finalScore)))
}
```

### Factors Explained

#### 1. Word Length (40% weight)
- **1-3 letters**: Score 1 (e.g., "run", "big", "cat")
- **4-5 letters**: Score 2 (e.g., "apple", "happy")
- **6-7 letters**: Score 3 (e.g., "beautiful", "quickly")
- **8-10 letters**: Score 4 (e.g., "wonderful", "carefully")
- **11+ letters**: Score 5 (e.g., "magnificent", "unfortunately")

#### 2. Syllable Count (35% weight)
- **1 syllable**: Score 1 (e.g., "run", "big")
- **2 syllables**: Score 2 (e.g., "ap-ple", "hap-py")
- **3 syllables**: Score 3 (e.g., "beau-ti-ful")
- **4+ syllables**: Score 4-5 (e.g., "mag-nif-i-cent")

#### 3. Part of Speech (15% weight)
- **Easier**: Nouns, Verbs (Score 1-2)
  - Concrete, easy to visualize
- **Moderate**: Adjectives, Prepositions (Score 2-3)
  - Descriptive, some abstraction
- **Harder**: Adverbs, Conjunctions (Score 3-4)
  - More abstract, complex usage

#### 4. Abstractness (10% weight)
- **Concrete** (Score 1-2): Physical objects, actions
  - Tags: food, animal, color, action, sport
- **Semi-Abstract** (Score 3): Qualities, states
  - Tags: emotion, quality, state
- **Abstract** (Score 4-5): Concepts, ideas
  - Tags: concept, abstract, philosophical

### Manual Adjustment Guidelines

If the auto-calculated difficulty seems incorrect:

1. **Check word frequency**: Very common words should be level 1-2
2. **Consider learning context**: Words taught early should be easier
3. **Evaluate abstractness**: Can it be easily visualized?
4. **Compare with similar words**: Maintain consistency

**Example Adjustments**:
- "love" (4 letters, 1 syllable) → Auto: 1, Manual: 2 (abstract concept)
- "the" (3 letters, 1 syllable) → Auto: 1, Keep: 1 (most common word)
- "although" (8 letters, 2 syllables) → Auto: 3, Manual: 3 (correct)

---

## SVG Pictogram Requirements

### Technical Requirements

#### SVG Structure
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- SVG content here -->
</svg>
```

**Required Attributes**:
- `xmlns="http://www.w3.org/2000/svg"` - XML namespace
- `viewBox="0 0 200 200"` - Coordinate system (recommended: 200x200)
- `width="200"` and `height="200"` - Default dimensions

#### Style Guidelines

1. **Simplicity**: Keep designs simple and recognizable
   - Avoid excessive detail
   - Use basic shapes (circles, rectangles, paths)
   - Limit to 2-3 main elements

2. **Color Palette**:
   - **Primary**: `#6366f1` (purple-blue)
   - **Accent**: `#a855f7` (purple)
   - **Neutral**: `#94a3b8` (gray)
   - **Highlight**: `#818cf8` (light blue)
   - Use 2-3 colors maximum

3. **Stroke and Fill**:
   - Stroke width: 2-4px for main elements
   - Use both fill and stroke for depth
   - Consistent stroke-linecap: "round" or "square"

4. **Composition**:
   - Center the main element
   - Leave 10-20px padding from edges
   - Use symmetry when appropriate
   - Ensure recognizability at small sizes (50x50px)

### Design Principles

#### Visual Association
The pictogram should create a strong visual link to the word's meaning:

- **Nouns**: Depict the object directly
  - "apple" → apple shape
  - "house" → house outline
  
- **Verbs**: Show the action or its result
  - "run" → running figure
  - "eat" → mouth with food
  
- **Adjectives**: Visualize the quality
  - "big" → large object vs small object
  - "happy" → smiling face
  
- **Abstract Words**: Use metaphors or symbols
  - "love" → heart shape
  - "time" → clock or hourglass

#### Examples

**Good Pictogram** (apple):
```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <!-- Apple body -->
    <circle cx="100" cy="110" r="60" fill="#ef4444" stroke="#dc2626" stroke-width="3"/>
    <!-- Leaf -->
    <ellipse cx="110" cy="45" rx="15" ry="25" fill="#22c55e" stroke="#16a34a" stroke-width="2"/>
    <!-- Stem -->
    <rect x="95" y="40" width="10" height="20" fill="#78350f" rx="2"/>
</svg>
```

**Characteristics**:
- Simple, recognizable shape
- Limited color palette (red, green, brown)
- Clear visual association with "apple"
- Scales well to small sizes

---

## Adding Words to words.js

### Step-by-Step Process

#### 1. Prepare the Word Object

Create a complete word object with all required fields:

```javascript
const newWord = {
    word: "butterfly",
    phonetic: "[ˈbʌtərflaɪ]",
    meaning: "n. 蝴蝶",
    example: "A colorful butterfly landed on the flower.",
    exampleCn: "一只色彩斑斓的蝴蝶落在花上。",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        <!-- SVG content -->
    </svg>`,
    category: "noun",
    difficulty: 2,
    tags: ["animal", "insect", "nature"]
};
```

#### 2. Find Insertion Point

Words in `words.js` are stored in **alphabetical order** (case-insensitive).

```javascript
// Find where "butterfly" should go
// ... "button", "buy", "butterfly" should go here, "by", "cake" ...
```

#### 3. Insert the Word

Open `words.js` and insert the new word object in the correct alphabetical position:

```javascript
const words = [
    // ... existing words ...
    {
        word: "button",
        // ... button data ...
    },
    {
        word: "butterfly",  // ← Insert here
        phonetic: "[ˈbʌtərflaɪ]",
        meaning: "n. 蝴蝶",
        example: "A colorful butterfly landed on the flower.",
        exampleCn: "一只色彩斑斓的蝴蝶落在花上。",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
            <!-- SVG content -->
        </svg>`,
        category: "noun",
        difficulty: 2,
        tags: ["animal", "insect", "nature"]
    },
    {
        word: "buy",
        // ... buy data ...
    },
    // ... more words ...
];
```

#### 4. Validate Syntax

Ensure the JavaScript syntax is correct:
- Comma after each object (except the last one)
- Proper string escaping (use backticks for multi-line SVG)
- Matching brackets and braces

#### 5. Test Loading

Open `index.html` in a browser and check the console:
```
✅ 已加载 977 个系统单词  // Should increment by 1
```

---

## Testing New Words

### Validation Checklist

Before committing new words, verify:

#### ✅ Data Integrity
- [ ] All required fields are present
- [ ] `word` is unique (no duplicates)
- [ ] `phonetic` uses valid IPA notation
- [ ] `meaning` includes part of speech prefix
- [ ] `example` is a complete sentence
- [ ] `exampleCn` accurately translates example
- [ ] `svg` contains valid SVG markup

#### ✅ Visual Quality
- [ ] SVG displays correctly in browser
- [ ] Pictogram is recognizable at 50x50px
- [ ] Colors match app theme
- [ ] Design is simple and clear
- [ ] Visual association with word is strong

#### ✅ Functionality
- [ ] Word appears in Word Plaza
- [ ] Card flips correctly
- [ ] TTS pronunciation works
- [ ] Difficulty filter includes the word
- [ ] Search finds the word
- [ ] Can mark as learned

#### ✅ Alphabetical Order
- [ ] Word is in correct alphabetical position
- [ ] No sorting errors introduced

### Testing Procedure

1. **Load Test**:
   ```bash
   # Open index.html in browser
   # Check console for word count
   ```

2. **Visual Test**:
   - Navigate to Word Plaza
   - Search for the new word
   - Verify card displays correctly
   - Check SVG rendering

3. **Interaction Test**:
   - Click card to flip
   - Test TTS buttons
   - Mark as learned
   - Verify in My Library

4. **Filter Test**:
   - Apply difficulty filter
   - Verify word appears in correct level
   - Test search functionality

5. **Cross-Browser Test**:
   - Test in Chrome, Firefox, Safari, Edge
   - Verify consistent rendering

### Common Issues and Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| Word doesn't appear | Syntax error in words.js | Check console for errors, validate JSON |
| SVG not displaying | Invalid SVG markup | Validate SVG with online validator |
| Wrong difficulty | Auto-calculation off | Manually adjust difficulty value |
| Card layout broken | Missing required field | Add all required fields |
| TTS not working | Special characters in word | Use standard English characters |

---

## Using AI for Word Generation

### Built-in AI Auto-Complete

The app includes built-in AI integration for generating word data:

1. Click the ➕ button in header
2. Select "Single Word" tab
3. Enter the English word
4. Click "AI Auto-Complete" button
5. Review and edit generated data
6. Click "Add Word" to save

**AI Provider**: Pollinations (free, no API key required)

### External AI Services

For better quality or bulk generation, use external AI services with the provided prompt template.

#### Recommended Services

| Service | Quality | Speed | Cost | Best For |
|---------|---------|-------|------|----------|
| ChatGPT (GPT-4) | Excellent | Fast | Paid | High-quality single words |
| Claude (Anthropic) | Excellent | Fast | Paid | Bulk generation |
| DeepSeek | Good | Fast | Cheap | Cost-effective bulk |
| Gemini (Google) | Good | Fast | Free tier | Free alternative |

#### AI Prompt Template

See `ai-word-generation-prompt.md` for the complete prompt template.

**Quick Template**:

```
Generate a complete word object for the English word "[WORD]" following this structure:

{
    word: "[word in lowercase]",
    phonetic: "[IPA pronunciation]",
    meaning: "[part of speech]. [Chinese translation]",
    example: "[English example sentence]",
    exampleCn: "[Chinese translation of example]",
    svg: "[SVG pictogram markup]",
    category: "[auto-detected category]",
    difficulty: [1-5],
    tags: ["tag1", "tag2", "tag3"]
}

Requirements:
- Use IPA notation for phonetic
- Keep example sentence simple (10-20 words)
- SVG should be 200x200 viewBox, simple design, 2-3 colors
- Difficulty based on word length, syllables, and abstractness
- Tags should be descriptive and relevant

Generate the complete object for: [YOUR_WORD]
```

#### Workflow

1. **Prepare word list**: Create a list of words to add
2. **Generate with AI**: Use the prompt template for each word
3. **Review output**: Check all fields for accuracy
4. **Validate SVG**: Test SVG rendering in browser
5. **Adjust difficulty**: Verify difficulty assignment
6. **Add to words.js**: Insert in alphabetical order
7. **Test**: Follow testing procedure above

---

## Best Practices

### Word Selection

✅ **Do**:
- Choose common, useful words
- Prioritize high-frequency vocabulary
- Include diverse word types (nouns, verbs, adjectives)
- Consider learner level (beginner to advanced)
- Select words that can be visualized

❌ **Don't**:
- Add obscure or rarely-used words
- Include offensive or inappropriate words
- Add words that are too similar (synonyms)
- Choose words that can't be visualized

### SVG Creation

✅ **Do**:
- Keep designs simple and iconic
- Use consistent color palette
- Test at multiple sizes
- Optimize SVG code (remove unnecessary elements)
- Use semantic shapes (circles, rectangles, paths)

❌ **Don't**:
- Create overly complex designs
- Use too many colors (limit to 2-3)
- Include text in SVG (use shapes only)
- Use raster images or external resources
- Make designs too detailed

### Quality Control

✅ **Do**:
- Double-check all required fields
- Verify IPA pronunciation accuracy
- Test in multiple browsers
- Maintain alphabetical order
- Review difficulty assignment
- Get feedback from users

❌ **Don't**:
- Skip validation steps
- Assume auto-generated data is perfect
- Add words without testing
- Break alphabetical order
- Ignore user feedback

### Batch Addition

When adding multiple words:

1. **Plan ahead**: Create a spreadsheet with all word data
2. **Generate in batches**: Use AI for 10-20 words at a time
3. **Review systematically**: Check each word thoroughly
4. **Test incrementally**: Add and test in small batches (5-10 words)
5. **Commit frequently**: Make git commits after each batch
6. **Document changes**: Note what words were added in commit messages

---

## Resources

### Pronunciation
- [Cambridge Dictionary](https://dictionary.cambridge.org/) - IPA pronunciation
- [Merriam-Webster](https://www.merriam-webster.com/) - American pronunciation
- [Forvo](https://forvo.com/) - Native speaker pronunciations

### SVG Tools
- [SVG Editor (online)](https://svg-edit.github.io/svgedit/) - Create SVGs in browser
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Optimize SVG files
- [SVG Path Visualizer](https://svg-path-visualizer.netlify.app/) - Debug SVG paths

### Word Frequency
- [COCA (Corpus of Contemporary American English)](https://www.english-corpora.org/coca/)
- [Oxford 3000](https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000)
- [CEFR Vocabulary](https://www.englishprofile.org/wordlists)

### AI Services
- [ChatGPT](https://chat.openai.com/) - GPT-4 for word generation
- [Claude](https://claude.ai/) - Anthropic's AI assistant
- [DeepSeek](https://www.deepseek.com/) - Cost-effective alternative
- [Pollinations](https://pollinations.ai/) - Free image generation

---

## Support

Need help adding words? 

- **Issues**: [GitHub Issues](https://github.com/iamafeng/pictographicEnglish/issues)
- **Discussions**: [GitHub Discussions](https://github.com/iamafeng/pictographicEnglish/discussions)
- **Documentation**: See other docs in the repository

---

**Happy word adding! 🎉**
