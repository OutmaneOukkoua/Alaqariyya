// utils/translator.js
const translate = require("translate-google");

const safeStr = (v) => (typeof v === "string" ? v.trim() : "");

// ترجمة نص مع fallback
async function translateText(text, target) {
  const clean = safeStr(text);
  if (!clean) return ""; // ما نترجموش الفراغ

  try {
    const res = await translate(clean, { from: "ar", to: target });
    return res || clean;
  } catch (error) {
    console.error(`Translation error for target ${target}:`, error.message);
    return clean;
  }
}

// ✅ ترجمة العقار: title + description فقط (لا location)
async function translateProperty(property) {
  const translations = {};
  const languages = ["en", "es", "fr", "de", "nl"];

  const titleAr = safeStr(property.title_ar);
  const descAr = safeStr(property.description_ar);

  for (const lang of languages) {
    translations[`title_${lang}`] = await translateText(titleAr, lang);
    translations[`description_${lang}`] = await translateText(descAr, lang);
  }

  return translations;
}

module.exports = {
  translateText,
  translateProperty,
};