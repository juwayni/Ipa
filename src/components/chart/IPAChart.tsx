import type { IPASymbol, UserSettings, PlaceOfArticulation, MannerOfArticulation } from '../../types/ipa';
import React, { useState } from 'react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { VowelChart } from './VowelChart';
import { getTranslation } from '../../i18n';
import { audioService } from '../../services/audioService';
import { Grid, LayoutGrid, Volume2 } from 'lucide-react';

interface IPAChartProps {
  settings: UserSettings;
  onSelectSymbol: (symbol: IPASymbol) => void;
}

export const IPAChart: React.FC<IPAChartProps> = ({ settings, onSelectSymbol }) => {
  const t = getTranslation(settings.language);
  const [activeTab, setActiveTab] = useState<'pulmonic' | 'affricates' | 'vowels' | 'non-pulmonic' | 'diacritics'>('pulmonic');
  const [viewMode, setViewMode] = useState<'grid' | 'cards'>('grid');

  const places: PlaceOfArticulation[] = [
    'bilabial', 'labiodental', 'dental', 'alveolar',
    'postalveolar', 'retroflex', 'palatal', 'velar',
    'uvular', 'pharyngeal', 'glottal'
  ];

  const manners: MannerOfArticulation[] = [
    'plosive', 'nasal', 'trill', 'tap-flap',
    'fricative', 'lateral-fricative', 'approximant', 'lateral-approximant'
  ];

  const getSymbolAtCell = (place: PlaceOfArticulation, manner: MannerOfArticulation, voicing: 'voiceless' | 'voiced') => {
    return IPA_SYMBOLS.find(
      (s) => s.category === 'pulmonic' && s.placeOfArticulation === place && s.mannerOfArticulation === manner && s.voicing === voicing
    );
  };

  const affricateSymbols = IPA_SYMBOLS.filter((s) => s.mannerOfArticulation === 'affricate');
  const nonPulmonicSymbols = IPA_SYMBOLS.filter((s) => s.category === 'non-pulmonic');
  const diacriticSymbols = IPA_SYMBOLS.filter((s) => s.category === 'diacritics' || s.category === 'suprasegmentals');

  return (
    <div className="space-y-4">
      {/* Category Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-1 overflow-x-auto no-scrollbar py-1">
        {[
          { id: 'pulmonic', label: t.chart.pulmonic },
          { id: 'affricates', label: 'Affricates (破擦音)' },
          { id: 'vowels', label: t.chart.vowels },
          { id: 'non-pulmonic', label: t.chart.nonPulmonic },
          { id: 'diacritics', label: t.chart.diacritics },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pulmonic Grid View vs Card View Toggle */}
      {activeTab === 'pulmonic' && (
        <div className="flex items-center justify-between px-1">
          <span className="text-xs text-slate-500 font-medium">
            Tap a symbol to play sound or inspect details
          </span>
          <div className="flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow-xs' : 'text-slate-400'}`}
              aria-label="Grid view"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('cards')}
              className={`p-1.5 rounded-md ${viewMode === 'cards' ? 'bg-white dark:bg-slate-700 shadow-xs' : 'text-slate-400'}`}
              aria-label="Cards view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* TAB CONTENT: PULMONIC CONSONANTS */}
      {activeTab === 'pulmonic' && (
        <>
          {viewMode === 'grid' ? (
            <div className="overflow-x-auto no-scrollbar border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 shadow-sm">
              <table className="w-full text-center border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-[11px] font-bold text-slate-500 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-2 text-left sticky left-0 bg-slate-50 dark:bg-slate-800 border-r border-slate-200 dark:border-slate-800 min-w-[100px]">
                      Manner / Place
                    </th>
                    {places.map((p) => (
                      <th key={p} className="p-2 capitalize min-w-[56px]">
                        {p.replace('-', ' ')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
                  {manners.map((m) => (
                    <tr key={m}>
                      <td className="p-2 text-left text-xs font-semibold text-slate-700 dark:text-slate-300 capitalize sticky left-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800">
                        {m.replace('-', ' ')}
                      </td>
                      {places.map((p) => {
                        const vl = getSymbolAtCell(p, m, 'voiceless');
                        const vd = getSymbolAtCell(p, m, 'voiced');

                        return (
                          <td key={p} className="p-1.5 align-middle">
                            <div className="flex items-center justify-center space-x-1">
                              {vl ? (
                                <button
                                  onClick={() => {
                                    audioService.playSymbolAudio(vl, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                                    onSelectSymbol(vl);
                                  }}
                                  className="w-7 h-8 rounded-md bg-slate-50 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:border-indigo-400 border border-transparent font-serif font-bold text-base flex items-center justify-center transition-all"
                                >
                                  {vl.symbol}
                                </button>
                              ) : (
                                <span className="w-3 text-slate-200 dark:text-slate-800 text-xs">•</span>
                              )}

                              {vd ? (
                                <button
                                  onClick={() => {
                                    audioService.playSymbolAudio(vd, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                                    onSelectSymbol(vd);
                                  }}
                                  className="w-7 h-8 rounded-md bg-indigo-50/50 dark:bg-indigo-950/40 hover:bg-indigo-100 border border-transparent font-serif font-bold text-base text-indigo-900 dark:text-indigo-200 flex items-center justify-center transition-all"
                                >
                                  {vd.symbol}
                                </button>
                              ) : (
                                <span className="w-3 text-slate-200 dark:text-slate-800 text-xs">•</span>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {IPA_SYMBOLS.filter((s) => s.category === 'pulmonic').map((sym) => (
                <div
                  key={sym.id}
                  onClick={() => onSelectSymbol(sym)}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-all shadow-xs"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl font-serif font-bold text-slate-900 dark:text-slate-100">
                      {sym.symbol}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                        {sym.nameEnglish}
                      </h4>
                      <p className="text-[10px] text-slate-400 capitalize">
                        {sym.voicing} • {sym.placeOfArticulation}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                    }}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* TAB CONTENT: AFFRICATES */}
      {activeTab === 'affricates' && (
        <div className="grid grid-cols-1 gap-2.5">
          {affricateSymbols.map((sym) => (
            <div
              key={sym.id}
              onClick={() => onSelectSymbol(sym)}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-all shadow-xs"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center font-serif text-2xl font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                  {sym.symbol}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {sym.nameEnglish}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {sym.description[settings.language]}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all shrink-0 ml-2"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* TAB CONTENT: VOWELS */}
      {activeTab === 'vowels' && (
        <VowelChart settings={settings} onSelectSymbol={onSelectSymbol} />
      )}

      {/* TAB CONTENT: NON-PULMONIC & DIACRITICS */}
      {(activeTab === 'non-pulmonic' || activeTab === 'diacritics') && (
        <div className="grid grid-cols-1 gap-2.5">
          {(activeTab === 'non-pulmonic' ? nonPulmonicSymbols : diacriticSymbols).map((sym) => (
            <div
              key={sym.id}
              onClick={() => onSelectSymbol(sym)}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-all shadow-xs"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center font-serif text-2xl font-bold text-indigo-600 dark:text-indigo-400 shrink-0">
                  {sym.symbol}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {sym.nameEnglish}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {sym.description[settings.language]}
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all shrink-0 ml-2"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
