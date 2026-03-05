// ========================================
// Test New Difficulty Algorithm
// 测试新难度算法
// ========================================

const fs = require('fs');
const path = require('path');
const ImprovedDifficultyAlgorithm = require('./improved-difficulty-algorithm.js');

// Read words.js
const wordsFilePath = path.join(__dirname, '..', 'words.js');
const wordsFileContent = fs.readFileSync(wordsFilePath, 'utf-8');
const wordsArrayMatch = wordsFileContent.match(/const words = (\[[\s\S]*?\]);/);
const words = eval(wordsArrayMatch[1]);

console.log('========================================');
console.log('Testing New Difficulty Algorithm');
console.log('测试新难度算法');
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
    { word: 'book', category: 'noun', tags: ['object', 'study'] }
];

console.log('📝 Sample Word Tests:\n');
sampleWords.forEach(({ word, category, tags }) => {
    const oldDifficulty = words.find(w => w.word === word)?.difficulty || 'N/A';
    const newDifficulty = ImprovedDifficultyAlgorithm.calculateDifficulty(word, category, tags);
    const syllables = ImprovedDifficultyAlgorithm.countSyllables(word);
    const freqScore = ImprovedDifficultyAlgorithm.getFrequencyScore(word);
    
    console.log(`${word.padEnd(15)} | Old: ${oldDifficulty} → New: ${newDifficulty} | Syllables: ${syllables} | Freq: ${freqScore}`);
});

// Calculate new distribution for all words
console.log('\n========================================');
console.log('📊 New Distribution Prediction');
console.log('📊 新分布预测');
console.log('========================================\n');

const newDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const oldDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const changes = [];

words.forEach(word => {
    const oldDiff = word.difficulty || 2;
    const newDiff = ImprovedDifficultyAlgorithm.calculateDifficulty(
        word.word,
        word.category || 'other',
        word.tags || []
    );
    
    oldDistribution[oldDiff]++;
    newDistribution[newDiff]++;
    
    const change = Math.abs(newDiff - oldDiff);
    if (change >= 2) {
        changes.push({
            word: word.word,
            old: oldDiff,
            new: newDiff,
            change: change
        });
    }
});

console.log('Old Distribution vs New Distribution:\n');
for (let level = 1; level <= 5; level++) {
    const oldCount = oldDistribution[level];
    const newCount = newDistribution[level];
    const oldPct = ((oldCount / words.length) * 100).toFixed(1);
    const newPct = ((newCount / words.length) * 100).toFixed(1);
    const oldBar = '█'.repeat(Math.floor(oldPct / 2));
    const newBar = '█'.repeat(Math.floor(newPct / 2));
    
    console.log(`Level ${level}:`);
    console.log(`  Old: ${oldCount.toString().padStart(4)} (${oldPct.padStart(5)}%) ${oldBar}`);
    console.log(`  New: ${newCount.toString().padStart(4)} (${newPct.padStart(5)}%) ${newBar}`);
    console.log('');
}

// Show words with large changes
console.log('========================================');
console.log(`⚠️  Words with difficulty change ≥2 levels: ${changes.length}`);
console.log('========================================\n');

if (changes.length > 0) {
    changes.sort((a, b) => b.change - a.change);
    console.log('Top 20 largest changes:\n');
    changes.slice(0, 20).forEach(({ word, old, new: newDiff, change }) => {
        const arrow = newDiff > old ? '↑' : '↓';
        console.log(`  ${word.padEnd(20)} ${old} → ${newDiff} (${arrow}${change})`);
    });
}

console.log('\n========================================');
console.log('✅ Test Complete');
console.log('========================================');
