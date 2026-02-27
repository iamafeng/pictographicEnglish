// Storage Service - 统一管理本地存储
class StorageService {
    constructor() {
        this.KEYS = {
            LEARNED_WORDS: 'learned_words',
            CUSTOM_WORDS: 'custom_words',
            AI_IMAGES: 'ai_images',
            LEARNING_STATS: 'learning_stats',
            USER_SETTINGS: 'user_settings'
        };
    }

    // 获取学习的单词（包含 SRS 数据）
    getLearnedWords() {
        const data = localStorage.getItem(this.KEYS.LEARNED_WORDS);
        return data ? JSON.parse(data) : {};
    }

    // 保存学习的单词
    saveLearnedWords(words) {
        localStorage.setItem(this.KEYS.LEARNED_WORDS, JSON.stringify(words));
    }

    // 获取自定义单词库
    getCustomWords() {
        const data = localStorage.getItem(this.KEYS.CUSTOM_WORDS);
        return data ? JSON.parse(data) : [];
    }

    // 保存自定义单词
    saveCustomWords(words) {
        localStorage.setItem(this.KEYS.CUSTOM_WORDS, JSON.stringify(words));
    }

    // 添加单个自定义单词
    addCustomWord(wordData) {
        const words = this.getCustomWords();
        const exists = words.find(w => w.word === wordData.word);
        if (exists) {
            Object.assign(exists, wordData);
        } else {
            words.push(wordData);
        }
        this.saveCustomWords(words);
        return wordData;
    }

    // 获取 AI 生成的图片缓存
    getAIImages() {
        const data = localStorage.getItem(this.KEYS.AI_IMAGES);
        return data ? JSON.parse(data) : {};
    }

    // 保存 AI 图片
    saveAIImage(word, imageUrl) {
        const images = this.getAIImages();
        images[word] = imageUrl;
        localStorage.setItem(this.KEYS.AI_IMAGES, JSON.stringify(images));
    }

    // 获取学习统计
    getStats() {
        const data = localStorage.getItem(this.KEYS.LEARNING_STATS);
        return data ? JSON.parse(data) : {
            totalStudyTime: 0,
            dailyStats: {},
            streakDays: 0,
            lastStudyDate: null
        };
    }

    // 更新学习统计
    updateStats(updates) {
        const stats = this.getStats();
        Object.assign(stats, updates);
        localStorage.setItem(this.KEYS.LEARNING_STATS, JSON.stringify(stats));
        return stats;
    }

    // 记录今日学习
    recordDailyStudy(duration = 0) {
        const stats = this.getStats();
        const today = new Date().toISOString().split('T')[0];

        if (!stats.dailyStats[today]) {
            stats.dailyStats[today] = { count: 0, duration: 0 };
        }

        stats.dailyStats[today].count++;
        stats.dailyStats[today].duration += duration;
        stats.totalStudyTime += duration;

        // 更新连续学习天数
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
        if (stats.lastStudyDate === yesterday || stats.lastStudyDate === today) {
            if (stats.lastStudyDate !== today) {
                stats.streakDays++;
            }
        } else if (stats.lastStudyDate !== today) {
            stats.streakDays = 1;
        }

        stats.lastStudyDate = today;
        this.updateStats(stats);
        return stats;
    }

    // 导出所有数据
    exportData() {
        return {
            learnedWords: this.getLearnedWords(),
            customWords: this.getCustomWords(),
            aiImages: this.getAIImages(),
            stats: this.getStats(),
            exportDate: new Date().toISOString()
        };
    }

    // 导入数据
    importData(data) {
        try {
            if (data.learnedWords) this.saveLearnedWords(data.learnedWords);
            if (data.customWords) this.saveCustomWords(data.customWords);
            if (data.aiImages) localStorage.setItem(this.KEYS.AI_IMAGES, JSON.stringify(data.aiImages));
            if (data.stats) this.updateStats(data.stats);
            return true;
        } catch (err) {
            console.error('Import failed:', err);
            return false;
        }
    }

    // 清空所有数据
    clearAll() {
        Object.values(this.KEYS).forEach(key => localStorage.removeItem(key));
    }
}

// 导出单例
window.storageService = new StorageService();
