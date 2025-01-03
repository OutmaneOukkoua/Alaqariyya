// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpBackend from 'i18next-http-backend';

// i18n
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: 'ar',
//     supportedLngs: ['ar','en', 'fr', 'de', 'es', 'nl'],
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json'
//     },
//     detection: {
//       order: ['queryString', 'cookie'],
//       cache: ['cookie']
//     },
//     interpolation: {
//       escapeValue: false
//     }
//   });

// export default i18n;

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en', 'fr', 'de', 'es', 'nl'],
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    detection: {
      order: ['localStorage', 'queryString', 'cookie'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

