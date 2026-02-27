// AI Service - handles AI image generation (T2I)
class AIService {
    constructor() {
        this.config = {
            provider: localStorage.getItem('t2i_provider') || 'pollinations',
            url: localStorage.getItem('t2i_url') || '',
            key: localStorage.getItem('t2i_key') || ''
        };
    }

    saveConfig(provider, url, key) {
        this.config = { provider, url, key };
        localStorage.setItem('t2i_provider', provider);
        localStorage.setItem('t2i_url', url);
        localStorage.setItem('t2i_key', key);
    }

    async generateImage({ word, meaning }) {
        const provider = this.config.provider;
        const prompt = `Stylized pictographic icon for English word "${word}" (meaning: ${meaning}), flat vector style, minimal, white background, high contrast, symbol only.`;

        console.log(`🎨 Generating image for "${word}" using ${provider}...`);

        if (provider === 'pollinations') {
            // Free and no key required
            return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&nologo=true&seed=${Math.floor(Math.random() * 1000)}`;
        }

        if (provider === 'openai' || provider === 'custom' || provider === 'siliconflow') {
            if (!this.config.key) {
                throw new Error('API Key is required for this provider. Falling back to default.');
            }

            const baseUrl = this.config.url || (provider === 'siliconflow' ? 'https://api.siliconflow.cn/v1' : 'https://api.openai.com/v1');
            const model = localStorage.getItem('t2i_model') || (provider === 'siliconflow' ? 'flux-1-schnell' : 'dall-e-3');

            const response = await fetch(`${baseUrl}/images/generations`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.config.key}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: model,
                    prompt: prompt,
                    n: 1,
                    size: "512x512"
                })
            });

            if (!response.ok) {
                throw new Error(`AI API error: ${response.status}`);
            }

            const data = await response.json();
            return data.data[0].url;
        }

        // Default fallback
        return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;
    }

    async generateWordDetails(word) {
        if (!word) throw new Error('Word is required');
        const prompt = `Generate JSON for the English word "${word}" containing phonetic, meaning (in Chinese, start with pos e.g., n. 苹果), example (in English), exampleCn (Chinese translation of example). Return ONLY raw plain JSON format like {"phonetic":"...","meaning":"...","example":"...","exampleCn":"..."}. Do not use markdown blocks.`;
        const url = `https://text.pollinations.ai/prompt/${encodeURIComponent(prompt)}?json=true`;

        console.log(`🤖 Auto-completing word details for "${word}"...`);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Text API error: ${response.status}`);

            let text = await response.text();

            // Try to extract JSON from anywhere in the string
            const jsonMatch = text.match(/\{[\s\S]*?\}/);
            if (jsonMatch && jsonMatch[0]) {
                const parsed = JSON.parse(jsonMatch[0]);
                if (parsed.meaning && typeof parsed.meaning === 'string') {
                    return parsed;
                }
            }

            // Fallback parse just in case
            return JSON.parse(text);
        } catch (err) {
            console.error('Failed to generate word details:', err);
            throw new Error('AI 生成失败，请稍后再试或检查网络');
        }
    }
}

// Export singleton
window.aiService = new AIService();
