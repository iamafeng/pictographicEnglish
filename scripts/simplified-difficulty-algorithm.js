// ========================================
// Simplified Difficulty Algorithm
// 简化的难度算法（适合常用词汇库）
// ========================================

/**
 * 简化的难度评估算法
 * 主要基于单词本身的客观特征，不依赖外部词频表
 * 适合常用词汇库（如当前的 976 个单词）
 */
class SimplifiedDifficultyAlgorithm {
    
    /**
     * 计算单词的音节数
     * @param {string} word - 单词
     * @returns {number} - 音节数
     */
    static countSyllables(word) {
        word = word.toLowerCase().trim();
        if (word.length <= 3) return 1;
        
        // 移除静音的 e
        word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
        word = word.replace(/^y/, '');
        
        // 计算元音组
        const syllables = word.match(/[aeiouy]{1,2}/g);
        return syllables ? syllables.length : 1;
    }

    /**
     * 根据词性计算难度分数
     * @param {string} category - 词性
     * @returns {number} - 难度分数 (-1, 0, +1)
     */
    static getCategoryDifficultyScore(category) {
        const easyCategories = ['noun', 'verb'];
        const hardCategories = ['adverb', 'conjunction', 'preposition'];
        
        if (easyCategories.includes(category)) return -1;
        if (hardCategories.includes(category)) return 1;
        return 0;
    }

    /**
     * 根据标签判断抽象度
     * @param {string[]} tags - 标签数组
     * @returns {number} - 抽象度分数 (-1 具体, +1 抽象)
     */
    static getAbstractnessScore(tags) {
        const concreteTags = ['object', 'color', 'shape', 'food', 'nature', 'animal'];
        const abstractTags = ['abstract', 'mental', 'thought', 'logic', 'power'];
        
        if (!tags || tags.length === 0) return 0;
        
        const hasConcrete = tags.some(tag => concreteTags.includes(tag));
        const hasAbstract = tags.some(tag => abstractTags.includes(tag));
        
        if (hasConcrete && !hasAbstract) return -1;
        if (hasAbstract && !hasConcrete) return 1;
        return 0;
    }

    /**
     * 简化的难度评估算法
     * 主要基于：单词长度(40%)、音节数(35%)、词性(15%)、抽象度(10%)
     * @param {string} word - 单词
     * @param {string} category - 词性
     * @param {string[]} tags - 标签
     * @returns {number} - 难度等级 1-5
     */
    static calculateDifficulty(word, category = 'other', tags = []) {
        let score = 1.0; // 基础分从1开始
        
        // 1. 单词长度（40% 权重）- 最直观的难度指标
        const length = word.length;
        if (length <= 3) score += 0;           // 很短：go, run, eat
        else if (length <= 5) score += 0.8;    // 短：make, think, book
        else if (length <= 7) score += 1.6;    // 中等：through, window
        else if (length <= 9) score += 2.4;    // 较长：beautiful, important
        else score += 3.2;                     // 很长：responsibility
        
        // 2. 音节数（35% 权重）- 发音复杂度
        const syllableCount = this.countSyllables(word);
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
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimplifiedDifficultyAlgorithm;
}
