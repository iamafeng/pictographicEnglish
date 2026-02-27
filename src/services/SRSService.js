// SRS (Spaced Repetition System) Service - 间隔重复算法
class SRSService {
    constructor() {
        // 基于 SuperMemo 2 算法的简化版本
        this.intervals = {
            1: 1,      // 1 天
            2: 3,      // 3 天
            3: 7,      // 7 天
            4: 14      // 14 天
        };
    }

    // 计算下次复习时间
    getNextReviewDate(level, lastReview = Date.now()) {
        const days = this.intervals[level] || 30;
        return lastReview + (days * 24 * 60 * 60 * 1000);
    }

    // 更新单词的 SRS 数据
    updateWordProgress(word, isCorrect) {
        const currentLevel = word.level || 1;

        if (isCorrect) {
            // 答对：升级（最高 4 级）
            word.level = Math.min(4, currentLevel + 1);
        } else {
            // 答错：降级到 1 级
            word.level = 1;
        }

        word.lastReview = Date.now();
        word.nextReview = this.getNextReviewDate(word.level, word.lastReview);
        word.reviewCount = (word.reviewCount || 0) + 1;

        return word;
    }

    // 获取今日待复习的单词
    getDueWords(learnedWords) {
        const now = Date.now();
        return Object.entries(learnedWords)
            .filter(([_, data]) => {
                // 如果没有 nextReview，说明是旧数据，需要复习
                if (!data.nextReview) return true;
                return data.nextReview <= now;
            })
            .map(([word, data]) => ({ word, ...data }));
    }

    // 获取即将到期的单词（未来 3 天内）
    getUpcomingWords(learnedWords) {
        const now = Date.now();
        const threeDaysLater = now + (3 * 24 * 60 * 60 * 1000);

        return Object.entries(learnedWords)
            .filter(([_, data]) => {
                if (!data.nextReview) return false;
                return data.nextReview > now && data.nextReview <= threeDaysLater;
            })
            .map(([word, data]) => ({ word, ...data }))
            .sort((a, b) => a.nextReview - b.nextReview);
    }

    // 获取掌握度统计
    getMasteryStats(learnedWords) {
        const stats = { 1: 0, 2: 0, 3: 0, 4: 0 };
        Object.values(learnedWords).forEach(data => {
            const level = data.level || 1;
            stats[level]++;
        });
        return stats;
    }

    // 推荐今日学习计划
    getStudyPlan(learnedWords, newWords, targetCount = 20) {
        const dueWords = this.getDueWords(learnedWords);
        const plan = {
            review: dueWords.slice(0, Math.min(15, dueWords.length)),
            new: [],
            total: 0
        };

        // 如果复习词不足，添加新词
        const remaining = targetCount - plan.review.length;
        if (remaining > 0 && newWords.length > 0) {
            plan.new = newWords.slice(0, remaining);
        }

        plan.total = plan.review.length + plan.new.length;
        return plan;
    }
}

// 导出单例
window.srsService = new SRSService();
