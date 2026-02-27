// Statistics Panel Component
class StatsPanel {
    constructor() {
        this.modal = null;
        this.init();
    }

    init() {
        this.createModal();
        this.attachEvents();
    }

    createModal() {
        const modalHTML = `
            <div id="stats-modal" class="modal">
                <div class="modal-content panel stats-panel">
                    <h3>📊 学习统计</h3>
                    
                    <div class="stats-grid">
                        <div class="stat-card">
                            <div class="stat-icon">🔥</div>
                            <div class="stat-value" id="streak-days">0</div>
                            <div class="stat-label">连续学习天数</div>
                        </div>
                        
                        <div class="stat-card actionable" id="learned-words-stat" title="跳转到我的词库">
                            <div class="stat-icon">📚</div>
                            <div class="stat-value" id="total-words">0</div>
                            <div class="stat-label">已学单词</div>
                            <div class="stat-action-hint">查看全部 ›</div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">⏱️</div>
                            <div class="stat-value" id="study-time">0</div>
                            <div class="stat-label">学习时长（分钟）</div>
                        </div>
                        
                        <div class="stat-card">
                            <div class="stat-icon">🎯</div>
                            <div class="stat-value" id="mastery-rate">0%</div>
                            <div class="stat-label">掌握率</div>
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h4>📈 掌握度分布</h4>
                        <div class="mastery-distribution" id="mastery-chart">
                            <div class="mastery-bar" data-level="1">
                                <div class="bar-fill" style="width: 0%"></div>
                                <span class="bar-label">Lvl 1: <span class="bar-count">0</span></span>
                            </div>
                            <div class="mastery-bar" data-level="2">
                                <div class="bar-fill" style="width: 0%"></div>
                                <span class="bar-label">Lvl 2: <span class="bar-count">0</span></span>
                            </div>
                            <div class="mastery-bar" data-level="3">
                                <div class="bar-fill" style="width: 0%"></div>
                                <span class="bar-label">Lvl 3: <span class="bar-count">0</span></span>
                            </div>
                            <div class="mastery-bar" data-level="4">
                                <div class="bar-fill" style="width: 0%"></div>
                                <span class="bar-label">Lvl 4: <span class="bar-count">0</span></span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h4>📅 今日学习计划</h4>
                        <div id="study-plan">
                            <div class="plan-item actionable" id="due-plan-item" title="开始复习">
                                <span class="plan-icon">🔄</span>
                                <span class="plan-text">待复习: <strong id="due-count">0</strong> 个单词</span>
                                <span class="plan-action-hint">点击开始 ›</span>
                            </div>
                            <div class="plan-item" id="upcoming-plan-item">
                                <span class="plan-icon">⏰</span>
                                <span class="plan-text">即将到期: <strong id="upcoming-count">0</strong> 个单词</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="stats-section">
                        <h4>💾 数据管理</h4>
                        <div class="data-actions">
                            <button class="glass-btn small" id="export-data">
                                📤 导出数据
                            </button>
                            <button class="glass-btn small" id="import-data">
                                📥 导入数据
                            </button>
                            <button class="glass-btn small danger" id="clear-data">
                                🗑️ 清空数据
                            </button>
                        </div>
                        <input type="file" id="import-file-input" accept=".json" style="display:none">
                    </div>
                    
                    <div class="modal-actions">
                        <button id="close-stats" class="secondary-btn w-full">关闭</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('stats-modal');
    }

    attachEvents() {
        // 添加统计按钮到头部
        const statsBtn = document.createElement('button');
        statsBtn.id = 'stats-btn';
        statsBtn.className = 'icon-btn';
        statsBtn.title = '学习统计';
        statsBtn.innerHTML = '📊';
        statsBtn.onclick = () => this.open();

        const headerActions = document.querySelector('.header-actions');
        if (headerActions) {
            headerActions.insertBefore(statsBtn, headerActions.querySelector('#settings-btn'));
        }

        // 关闭按钮
        document.getElementById('close-stats').onclick = () => this.close();

        // 导出数据
        document.getElementById('export-data').onclick = () => this.exportData();

        // 导入数据
        document.getElementById('import-data').onclick = () => {
            document.getElementById('import-file-input').click();
        };

        document.getElementById('import-file-input').onchange = (e) => {
            this.importData(e.target.files[0]);
        };

        // 清空数据
        document.getElementById('clear-data').onclick = () => this.clearData();

        // 点击遮罩层关闭
        this.modal.onclick = (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        };

        // 已学单词跳转到词库
        document.getElementById('learned-words-stat').onclick = () => {
            const libraryTabBtn = document.querySelector('.tab-btn[data-tab="library"]');
            if (libraryTabBtn) {
                libraryTabBtn.click();
                this.close();

                // 滚动到顶部
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        // 复习跳转
        document.getElementById('due-plan-item').onclick = () => {
            const learnedWords = storageService.getLearnedWords();
            const dueWordsData = srsService.getDueWords(learnedWords);

            if (dueWordsData.length === 0) {
                toast.info('今日暂无待复习的单词，太棒了！');
                return;
            }

            // 转化为全量数据格式
            const dueWords = dueWordsData.map(d => words.find(w => w.word === d.word)).filter(Boolean);

            this.close();

            // 延迟一点开启，防止动画冲突
            setTimeout(() => {
                if (window.startReviewMode) {
                    window.startReviewMode(dueWords);
                } else {
                    // 回退方案：如果全局方法没定义，直接尝试操作 GameSession
                    const gameModal = document.getElementById('game-modal');
                    if (gameModal) {
                        window.activeGame = new GameSession('review', dueWords);
                        gameModal.classList.add('active');
                    }
                }
            }, 300);
        };
    }

    open() {
        this.updateStats();
        this.modal.classList.add('active');
    }

    close() {
        this.modal.classList.remove('active');
    }

    updateStats() {
        const learnedWords = storageService.getLearnedWords();
        const stats = storageService.getStats();
        const masteryStats = srsService.getMasteryStats(learnedWords);
        const dueWords = srsService.getDueWords(learnedWords);
        const upcomingWords = srsService.getUpcomingWords(learnedWords);

        // 基础统计
        document.getElementById('streak-days').textContent = stats.streakDays || 0;
        document.getElementById('total-words').textContent = Object.keys(learnedWords).length;
        document.getElementById('study-time').textContent = Math.round((stats.totalStudyTime || 0) / 60000);

        // 掌握率（Lvl 3-4 的比例）
        const totalWords = Object.keys(learnedWords).length;
        const masteredWords = (masteryStats[3] || 0) + (masteryStats[4] || 0);
        const masteryRate = totalWords > 0 ? Math.round((masteredWords / totalWords) * 100) : 0;
        document.getElementById('mastery-rate').textContent = masteryRate + '%';

        // 掌握度分布
        const maxCount = Math.max(...Object.values(masteryStats), 1);
        [1, 2, 3, 4].forEach(level => {
            const count = masteryStats[level] || 0;
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const bar = document.querySelector(`.mastery-bar[data-level="${level}"]`);
            bar.querySelector('.bar-fill').style.width = percentage + '%';
            bar.querySelector('.bar-count').textContent = count;
        });

        // 学习计划
        document.getElementById('due-count').textContent = dueWords.length;
        document.getElementById('upcoming-count').textContent = upcomingWords.length;
    }

    exportData() {
        const data = storageService.exportData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pictographic-learn-backup-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        toast.success('数据导出成功');
    }

    importData(file) {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                if (confirm('导入数据将覆盖当前数据，是否继续？')) {
                    const success = storageService.importData(data);
                    if (success) {
                        toast.success('数据导入成功，页面即将刷新');
                        setTimeout(() => location.reload(), 1500);
                    } else {
                        toast.error('数据导入失败');
                    }
                }
            } catch (err) {
                toast.error('无效的数据文件');
            }
        };
        reader.readAsText(file);
    }

    clearData() {
        if (confirm('确定要清空所有学习数据吗？此操作不可恢复！')) {
            if (confirm('再次确认：真的要清空所有数据吗？')) {
                storageService.clearAll();
                toast.success('数据已清空，页面即将刷新');
                setTimeout(() => location.reload(), 1500);
            }
        }
    }
}

// 初始化
const statsPanel = new StatsPanel();
