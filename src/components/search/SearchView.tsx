import type { IPASymbol, UserSettings } from '../../types/ipa';
import React, { useState } from 'react';
import { IPA_SYMBOLS } from '../../data/ipaSymbols';
import { getTranslation } from '../../i18n';
import { audioService } from '../../services/audioService';
import { Search, Volume2 } from 'lucide-react';

interface SearchViewProps {
  settings: UserSettings;
  onSelectSymbol: (symbol: IPASymbol) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({ settings, onSelectSymbol }) => {
  const t = getTranslation(settings.language);
  const [query, setQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const filteredSymbols = IPA_SYMBOLS.filter((s) => {
    const q = query.toLowerCase().trim();

    const matchesCategory = categoryFilter === 'all' || s.category === categoryFilter;

    if (!q) return matchesCategory;

    const matchesSymbol = s.symbol.toLowerCase().includes(q);
    const matchesUnicode = s.unicode.toLowerCase().includes(q);
    const matchesEn = s.nameEnglish.toLowerCase().includes(q);
    const matchesJa = s.nameJapanese.toLowerCase().includes(q);
    const matchesHu = s.nameHungarian.toLowerCase().includes(q);
    const matchesPlace = s.placeOfArticulation?.toLowerCase().includes(q);
    const matchesManner = s.mannerOfArticulation?.toLowerCase().includes(q);
    const matchesExample = s.exampleWords.some(
      (ex) => ex.word.toLowerCase().includes(q) || ex.meaning.toLowerCase().includes(q)
    );

    return matchesCategory && (matchesSymbol || matchesUnicode || matchesEn || matchesJa || matchesHu || matchesPlace || matchesManner || matchesExample);
  });

  return (
    <div className="space-y-4">
      {/* Search Bar Input */}
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.search.placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm font-medium text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none shadow-sm transition-all"
        />
      </div>

      {/* Category Quick Filter Chips */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 pb-2 space-x-1 overflow-x-auto no-scrollbar">
        {[
          { id: 'all', label: t.search.allCategories },
          { id: 'pulmonic', label: t.chart.pulmonic },
          { id: 'vowels', label: t.chart.vowels },
          { id: 'non-pulmonic', label: t.chart.nonPulmonic },
          { id: 'diacritics', label: t.chart.diacritics },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCategoryFilter(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              categoryFilter === cat.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results List */}
      <div className="space-y-2">
        {filteredSymbols.length > 0 ? (
          filteredSymbols.map((sym) => (
            <div
              key={sym.id}
              onClick={() => onSelectSymbol(sym)}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between cursor-pointer hover:border-indigo-500 transition-all shadow-xs group"
            >
              <div className="flex items-center space-x-3.5">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center font-serif text-2xl font-bold text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                  {sym.symbol}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    {settings.language === 'ja' ? sym.nameJapanese : settings.language === 'hu' ? sym.nameHungarian : sym.nameEnglish}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">
                    {sym.category} • {sym.placeOfArticulation || sym.vowelHeight || 'Symbol'}
                  </p>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  audioService.playSymbolAudio(sym, { speed: settings.playbackSpeed, volume: settings.audioVolume });
                }}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-indigo-600 hover:text-white transition-all shrink-0"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-2">
            <p className="text-slate-500 text-sm font-medium">{t.search.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
};
