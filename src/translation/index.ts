import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { getCurrentLanguage } from './getCurrentLanguage';

import EN from './en/en.json';
import RU from './ru/ru.json';

const resources = {
  en: {
    translation: EN,
  },
  ru: {
    translation: RU,
  },
};

const currentLang = getCurrentLanguage();

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: currentLang,
  detection: {
    order: ['cookie', 'localStorage'],
    caches: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
