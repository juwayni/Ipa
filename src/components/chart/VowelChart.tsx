import React from 'react';
import type { IPASymbol, UserSettings } from '../../types/ipa';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { audioService } from '../../services/audioService';

interface VowelChartProps {
  settings: UserSettings;
  onSelectSymbol: (symbol: IPASymbol) => void;
}

export const VowelChart: React.FC<VowelChartProps> = ({ settings, onSelectSymbol }) => {
  const vowelsList = IPA_SYMBOLS.filter((s) => s.category === 'vowels');

  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <div>
          <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
            Official IPA Vowel Trapezoid Quadrilateral
          </h3>
          <p className="text-[11px] text-slate-500">
            Left symbol = Unrounded • Right symbol = Rounded
          </p>
        </div>
        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-bold">
          {vowelsList.length} Vowels
        </span>
      </div>

      {/* Trapezoid Diagram Container */}
      <div className="relative w-full aspect-[16/11] max-w-lg mx-auto bg-slate-50/80 dark:bg-slate-950/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-2 overflow-hidden shadow-inner">
        {/* Official IPA Quadrilateral Grid Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-300 dark:stroke-slate-700 stroke-[1.5] fill-none">
          {/* Main Trapezoid Frame */}
          <polygon points="15%,15% 85%,15% 71%,88% 39%,88%" />
          {/* Height Rows */}
          <line x1="23%" y1="40%" x2="81%" y2="40%" strokeDasharray="3 3" />
          {/* Open-mid row */}
          <line x1="31%" y1="65%" x2="76%" y2="65%" strokeDasharray="3 3" />
          {/* Central Backness Column Line */}
          <line x1="50%" y1="15%" x2="55%" y2="88%" strokeDasharray="3 3" />
        </svg>

        {/* Axis Labels */}
        <div className="absolute top-1.5 left-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Front (前舌)</div>
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Central (央舌)</div>
        <div className="absolute top-1.5 right-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Back (後舌)</div>

        {/* Interactive Vowel Pair Targets */}
        {vowelsList.map((sym) => {
          let x = 50;
          let y = 50;

          if (sym.vowelBackness === 'front') x = 18;
          else if (sym.vowelBackness === 'near-front') x = 30;
          else if (sym.vowelBackness === 'central') x = 51;
          else if (sym.vowelBackness === 'near-back') x = 70;
          else if (sym.vowelBackness === 'back') x = 83;

          if (sym.vowelHeight === 'close') y = 15;
          else if (sym.vowelHeight === 'near-close') y = 28;
          else if (sym.vowelHeight === 'close-mid') y = 40;
          else if (sym.vowelHeight === 'mid') y = 52;
          else if (sym.vowelHeight === 'open-mid') y = 65;
          else if (sym.vowelHeight === 'near-open') y = 76;
          else if (sym.vowelHeight === 'open') y = 88;

          if (sym.roundness === 'rounded') x += 4;

          return (
            <button
              key={sym.id}
              onClick={() => {
                audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                onSelectSymbol(sym);
              }}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 shadow-xs transition-all duration-150 flex items-center justify-center font-serif text-base font-bold active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 z-10 ${
                sym.roundness === 'rounded'
                  ? 'bg-purple-50 dark:bg-purple-950/80 border-purple-500 text-purple-900 dark:text-purple-200'
                  : 'bg-white dark:bg-slate-800 border-indigo-500 text-slate-900 dark:text-slate-100'
              }`}
              aria-label={`Vowel ${sym.symbol}`}
            >
              {sym.symbol}
            </button>
          );
        })}
      </div>

      {/* Responsive List View of Vowels */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 max-h-48 overflow-y-auto no-scrollbar">
        {vowelsList.map((sym) => (
          <button
            key={sym.id}
            onClick={() => {
              audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
              onSelectSymbol(sym);
            }}
            className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 flex items-center justify-between hover:border-indigo-500 transition-all text-left"
          >
            <span className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100">{sym.symbol}</span>
            <span className="text-[10px] text-slate-400 truncate max-w-[60px]">{sym.nameEnglish.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
