// const translate = require('google-translate-api-x');

// async function translateText(text, target) {
//   try {
//     const res = await translate(text, { from: 'ar', to: target });
//     return res.text || text; // Fallback to original text if translation fails
//   } catch (error) {
//     console.error(`Translation error for target ${target}:`, error);
//     return text; // Return the original text as a fallback
//   }
// }

// async function translateProperty(property) {
//   const translations = {};
//   const languages = ['en', 'es', 'fr', 'de', 'nl'];

//   for (const lang of languages) {
//     translations[`title_${lang}`] = await translateText(property.title_ar, lang);
//     translations[`description_${lang}`] = await translateText(property.description_ar, lang);
//     translations[`location_${lang}`] = await translateText(property.location_ar, lang);
//   }

//   return translations;
// }

// module.exports = {
//   translateText,
//   translateProperty,
// };


const translate = require('translate-google');

async function translateText(text, target) {
  try {
    const res = await translate(text, { from: 'ar', to: target });
    return res || text; // Fallback to original text if translation fails
  } catch (error) {
    console.error(`Translation error for target ${target}:`, error.message);
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


// const { OpenAI } = require('openai');
// require('dotenv').config(); // Load environment variables

// const openai = new OpenAI({
//   apiKey: process.env.OPENIA_API_KEY,
// });

// // Function to translate text using OpenAI's GPT model
// async function translateText(text, target) {
//   try {
//     const targetLanguageNames = {
//       en: 'English',
//       es: 'Spanish',
//       fr: 'French',
//       de: 'German',
//       nl: 'Dutch',
//     };

//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         {
//           role: 'system',
//           content: `You are a translator. Translate the given Arabic text to ${targetLanguageNames[target]}.`,
//         },
//         {
//           role: 'user',
//           content: text,
//         },
//       ],
//     });

//     return response.choices[0].message.content.trim() || text; // Fallback to original text if translation fails
//   } catch (error) {
//     console.error(`Translation error for target ${target}:`, error.message);
//     return text; // Return the original text as a fallback
//   }
// }

// // Function to translate a property object
// async function translateProperty(property) {
//   const translations = {};
//   const languages = ['en', 'es', 'fr', 'de', 'nl'];

//   for (const lang of languages) {
//     translations[`title_${lang}`] = await translateText(property.title_ar, lang);
//     translations[`description_${lang}`] = await translateText(property.description_ar, lang);
//     translations[`location_${lang}`] = await translateText(property.location_ar, lang);
//   }

//   return translations;
// }

// module.exports = {
//   translateText,
//   translateProperty,
// };