import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import fa from './locales/fa.json';
import es from './locales/es.json';

export const LANGS = {
  en: { label: 'English', flag: '🇬🇧', dir: 'ltr' },
  fa: { label: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
  es: { label: 'Español', flag: '🇪🇸', dir: 'ltr' },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa },
      es: { translation: es },
    },
    fallbackLng: 'en',
    supportedLngs: Object.keys(LANGS),
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// Keep <html lang> and dir in sync with the active language
function applyDir(lng) {
  const meta = LANGS[lng] || LANGS.en;
  const root = document.documentElement;
  root.setAttribute('lang', lng);
  root.setAttribute('dir', meta.dir);
}
applyDir(i18n.resolvedLanguage || 'en');
i18n.on('languageChanged', applyDir);

export default i18n;
