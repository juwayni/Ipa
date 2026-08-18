export type IPACategory = 'pulmonic' | 'non-pulmonic' | 'vowels' | 'diacritics' | 'suprasegmentals' | 'tones' | 'other';

export type Voicing = 'voiced' | 'voiceless' | 'na';

export type PlaceOfArticulation =
  | 'bilabial'
  | 'labiodental'
  | 'dental'
  | 'alveolar'
  | 'postalveolar'
  | 'retroflex'
  | 'palatal'
  | 'velar'
  | 'uvular'
  | 'pharyngeal'
  | 'glottal'
  | 'epiglottal'
  | 'labial-velar'
  | 'labial-palatal'
  | 'alveolo-palatal';

export type MannerOfArticulation =
  | 'plosive'
  | 'nasal'
  | 'trill'
  | 'tap-flap'
  | 'fricative'
  | 'lateral-fricative'
  | 'approximant'
  | 'lateral-approximant'
  | 'click'
  | 'implosive'
  | 'ejective'
  | 'affricate';

export type VowelHeight =
  | 'close'
  | 'near-close'
  | 'close-mid'
  | 'mid'
  | 'open-mid'
  | 'near-open'
  | 'open';

export type VowelBackness =
  | 'front'
  | 'near-front'
  | 'central'
  | 'near-back'
  | 'back';

export type Roundness = 'unrounded' | 'rounded';

export interface ExampleWord {
  word: string;
  language: string;
  languageCode: string;
  transcription: string;
  targetSoundIndex?: number;
  meaning: string;
  audioUrl?: string;
}

export interface AudioAttribution {
  source: string;
  sourceUrl: string;
  creator?: string;
  license: string;
  licenseUrl?: string;
  attributionRequired: boolean;
  commercialUseAllowed: boolean;
  modificationAllowed: boolean;
  redistributionAllowed: boolean;
}

export interface IPASymbol {
  id: string;
  symbol: string;
  unicode: string;
  nameEnglish: string;
  nameJapanese: string;
  nameHungarian: string;
  category: IPACategory;
  subcategory?: string;
  voicing?: Voicing;
  placeOfArticulation?: PlaceOfArticulation;
  mannerOfArticulation?: MannerOfArticulation;
  vowelHeight?: VowelHeight;
  vowelBackness?: VowelBackness;
  roundness?: Roundness;
  description: {
    en: string;
    ja: string;
    hu: string;
  };
  articulatoryGuide: {
    en: string;
    ja: string;
    hu: string;
  };
  exampleWords: ExampleWord[];
  audioSource?: string; // URL or synthesized identifier
  audioAttribution?: AudioAttribution;
  relatedSymbols: string[]; // Symbol IDs
  commonConfusions: {
    symbolId: string;
    reason: {
      en: string;
      ja: string;
      hu: string;
    };
  }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessonOrder: number;
  isCore: boolean;
  isExtended?: boolean;
  diacriticPlacement?: 'above' | 'below' | 'after' | 'overlay' | 'through';
  notes?: string;
  references?: string[];
}

export type QuizMode =
  | 'symbol-to-sound'
  | 'sound-to-symbol'
  | 'classification'
  | 'place'
  | 'voicing'
  | 'similar-sounds'
  | 'four-choice'
  | 'reverse-description'
  | 'transcription'
  | 'mixed';

export interface QuizQuestion {
  id: string;
  mode: QuizMode;
  targetSymbol: IPASymbol;
  promptText: string;
  promptAudioUrl?: string;
  options: {
    id: string;
    text: string;
    symbol?: string;
    isCorrect: boolean;
    explanation?: string;
  }[];
}

export interface UserSymbolProgress {
  symbolId: string;
  timesSeen: number;
  timesCorrect: number;
  timesIncorrect: number;
  lastReviewed: string; // ISO date
  nextReview: string; // ISO date
  intervalDays: number;
  easeFactor: number;
  difficulty: number; // 0.0 to 1.0
  isFavorite: boolean;
  isDifficult: boolean;
  notes?: string;
}

export interface UserProgress {
  overallMastery: number; // 0 to 100
  streakCount: number;
  longestStreak: number;
  lastActiveDate: string; // YYYY-MM-DD
  dailyGoal: number; // e.g. 10 symbols/day
  todayReviewedCount: number;
  symbolsProgress: Record<string, UserSymbolProgress>;
  completedLessons: string[];
  unlockedLevels: number;
  quizHistory: {
    date: string;
    mode: QuizMode;
    score: number;
    total: number;
  }[];
}

export interface UserSettings {
  language: 'en' | 'ja' | 'hu';
  theme: 'light' | 'dark' | 'system';
  fontSize: 'normal' | 'large' | 'extra-large';
  highContrast: boolean;
  reducedMotion: boolean;
  autoPlayAudio: boolean;
  playbackSpeed: number; // e.g., 1.0, 0.75
  audioVolume: number;
  dailyGoal: number;
}
