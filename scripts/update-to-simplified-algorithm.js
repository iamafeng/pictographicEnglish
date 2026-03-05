// ========================================
// Update CategoryDetector to Simplified Algorithm
// 更新 CategoryDetector 使用简化算法
// ========================================

const fs = require('fs');
const path = require('path');

const categoryDetectorPath = path.join(__dirname, '..', 'src', 'services', 'CategoryDetector.js');

// Read current CategoryDetector
let content = fs.readFileSync(categoryDetectorPath, 'utf-8');

// Find and replace the detectDifficulty method
const methodStart = content.indexOf('        /**\n         * 改进的难度评估算法');
const methodEnd = content.indexOf('    /**\n     * 自动完善单词数据');

if (methodStart === -1 || methodEnd === -1) {
    console.error('❌ Could not find detectDifficulty method');
    process.exit(1);
}

// Extract everything before and after the method
const before = content.substring(0, methodStart);
const after = content.substring(methodEnd);

// Create new simplified method
const newMethod = `        /**
         * 简化的难度评估算法（适合常用词汇库）
         * 主要基于：单词长度(40%)、音节数(35%)、词性(15%)、抽象度(10%)
         * @param {string} word - 单词
         * @param {string} meaning - 含义
         * @returns {number} - 难度等级 1-5
         */
        static detectDifficulty(word, meaning) {
            const wordLower = word.toLowerCase();

            // 自动检测 category 和 tags
            const category = this.detectCategory(meaning, word);
            const tags = this.detectTags(word, meaning);

            let score = 1.0; // 基础分从1开始

            // 1. 单词长度（40% 权重）- 最直观的难度指标
            const length = wordLower.length;
            if (length <= 3) score += 0;           // 很短：go, run, eat
            else if (length <= 5) score += 0.8;    // 短：make, think, book
            else if (length <= 7) score += 1.6;    // 中等：through, window
            else if (length <= 9) score += 2.4;    // 较长：beautiful, important
            else score += 3.2;                     // 很长：responsibility

            // 2. 音节数（35% 权重）- 发音复杂度
            const syllableCount = this.countSyllables(wordLower);
            if (syllableCount === 1) score += 0;       // 单音节
            else if (syllableCount === 2) score += 0.7; // 双音节
            else if (syllableCount === 3) score += 1.4; // 三音节
            else score += 2.1;                          // 四音节及以上

            // 3. 词性（15% 权重）- 语法复杂度
            const categoryScore = this.getCategoryDifficultyScore(category);
            score += categoryScore * 0.6;  // -0.6 to +0.6

            // 4. 抽象度（10% 权重）- 概念复杂度
            const abstractnessScore = this.getAbstractnessScore(tags);
            score += abstractnessScore * 0.4;  // -0.4 to +0.4

            // 映射到 1-5 范围
            let difficulty = Math.round(score);
            difficulty = Math.max(1, Math.min(5, difficulty));

            return difficulty;
        }

`;

// Combine
const newContent = before + newMethod + '\n' + after;

// Write back
fs.writeFileSync(categoryDetectorPath, newContent, 'utf-8');

console.log('✅ CategoryDetector.js updated to simplified algorithm!');
console.log('✅ CategoryDetector.js 已更新为简化算法！');
