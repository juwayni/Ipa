import type { UserSettings, UserProgress } from '../../types/ipa';
import type { Language } from '../../i18n';
import React, { useState } from 'react';
import { storageService } from '../../services/storageService';
import { getTranslation } from '../../i18n';
import { Globe, Sun, Moon, Eye, Download, Upload, RotateCcw, BookOpen } from 'lucide-react';

interface SettingsViewProps {
  settings: UserSettings;
  onSettingsChange: (newSettings: UserSettings) => void;
  onProgressChange: (newProgress: UserProgress) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  settings,
  onSettingsChange,
  onProgressChange,
}) => {
  const t = getTranslation(settings.language);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleLanguageChange = (lang: Language) => {
    const updated = { ...settings, language: lang };
    storageService.saveSettings(updated);
    onSettingsChange(updated);
  };

  const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
    const updated = { ...settings, theme };
    storageService.saveSettings(updated);
    onSettingsChange(updated);
  };

  const handleToggleContrast = () => {
    const updated = { ...settings, highContrast: !settings.highContrast };
    storageService.saveSettings(updated);
    onSettingsChange(updated);
  };

  const handleToggleMotion = () => {
    const updated = { ...settings, reducedMotion: !settings.reducedMotion };
    storageService.saveSettings(updated);
    onSettingsChange(updated);
  };

  const handleExportData = () => {
    const dataStr = storageService.exportUserData();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ipa-master-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const content = evt.target?.result as string;
      const success = storageService.importUserData(content);
      if (success) {
        setImportStatus('Data imported successfully!');
        onSettingsChange(storageService.getSettings());
        onProgressChange(storageService.getProgress());
      } else {
        setImportStatus('Failed to import data. Invalid file format.');
      }
      setTimeout(() => setImportStatus(null), 3000);
    };
    reader.readAsText(file);
  };

  const handleResetProgress = () => {
    if (window.confirm('Are you sure you want to reset all learning progress? This action cannot be undone.')) {
      storageService.resetProgress();
      onProgressChange(storageService.getProgress());
    }
  };

  return (
    <div className="space-y-4">
      {/* Language Selection Card */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <Globe className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            {t.settings.language}
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'en', label: 'English' },
            { id: 'ja', label: '日本語' },
            { id: 'hu', label: 'Magyar' },
          ].map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleLanguageChange(lang.id as Language)}
              className={`p-3 rounded-2xl font-bold text-xs transition-all border ${
                settings.language === lang.id
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>

      {/* Theme Selection Card */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <Sun className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            {t.settings.theme}
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'light', label: t.settings.light, icon: Sun },
            { id: 'dark', label: t.settings.dark, icon: Moon },
            { id: 'system', label: t.settings.system, icon: Globe },
          ].map((th) => {
            const Icon = th.icon;
            return (
              <button
                key={th.id}
                onClick={() => handleThemeChange(th.id as typeof settings.theme)}
                className={`p-3 rounded-2xl font-bold text-xs transition-all border flex flex-col items-center space-y-1 ${
                  settings.theme === th.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{th.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Accessibility Preferences */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <Eye className="w-5 h-5 text-emerald-500" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            {t.settings.accessibility}
          </h3>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50">
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {t.settings.highContrast}
            </span>
            <input
              type="checkbox"
              checked={settings.highContrast}
              onChange={handleToggleContrast}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/50">
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {t.settings.reducedMotion}
            </span>
            <input
              type="checkbox"
              checked={settings.reducedMotion}
              onChange={handleToggleMotion}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Backup & Data Actions */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-2">
          {t.settings.data}
        </h3>

        {importStatus && (
          <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
            {importStatus}
          </p>
        )}

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleExportData}
              className="flex-1 py-2.5 px-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>{t.settings.exportData}</span>
            </button>

            <label className="flex-1 py-2.5 px-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold text-xs flex items-center justify-center space-x-1.5 cursor-pointer transition-colors">
              <Upload className="w-4 h-4" />
              <span>{t.settings.importData}</span>
              <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
            </label>
          </div>

          <button
            onClick={handleResetProgress}
            className="w-full py-2.5 px-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 text-rose-600 dark:text-rose-400 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.settings.resetProgress}</span>
          </button>
        </div>
      </div>

      {/* References & Licenses Card */}
      <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 text-xs text-slate-600 dark:text-slate-400">
        <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-2">
          <BookOpen className="w-5 h-5 text-indigo-600" />
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            {t.settings.references}
          </h3>
        </div>

        <ul className="space-y-2 list-disc list-inside">
          <li>International Phonetic Association (IPA) Official Charts & Terminology</li>
          <li>Audio recordings sourced under Creative Commons licenses from Wikimedia Commons</li>
          <li>Japanese phonetics nomenclature verified against standard linguistic references</li>
          <li>Hungarian phonetics nomenclature aligned with Magyar Fonetikai Szótár</li>
        </ul>
      </div>
    </div>
  );
};
