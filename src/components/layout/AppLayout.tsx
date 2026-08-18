import type { UserSettings } from '../../types/ipa';
import React, { useEffect } from 'react';
import { Home, Grid, Brain, Keyboard, BarChart2, Search, Settings } from 'lucide-react';
import { getTranslation } from '../../i18n';

interface AppLayoutProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
  children: React.ReactNode;
  settings: UserSettings;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  currentTab,
  onTabChange,
  children,
  settings,
}) => {
  const t = getTranslation(settings.language);

  // Apply theme class to document body
  useEffect(() => {
    const root = document.documentElement;
    if (settings.theme === 'dark' || (settings.theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (settings.highContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    if (settings.reducedMotion) {
      root.classList.add('reduced-motion');
    } else {
      root.classList.remove('reduced-motion');
    }
  }, [settings]);

  const navItems = [
    { id: 'home', label: t.nav.home, icon: Home },
    { id: 'chart', label: t.nav.chart, icon: Grid },
    { id: 'practice', label: t.nav.practice, icon: Brain },
    { id: 'keyboard', label: t.nav.keyboard, icon: Keyboard },
    { id: 'progress', label: t.nav.progress, icon: BarChart2 },
    { id: 'search', label: t.nav.search, icon: Search },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            ʃ
          </div>
          <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            {t.app.title}
          </span>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={() => onTabChange('search')}
            aria-label={t.nav.search}
            className={`p-2 rounded-full transition-colors ${
              currentTab === 'search'
                ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => onTabChange('settings')}
            aria-label={t.nav.settings}
            className={`p-2 rounded-full transition-colors ${
              currentTab === 'settings'
                ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content View Container */}
      <main className="flex-1 pb-20 max-w-2xl mx-auto w-full px-4 pt-4">
        {children}
      </main>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-2 py-1">
        <div className="max-w-2xl mx-auto flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                aria-label={item.label}
                className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] min-h-[48px] rounded-xl transition-all duration-150 ${
                  isActive
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'scale-110' : ''}`} />
                <span className="text-[10px] tracking-tight truncate max-w-[64px]">
                  {item.label}
                </span>
                {isActive && (
                  <span className="w-1 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
