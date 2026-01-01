import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const SUPPORTED_LANGS = ["ar", "en", "fr", "de", "es", "nl"];

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ar",
    supportedLngs: SUPPORTED_LANGS,
    nonExplicitSupportedLngs: true,

    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },

    detection: {
      // ✅ IMPORTANT: detect language from URL first: /ar/..., /fr/...
      order: ["path", "localStorage", "queryString", "cookie", "navigator"],
      lookupFromPathIndex: 0, // first segment after domain
      caches: ["localStorage"],
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
