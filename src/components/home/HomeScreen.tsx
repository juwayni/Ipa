import type { UserProgress, UserSettings, IPASymbol } from '../../types/ipa';
import React from 'react';
import { Flame, BookOpen, Brain, Volume2, Sparkles, ArrowRight } from 'lucide-react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { CURRICULUM_LEVELS } from '../../data/curriculum';
import { getTranslation } from '../../i18n';
import { audioService } from '../../services/audioService';
import { AdBanner } from '../common/AdBanner';

interface HomeScreenProps {
  progress: UserProgress;
  settings: UserSettings;
  onNavigate: (tab: string) => void;
  onSelectSymbol: (symbol: IPASymbol) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  progress,
  settings,
  onNavigate,
  onSelectSymbol,
}) => {
  const t = getTranslation(settings.language);

  // Determine weak/difficult symbols to review
  const weakSymbolIds = Object.values(progress.symbolsProgress)
    .filter((sp) => sp.isDifficult || (sp.timesSeen > 0 && sp.timesCorrect / sp.timesSeen < 0.6))
    .map((sp) => sp.symbolId);

  // Fallback default symbols if user hasn't flagged any as weak yet
  const displayWeakSymbols = IPA_SYMBOLS.filter((s) =>
    weakSymbolIds.length > 0 ? weakSymbolIds.includes(s.id) : ['esh', 'theta', 'gh', 'open_o'].includes(s.id)
  ).slice(0, 4);

  // Calculate daily goal percentage
  const goalPercent = Math.min(100, Math.round((progress.todayReviewedCount / (progress.dailyGoal || 10)) * 100));

  // Current recommended curriculum level
  const currentLevel = CURRICULUM_LEVELS.find((l) => l.level === (progress.unlockedLevels || 1)) || CURRICULUM_LEVELS[0];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-semibold tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
              IPA Learning Lab
            </span>
            <div className="flex items-center space-x-1 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold">
              <Flame className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{progress.streakCount} {t.home.streak}</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold tracking-tight">
            {t.home.welcome} 👋
          </h1>

          {/* Daily Goal Progress Bar */}
          <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm space-y-2 border border-white/10">
            <div className="flex justify-between text-xs font-medium">
              <span>{t.home.todaysProgress}</span>
              <span>{progress.todayReviewedCount} / {progress.dailyGoal} {t.home.todaysProgress}</span>
            </div>
            <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-500 rounded-full"
                style={{ width: `${goalPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Monetization Ad Banner */}
      <AdBanner />

      {/* Quick Action Grid */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onNavigate('practice')}
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-indigo-500 dark:hover:border-indigo-500 transition-all text-left group flex flex-col justify-between"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              {t.home.startQuiz}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              5-min session
            </p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('chart')}
          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-purple-500 dark:hover:border-purple-500 transition-all text-left group flex flex-col justify-between"
        >
          <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
              {t.home.viewChart}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Full IPA reference
            </p>
          </div>
        </button>
      </div>

      {/* Weak Symbols Review Section */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="font-bold text-sm text-slate-900 dark:text-slate-100">
              {t.home.weakSymbols}
            </h2>
          </div>
          <button
            onClick={() => onNavigate('practice')}
            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Review all
          </button>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {displayWeakSymbols.map((sym) => (
            <div
              key={sym.id}
              onClick={() => onSelectSymbol(sym)}
              className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-all group"
            >
              <span className="text-2xl font-serif text-slate-900 dark:text-slate-100 mb-1 group-hover:scale-110 transition-transform">
                {sym.symbol}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                }}
                className="p-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                aria-label={`Play sound for ${sym.symbol}`}
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Lesson Banner */}
      <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900 flex items-center justify-between">
        <div className="space-y-1 pr-2">
          <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
            {t.home.recommendedLesson}
          </span>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            {currentLevel.title[settings.language]}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
            {currentLevel.description[settings.language]}
          </p>
        </div>
        <button
          onClick={() => onNavigate('practice')}
          className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shrink-0 flex items-center space-x-1 shadow-sm"
        >
          <span>Start</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
