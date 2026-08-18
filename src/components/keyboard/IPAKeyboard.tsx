import type { IPASymbol, UserSettings } from '../../types/ipa';
import React, { useState } from 'react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { getTranslation } from '../../i18n';
import { audioService } from '../../services/audioService';
import { Copy, Delete, Check } from 'lucide-react';

interface IPAKeyboardProps {
  settings: UserSettings;
}

export const IPAKeyboard: React.FC<IPAKeyboardProps> = ({ settings }) => {
  const t = getTranslation(settings.language);
  const [typedText, setTypedText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [keyboardTab, setKeyboardTab] = useState<'consonants' | 'vowels' | 'diacritics' | 'suprasegmentals'>('consonants');

  const consonants = IPA_SYMBOLS.filter((s) => s.category === 'pulmonic' || s.category === 'non-pulmonic');
  const vowels = IPA_SYMBOLS.filter((s) => s.category === 'vowels');
  const diacritics = IPA_SYMBOLS.filter((s) => s.category === 'diacritics');
  const suprasegmentals = IPA_SYMBOLS.filter((s) => s.category === 'suprasegmentals');

  const currentCategorySymbols =
    keyboardTab === 'consonants'
      ? consonants
      : keyboardTab === 'vowels'
      ? vowels
      : keyboardTab === 'diacritics'
      ? diacritics
      : suprasegmentals;

  const handleInsertSymbol = (symbol: IPASymbol) => {
    setTypedText((prev) => prev + symbol.symbol);
    audioService.playSymbolAudio(symbol, { speed: settings.playbackSpeed, volume: settings.audioVolume });
  };

  const handleBackspace = () => {
    setTypedText((prev) => prev.slice(0, -1));
  };

  const handleCopy = () => {
    if (!typedText) return;
    navigator.clipboard.writeText(typedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Transcription Display Area */}
      <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Phonetic Transcription
          </span>
          {copied && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center space-x-1">
              <Check className="w-3.5 h-3.5" />
              <span>{t.keyboard.copied}</span>
            </span>
          )}
        </div>

        <div className="min-h-[72px] p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 font-serif text-3xl font-bold text-slate-900 dark:text-slate-100 flex items-center overflow-x-auto no-scrollbar tracking-wide">
          {typedText ? (
            <span>/{typedText}/</span>
          ) : (
            <span className="text-slate-400 font-sans text-sm font-normal">
              Tap keys below to compose IPA transcription...
            </span>
          )}
        </div>

        <div className="flex items-center justify-between space-x-2 pt-1">
          <button
            onClick={() => setTypedText('')}
            disabled={!typedText}
            className="px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 font-semibold text-xs disabled:opacity-40 transition-all"
          >
            {t.keyboard.clear}
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleBackspace}
              disabled={!typedText}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-semibold text-xs disabled:opacity-40 transition-all flex items-center space-x-1"
              aria-label={t.keyboard.backspace}
            >
              <Delete className="w-4 h-4" />
            </button>

            <button
              onClick={handleCopy}
              disabled={!typedText}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm disabled:opacity-40 transition-all flex items-center space-x-1.5"
            >
              <Copy className="w-4 h-4" />
              <span>{t.keyboard.copy}</span>
            </button>
          </div>
        </div>
      </div>

      {/* IPA Virtual Keyboard Palette */}
      <div className="p-4 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        {/* Category Tabs */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 pb-2 space-x-1 overflow-x-auto no-scrollbar">
          {[
            { id: 'consonants', label: t.keyboard.consonants },
            { id: 'vowels', label: t.keyboard.vowels },
            { id: 'diacritics', label: t.keyboard.diacritics },
            { id: 'suprasegmentals', label: t.keyboard.suprasegmentals },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setKeyboardTab(tab.id as typeof keyboardTab)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                keyboardTab === tab.id
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Character Keys Grid */}
        <div className="grid grid-cols-6 gap-2 max-h-[260px] overflow-y-auto no-scrollbar p-1">
          {currentCategorySymbols.map((sym) => (
            <button
              key={sym.id}
              onClick={() => handleInsertSymbol(sym)}
              className="aspect-square rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/80 hover:border-indigo-400 border border-slate-200/60 dark:border-slate-700/50 font-serif font-bold text-2xl text-slate-900 dark:text-slate-100 flex items-center justify-center transition-all active:scale-95 shadow-2xs"
            >
              {sym.symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
