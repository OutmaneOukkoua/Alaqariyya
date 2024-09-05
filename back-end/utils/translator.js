const translate = require('google-translate-api-x');

async function translateText(text, target) {
  try {
    const res = await translate(text, { from: 'ar', to: target });
    return res.text || text; // Fallback to original text if translation fails
  } catch (error) {
    console.error(`Translation error for target ${target}:`, error);
    return text; // Return the original text as a fallback
  }
}

async function translateProperty(property) {
  const translations = {};
  const languages = ['en', 'es', 'fr', 'de', 'nl'];

  for (const lang of languages) {
    translations[`title_${lang}`] = await translateText(property.title_ar, lang);
    translations[`description_${lang}`] = await translateText(property.description_ar, lang);
    translations[`location_${lang}`] = await translateText(property.location_ar, lang);
  }

  return translations;
}

module.exports = {
  translateText,
  translateProperty,
};
