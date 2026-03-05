// ========================================
// Improved Multi-Factor Difficulty Algorithm
// 改进的多因素难度算法
// ========================================

/**
 * 改进的难度评估算法
 * 基于多个因素：词频(40%)、音节数(25%)、词性(20%)、抽象度(10%)、单词长度(5%)
 */
class ImprovedDifficultyAlgorithm {
    
    // 高频基础词汇列表 (CEFR A1-A2 level, 前1000个最常用词)
    static HIGH_FREQUENCY_WORDS = new Set([
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

    // 中频词汇 (CEFR B1 level)
    static MEDIUM_FREQUENCY_WORDS = new Set([
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
     * 计算词频分数 (1-5)
     * @param {string} word - 单词
     * @returns {number} - 词频分数
     */
    static getFrequencyScore(word) {
        const wordLower = word.toLowerCase();
        
        if (this.HIGH_FREQUENCY_WORDS.has(wordLower)) {
            return 1; // 高频词 → 低难度
        } else if (this.MEDIUM_FREQUENCY_WORDS.has(wordLower)) {
            return 2.5; // 中频词 → 中等难度
        } else {
            return 4; // 低频词 → 较高难度 (不是5，避免过于极端)
        }
    }

    /**
     * 改进的难度评估算法
     * @param {string} word - 单词
     * @param {string} category - 词性
     * @param {string[]} tags - 标签
     * @returns {number} - 难度等级 1-5
     */
    static calculateDifficulty(word, category = 'other', tags = []) {
        let score = 0;
        
        // 1. 词频基础分 (最重要的因素)
        const frequencyScore = this.getFrequencyScore(word);
        if (frequencyScore === 1) score += 0.8;  // 高频词 (降低基础分)
        else if (frequencyScore === 2.5) score += 2.3;  // 中频词
        else score += 3.5;  // 低频词
        
        // 2. 音节数调整 (+0 to +1.5)
        const syllableCount = this.countSyllables(word);
        if (syllableCount === 1) score += 0.2;
        else if (syllableCount === 2) score += 0.7;
        else if (syllableCount === 3) score += 1.2;
        else score += 1.7;
        
        // 3. 词性调整 (-0.5 to +0.5)
        const categoryScore = this.getCategoryDifficultyScore(category);
        score += categoryScore * 0.5;
        
        // 4. 抽象度调整 (-0.3 to +0.3)
        const abstractnessScore = this.getAbstractnessScore(tags);
        score += abstractnessScore * 0.3;
        
        // 5. 单词长度调整 (-0.2 to +0.5)
        if (word.length < 4) score -= 0.2;
        else if (word.length >= 10) score += 0.5;
        else if (word.length >= 8) score += 0.3;
        
        // 映射到 1-5 范围
        let difficulty = Math.round(score);
        difficulty = Math.max(1, Math.min(5, difficulty));
        
        return difficulty;
    }

    /**
     * 带硬编码覆盖的难度评估
     * @param {string} word - 单词
     * @param {string} category - 词性
     * @param {string[]} tags - 标签
     * @param {Object} hardcodedDifficulties - 硬编码难度映射
     * @returns {number} - 难度等级 1-5
     */
    static calculateDifficultyWithOverrides(word, category, tags, hardcodedDifficulties = {}) {
        const wordLower = word.toLowerCase();
        
        // 如果有硬编码难度，使用它
        if (hardcodedDifficulties[wordLower] !== undefined) {
            return hardcodedDifficulties[wordLower];
        }
        
        // 否则使用算法计算
        return this.calculateDifficulty(word, category, tags);
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImprovedDifficultyAlgorithm;
}
