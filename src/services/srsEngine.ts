import type { UserProgress, UserSymbolProgress } from '../types/ipa';
import { storageService } from './storageService';

export type SRSRating = 'again' | 'hard' | 'good' | 'easy';

class SRSEngine {
  /**
   * Calculate next SRS review interval based on rating (Again, Hard, Good, Easy)
   */
  public processReview(
    symbolId: string,
    rating: SRSRating,
    currentProgress: UserProgress
  ): UserProgress {
    const symbolProg = storageService.getSymbolProgress(symbolId, currentProgress);

    let { intervalDays, easeFactor, timesSeen, timesCorrect, timesIncorrect } = symbolProg;
    timesSeen += 1;

    switch (rating) {
      case 'again':
        intervalDays = 1;
        easeFactor = Math.max(1.3, easeFactor - 0.2);
        timesIncorrect += 1;
        break;
      case 'hard':
        intervalDays = intervalDays === 0 ? 1 : Math.round(intervalDays * 1.2);
        easeFactor = Math.max(1.3, easeFactor - 0.15);
        timesCorrect += 1;
        break;
      case 'good':
        intervalDays = intervalDays === 0 ? 1 : Math.round(intervalDays * easeFactor);
        timesCorrect += 1;
        break;
      case 'easy':
        intervalDays = intervalDays === 0 ? 2 : Math.round(intervalDays * easeFactor * 1.3);
        easeFactor += 0.15;
        timesCorrect += 1;
        break;
    }

    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + intervalDays);

    const updatedSymbolProg: UserSymbolProgress = {
      ...symbolProg,
      timesSeen,
      timesCorrect,
      timesIncorrect,
      lastReviewed: new Date().toISOString(),
      nextReview: nextDate.toISOString(),
      intervalDays,
      easeFactor,
      difficulty: timesSeen > 0 ? 1 - timesCorrect / timesSeen : 0.5,
      isDifficult: (timesIncorrect / (timesSeen || 1)) > 0.4 && timesSeen >= 3,
    };

    const updatedSymbols = {
      ...currentProgress.symbolsProgress,
      [symbolId]: updatedSymbolProg,
    };

    // Update streak and today reviewed count
    const todayStr = new Date().toISOString().split('T')[0];
    let newStreak = currentProgress.streakCount;
    if (currentProgress.todayReviewedCount === 0) {
      newStreak += 1;
    }

    // Calculate total mastery percentage
    const allKnown = Object.values(updatedSymbols);
    const masteredCount = allKnown.filter((s) => s.intervalDays >= 7 && s.timesCorrect >= 3).length;
    const overallMastery = Math.min(100, Math.round((masteredCount / 46) * 100));

    const updatedProgress: UserProgress = {
      ...currentProgress,
      streakCount: newStreak,
      longestStreak: Math.max(newStreak, currentProgress.longestStreak),
      lastActiveDate: todayStr,
      todayReviewedCount: currentProgress.todayReviewedCount + 1,
      symbolsProgress: updatedSymbols,
      overallMastery,
    };

    storageService.saveProgress(updatedProgress);
    return updatedProgress;
  }

  /**
   * Get symbols that are due for review today
   */
  public getDueSymbols(symbolIds: string[], progress: UserProgress): string[] {
    const now = new Date();
    return symbolIds.filter((id) => {
      const sp = progress.symbolsProgress[id];
      if (!sp) return true; // Unseen symbols
      return new Date(sp.nextReview) <= now;
    });
  }
}

export const srsEngine = new SRSEngine();
