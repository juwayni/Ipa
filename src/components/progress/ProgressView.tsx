import type { UserProgress, UserSettings } from '../../types/ipa';
import React from 'react';
import { Award, Flame, Star, Zap, CheckCircle2, ShieldCheck } from 'lucide-react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { getTranslation } from '../../i18n';

interface ProgressViewProps {
  progress: UserProgress;
  settings: UserSettings;
}

export const ProgressView: React.FC<ProgressViewProps> = ({ progress, settings }) => {
  const t = getTranslation(settings.language);

  const totalSymbols = IPA_SYMBOLS.length;
  const knownSymbolsCount = Object.keys(progress.symbolsProgress).length;
  const masteredSymbolsCount = Object.values(progress.symbolsProgress).filter(
    (s) => s.intervalDays >= 7 && s.timesCorrect >= 3
  ).length;

  const consonants = IPA_SYMBOLS.filter((s) => s.category === 'pulmonic' || s.category === 'non-pulmonic');
  const vowels = IPA_SYMBOLS.filter((s) => s.category === 'vowels');
  const diacritics = IPA_SYMBOLS.filter((s) => s.category === 'diacritics');

  const getCategoryMastery = (symbolsList: typeof IPA_SYMBOLS) => {
    const total = symbolsList.length;
    if (total === 0) return 0;
    const count = symbolsList.filter((s) => {
      const sp = progress.symbolsProgress[s.id];
      return sp && sp.timesCorrect > 0;
    }).length;
    return Math.round((count / total) * 100);
  };

  const achievements = [
    {
      id: 'first_step',
      title: 'First Phonetic Step',
      desc: 'Studied your first IPA symbol',
      icon: Zap,
      unlocked: knownSymbolsCount >= 1,
    },
    {
      id: 'streak_3',
      title: '3-Day Streak Legend',
      desc: 'Maintained a 3-day learning streak',
      icon: Flame,
      unlocked: progress.streakCount >= 3,
    },
    {
      id: 'master_10',
      title: 'IPA Apprentice',
      desc: 'Mastered 10 phonemes',
      icon: Star,
      unlocked: masteredSymbolsCount >= 10,
    },
    {
      id: 'vowel_expert',
      title: 'Vowel Quadrilateral Specialist',
      desc: 'Reached 50% mastery on vowels',
      icon: CheckCircle2,
      unlocked: getCategoryMastery(vowels) >= 50,
    },
    {
      id: 'full_mastery',
      title: 'Linguistics Master',
      desc: 'Reached 80%+ total IPA mastery',
      icon: ShieldCheck,
      unlocked: progress.overallMastery >= 80,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Overall Mastery Ring Display */}
      <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="font-bold text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider">
          {t.progress.overallMastery}
        </h2>

        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path
              className="text-slate-100 dark:text-slate-800"
              strokeWidth="3.5"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="text-indigo-600 dark:text-indigo-400 transition-all duration-1000"
              strokeDasharray={`${progress.overallMastery}, 100`}
              strokeWidth="3.5"
              strokeLinecap="round"
              stroke="currentColor"
              fill="none"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              {progress.overallMastery}%
            </span>
            <span className="text-[10px] font-semibold text-slate-400">Mastery</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full pt-2 border-t border-slate-100 dark:border-slate-800 text-center">
          <div>
            <span className="block text-lg font-bold text-slate-900 dark:text-slate-100">{knownSymbolsCount}</span>
            <span className="text-[10px] text-slate-400">Studied</span>
          </div>
          <div>
            <span className="block text-lg font-bold text-emerald-600 dark:text-emerald-400">{masteredSymbolsCount}</span>
            <span className="text-[10px] text-slate-400">Mastered</span>
          </div>
          <div>
            <span className="block text-lg font-bold text-slate-900 dark:text-slate-100">{totalSymbols}</span>
            <span className="text-[10px] text-slate-400">Total</span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="block text-base font-bold text-slate-900 dark:text-slate-100">{progress.streakCount} days</span>
            <span className="text-xs text-slate-400">Current Streak</span>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-base font-bold text-slate-900 dark:text-slate-100">{progress.longestStreak} days</span>
            <span className="text-xs text-slate-400">Best Streak</span>
          </div>
        </div>
      </div>

      {/* Achievements Showcase */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2 flex items-center space-x-2">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Achievements & Badges</span>
        </h3>

        <div className="space-y-2">
          {achievements.map((ach) => {
            const Icon = ach.icon;
            return (
              <div
                key={ach.id}
                className={`p-3 rounded-2xl border flex items-center space-x-3 transition-all ${
                  ach.unlocked
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-950 dark:text-amber-100'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200/60 dark:border-slate-800 opacity-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    ach.unlocked ? 'bg-amber-500 text-white shadow-xs' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs">{ach.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">{ach.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          {t.progress.categoryMastery}
        </h3>

        {[
          { label: t.progress.consonants, percent: getCategoryMastery(consonants) },
          { label: t.progress.vowels, percent: getCategoryMastery(vowels) },
          { label: t.progress.diacritics, percent: getCategoryMastery(diacritics) },
        ].map((cat, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-700 dark:text-slate-300">{cat.label}</span>
              <span className="text-indigo-600 dark:text-indigo-400">{cat.percent}%</span>
            </div>
            <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${cat.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
