// ========================================
// TTS (Text-to-Speech) Service
// 语音朗读服务
// ========================================

class TTSService {
    constructor() {
        this.config = {
            provider: localStorage.getItem('tts_provider') || 'browser',
            url: localStorage.getItem('tts_url') || '',
            key: localStorage.getItem('tts_key') || ''
        };
    }

    saveConfig(provider, url, key) {
        this.config = { provider, url, key };
        localStorage.setItem('tts_provider', provider);
        localStorage.setItem('tts_url', url);
        localStorage.setItem('tts_key', key);
    }

    async speak(text) {
        if (!text) return;
        const provider = this.config.provider;

        // 1. Browser native TTS (Never cache, must be synchronous for some browsers)
        if (provider === 'browser') {
            this.speakWithBrowser(text);
            return;
        }

        // 2. Check for cached audio (for remote providers)
        if (typeof audioCacheManager !== 'undefined') {
            const cachedAudio = audioCacheManager.cache.get(text);
            if (cachedAudio instanceof Audio) {
                cachedAudio.currentTime = 0;
                cachedAudio.play().catch(e => console.warn('Cache play failed:', e));
                return;
            }
        }

        // 3. Resolve Provider
        try {
            let audio;
            if (provider === 'googletts') {
                audio = new Audio(`https://translate.google.com/translate_tts?ie=UTF-8&tl=en&client=tw-ob&q=${encodeURIComponent(text)}`);
            } else if (provider === 'edgetts') {
                audio = new Audio(`https://api.ball.net/v1/tts/edge?text=${encodeURIComponent(text)}&voice=en-US-AriaNeural`);
            } else if (this.config.key) {
                // API-based TTS
                const baseUrl = this.config.url || 'https://api.openai.com/v1';
                const response = await fetch(`${baseUrl}/audio/speech`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${this.config.key}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: provider === 'siliconflow' ? 'fishaudio/fish-speech-1.4' : 'tts-1',
                        input: text,
                        voice: 'alloy'
                    })
                });

                if (response.ok) {
                    const blob = await response.blob();
                    audio = new Audio(URL.createObjectURL(blob));
                }
            }

            if (audio) {
                // Play and optionally cache
                audio.play().catch(err => {
                    console.error('Audio play error:', err);
                    this.speakWithBrowser(text);
                });

                if (typeof audioCacheManager !== 'undefined') {
                    audioCacheManager.set(text, audio);
                }
            } else {
                this.speakWithBrowser(text);
            }
        } catch (err) {
            console.error('TTS execution error:', err);
            this.speakWithBrowser(text);
        }
    }

    speakWithBrowser(text) {
        if (!window.speechSynthesis) {
            console.error('Browser does not support speech synthesis');
            return;
        }

        console.log('🗣️ Speaking with browser:', text);
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // Slightly slower for better clarity

        // Fix for some browsers that need a voice list to be loaded
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
            utterance.voice = voices.find(v => v.lang.startsWith('en')) || voices[0];
        }

        window.speechSynthesis.speak(utterance);
    }

    // Stop any ongoing speech
    stop() {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    }
}

// Export singleton instance to both window and global scope
const tts = new TTSService();
window.tts = tts;

// Also export class for potential custom instances
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TTSService, tts };
}

console.log('✅ TTSService loaded, tts available globally');
