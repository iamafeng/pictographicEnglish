// ========================================
// Category Detector Service
// 分类检测服务
// ========================================
// 
// 功能：
// 1. 自动检测单词的词性分类
// 2. 自动生成相关标签
// 3. 评估单词难度
// ========================================

class CategoryDetector {
    // 词性分类
    static CATEGORIES = {
        verb: "动词",
        noun: "名词",
        adjective: "形容词",
        adverb: "副词",
        preposition: "介词",
        pronoun: "代词",
        conjunction: "连词",
        interjection: "感叹词",
        number: "数词",
        other: "其他"
    };

    // 难度等级
    static DIFFICULTY_LEVELS = {
        1: "入门",  // 最基础的单词
        2: "初级",  // 常用单词
        3: "中级",  // 一般单词
        4: "高级",  // 较难单词
        5: "专业"   // 专业术语
    };

    // 常用标签
    static COMMON_TAGS = [
        "action", "movement", "direction", "position",
        "color", "shape", "size", "number",
        "food", "daily", "study", "sport",
        "nature", "water", "mental", "thought",
        "time", "age", "power", "abstract",
        "create", "logic", "object"
    ];

    /**
     * 检测单词的词性分类
     * @param {string} meaning - 单词含义
     * @param {string} word - 单词本身
     * @returns {string} - 词性分类
     */
    static detectCategory(meaning, word = '') {
        const meaningLower = meaning.toLowerCase();
        const wordLower = word.toLowerCase();

        // 动词检测
        if (meaningLower.includes('v.') || 
            meaningLower.match(/\b(做|去|来|吃|喝|跑|走|飞|游|睡|读|写|打开|关闭|想)\b/)) {
            return 'verb';
        }

        // 名词检测
        if (meaningLower.includes('n.') || 
            meaningLower.match(/\b(人|物|地方|东西|书|笔|杯|门|窗|椅|桌)\b/)) {
            return 'noun';
        }

        // 形容词检测
        if (meaningLower.includes('adj.') || 
            meaningLower.match(/\b(的|大|小|好|坏|高|矮|长|短|圆|方|红|蓝|绿|黑|白)\b/)) {
            return 'adjective';
        }

        // 副词检测
        if (meaningLower.includes('adv.') || 
            meaningLower.match(/\b(地|很|非常|向上|向下|离开)\b/)) {
            return 'adverb';
        }

        // 介词检测
        if (meaningLower.includes('prep.') || 
            meaningLower.match(/\b(在|从|到|向|里面|外面|上面|下面|之下|穿过)\b/)) {
            return 'preposition';
        }

        // 连词检测
        if (meaningLower.includes('conj.') || 
            meaningLower.match(/\b(虽然|可是|但是|和|或)\b/)) {
            return 'conjunction';
        }

        // 数词检测
        if (meaningLower.includes('num.') || 
            meaningLower.match(/\b(一|二|三|四|五|六|七|八|九|十)\b/) ||
            wordLower.match(/^(one|two|three|four|five|six|seven|eight|nine|ten)$/)) {
            return 'number';
        }

        // 默认
        return 'other';
    }

    /**
     * 检测单词的相关标签
     * @param {string} word - 单词
     * @param {string} meaning - 含义
     * @returns {string[]} - 标签数组
     */
    static detectTags(word, meaning) {
        const tags = [];
        const text = (word + ' ' + meaning).toLowerCase();

        // 动作相关
        if (text.match(/\b(run|walk|jump|go|come|move|make|take|跑|走|跳|动|做|拿)\b/)) {
            tags.push('action');
        }

        // 移动相关
        if (text.match(/\b(run|walk|jump|fly|swim|go|move|跑|走|跳|飞|游|移动)\b/)) {
            tags.push('movement');
        }

        // 方向相关
        if (text.match(/\b(up|down|left|right|back|away|上|下|左|右|后|离开)\b/)) {
            tags.push('direction');
        }

        // 位置相关
        if (text.match(/\b(in|out|on|off|under|through|position|位置|里|外|上|下)\b/)) {
            tags.push('position');
        }

        // 颜色相关
        if (text.match(/\b(red|blue|green|black|white|color|颜色|红|蓝|绿|黑|白)\b/)) {
            tags.push('color');
        }

        // 形状相关
        if (text.match(/\b(round|square|circle|line|shape|圆|方|形状|线)\b/)) {
            tags.push('shape');
        }

        // 大小相关
        if (text.match(/\b(big|small|tall|short|long|size|大|小|高|矮|长|短)\b/)) {
            tags.push('size');
        }

        // 数字相关
        if (text.match(/\b(one|two|three|number|数字|一|二|三)\b/)) {
            tags.push('number');
        }

        // 食物相关
        if (text.match(/\b(eat|drink|food|cup|吃|喝|食物|杯)\b/)) {
            tags.push('food');
        }

        // 日常相关
        if (text.match(/\b(sleep|door|window|chair|table|daily|睡|门|窗|椅|桌|日常)\b/)) {
            tags.push('daily');
        }

        // 学习相关
        if (text.match(/\b(read|write|book|pen|study|读|写|书|笔|学习)\b/)) {
            tags.push('study');
        }

        // 运动相关
        if (text.match(/\b(run|jump|swim|sport|跑|跳|游|运动)\b/)) {
            tags.push('sport');
        }

        // 自然相关
        if (text.match(/\b(fly|nature|bird|sky|自然|鸟|天空)\b/)) {
            tags.push('nature');
        }

        // 水相关
        if (text.match(/\b(swim|water|drink|well|游|水|喝|井)\b/)) {
            tags.push('water');
        }

        // 思维相关
        if (text.match(/\b(think|thought|mental|想|思想|思维)\b/)) {
            tags.push('mental', 'thought');
        }

        // 时间相关
        if (text.match(/\b(yet|time|时间|还|仍然)\b/)) {
            tags.push('time');
        }

        // 年龄相关
        if (text.match(/\b(young|age|年轻|年龄)\b/)) {
            tags.push('age');
        }

        // 力量相关
        if (text.match(/\b(might|power|strength|力量|强)\b/)) {
            tags.push('power');
        }

        // 抽象概念
        if (text.match(/\b(being|same|even|thought|abstract|存在|相同|平衡|抽象)\b/)) {
            tags.push('abstract');
        }

        // 创造相关
        if (text.match(/\b(make|create|做|制造|创造)\b/)) {
            tags.push('create');
        }

        // 逻辑相关
        if (text.match(/\b(though|logic|虽然|逻辑)\b/)) {
            tags.push('logic');
        }

        // 物品相关
        if (text.match(/\b(book|pen|cup|door|window|chair|table|object|书|笔|杯|门|窗|椅|桌|物品)\b/)) {
            tags.push('object');
        }

        // 去重
        return [...new Set(tags)];
    }

    /**
     * 评估单词难度
     * @param {string} word - 单词
     * @param {string} meaning - 含义
     * @returns {number} - 难度等级 1-5
     */
    static detectDifficulty(word, meaning) {
        const wordLower = word.toLowerCase();
        const meaningLower = meaning.toLowerCase();

        // 基础单词列表（难度1）
        const basicWords = [
            'go', 'run', 'walk', 'jump', 'fly', 'swim',
            'eat', 'drink', 'sleep', 'read', 'write',
            'up', 'down', 'left', 'right', 'in', 'out', 'on', 'off',
            'big', 'small', 'red', 'blue', 'green',
            'one', 'two', 'three',
            'book', 'pen', 'cup', 'door', 'chair', 'table'
        ];

        // 初级单词列表（难度2）
        const intermediateWords = [
            'make', 'take', 'open', 'close', 'think',
            'round', 'square', 'circle', 'line',
            'tall', 'short', 'long', 'black', 'white',
            'window', 'under', 'through', 'back', 'away',
            'even', 'same', 'thought', 'yet', 'though', 'young'
        ];

        // 高级单词列表（难度3+）
        const advancedWords = [
            'being', 'might', 'well'
        ];

        if (basicWords.includes(wordLower)) {
            return 1;
        } else if (intermediateWords.includes(wordLower)) {
            return 2;
        } else if (advancedWords.includes(wordLower)) {
            return 3;
        }

        // 根据单词长度和含义复杂度判断
        if (wordLower.length <= 4 && meaningLower.split('；').length === 1) {
            return 1;
        } else if (wordLower.length <= 6 && meaningLower.split('；').length <= 2) {
            return 2;
        } else if (wordLower.length <= 8) {
            return 3;
        } else {
            return 4;
        }
    }

    /**
     * 自动完善单词数据
     * @param {Object} wordData - 单词数据对象
     * @returns {Object} - 完善后的单词数据
     */
    static enrichWordData(wordData) {
        const enriched = { ...wordData };

        // 自动检测分类
        if (!enriched.category) {
            enriched.category = this.detectCategory(enriched.meaning, enriched.word);
        }

        // 自动检测标签
        if (!enriched.tags || enriched.tags.length === 0) {
            enriched.tags = this.detectTags(enriched.word, enriched.meaning);
        }

        // 自动检测难度
        if (!enriched.difficulty) {
            enriched.difficulty = this.detectDifficulty(enriched.word, enriched.meaning);
        }

        // 添加系统字段
        if (!enriched.custom) {
            enriched.custom = false;
        }
        if (!enriched.source) {
            enriched.source = 'system';
        }

        return enriched;
    }
}

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CategoryDetector;
}
