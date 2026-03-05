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
            return 0; // adjective, pronoun, number, other
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
         * 判断是否为高频词
         * @param {string} word - 单词
         * @returns {boolean}
         */
        static isHighFrequencyWord(word) {
            const wordLower = word.toLowerCase();
            // 高频基础词汇 (CEFR A1-A2 level 核心词汇)
            const highFreqWords = new Set([
                'a', 'about', 'all', 'also', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been',
                'but', 'by', 'can', 'come', 'could', 'day', 'do', 'even', 'find', 'first', 'for',
                'from', 'get', 'give', 'go', 'have', 'he', 'her', 'here', 'him', 'his', 'how', 'I',
                'if', 'in', 'into', 'is', 'it', 'its', 'just', 'know', 'like', 'look', 'make', 'man',
                'many', 'me', 'more', 'my', 'new', 'no', 'not', 'now', 'of', 'on', 'one', 'only', 'or',
                'other', 'our', 'out', 'over', 'people', 'say', 'see', 'she', 'so', 'some', 'take',
                'tell', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they',
                'thing', 'think', 'this', 'time', 'to', 'two', 'up', 'use', 'very', 'want', 'way',
                'we', 'well', 'what', 'when', 'which', 'who', 'will', 'with', 'would', 'year', 'you',
                'your', 'eat', 'drink', 'sleep', 'read', 'write', 'run', 'walk', 'jump', 'fly', 'swim',
                'open', 'close', 'big', 'small', 'good', 'bad', 'hot', 'cold', 'yes', 'no', 'please',
                'thank', 'hello', 'goodbye', 'sorry', 'help', 'stop', 'start', 'end', 'begin', 'finish',
                'red', 'blue', 'green', 'yellow', 'black', 'white', 'color', 'number', 'name', 'place',
                'book', 'pen', 'paper', 'table', 'chair', 'door', 'window', 'house', 'room', 'school',
                'teacher', 'student', 'friend', 'family', 'mother', 'father', 'brother', 'sister',
                'boy', 'girl', 'man', 'woman', 'child', 'baby', 'dog', 'cat', 'bird', 'fish', 'tree',
                'flower', 'water', 'food', 'bread', 'milk', 'tea', 'coffee', 'apple', 'orange', 'egg',
                'left', 'right', 'up', 'down', 'in', 'out', 'on', 'off', 'under', 'over', 'near', 'far',
                'here', 'there', 'where', 'when', 'why', 'how', 'who', 'what', 'which', 'today',
                'tomorrow', 'yesterday', 'morning', 'afternoon', 'evening', 'night', 'day', 'week',
                'month', 'year', 'hour', 'minute', 'second', 'clock', 'watch', 'calendar'
            ]);
            return highFreqWords.has(wordLower);
        }

        /**
         * 判断是否为中频词
         * @param {string} word - 单词
         * @returns {boolean}
         */
        static isMediumFrequencyWord(word) {
            const wordLower = word.toLowerCase();
            // 中频词汇 (CEFR B1 level 部分常用词)
            const mediumFreqWords = new Set([
                'able', 'above', 'accept', 'across', 'act', 'action', 'activity', 'actually', 'add',
                'address', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'age', 'agency',
                'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'allow', 'almost', 'alone',
                'along', 'already', 'although', 'always', 'among', 'amount', 'analysis', 'animal',
                'another', 'answer', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area',
                'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'ask', 'assume',
                'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid',
                'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'beat',
                'beautiful', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe',
                'benefit', 'best', 'better', 'between', 'beyond', 'bill', 'billion', 'bit', 'blood',
                'board', 'body', 'both', 'box', 'break', 'bring', 'build', 'building', 'business',
                'buy', 'call', 'camera', 'campaign', 'cancer', 'candidate', 'capital', 'car', 'card',
                'care', 'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central',
                'century', 'certain', 'certainly', 'chair', 'challenge', 'chance', 'change', 'character',
                'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil',
                'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college',
                'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition',
                'conference', 'Congress', 'consider', 'consumer', 'contain', 'continue', 'control',
                'cost', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural',
                'culture', 'cup', 'current', 'customer', 'cut', 'dark', 'data', 'daughter', 'dead',
                'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree',
                'Democrat', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine',
                'develop', 'development', 'die', 'difference', 'different', 'difficult', 'dinner',
                'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'doctor',
                'dog', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each',
                'early', 'east', 'easy', 'economic', 'economy', 'edge', 'education', 'effect', 'effort',
                'eight', 'either', 'election', 'else', 'employee', 'energy', 'enjoy', 'enough', 'enter',
                'entire', 'environment', 'environmental', 'especially', 'establish', 'everybody',
                'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist',
                'expect', 'experience', 'expert', 'explain', 'eye', 'face', 'fact', 'factor', 'fail',
                'fall', 'family', 'far', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'few',
                'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'fine',
                'finger', 'finish', 'fire', 'firm', 'five', 'floor', 'fly', 'focus', 'follow', 'foot',
                'force', 'foreign', 'forget', 'form', 'former', 'forward', 'four', 'free', 'friend',
                'front', 'full', 'fund', 'future', 'game', 'garden', 'gas', 'general', 'generation',
                'girl', 'glass', 'goal', 'God', 'good', 'government', 'great', 'ground', 'group', 'grow',
                'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 'happy',
                'hard', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'high', 'history', 'hit',
                'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'however', 'huge', 'human',
                'hundred', 'husband', 'idea', 'identify', 'image', 'imagine', 'impact', 'important',
                'improve', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual',
                'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting',
                'international', 'interview', 'investment', 'involve', 'issue', 'item', 'itself', 'job',
                'join', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'land', 'language', 'large',
                'last', 'late', 'later', 'laugh', 'law', 'lawyer', 'lay', 'lead', 'leader', 'learn',
                'least', 'leave', 'leg', 'legal', 'less', 'let', 'letter', 'level', 'lie', 'life',
                'light', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'lose', 'loss',
                'lot', 'love', 'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority',
                'manage', 'management', 'manager', 'material', 'matter', 'may', 'maybe', 'mean',
                'measure', 'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention',
                'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute', 'miss',
                'mission', 'model', 'modern', 'moment', 'money', 'month', 'morning', 'most', 'mother',
                'mouth', 'move', 'movement', 'movie', 'much', 'music', 'must', 'myself', 'nation',
                'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network',
                'never', 'news', 'newspaper', 'next', 'nice', 'night', 'nine', 'none', 'nor', 'north',
                'note', 'nothing', 'notice', 'number', 'occur', 'off', 'offer', 'office', 'officer',
                'official', 'often', 'oil', 'old', 'once', 'onto', 'option', 'order', 'organization',
                'others', 'outside', 'own', 'owner', 'page', 'pain', 'painting', 'paper', 'parent',
                'part', 'participant', 'particular', 'particularly', 'partner', 'party', 'pass', 'past',
                'patient', 'pattern', 'pay', 'peace', 'per', 'perform', 'performance', 'perhaps',
                'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'plan',
                'plant', 'play', 'player', 'PM', 'point', 'police', 'policy', 'political', 'politics',
                'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice',
                'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private',
                'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional',
                'professor', 'program', 'project', 'property', 'protect', 'prove', 'provide', 'public',
                'pull', 'purpose', 'push', 'put', 'quality', 'question', 'quickly', 'quite', 'race',
                'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'ready', 'real', 'reality',
                'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record',
                'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain',
                'remember', 'remove', 'report', 'represent', 'Republican', 'require', 'research',
                'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal',
                'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'safe',
                'same', 'save', 'scene', 'school', 'science', 'scientist', 'score', 'sea', 'season',
                'seat', 'second', 'section', 'security', 'seek', 'seem', 'sell', 'send', 'senior',
                'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several', 'sex',
                'sexual', 'shake', 'share', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show',
                'side', 'sign', 'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single',
                'sister', 'sit', 'site', 'situation', 'six', 'size', 'skill', 'skin', 'small', 'smile',
                'social', 'society', 'soldier', 'somebody', 'someone', 'something', 'sometimes', 'son',
                'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak',
                'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand',
                'standard', 'star', 'state', 'statement', 'station', 'stay', 'step', 'still', 'stock',
                'store', 'story', 'strategy', 'street', 'strong', 'structure', 'stuff', 'style',
                'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer',
                'support', 'sure', 'surface', 'system', 'table', 'talk', 'task', 'tax', 'teach',
                'team', 'technology', 'television', 'ten', 'tend', 'term', 'test', 'than', 'thank',
                'themselves', 'theory', 'thing', 'third', 'though', 'thought', 'thousand', 'threat',
                'three', 'through', 'throughout', 'throw', 'thus', 'today', 'together', 'tonight',
                'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training',
                'travel', 'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth',
                'try', 'turn', 'TV', 'type', 'under', 'understand', 'unit', 'until', 'upon', 'usually',
                'value', 'various', 'victim', 'view', 'violence', 'visit', 'voice', 'vote', 'wait',
                'wall', 'war', 'watch', 'water', 'weapon', 'wear', 'week', 'weight', 'west', 'western',
                'whatever', 'whether', 'while', 'white', 'whole', 'whom', 'whose', 'wide', 'wife',
                'win', 'wind', 'window', 'wish', 'within', 'without', 'woman', 'wonder', 'word', 'work',
                'worker', 'world', 'worry', 'worth', 'write', 'writer', 'wrong', 'yard', 'yeah',
                'young', 'yourself'
            ]);
            return mediumFreqWords.has(wordLower);
        }

        /**
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
