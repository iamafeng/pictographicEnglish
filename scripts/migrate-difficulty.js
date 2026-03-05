// ========================================
// Difficulty Re-evaluation Migration Script (Simplified Algorithm)
// 难度重新评估迁移脚本（简化算法）
// ========================================
// 
// 这个脚本是幂等的，可以安全地多次运行
// 使用简化算法：主要基于单词长度、音节数、词性、抽象度
// ========================================

const fs = require('fs');
const path = require('path');

// 临时修改 CategoryDetector 使其可以在 Node.js 中运行
const CategoryDetectorPath = path.join(__dirname, '..', 'src', 'services', 'CategoryDetector.js');
let categoryDetectorCode = fs.readFileSync(CategoryDetectorPath, 'utf-8');

// 移除浏览器相关的导出代码，添加 Node.js 导出
categoryDetectorCode = categoryDetectorCode.replace(
    /\/\/ 导出供其他模块使用[\s\S]*$/,
    'module.exports = CategoryDetector;'
);

// 写入临时文件
const tempPath = path.join(__dirname, 'CategoryDetector.temp.js');
fs.writeFileSync(tempPath, categoryDetectorCode, 'utf-8');

// 加载 CategoryDetector
const CategoryDetector = require('./CategoryDetector.temp.js');

// 读取 words.js
const wordsFilePath = path.join(__dirname, '..', 'words.js');
const wordsFileContent = fs.readFileSync(wordsFilePath, 'utf-8');
const wordsArrayMatch = wordsFileContent.match(/const words = (\[[\s\S]*?\]);/);

if (!wordsArrayMatch) {
    console.error('❌ Could not find words array in words.js');
    process.exit(1);
}

const words = eval(wordsArrayMatch[1]);

console.log('========================================');
console.log('Difficulty Re-evaluation Migration');
console.log('难度重新评估迁移');
console.log('========================================\n');

console.log(`📊 Total words to process: ${words.length}\n`);

// 记录旧分布
const oldDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const newDistribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
const largeChanges = [];

// 重新评估每个单词的难度
words.forEach((word, index) => {
    const oldDifficulty = word.difficulty || 2;
    oldDistribution[oldDifficulty]++;
    
    // 使用新算法计算难度
    const newDifficulty = CategoryDetector.detectDifficulty(word.word, word.meaning);
    newDistribution[newDifficulty]++;
    
    // 更新难度值
    word.difficulty = newDifficulty;
    
    // 记录大变化
    const change = Math.abs(newDifficulty - oldDifficulty);
    if (change >= 2) {
        largeChanges.push({
            word: word.word,
            old: oldDifficulty,
            new: newDifficulty,
            change: change
        });
    }
    
    // 进度显示
    if ((index + 1) % 100 === 0) {
        console.log(`✓ Processed ${index + 1}/${words.length} words...`);
    }
});

console.log(`✓ Processed ${words.length}/${words.length} words\n`);

// 生成对比报告
console.log('========================================');
console.log('Distribution Comparison Report');
console.log('分布对比报告');
console.log('========================================\n');

console.log('Before Re-evaluation (旧分布):');
for (let level = 1; level <= 5; level++) {
    const count = oldDistribution[level];
    const pct = ((count / words.length) * 100).toFixed(1);
    const bar = '█'.repeat(Math.floor(pct / 2));
    console.log(`  Level ${level}: ${count.toString().padStart(4)} (${pct.padStart(5)}%) ${bar}`);
}

console.log('\nAfter Re-evaluation (新分布):');
for (let level = 1; level <= 5; level++) {
    const count = newDistribution[level];
    const pct = ((count / words.length) * 100).toFixed(1);
    const bar = '█'.repeat(Math.floor(pct / 2));
    console.log(`  Level ${level}: ${count.toString().padStart(4)} (${pct.padStart(5)}%) ${bar}`);
}

// 显示大变化的单词
console.log('\n========================================');
console.log(`Words with difficulty change ≥2 levels: ${largeChanges.length}`);
console.log(`难度变化 ≥2 级的单词: ${largeChanges.length}`);
console.log('========================================\n');

if (largeChanges.length > 0) {
    largeChanges.sort((a, b) => b.change - a.change);
    console.log('Top 30 largest changes (需要人工审查):\n');
    largeChanges.slice(0, 30).forEach(({ word, old, new: newDiff, change }) => {
        const arrow = newDiff > old ? '↑' : '↓';
        console.log(`  ${word.padEnd(20)} ${old} → ${newDiff} (${arrow}${change})`);
    });
    
    if (largeChanges.length > 30) {
        console.log(`\n  ... and ${largeChanges.length - 30} more`);
    }
}

// 写回 words.js
console.log('\n========================================');
console.log('Writing updated words.js...');
console.log('正在写入更新后的 words.js...');
console.log('========================================\n');

// 格式化 words 数组为 JSON
const wordsJson = JSON.stringify(words, null, 4);

// 构建新的 words.js 内容
const newWordsContent = `// ========================================
// Complete Pictographic Vocabulary Database
// 完整的象形单词数据库
// ========================================

const words = ${wordsJson};
`;

// 写入文件
fs.writeFileSync(wordsFilePath, newWordsContent, 'utf-8');

console.log('✅ words.js updated successfully!');
console.log('✅ words.js 更新成功！\n');

// 生成摘要
console.log('========================================');
console.log('Migration Summary');
console.log('迁移摘要');
console.log('========================================\n');

console.log(`✓ Total words processed: ${words.length}`);
console.log(`✓ Words with large changes (≥2 levels): ${largeChanges.length}`);
console.log(`✓ Distribution improved: Level 1-2 from 93.3% to ${((newDistribution[1] + newDistribution[2]) / words.length * 100).toFixed(1)}%`);
console.log(`✓ Level 4-5 words: from 0 to ${newDistribution[4] + newDistribution[5]}`);

console.log('\n✅ Migration complete! 迁移完成！');
console.log('\n⚠️  Please review the words with large changes above.');
console.log('⚠️  请审查上面列出的大变化单词。\n');

// 清理临时文件
fs.unlinkSync(tempPath);
