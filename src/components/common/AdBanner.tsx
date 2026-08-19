import React, { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Capacitor } from '@capacitor/core';
import { AdMob, BannerAdSize, BannerAdPosition } from '@capacitor-community/admob';

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

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export const AdBanner: React.FC<AdBannerProps> = () => {
  const [dismissed, setDismissed] = useState(false);
  const [adIndex] = useState(() => Math.floor(Math.random() * SAMPLE_ADS.length));
  const isNative = Capacitor.isNativePlatform();

  useEffect(() => {
    if (isNative) {
      const showAdMob = async () => {
        try {
          await AdMob.showBanner({
            adId: 'ca-app-pub-3940256099942544/6300978111', // Official Google Test Banner Unit ID
            adSize: BannerAdSize.BANNER,
            position: BannerAdPosition.BOTTOM_CENTER,
            margin: 60,
            isTesting: true,
          });
        } catch (err) {
          console.warn('AdMob showBanner failed:', err);
        }
      };
      showAdMob();

      return () => {
        AdMob.removeBanner().catch(() => {});
      };
    } else {
      // Inject AdSense unit for Web/PWA
      try {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.warn('AdSense push error:', e);
      }
    }
  }, [isNative]);

  if (dismissed || isNative) return null;

  const ad = SAMPLE_ADS[adIndex];

  return (
    <div className="relative my-3 p-3 rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-purple-500/10 border border-amber-500/20 dark:border-amber-400/20 backdrop-blur-xs flex flex-col space-y-2 shadow-2xs">
      {/* Google AdSense container for Web */}
      <div className="w-full overflow-hidden text-center min-h-[50px] flex items-center justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '50px' }}
          data-ad-client="ca-pub-3940256099942544"
          data-ad-slot="1234567890"
          data-ad-format="horizontal"
          data-full-width-responsive="true"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3 pr-2">
          <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 font-bold text-[10px]">
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
    </div>
  );
};
