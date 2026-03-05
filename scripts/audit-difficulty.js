// ========================================
// Difficulty Distribution Audit Script
// 难度分布审计脚本
// ========================================

// Load words.js
const fs = require('fs');
const path = require('path');

// Read words.js file
const wordsFilePath = path.join(__dirname, '..', 'words.js');
const wordsFileContent = fs.readFileSync(wordsFilePath, 'utf-8');

// Extract words array using regex (safer than eval)
const wordsArrayMatch = wordsFileContent.match(/const words = (\[[\s\S]*?\]);/);
if (!wordsArrayMatch) {
    console.error('❌ Could not find words array in words.js');
    process.exit(1);
}

// Parse the words array
const words = eval(wordsArrayMatch[1]);

console.log('========================================');
console.log('Difficulty Distribution Audit Report');
console.log('难度分布审计报告');
console.log('========================================\n');

// Total word count
console.log(`📊 Total Words: ${words.length}`);
console.log(`📊 总单词数: ${words.length}\n`);

// Difficulty distribution
const difficultyDistribution = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    null: [],
    undefined: []
};

words.forEach(word => {
    const difficulty = word.difficulty;
    if (difficulty === null) {
        difficultyDistribution.null.push(word.word);
    } else if (difficulty === undefined) {
        difficultyDistribution.undefined.push(word.word);
    } else if (difficulty >= 1 && difficulty <= 5) {
        difficultyDistribution[difficulty].push(word.word);
    }
});

// Display distribution
console.log('📈 Difficulty Distribution:');
console.log('📈 难度分布:\n');

for (let level = 1; level <= 5; level++) {
    const count = difficultyDistribution[level].length;
    const percentage = ((count / words.length) * 100).toFixed(1);
    const bar = '█'.repeat(Math.floor(percentage / 2));
    console.log(`Level ${level}: ${count.toString().padStart(4)} words (${percentage.padStart(5)}%) ${bar}`);
}

// Missing difficulty values
const missingCount = difficultyDistribution.null.length + difficultyDistribution.undefined.length;
if (missingCount > 0) {
    console.log(`\n⚠️  Missing difficulty: ${missingCount} words`);
    console.log(`⚠️  缺少难度值: ${missingCount} 个单词\n`);
    
    if (difficultyDistribution.null.length > 0) {
        console.log(`Null difficulty (${difficultyDistribution.null.length}):`);
        console.log(difficultyDistribution.null.slice(0, 10).join(', '));
        if (difficultyDistribution.null.length > 10) {
            console.log(`... and ${difficultyDistribution.null.length - 10} more`);
        }
    }
    
    if (difficultyDistribution.undefined.length > 0) {
        console.log(`\nUndefined difficulty (${difficultyDistribution.undefined.length}):`);
        console.log(difficultyDistribution.undefined.slice(0, 10).join(', '));
        if (difficultyDistribution.undefined.length > 10) {
            console.log(`... and ${difficultyDistribution.undefined.length - 10} more`);
        }
    }
}

// Analysis
console.log('\n========================================');
console.log('📊 Analysis / 分析');
console.log('========================================\n');

const level1Percentage = (difficultyDistribution[1].length / words.length * 100).toFixed(1);
const level2Percentage = (difficultyDistribution[2].length / words.length * 100).toFixed(1);
const level12Combined = parseFloat(level1Percentage) + parseFloat(level2Percentage);

console.log(`✓ Level 1-2 concentration: ${level12Combined.toFixed(1)}%`);
console.log(`✓ Level 1-2 集中度: ${level12Combined.toFixed(1)}%`);

if (level12Combined > 80) {
    console.log('⚠️  WARNING: Over 80% of words are in levels 1-2');
    console.log('⚠️  警告: 超过 80% 的单词集中在 1-2 级');
}

const level45Combined = difficultyDistribution[4].length + difficultyDistribution[5].length;
console.log(`\n✓ Level 4-5 words: ${level45Combined} (${(level45Combined / words.length * 100).toFixed(1)}%)`);
console.log(`✓ Level 4-5 单词数: ${level45Combined} (${(level45Combined / words.length * 100).toFixed(1)}%)`);

if (level45Combined === 0) {
    console.log('⚠️  WARNING: No words in levels 4-5');
    console.log('⚠️  警告: 没有 4-5 级单词');
}

// Sample words from each level
console.log('\n========================================');
console.log('📝 Sample Words by Level / 各级别示例单词');
console.log('========================================\n');

for (let level = 1; level <= 5; level++) {
    const wordsAtLevel = difficultyDistribution[level];
    if (wordsAtLevel.length > 0) {
        console.log(`Level ${level} (${wordsAtLevel.length} words):`);
        console.log(`  ${wordsAtLevel.slice(0, 10).join(', ')}`);
        if (wordsAtLevel.length > 10) {
            console.log(`  ... and ${wordsAtLevel.length - 10} more`);
        }
        console.log('');
    }
}

console.log('========================================');
console.log('✅ Audit Complete / 审计完成');
console.log('========================================');
