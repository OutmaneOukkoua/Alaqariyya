require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const translate = require('google-translate-api-x');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'alaqariyya',
  charset: 'utf8mb4'
});


db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

const storage = multer.memoryStorage();

const upload = multer({ storage });

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
  res.send('Welcome to the Node.js backend for ALAQARIYYA');
});

const translateText = async (text, target) => {
  try {
    const res = await translate(text, { from: 'ar', to: target });
    return res.text;
  } catch (error) {
    console.error('Translation error:', error);
    throw error;
  }
};

const translateProperty = async (property) => {
  const translations = {};
  const languages = ['en', 'es', 'fr', 'de', 'nl'];

  for (const lang of languages) {
    translations[`title_${lang}`] = await translateText(property.title_ar, lang);
    translations[`description_${lang}`] = await translateText(property.description_ar, lang);
    translations[`location_${lang}`] = await translateText(property.location_ar, lang);
  }

  return translations;
};


app.post('/properties', upload.array('images', 25), async (req, res) => {
  try {
    const newProperty = {
      title_ar: req.body.title_ar,
      description_ar: req.body.description_ar,
      price: req.body.price,
      location_ar: req.body.location_ar,
      bedrooms: req.body.bedrooms,
      salon: req.body.salon,
      bathrooms: req.body.bathrooms,
      kitchen: req.body.kitchen,
      area: req.body.area,
      type: req.body.type,
      available: req.body.type === 'rent' ? true : req.body.available,
      floors: req.body.floors,
      availability_date: req.body.availability_date
    };

    const translations = await translateProperty(newProperty);
    Object.assign(newProperty, translations);

    const sql = 'INSERT INTO properties SET ?';
    db.query(sql, newProperty, async (err, result) => {
      if (err) {
        console.error('Error inserting property:', err);
        return res.status(500).send('Database insertion error');
      }
      const propertyId = result.insertId;
      const images = [];

      for (const [index, file] of req.files.entries()) {
        const outputPath = path.join(__dirname, 'uploads', Date.now() + path.extname(file.originalname));
        await sharp(file.buffer)
          .rotate() 
          .resize(800, 600)
          .jpeg({ quality: 80 })
          .toFile(outputPath);

        const isMain = req.files.length === 1 || index === 0; // Set isMain to true if it is the only image or the first image
        images.push([propertyId, path.basename(outputPath), isMain, index]);
      }

      const imageSql = 'INSERT INTO property_images (property_id, image_url, is_main, display_order) VALUES ?';
      db.query(imageSql, [images], (err, result) => {
        if (err) {
          console.error('Error inserting property images:', err);
          return res.status(500).send('Database insertion error');
        }
        res.send(result);
      });
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
});



app.get('/properties', async (req, res) => {
  const { type, location, page = 1, limit = 8, lang = 'ar' } = req.query;
  const offset = (page - 1) * limit;
  const titleColumn = `title_${lang}`;
  const descriptionColumn = `description_${lang}`;
  const locationColumn = `location_${lang}`;

  let translatedLocation = '';
  if (location) {
    try {
      const translationResult = await translate(location, { from: 'ar', to: lang });
      translatedLocation = translationResult.text;
    } catch (error) {
      return res.status(500).send('Error translating location');
    }
  }

  let sql = `
    SELECT p.property_id, p.${titleColumn} as title, p.price, p.${locationColumn} as location, p.bedrooms, 
           p.bathrooms, p.salon, p.kitchen, p.area, p.type, p.available, p.floors, p.availability_date, 
           pi.image_url, p.${descriptionColumn} as description
    FROM properties p
    LEFT JOIN (
      SELECT property_id, image_url
      FROM property_images
      WHERE is_main = TRUE
    ) pi ON p.property_id = pi.property_id
  `;
  const params = [];

  if (type && type !== 'all') {
    sql += ' WHERE p.type = ?';
    params.push(type);
  }

  if (translatedLocation) {
    sql += params.length ? ` AND p.${locationColumn} LIKE ?` : ` WHERE p.${locationColumn} LIKE ?`;
    params.push(`%${translatedLocation}%`);
  }

  sql += ' ORDER BY p.property_id DESC LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));

  db.query(sql, params, (err, result) => {
    if (err) {
      return res.status(500).send('Database query error');
    }

    let countSql = 'SELECT COUNT(*) as total FROM properties';
    if (type && type !== 'all') {
      countSql += ' WHERE type = ?';
      if (translatedLocation) {
        countSql += ` AND ${locationColumn} LIKE ?`;
      }
    } else if (translatedLocation) {
      countSql += ` WHERE ${locationColumn} LIKE ?`;
    }

    db.query(countSql, params.slice(0, params.length - 2), (countErr, countResult) => {
      if (countErr) {
        return res.status(500).send('Database count error');
      }
      const totalProperties = countResult[0].total;
      const totalPages = Math.ceil(totalProperties / limit);

      res.send({
        properties: result,
        totalPages: totalPages,
        currentPage: parseInt(page)
      });
    });
  });
});

app.get('/properties/:id', (req, res) => {
  const language = req.query.lang || 'en';
  const titleColumn = `title_${language}`;
  const descriptionColumn = `description_${language}`;
  const locationColumn = `location_${language}`;

  const sql = `
    SELECT p.property_id, p.${titleColumn} as title, p.price, p.${locationColumn} as location, 
           p.bedrooms, p.bathrooms, p.salon, p.kitchen, p.area, p.type, p.available, p.floors, 
           p.availability_date, pi.image_url, pi.is_main, pi.display_order, p.${descriptionColumn} as description
    FROM properties p 
    LEFT JOIN property_images pi ON p.property_id = pi.property_id 
    WHERE p.property_id = ?
    ORDER BY pi.is_main DESC, pi.display_order ASC
  `;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      return res.status(500).send('Database query error');
    }
    res.send(result);
  });
});




app.put('/properties/:id', upload.array('images', 25), async (req, res) => {
  try {
    const updatedProperty = {
      title_ar: req.body.title_ar,
      description_ar: req.body.description_ar,
      price: req.body.price,
      location_ar: req.body.location_ar,
      bedrooms: req.body.bedrooms,
      salon: req.body.salon,
      bathrooms: req.body.bathrooms,
      kitchen: req.body.kitchen,
      area: req.body.area,
      type: req.body.type,
      available: req.body.available,
      floors: req.body.floors,
      availability_date: req.body.availability_date
    };

    const translations = await translateProperty(updatedProperty);
    Object.assign(updatedProperty, translations);

    const sql = 'UPDATE properties SET ? WHERE property_id = ?';
    db.query(sql, [updatedProperty, req.params.id], async (err, result) => {
      if (err) {
        console.error('Error updating property:', err);
        return res.status(500).send('Database update error');
      }

      if (req.files && req.files.length) {
        const selectImagesSql = 'SELECT image_url FROM property_images WHERE property_id = ?';
        db.query(selectImagesSql, [req.params.id], (err, images) => {
          if (err) {
            console.error('Error querying property images:', err);
            return res.status(500).send('Database query error');
          }

          images.forEach(image => {
            const filePath = path.join(__dirname, 'uploads', image.image_url);
            fs.unlink(filePath, (err) => {
              if (err) console.error(`Error deleting file: ${filePath}`, err);
            });
          });

          const deleteImagesSql = 'DELETE FROM property_images WHERE property_id = ?';
          db.query(deleteImagesSql, [req.params.id], async (err, deleteResult) => {
            if (err) {
              console.error('Error deleting property images:', err);
              return res.status(500).send('Database deletion error');
            }

            const newImages = [];
            for (const [index, file] of req.files.entries()) {
              const outputPath = path.join(__dirname, 'uploads', Date.now() + path.extname(file.originalname));
              await sharp(file.buffer)
                .rotate() 
                .resize(800, 600)
                .jpeg({ quality: 80 })
                .toFile(outputPath);

              const isMain = req.files.length === 1 || index === 0; // Set isMain to true if it is the only image or the first image
              const displayOrder = parseInt(req.body.displayOrder ? req.body.displayOrder[index] : index, 10);
              newImages.push([req.params.id, path.basename(outputPath), isMain, displayOrder]);
            }

            if (newImages.length > 0) {
              const imageSql = 'INSERT INTO property_images (property_id, image_url, is_main, display_order) VALUES ?';
              db.query(imageSql, [newImages], (err, insertResult) => {
                if (err) {
                  console.error('Error inserting property images:', err);
                  return res.status(500).send('Database insertion error');
                }
                res.send(insertResult);
              });
            } else {
              res.send(result);
            }
          });
        });
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
});


app.put('/properties/:id/availability', (req, res) => {
  const { available, availability_date } = req.body;
  const sql = 'UPDATE properties SET available = ?, availability_date = ? WHERE property_id = ?';
  db.query(sql, [available, available ? null : availability_date, req.params.id], (err, result) => {
    if (err) {
      console.error('Error updating availability:', err);
      return res.status(500).send('Database update error');
    }
    res.send(result);
  });
});

app.delete('/properties/:id', (req, res) => {
  const propertyId = req.params.id;

  const selectImagesSql = 'SELECT image_url FROM property_images WHERE property_id = ?';
  db.query(selectImagesSql, [propertyId], (err, images) => {
    if (err) {
      console.error('Error querying property images:', err);
      return res.status(500).send('Database query error');
    }

    images.forEach(image => {
      const filePath = path.join(__dirname, 'uploads', image.image_url);
      fs.unlink(filePath, (err) => {
        if (err) console.error(`Error deleting file: ${filePath}`, err);
      });
    });

    const deleteImagesSql = 'DELETE FROM property_images WHERE property_id = ?';
    db.query(deleteImagesSql, [propertyId], (err, result) => {
      if (err) {
        console.error('Error deleting property images:', err);
        return res.status(500).send('Database deletion error');
      }

      const deletePropertySql = 'DELETE FROM properties WHERE property_id = ?';
      db.query(deletePropertySql, [propertyId], (err, result) => {
        if (err) {
          console.error('Error deleting property:', err);
          return res.status(500).send('Database deletion error');
        }
        res.send(result);
      });
    });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
    if (result.length === 0) {
      console.log('Invalid email:', email);
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password for email:', email);
      return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ success: true, token, email: user.email });
  });
});



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


app.post('/news', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      console.log('No image file uploaded');
      return res.status(400).send('Image file is required');
    }

    console.log('Uploaded image filename:', req.file.originalname);
    console.log('Request body:', req.body);

    const filePath = path.join(__dirname, 'uploads', req.file.originalname);

    // Resize and optimize the image
    await sharp(req.file.buffer)
      .resize(800, 600) // Resize to 800x600
      .jpeg({ quality: 80 }) // Convert to JPEG and set quality to 80
      .toFile(filePath);

    const newNews = {
      title_ar: req.body.title_ar,
      content_ar: req.body.content_ar,
      image_url: req.file.originalname,  // Use the saved file path
    };

    const translatedNews = await translateNews(newNews);
    console.log('Translated news:', translatedNews);

    // Ensure the image_url is included in the translatedNews object
    if (!translatedNews.image_url) {
      translatedNews.image_url = req.file.originalname;
    }

    const sql = 'INSERT INTO news SET ?';
    console.log('SQL Query:', sql);
    console.log('Translated News Data for Insertion:', translatedNews);

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
});



app.get('/news', (req, res) => {
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
});

app.delete('/news/:id', (req, res) => {
  const newsId = req.params.id;

  const selectImageSql = 'SELECT image_url FROM news WHERE id = ?';
  db.query(selectImageSql, [newsId], (err, result) => {
    if (err) {
      console.error('Error querying news image:', err);
      return res.status(500).send('Database query error');
    }

    const imageUrl = result[0]?.image_url;
    if (imageUrl) {
      const filePath = path.join(__dirname, 'uploads', imageUrl);

      fs.unlink(filePath, (err) => {
        if (err) console.error(`Error deleting file: ${filePath}`, err);

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
});

app.post('/contact-submissions', (req, res) => {
  const newSubmission = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subject: req.body.subject,
    message: req.body.message
  };

  const sql = 'INSERT INTO contact_submissions SET ?';
  db.query(sql, newSubmission, (err, result) => {
    if (err) {
      console.error('Error inserting contact submission:', err);
      return res.status(500).send('Database insertion error');
    }
    res.send(result);
  });
});

app.get('/contact-submissions', (req, res) => {
  const sql = 'SELECT * FROM contact_submissions ORDER BY created_at DESC';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error querying contact submissions:', err);
      return res.status(500).send('Database query error');
    }
    res.send(result);
  });
});

app.delete('/contact-submissions/:id', (req, res) => {
  const sql = 'DELETE FROM contact_submissions WHERE id = ?';
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error deleting contact submission:', err);
      return res.status(500).send('Database deletion error');
    }
    res.send(result);
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
