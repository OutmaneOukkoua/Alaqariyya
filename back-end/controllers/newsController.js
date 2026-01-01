// controllers/newsController.js
const db = require('../config/db');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const { translateText } = require('../utils/translator');

const { initProgress, updateProgress, finishProgress } = require('../utils/progressStore');

// Helper: translate (مع تقدم تدريجي)
async function translateNewsWithProgress(news, uploadId) {
  const languages = ['en', 'fr', 'es', 'de', 'nl'];
  const translations = {};

  // نخلي الترجمة تاخذ من 30% حتى 90%
  const start = 30;
  const end = 90;
  const step = Math.max(1, Math.floor((end - start) / (languages.length * 2))); // title + content

  let p = start;

  for (const lang of languages) {
    try {
      updateProgress(uploadId, p, `ترجمة العنوان (${lang})...`);
      translations[`title_${lang}`] = await translateText(news.title_ar, lang);
      p += step;

      updateProgress(uploadId, p, `ترجمة المحتوى (${lang})...`);
      translations[`content_${lang}`] = await translateText(news.content_ar, lang);
      p += step;
    } catch (error) {
      console.error(`Translation error for ${lang}:`, error);
      // ما نوقفوش العملية، غير نكملو
    }
  }

  return { ...news, ...translations };
}

exports.addNews = async (req, res) => {
  const uploadId = req.headers['x-upload-id'] || req.headers['x_upload_id'];

  try {
    if (uploadId) initProgress(uploadId);

    if (!req.file) {
      if (uploadId) updateProgress(uploadId, 0, 'ملف الصورة ناقص');
      return res.status(400).send('Image file is required');
    }

    // ✅ نفس قياس العرض ديال NewsArticle (تقدر تبدلو إذا بغيتي)
    const TARGET_W = 1200;
    const TARGET_H = 675; // 16:9

    // ✅ filename فريد + نفرض webp باش نحافظو على الشفافية
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const fileName = `${uniqueSuffix}.webp`;
    const filePath = path.join(__dirname, '../uploads', fileName);

    if (uploadId) updateProgress(uploadId, 10, 'معالجة الصورة...');

    await sharp(req.file.buffer)
      .rotate()
      .resize(TARGET_W, TARGET_H, {
        fit: 'contain', // ✅ ما كيقصش
        background: { r: 0, g: 0, b: 0, alpha: 0 }, // ✅ شفافية على الجوانب إذا احتاج
      })
      .webp({ quality: 82 })
      .toFile(filePath);

    if (uploadId) updateProgress(uploadId, 25, 'تحضير بيانات المقال...');

    const newNews = {
      title_ar: req.body.title_ar,
      content_ar: req.body.content_ar,
      category: req.body.category || null,
      youtube_url: req.body.youtube_url || null,
      image_url: fileName,
    };

    if (!newNews.title_ar || !newNews.content_ar) {
      if (uploadId) updateProgress(uploadId, 0, 'العنوان أو المحتوى ناقص');
      try { fs.unlinkSync(filePath); } catch {}
      return res.status(400).send('title_ar and content_ar are required');
    }

    if (uploadId) updateProgress(uploadId, 30, 'بدء الترجمة...');

    const translatedNews = await translateNewsWithProgress(newNews, uploadId);

    if (uploadId) updateProgress(uploadId, 92, 'حفظ في قاعدة البيانات...');

    const sql = 'INSERT INTO news SET ?';
    db.query(sql, translatedNews, (err, result) => {
      if (err) {
        console.error('Error inserting news:', err);
        if (uploadId) updateProgress(uploadId, 0, 'خطأ أثناء الحفظ في قاعدة البيانات');
        try { fs.unlinkSync(filePath); } catch {}
        return res.status(500).send('Database insertion error');
      }

      if (uploadId) {
        updateProgress(uploadId, 100, 'تم بنجاح');
        finishProgress(uploadId);
      }

      res.locals.idempotencyResult = { message: 'News added successfully!', id: result.insertId };
      return res.status(200).json(res.locals.idempotencyResult);
    });
  } catch (error) {
    console.error('Error processing request:', error);
    if (uploadId) updateProgress(uploadId, 0, 'خطأ أثناء المعالجة');
    return res.status(500).send('Error processing request');
  }
};


// Get all news articles
exports.getNews = (req, res) => {
  const lang = req.query.lang || 'ar';
  const titleColumn = `title_${lang}`;
  const contentColumn = `content_${lang}`;

  const sql = `
    SELECT id,
           ${titleColumn} as title,
           ${contentColumn} as content,
           image_url,
           published_at,
           category,
           youtube_url
    FROM news
    ORDER BY published_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error querying news:', err);
      return res.status(500).send('Database query error');
    }
    res.send(result);
  });
};

// Get news article by ID
exports.getNewsById = (req, res) => {
  const newsId = req.params.id;
  const lang = req.query.lang || 'ar';
  const titleColumn = `title_${lang}`;
  const contentColumn = `content_${lang}`;

  const sql = `
    SELECT id,
           ${titleColumn} as title,
           ${contentColumn} as content,
           image_url,
           published_at,
           category,
           youtube_url
    FROM news
    WHERE id = ?
  `;

  db.query(sql, [newsId], (err, result) => {
    if (err) {
      console.error('Error querying news:', err);
      return res.status(500).send('Database query error');
    }
    if (result.length === 0) {
      return res.status(404).send('News article not found');
    }
    res.send(result[0]);
  });
};

// Delete stays the same
exports.deleteNews = (req, res) => {
  const newsId = req.params.id;

  const selectImageSql = 'SELECT image_url FROM news WHERE id = ?';
  db.query(selectImageSql, [newsId], (err, result) => {
    if (err) {
      console.error('Error querying news image:', err);
      return res.status(500).send('Database query error');
    }

    const imageUrl = result[0]?.image_url;
    if (imageUrl) {
      const filePath = path.join(__dirname, '../uploads', imageUrl);

      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${filePath}`, err);
        }

        const deleteNewsSql = 'DELETE FROM news WHERE id = ?';
        db.query(deleteNewsSql, [newsId], (err2, result2) => {
          if (err2) {
            console.error('Error deleting news:', err2);
            return res.status(500).send('Database deletion error');
          }
          res.send(result2);
        });
      });
    } else {
      const deleteNewsSql = 'DELETE FROM news WHERE id = ?';
      db.query(deleteNewsSql, [newsId], (err2, result2) => {
        if (err2) {
          console.error('Error deleting news:', err2);
          return res.status(500).send('Database deletion error');
        }
        res.send(result2);
      });
    }
  });
};
