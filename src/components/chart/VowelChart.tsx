import type { IPASymbol, UserSettings } from '../../types/ipa';
import React from 'react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { audioService } from '../../services/audioService';

interface VowelChartProps {
  settings: UserSettings;
  onSelectSymbol: (symbol: IPASymbol) => void;
}

interface VowelPoint {
  symbolId: string;
  x: number; // percentage width 0-100
  y: number; // percentage height 0-100
  labelPosition?: 'left' | 'right';
  rounded?: boolean;
}

export const VowelChart: React.FC<VowelChartProps> = ({ settings, onSelectSymbol }) => {
  const vowelMap: VowelPoint[] = [
    // Close Vowels
    { symbolId: 'i', x: 8, y: 12, labelPosition: 'left' },
    { symbolId: 'y', x: 18, y: 12, labelPosition: 'right' },
    { symbolId: 'u', x: 88, y: 12, labelPosition: 'right' },

    // Close-Mid Vowels
    { symbolId: 'e', x: 22, y: 38, labelPosition: 'left' },
    { symbolId: 'o', x: 82, y: 38, labelPosition: 'right' },

    // Mid Vowel
    { symbolId: 'schwa', x: 50, y: 50, labelPosition: 'right' },

    // Open-Mid Vowels
    { symbolId: 'epsilon', x: 34, y: 65, labelPosition: 'left' },
    { symbolId: 'open_o', x: 76, y: 65, labelPosition: 'right' },

    // Near-Open Vowels
    { symbolId: 'ash', x: 38, y: 78, labelPosition: 'left' },

    // Open Vowels
    { symbolId: 'a', x: 45, y: 88, labelPosition: 'left' },
    { symbolId: 'script_a', x: 72, y: 88, labelPosition: 'left' },
    { symbolId: 'turned_script_a', x: 82, y: 88, labelPosition: 'right' },
  ];

  const getSymbol = (id: string): IPASymbol | undefined => {
    return IPA_SYMBOLS.find((s) => s.id === id);
  };

  return (
    <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">
          Interactive Vowel Quadrilateral
        </h3>
        <span className="text-xs text-slate-500">Tap vowel to listen</span>
      </div>

      {/* Trapezoid Diagram Container */}
      <div className="relative w-full aspect-[4/3] max-w-md mx-auto bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800 p-2 overflow-hidden">
        {/* SVG Background Quadrilateral Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-300 dark:stroke-slate-700 stroke-[1.5] fill-none">
          {/* Main Trapezoid Outline */}
          <polygon points="12%,12% 88%,12% 72%,88% 45%,88%" />
          {/* Horizontal Grid lines */}
          <line x1="22%" y1="38%" x2="82%" y2="38%" strokeDasharray="3 3" />
          {/* Mid height */}
          <line x1="34%" y1="65%" x2="76%" y2="65%" strokeDasharray="3 3" />
          {/* Vertical Center line */}
          <line x1="50%" y1="12%" x2="58%" y2="88%" strokeDasharray="3 3" />
        </svg>

        {/* Axis Labels */}
        <div className="absolute top-1 left-2 text-[10px] font-semibold text-slate-400">Front</div>
        <div className="absolute top-1 right-2 text-[10px] font-semibold text-slate-400">Back</div>
        <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">Close</div>
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-400">Open</div>

        {/* Vowel Target Buttons */}
        {vowelMap.map((pt) => {
          const sym = getSymbol(pt.symbolId);
          if (!sym) return null;

          return (
            <button
              key={pt.symbolId}
              onClick={() => {
                audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                onSelectSymbol(sym);
              }}
              style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 border-2 border-indigo-500 shadow-md hover:scale-125 transition-transform flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-indigo-400 z-10"
              aria-label={`Vowel ${sym.symbol}`}
            >
              <span className="font-serif text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600">
                {sym.symbol}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
