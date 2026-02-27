// Custom Word Manager Component
class CustomWordManager {
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
            <div id="custom-word-modal" class="modal">
                <div class="modal-content panel custom-word-panel">
                    <div class="modal-tabs">
                        <button class="tab-btn active" data-tab="single">📝 单词添加</button>
                        <button class="tab-btn" data-tab="bulk">🚀 快速注入</button>
                        <button class="tab-btn" data-tab="manage">📑 管理库</button>
                        <button class="tab-btn" data-tab="guide">❓ 使用说明</button>
                    </div>

                    <!-- Single Word Form -->
                    <div id="tab-single" class="tab-content active">
                        <h3>添加自定义单词</h3>
                        <form id="custom-word-form">
                            <div class="form-group-row">
                                <div class="form-group" style="flex: 2;">
                                    <label for="custom-word">单词 * <button type="button" id="ai-autofill-btn" class="badge" style="background: var(--primary); color: white; border: none; cursor: pointer; float: right;">🤖 AI自动补全</button></label>
                                    <input type="text" id="custom-word" required placeholder="例如: apple">
                                </div>
                                <div class="form-group" style="flex: 1;">
                                    <label for="custom-phonetic">音标</label>
                                    <input type="text" id="custom-phonetic" placeholder="例如: [ˈæpl]">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label for="custom-meaning">含义 *</label>
                                <input type="text" id="custom-meaning" required placeholder="例如: n. 苹果">
                            </div>
                            
                            <div class="form-group">
                                <label for="custom-example">例句 & 翻译</label>
                                <div class="dual-input">
                                    <textarea id="custom-example" rows="2" placeholder="英文例句"></textarea>
                                    <textarea id="custom-example-cn" rows="2" placeholder="中文翻译"></textarea>
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label>象形图方案</label>
                                <div class="svg-generation-options">
                                    <button type="button" class="glass-btn small" id="gen-basic-svg">基础方案</button>
                                    <button type="button" class="glass-btn small" id="gen-ai-svg">AI 视觉生成</button>
                                    <button type="button" class="glass-btn small" id="upload-svg">上传 SVG</button>
                                </div>
                                <textarea id="custom-svg" rows="3" placeholder="粘贴 SVG 代码或通过上方按钮生成"></textarea>
                                <div id="svg-preview" class="svg-preview"></div>
                            </div>
                            
                            <input type="file" id="svg-file-input" accept=".svg" style="display:none">
                            
                            <div class="modal-actions">
                                <button type="submit" class="primary-btn">保存单词</button>
                                <button type="button" class="secondary-btn close-modal-btn">取消</button>
                            </div>
                        </form>
                    </div>

                    <!-- Bulk Import Tab -->
                    <div id="tab-bulk" class="tab-content">
                        <div class="tab-header">
                            <h3>批量注入工具 (JSON)</h3>
                            <p class="section-hint">直接粘贴 AI 生成的 JSON 数组内容，快速扩充词库。</p>
                        </div>
                        <div class="form-group">
                            <textarea id="bulk-json-input" rows="10" 
                                      placeholder='[{"word": "adventure", "meaning": "n. 冒险", ...}, {...}]'></textarea>
                        </div>
                        <div id="bulk-stats" class="bulk-stats"></div>
                        <div class="modal-actions">
                            <button type="button" id="bulk-analyze-btn" class="secondary-btn">校验并预览</button>
                            <button type="button" id="bulk-save-btn" class="primary-btn" disabled>立即注入到库</button>
                            <button type="button" class="secondary-btn close-modal-btn">取消</button>
                        </div>
                    </div>

                    <!-- Manage Tab -->
                    <div id="tab-manage" class="tab-content">
                        <h3>库管理</h3>
                        <div id="custom-words-list" class="custom-words-list">
                            <!-- Populated dynamically -->
                        </div>
                        <div class="modal-actions">
                            <button type="button" id="clear-custom-btn" class="secondary-btn danger">清空自定义词库</button>
                            <button type="button" class="secondary-btn close-modal-btn">返回</button>
                        </div>
                    </div>

                    <!-- Guide Tab -->
                    <div id="tab-guide" class="tab-content">
                        <h3>快速使用指南</h3>
                        <div class="guide-scrollable">
                            <section class="guide-section">
                                <h4>1. 单词添加 (逐个)</h4>
                                <p>填写基本信息，点击<strong>AI视觉生成</strong>可调用模型生成配图，或点击<strong>上传SVG</strong>使用本地文件。</p>
                            </section>

                            <section class="guide-section">
                                <h4>2. 批量注入 (5000+扩充必备)</h4>
                                <p>这是扩展词汇量的主要手段：</p>
                                <ul>
                                    <li>使用项目根目录下的 <code>prompt.md</code> 指令发送给 AI。</li>
                                    <li>将 AI 生成的 JSON 数组粘贴到<strong>快速注入</strong>框内。</li>
                                    <li>点击"校验并预览"检查格式，确认无误后点击"立即注入"。</li>
                                </ul>
                                <div class="code-example"><pre>[
  {
    "word": "apple",
    "meaning": "n. 苹果",
    "phonetic": "[ˈæpl]",
    "example": "I eat an apple.",
    "exampleCn": "我吃苹果。",
    "svg": "&lt;svg&gt;...&lt;/svg&gt;"
  }
]</pre></div>
                            </section>

                            <section class="guide-section">
                                <h4>3. SVG 设计规范</h4>
                                <p>为保证显示效果，自定义 SVG 请遵循：</p>
                                <ul>
                                    <li>ViewBox 统一使用 <code>0 0 120 60</code></li>
                                    <li>文字层必须居中：<code>x="60" text-anchor="middle"</code></li>
                                    <li>装饰元素建议设置 <code>opacity="0.4"</code></li>
                                </ul>
                                <p><strong>💡 如何让 AI 帮你写 SVG 源码？</strong><br>
                                复制以下提示词发给任意大语言模型（如 ChatGPT, DeepSeek），然后把代码粘在输入框里：</p>
                                <div class="code-example"><pre>
请帮我为一个英语单词设计一个扁平极简风格的象形 SVG。
要求：
1. 宽 120，高 60 (viewBox="0 0 120 60")
2. 内部必须有单词文本元素，大写加粗，居中对齐 
3. 加少量极简图形线条修饰。
4. 所有颜色必须用 fill="currentColor" 或 stroke="currentColor"
单词是: [你想添加的单词]
                                </pre></div>
                            </section>
                        </div>
                        <div class="modal-actions">
                            <button type="button" class="primary-btn close-modal-btn">我明白了</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.modal = document.getElementById('custom-word-modal');
    }

    attachEvents() {
        // Tab Switching
        const tabBtns = this.modal.querySelectorAll('.modal-tabs .tab-btn');
        const tabContents = this.modal.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => {
            btn.onclick = (e) => {
                e.preventDefault();
                e.stopPropagation();

                const tabId = btn.dataset.tab;
                console.log('🔄 Switching to tab:', tabId);

                // Update button active state
                tabBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Show/hide tab content using active class
                tabContents.forEach(c => {
                    if (c.id === `tab-${tabId}`) {
                        c.classList.add('active');
                        console.log('✅ Showing tab:', c.id);
                    } else {
                        c.classList.remove('active');
                    }
                });

                if (tabId === 'manage') this.renderManageList();
            };
        });

        // Open Modal
        const addBtn = document.createElement('button');
        addBtn.id = 'add-custom-word-btn';
        addBtn.className = 'glass-btn';
        addBtn.innerHTML = '➕ 添加单词';
        addBtn.onclick = () => this.open();

        const headerActions = document.querySelector('.header-actions');
        if (headerActions) headerActions.insertBefore(addBtn, headerActions.firstChild);

        // Close Modal
        this.modal.querySelectorAll('.close-modal-btn').forEach(btn => {
            btn.onclick = () => this.close();
        });

        // --- Single Word Actions ---
        document.getElementById('ai-autofill-btn').onclick = async () => {
            const wordInput = document.getElementById('custom-word');
            const word = wordInput.value.trim();
            if (!word) {
                toast.warning('请输入要补全的单词');
                wordInput.focus();
                return;
            }

            const btn = document.getElementById('ai-autofill-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '⏳ 正在解析...';
            btn.disabled = true;

            try {
                const details = await aiService.generateWordDetails(word);

                if (details.phonetic) document.getElementById('custom-phonetic').value = details.phonetic;
                if (details.meaning) document.getElementById('custom-meaning').value = details.meaning;
                if (details.example) document.getElementById('custom-example').value = details.example;
                if (details.exampleCn) document.getElementById('custom-example-cn').value = details.exampleCn;

                toast.success('✨ 内容已自动生成，可继续生成象形图');

                // Automatically generate basic SVG if empty
                if (!document.getElementById('custom-svg').value.trim()) {
                    document.getElementById('gen-basic-svg').click();
                }
            } catch (err) {
                toast.error(err.message);
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        };

        document.getElementById('gen-basic-svg').onclick = () => {
            const word = document.getElementById('custom-word').value.trim();
            const meaning = document.getElementById('custom-meaning').value.trim();
            if (!word) return toast.warning('请先输入单词');
            const svg = svgGenerator.generatePictographicSVG(word, meaning);
            document.getElementById('custom-svg').value = svg;
            this.updatePreview(svg);
        };

        document.getElementById('gen-ai-svg').onclick = async () => {
            const word = document.getElementById('custom-word').value.trim();
            const meaning = document.getElementById('custom-meaning').value.trim();
            if (!word || !meaning) return toast.warning('请先输入单词和含义');

            const btn = document.getElementById('gen-ai-svg');
            btn.disabled = true;
            btn.textContent = '生成中...';

            try {
                const imageUrl = await aiService.generateImage({ word, meaning });
                const svg = svgGenerator.convertImageToSVG(imageUrl, word);
                document.getElementById('custom-svg').value = svg;
                this.updatePreview(svg);
                toast.success('AI 生成成功');
            } catch (err) {
                toast.error('AI 生成失败: ' + err.message);
            } finally {
                btn.disabled = false;
                btn.textContent = 'AI 视觉生成';
            }
        };

        document.getElementById('upload-svg').onclick = () => document.getElementById('svg-file-input').click();
        document.getElementById('svg-file-input').onchange = (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                const svg = event.target.result;
                if (svgGenerator.validateSVG(svg)) {
                    document.getElementById('custom-svg').value = svg;
                    this.updatePreview(svg);
                } else {
                    toast.error('无效的 SVG');
                }
            };
            reader.readAsText(file);
        };

        document.getElementById('custom-svg').oninput = (e) => this.updatePreview(e.target.value);
        document.getElementById('custom-word-form').onsubmit = (e) => {
            e.preventDefault();
            this.saveWord();
        };

        // --- Bulk Import Actions ---
        const bulkInput = document.getElementById('bulk-json-input');
        const bulkStats = document.getElementById('bulk-stats');
        const bulkSaveBtn = document.getElementById('bulk-save-btn');

        document.getElementById('bulk-analyze-btn').onclick = () => {
            try {
                const data = JSON.parse(bulkInput.value);
                if (!Array.isArray(data)) throw new Error('请输入一个 JSON 数组 []');

                bulkStats.innerHTML = `
                    <div class="stats-badge success">解析成功: 找到 ${data.length} 个单词</div>
                    <div class="stats-preview">预览关键词: ${data.slice(0, 5).map(w => w.word).join(', ')}${data.length > 5 ? '...' : ''}</div>
                `;
                bulkSaveBtn.disabled = false;
                toast.info('格式校验通过，可以开始注入');
            } catch (err) {
                bulkStats.innerHTML = `<div class="stats-badge error">格式错误: ${err.message}</div>`;
                bulkSaveBtn.disabled = true;
                toast.error('解析失败，请检查 JSON 格式');
            }
        };

        bulkSaveBtn.onclick = () => {
            const data = JSON.parse(bulkInput.value);
            let count = 0;

            // Get words array (try global first, then window)
            const wordsArray = typeof words !== 'undefined' ? words : window.words;

            if (!wordsArray) {
                toast.error('单词数据未加载，请刷新页面');
                return;
            }

            data.forEach(item => {
                const enriched = CategoryDetector.enrichWordData({
                    ...item,
                    custom: true,
                    createdAt: Date.now(),
                    source: 'bulk_import'
                });
                storageService.addCustomWord(enriched);
                if (!wordsArray.find(w => w.word === enriched.word)) {
                    wordsArray.push(enriched);
                }
                count++;
            });

            // Clear input & reset button
            bulkInput.value = '';
            bulkSaveBtn.disabled = true;
            bulkStats.innerHTML = '';

            // Switch to manage tab using active class
            const allTabBtns = this.modal.querySelectorAll('.modal-tabs .tab-btn');
            const allTabContents = this.modal.querySelectorAll('.tab-content');
            allTabBtns.forEach(b => b.classList.remove('active'));
            allTabContents.forEach(c => c.classList.remove('active'));
            const manageBtn = this.modal.querySelector('[data-tab="manage"]');
            const manageContent = this.modal.querySelector('#tab-manage');
            if (manageBtn) manageBtn.classList.add('active');
            if (manageContent) manageContent.classList.add('active');
            this.renderManageList();

            toast.success(`🚀 注入成功！已添加 ${count} 个单词`);

            // refresh background grid after slight delay
            setTimeout(() => {
                if (typeof render === 'function') render();
            }, 300);
        };

        // --- Manage Tab Actions ---
        document.getElementById('clear-custom-btn').onclick = () => {
            if (confirm('确定要清空所有自定义单词吗？此操作不可撤销。')) {
                storageService.saveCustomWords([]);
                // Remove from runtime words array
                const wordsArray = typeof words !== 'undefined' ? words : window.words;
                if (wordsArray) {
                    // Filter out custom words
                    const systemWords = wordsArray.filter(w => !w.custom);
                    wordsArray.length = 0;
                    wordsArray.push(...systemWords);
                }
                toast.success('词库已清空');
                this.renderManageList();
                if (typeof render === 'function') render();
            }
        };
    }

    renderManageList() {
        const listEl = document.getElementById('custom-words-list');
        const customWords = storageService.getCustomWords();

        if (customWords.length === 0) {
            listEl.innerHTML = '<div class="empty-hint">暂无自定义单词</div>';
            return;
        }

        listEl.innerHTML = customWords.map(w => `
            <div class="custom-word-item">
                <div class="word-info">
                    <strong>${w.word}</strong>
                    <span>${w.meaning}</span>
                </div>
                <button class="delete-btn" onclick="customWordManager.deleteWord('${w.word}')">🗑️</button>
            </div>
        `).join('');
    }

    deleteWord(word) {
        if (!confirm(`确定删除单词 "${word}" 吗？`)) return;
        const customWords = storageService.getCustomWords();
        const filtered = customWords.filter(w => w.word !== word);
        storageService.saveCustomWords(filtered);

        // Remove from runtime words array
        const wordsArray = typeof words !== 'undefined' ? words : window.words;
        if (wordsArray) {
            const index = wordsArray.findIndex(w => w.word === word);
            if (index > -1) {
                wordsArray.splice(index, 1);
            }
        }

        toast.success('删除成功');
        this.renderManageList();
        if (typeof render === 'function') render();
    }

    updatePreview(svg) {
        const preview = document.getElementById('svg-preview');
        if (svg && svgGenerator.validateSVG(svg)) {
            preview.innerHTML = svg;
            preview.style.display = 'block';
        } else {
            preview.style.display = 'none';
        }
    }

    saveWord() {
        const wordData = {
            word: document.getElementById('custom-word').value.trim(),
            phonetic: document.getElementById('custom-phonetic').value.trim() || '',
            meaning: document.getElementById('custom-meaning').value.trim(),
            example: document.getElementById('custom-example').value.trim() || '',
            exampleCn: document.getElementById('custom-example-cn').value.trim() || '',
            svg: document.getElementById('custom-svg').value.trim() || svgGenerator.generateBasicSVG(
                document.getElementById('custom-word').value.trim(),
                document.getElementById('custom-meaning').value.trim()
            ),
            custom: true,
            createdAt: Date.now(),
            source: 'user'
        };

        // 使用 CategoryDetector 自动完善单词数据
        const enrichedData = CategoryDetector.enrichWordData(wordData);

        // 保存到本地存储
        storageService.addCustomWord(enrichedData);

        // 添加到全局 words 数组
        const wordsArray = typeof words !== 'undefined' ? words : window.words;
        if (wordsArray && !wordsArray.find(w => w.word === enrichedData.word)) {
            wordsArray.push(enrichedData);
        }

        toast.success(`单词 "${enrichedData.word}" 已添加到词库 (分类: ${CategoryDetector.CATEGORIES[enrichedData.category]})`);
        this.close();

        // 刷新页面显示
        if (typeof render === 'function') {
            render();
        }
    }

    open() {
        this.modal.classList.add('active');
        document.getElementById('custom-word').focus();
    }

    close() {
        this.modal.classList.remove('active');
        document.getElementById('custom-word-form').reset();
        document.getElementById('svg-preview').style.display = 'none';
    }
}

// 初始化
const customWordManager = new CustomWordManager();
