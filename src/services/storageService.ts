import type { UserProgress, UserSettings, UserSymbolProgress } from '../types/ipa';

const STORAGE_KEYS = {
  SETTINGS: 'ipa_master_settings_v1',
  PROGRESS: 'ipa_master_progress_v1',
};

export const DEFAULT_SETTINGS: UserSettings = {
  language: 'en',
  theme: 'system',
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
  autoPlayAudio: true,
  playbackSpeed: 1.0,
  audioVolume: 1.0,
  dailyGoal: 10,
};

export const DEFAULT_PROGRESS: UserProgress = {
  overallMastery: 0,
  streakCount: 0,
  longestStreak: 0,
  lastActiveDate: new Date().toISOString().split('T')[0],
  dailyGoal: 10,
  todayReviewedCount: 0,
  symbolsProgress: {},
  completedLessons: [],
  unlockedLevels: 1,
  quizHistory: [],
};

class StorageService {
  /**
   * Load user settings from LocalStorage
   */
  public getSettings(): UserSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? { ...DEFAULT_SETTINGS, ...JSON.parse(data) } : DEFAULT_SETTINGS;
    } catch {
      return DEFAULT_SETTINGS;
    }
  }

  /**
   * Save user settings
   */
  public saveSettings(settings: UserSettings): void {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  /**
   * Load user progress
   */
  public getProgress(): UserProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (!data) return DEFAULT_PROGRESS;

      const progress: UserProgress = JSON.parse(data);
      const todayStr = new Date().toISOString().split('T')[0];

      // Update streak and daily count if necessary
      if (progress.lastActiveDate !== todayStr) {
        const lastDate = new Date(progress.lastActiveDate);
        const todayDate = new Date(todayStr);
        const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (86400 * 1000));

        if (diffDays > 1) {
          progress.streakCount = 0; // Streak broken
        }
        progress.todayReviewedCount = 0;
        progress.lastActiveDate = todayStr;
      }

      return progress;
    } catch {
      return DEFAULT_PROGRESS;
    }
  }

  /**
   * Save user progress
   */
  public saveProgress(progress: UserProgress): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress:', e);
    }
  }

  /**
   * Get or create progress record for a single symbol
   */
  public getSymbolProgress(symbolId: string, progress: UserProgress): UserSymbolProgress {
    if (progress.symbolsProgress[symbolId]) {
      return progress.symbolsProgress[symbolId];
    }

    const newProgress: UserSymbolProgress = {
      symbolId,
      timesSeen: 0,
      timesCorrect: 0,
      timesIncorrect: 0,
      lastReviewed: new Date().toISOString(),
      nextReview: new Date().toISOString(),
      intervalDays: 0,
      easeFactor: 2.5,
      difficulty: 0.3,
      isFavorite: false,
      isDifficult: false,
    };

    return newProgress;
  }

  /**
   * Export all user data as JSON string
   */
  public exportUserData(): string {
    return JSON.stringify({
      settings: this.getSettings(),
      progress: this.getProgress(),
      exportDate: new Date().toISOString(),
    }, null, 2);
  }

  /**
   * Import user data from JSON string
   */
  public importUserData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.settings) this.saveSettings(data.settings);
      if (data.progress) this.saveProgress(data.progress);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Clear/reset progress
   */
  public resetProgress(): void {
    localStorage.removeItem(STORAGE_KEYS.PROGRESS);
  }
}

export const storageService = new StorageService();
