const db = require('../config/db'); // Make sure this path is correct based on your project structure
const sharp = require('sharp');
const path = require('path');
const { translateText } = require('../utils/translator');
const fs = require('fs');


// Helper function to translate news content
const translateNews = async (news) => {
  const languages = ['en', 'fr', 'es', 'de', 'nl'];
  const translations = {};

  for (const lang of languages) {
    try {
      translations[`title_${lang}`] = await translateText(news.title_ar, lang);
      translations[`content_${lang}`] = await translateText(news.content_ar, lang);
    } catch (error) {
      console.error(`Translation error for language ${lang}:`, error);
    }
  }

  return {
    ...news,
    ...translations,
  };
};

// Add a new news article
exports.addNews = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Image file is required');
    }

    const filePath = path.join(__dirname, '../uploads', req.file.originalname);

    // Resize and optimize the image
    await sharp(req.file.buffer)
      .resize(800, 600) // Resize to 800x600
      .jpeg({ quality: 80 }) // Convert to JPEG and set quality to 80
      .toFile(filePath);

    const newNews = {
      title_ar: req.body.title_ar,
      content_ar: req.body.content_ar,
      image_url: req.file.originalname,
    };

    const translatedNews = await translateNews(newNews);

    const sql = 'INSERT INTO news SET ?';
    db.query(sql, translatedNews, (err, result) => {
      if (err) {
        console.error('Error inserting news:', err);
        return res.status(500).send('Database insertion error');
      }
      res.send(result);
    });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
};

// Get all news articles
exports.getNews = (req, res) => {
  const lang = req.query.lang || 'ar';
  const titleColumn = `title_${lang}`;
  const contentColumn = `content_${lang}`;

  const sql = `
    SELECT id, ${titleColumn} as title, ${contentColumn} as content, image_url, published_at
    FROM news
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error querying news:', err);
      return res.status(500).send('Database query error');
    }
    res.send(result);
  });
};

// Delete a news article by ID
exports.deleteNews = (req, res) => {
  const newsId = req.params.id;

  // Fetch the image URL associated with the news article
  const selectImageSql = 'SELECT image_url FROM news WHERE id = ?';
  db.query(selectImageSql, [newsId], (err, result) => {
    if (err) {
      console.error('Error querying news image:', err);
      return res.status(500).send('Database query error');
    }

    const imageUrl = result[0]?.image_url;
    if (imageUrl) {
      const filePath = path.join(__dirname, '../uploads', imageUrl);

      // Delete the image file from the filesystem
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error deleting file: ${filePath}`, err);
        }

        // Delete the news article from the database
        const deleteNewsSql = 'DELETE FROM news WHERE id = ?';
        db.query(deleteNewsSql, [newsId], (err, result) => {
          if (err) {
            console.error('Error deleting news:', err);
            return res.status(500).send('Database deletion error');
          }
          res.send(result);
        });
      });
    } else {
      // If there's no image, just delete the news article
      const deleteNewsSql = 'DELETE FROM news WHERE id = ?';
      db.query(deleteNewsSql, [newsId], (err, result) => {
        if (err) {
          console.error('Error deleting news:', err);
          return res.status(500).send('Database deletion error');
        }
        res.send(result);
      });
    }
  });
};