import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/en.json';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  // if you're using a language detector, do not define the lng option
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
