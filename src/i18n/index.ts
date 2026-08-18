import { en } from './en';
import { ja } from './ja';
import { hu } from './hu';

export const translations = {
  en,
  ja,
  hu,
};

export type Language = keyof typeof translations;

export function getTranslation(lang: Language) {
  return translations[lang] || translations.en;
}
