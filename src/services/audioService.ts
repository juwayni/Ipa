import type { IPASymbol } from '../types/ipa';

class AudioService {
  private activeAudio: HTMLAudioElement | null = null;

  /**
   * Play audio for a given symbol or audio URL.
   * Tries local downloaded audio first if available, then remote URL, then fallback speech synthesis.
   */
  public async playSymbolAudio(
    symbol: IPASymbol,
    options: { speed?: number; volume?: number } = {}
  ): Promise<void> {
    const { speed = 1.0, volume = 1.0 } = options;

    // Stop currently playing audio
    this.stop();

    // Try remote audio source first if available
    if (symbol.audioSource && symbol.audioSource.startsWith('http')) {
      try {
        await this.playAudioUrl(symbol.audioSource, speed, volume);
        return;
      } catch (err) {
        console.warn(`Remote audio source failed for ${symbol.symbol}, trying local audio or fallback synthesis.`, err);
      }
    }

    // Try local audio file
    const localAudioUrl = `/audio/${symbol.id}.mp3`;
    try {
      await this.playAudioUrl(localAudioUrl, speed, volume);
      return;
    } catch {
      // Local audio unavailable
    }

    // Fallback: Web Speech API or Web Audio Synth
    this.synthesizeSymbolSound(symbol, speed, volume);
  }

  /**
   * Play audio directly from a URL or path.
   */
  public playAudioUrl(url: string, speed = 1.0, volume = 1.0): Promise<void> {
    return new Promise((resolve, reject) => {
      this.stop();

      const audio = new Audio(url);
      audio.playbackRate = speed;
      audio.volume = volume;
      this.activeAudio = audio;

      audio.onended = () => {
        this.activeAudio = null;
        resolve();
      };

      audio.onerror = (e) => {
        this.activeAudio = null;
        reject(e);
      };

      audio.play().catch((err) => {
        this.activeAudio = null;
        reject(err);
      });
    });
  }

  /**
   * Stop any playing audio immediately.
   */
  public stop(): void {
    if (this.activeAudio) {
      this.activeAudio.pause();
      this.activeAudio.currentTime = 0;
      this.activeAudio = null;
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  /**
   * Synthesize symbol sound via Web Speech or Web Audio tone oscillator as fallback
   */
  private synthesizeSymbolSound(symbol: IPASymbol, speed: number, volume: number): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      // Utterance with example or phonetic name
      const textToSpeak = symbol.exampleWords && symbol.exampleWords.length > 0
        ? symbol.exampleWords[0].word
        : symbol.nameEnglish;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = speed;
      utterance.volume = volume;

      if (symbol.exampleWords && symbol.exampleWords[0].languageCode) {
        utterance.lang = symbol.exampleWords[0].languageCode;
      } else {
        utterance.lang = 'en-US';
      }

      window.speechSynthesis.speak(utterance);
    } else {
      // Basic Web Audio tone fallback
      try {
        const AudioCtx = (window as unknown as { AudioContext?: typeof AudioContext; webkitAudioContext?: typeof AudioContext }).AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, ctx.currentTime); // A4 tone
        gain.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } catch (e) {
        console.error('Audio synthesis failed', e);
      }
    }
  }
}

export const audioService = new AudioService();
