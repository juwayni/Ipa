import type { IPASymbol, UserSettings, UserProgress } from '../../types/ipa';
import React, { useState } from 'react';
import { audioService } from '../../services/audioService';
import { storageService } from '../../services/storageService';
import { getTranslation } from '../../i18n';
import { Volume2, Star, AlertCircle, X, Snail, Save } from 'lucide-react';

interface SymbolDetailProps {
  symbol: IPASymbol;
  settings: UserSettings;
  progress: UserProgress;
  onClose: () => void;
  onProgressChange: (newProgress: UserProgress) => void;
}

export const SymbolDetail: React.FC<SymbolDetailProps> = ({
  symbol,
  settings,
  progress,
  onClose,
  onProgressChange,
}) => {
  const t = getTranslation(settings.language);
  const symbolProg = storageService.getSymbolProgress(symbol.id, progress);

  const [notes, setNotes] = useState<string>(symbolProg.notes || '');
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    const updated = {
      ...progress,
      symbolsProgress: {
        ...progress.symbolsProgress,
        [symbol.id]: {
          ...symbolProg,
          isFavorite: !symbolProg.isFavorite,
        },
      },
    };
    storageService.saveProgress(updated);
    onProgressChange(updated);
  };

  const handleToggleDifficult = () => {
    const updated = {
      ...progress,
      symbolsProgress: {
        ...progress.symbolsProgress,
        [symbol.id]: {
          ...symbolProg,
          isDifficult: !symbolProg.isDifficult,
        },
      },
    };
    storageService.saveProgress(updated);
    onProgressChange(updated);
  };

  const handleSaveNotes = () => {
    const updated = {
      ...progress,
      symbolsProgress: {
        ...progress.symbolsProgress,
        [symbol.id]: {
          ...symbolProg,
          notes,
        },
      },
    };
    storageService.saveProgress(updated);
    onProgressChange(updated);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="w-full max-w-xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-y-auto flex flex-col animate-in slide-in-from-bottom duration-200">

        {/* Sticky Header */}
        <div className="sticky top-0 z-20 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleToggleFavorite}
              className={`p-2 rounded-full transition-colors ${
                symbolProg.isFavorite ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/50' : 'text-slate-400 hover:text-amber-500'
              }`}
            >
              <Star className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={handleToggleDifficult}
              className={`p-2 rounded-full transition-colors ${
                symbolProg.isDifficult ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/50' : 'text-slate-400 hover:text-rose-500'
              }`}
            >
              <AlertCircle className="w-5 h-5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Hero Symbol Display & Audio Playback */}
        <div className="p-6 bg-gradient-to-b from-indigo-50/50 to-transparent dark:from-indigo-950/30 text-center space-y-4">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-white dark:bg-slate-800 border-2 border-indigo-500 shadow-lg font-serif text-6xl font-bold text-slate-900 dark:text-slate-100">
            {symbol.symbol}
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {symbol.nameEnglish}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Unicode: {symbol.unicode}
            </p>
          </div>

          {/* Audio Action Buttons */}
          <div className="flex items-center justify-center space-x-3 pt-2">
            <button
              onClick={() => audioService.playSymbolAudio(symbol, { speed: 1.0, volume: settings.audioVolume })}
              className="px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md flex items-center space-x-2 transition-transform active:scale-95"
            >
              <Volume2 className="w-5 h-5" />
              <span>{t.symbolDetail.hearSound}</span>
            </button>

            <button
              onClick={() => audioService.playSymbolAudio(symbol, { speed: 0.6, volume: settings.audioVolume })}
              className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-xs flex items-center space-x-1.5 transition-all"
            >
              <Snail className="w-4 h-4" />
              <span>{t.symbolDetail.slowPlayback}</span>
            </button>
          </div>
        </div>

        {/* Detailed Metadata & Guides */}
        <div className="p-5 space-y-5 flex-1">
          {/* Trilingual Terminology Card */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 space-y-2.5">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-400">
              {t.symbolDetail.trilingualNames}
            </h3>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700">
                <span className="font-semibold text-slate-400 text-[10px] block">English</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{symbol.nameEnglish}</span>
              </div>
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700">
                <span className="font-semibold text-slate-400 text-[10px] block">日本語</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{symbol.nameJapanese}</span>
              </div>
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700">
                <span className="font-semibold text-slate-400 text-[10px] block">Magyar</span>
                <span className="font-medium text-slate-800 dark:text-slate-200">{symbol.nameHungarian}</span>
              </div>
            </div>
          </div>

          {/* Articulatory Explanation */}
          <div className="space-y-2">
            <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
              {t.symbolDetail.articulatoryGuide}
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/40 p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
              {symbol.articulatoryGuide[settings.language]}
            </p>
          </div>

          {/* Example Words */}
          {symbol.exampleWords && symbol.exampleWords.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                {t.symbolDetail.exampleWords}
              </h3>
              <div className="space-y-2">
                {symbol.exampleWords.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-sm text-slate-900 dark:text-slate-100">{ex.word}</span>
                        <span className="text-xs font-serif text-indigo-600 dark:text-indigo-400">{ex.transcription}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        {ex.language} • {ex.meaning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Personal Notes */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                {t.symbolDetail.personalNotes}
              </h3>
              {isSaved && <span className="text-xs text-emerald-600 font-semibold">Saved!</span>}
            </div>
            <div className="space-y-2">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t.symbolDetail.notesPlaceholder}
                className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-20"
              />
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold flex items-center space-x-1.5 hover:opacity-90 transition-opacity"
              >
                <Save className="w-3.5 h-3.5" />
                <span>{t.symbolDetail.saveNotes}</span>
              </button>
            </div>
          </div>

          {/* Audio Source Attribution */}
          {symbol.audioAttribution && (
            <div className="p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/30 text-[11px] text-slate-500 space-y-1">
              <span className="font-semibold block">{t.symbolDetail.audioAttribution}:</span>
              <p>
                {symbol.audioAttribution.source} • Creator: {symbol.audioAttribution.creator || 'Wikimedia'} • License: {symbol.audioAttribution.license}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
