import React, { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';

interface AdBannerProps {
  type?: 'banner' | 'card' | 'inline';
}

const SAMPLE_ADS = [
  {
    title: "Master Phonetics Fast",
    sponsor: "Linguistics Pro Academy",
    text: "Get certified in Applied Phonetics & Pronunciation Coaching.",
    cta: "Learn More",
    link: "https://example.com/linguistics-pro"
  },
  {
    title: "Speak Native Pitch",
    sponsor: "SpeechLab AI",
    text: "AI-powered real-time acoustic voice analysis and formant tracking.",
    cta: "Try Free",
    link: "https://example.com/speech-lab"
  },
  {
    title: "IPA Type Keyboard for iOS & Android",
    sponsor: "PhoneticTools",
    text: "System-wide IPA keyboard with custom shortcuts for all linguists.",
    cta: "Download",
    link: "https://example.com/ipa-keyboard"
  }
];

export const AdBanner: React.FC<AdBannerProps> = () => {
  const [dismissed, setDismissed] = useState(false);
  const [adIndex] = useState(() => Math.floor(Math.random() * SAMPLE_ADS.length));

  if (dismissed) return null;

  const ad = SAMPLE_ADS[adIndex];

  return (
    <div className="relative my-3 p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 border border-amber-500/20 dark:border-amber-400/20 backdrop-blur-xs flex items-center justify-between shadow-2xs">
      <div className="flex items-center space-x-3 pr-2">
        <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold text-xs">
          Ad
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-bold text-xs text-slate-900 dark:text-slate-100 line-clamp-1">{ad.title}</span>
            <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">• {ad.sponsor}</span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{ad.text}</p>
        </div>
      </div>

      <div className="flex items-center space-x-2 shrink-0">
        <a
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-2xs flex items-center space-x-1 transition-transform active:scale-95"
        >
          <span>{ad.cta}</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          aria-label="Dismiss ad"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
