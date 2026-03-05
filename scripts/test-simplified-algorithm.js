// ========================================
// Test Simplified Difficulty Algorithm
// 测试简化难度算法
// ========================================

const fs = require('fs');
const path = require('path');
const SimplifiedAlgorithm = require('./simplified-difficulty-algorithm.js');

// Read words.js
const wordsFilePath = path.join(__dirname, '..', 'words.js');
const wordsFileContent = fs.readFileSync(wordsFilePath, 'utf-8');
const wordsArrayMatch = wordsFileContent.match(/const words = (\[[\s\S]*?\]);/);
const words = eval(wordsArrayMatch[1]);

console.log('========================================');
console.log('Testing Simplified Difficulty Algorithm');
console.log('测试简化难度算法');
console.log('========================================\n');

// Test on sample words
const sampleWords = [
    { word: 'go', category: 'verb', tags: ['action', 'movement'] },
    { word: 'take', category: 'verb', tags: ['action'] },
    { word: 'think', category: 'verb', tags: ['mental', 'thought'] },
    { word: 'through', category: 'preposition', tags: ['position', 'movement'] },
    { word: 'being', category: 'noun', tags: ['abstract'] },
    { word: 'community', category: 'noun', tags: ['abstract'] },
    { word: 'challenge', category: 'noun', tags: ['abstract'] },
    { word: 'red', category: 'adjective', tags: ['color'] },
    { word: 'book', category: 'noun', tags: ['object', 'study'] },
    { word: 'basketball', category: 'noun', tags: ['sport', 'object'] },
    { word: 'responsibility', category: 'noun', tags: ['abstract'] }
];

console.log('📝 Sample Word Tests:\n');
sampleWords.forEach(({ word, category, tags }) => {
    const currentDifficulty = words.find(w => w.word === word)?.difficulty || 'N/A';
    const newDifficulty = SimplifiedAlgorithm.calculateDifficulty(word, category, tags);
    const syllables = SimplifiedAlgorithm.countSyllables(word);
    const length = word.length;
    
    console.log(`${word.padEnd(18)} | Current: ${currentDifficulty} → New: ${newDifficulty} | Len: ${length.toString().padStart(2)} | Syl: ${syllables}`);
});

// Calculate new distribution for all words
console.log('\n========================================');
console.log('📊 New Distribution Prediction');
console.log('📊 新分布预测');
console.log('========================================\n');

const newDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const currentDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const changes = [];

words.forEach(word => {
    const currentDiff = word.difficulty || 2;
    const newDiff = SimplifiedAlgorithm.calculateDifficulty(
        word.word,
        word.category || 'other',
        word.tags || []
    );
    
    currentDistribution[currentDiff]++;
    newDistribution[newDiff]++;
    
    const change = Math.abs(newDiff - currentDiff);
    if (change >= 2) {
        changes.push({
            word: word.word,
            current: currentDiff,
            new: newDiff,
            change: change
        });
    }
});

console.log('Current Distribution vs New Distribution:\n');
for (let level = 1; level <= 5; level++) {
    const currentCount = currentDistribution[level];
    const newCount = newDistribution[level];
    const currentPct = ((currentCount / words.length) * 100).toFixed(1);
    const newPct = ((newCount / words.length) * 100).toFixed(1);
    const currentBar = '█'.repeat(Math.floor(currentPct / 2));
    const newBar = '█'.repeat(Math.floor(newPct / 2));
    
    console.log(`Level ${level}:`);
    console.log(`  Current: ${currentCount.toString().padStart(4)} (${currentPct.padStart(5)}%) ${currentBar}`);
    console.log(`  New:     ${newCount.toString().padStart(4)} (${newPct.padStart(5)}%) ${newBar}`);
    console.log('');
}

// Show words with large changes
console.log('========================================');
console.log(`⚠️  Words with difficulty change ≥2 levels: ${changes.length}`);
console.log('========================================\n');

if (changes.length > 0) {
    changes.sort((a, b) => b.change - a.change);
    console.log('Top 20 largest changes:\n');
    changes.slice(0, 20).forEach(({ word, current, new: newDiff, change }) => {
        const arrow = newDiff > current ? '↑' : '↓';
        console.log(`  ${word.padEnd(20)} ${current} → ${newDiff} (${arrow}${change})`);
    });
}

console.log('\n========================================');
console.log('✅ Test Complete');
console.log('========================================');
