const db = require('../config/db');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { translateProperty } = require('../utils/translator');

// Add a new property
exports.addProperty = async (req, res) => {
  try {
    const newProperty = {
      type: req.body.type,
      title_ar: req.body.title_ar,
      description_ar: req.body.description_ar,
      price: req.body.price,
      old_price: null, // Initially, no old price
      location_ar: req.body.location_ar,
      exact_address: req.body.exact_address, // <-- Added
      bedrooms: req.body.bedrooms,
      salon: req.body.salon,
      bathrooms: req.body.bathrooms,
      kitchen: req.body.kitchen,
      area: req.body.area,
      available: req.body.type === 'rent' ? true : req.body.available,
      floors: req.body.floors,
      availability_date: req.body.availability_date
    };
    
    // Check if required fields are present
    if (!newProperty.title_ar || !newProperty.description_ar || !newProperty.location_ar ) { // <-- Updated validation
      return res.status(400).send('Title, description and location (Arabic) are required.');
    }

    // Translate property fields if necessary
    const translations = await translateProperty(newProperty);
    Object.assign(newProperty, translations);

    // Insert the new property into the database
    const sql = 'INSERT INTO properties SET ?';
    db.query(sql, newProperty, async (err, result) => {
      if (err) {
        console.error('Error inserting property:', err);
        return res.status(500).send('Database insertion error');
      }
      const propertyId = result.insertId;
      const images = [];

      // Process and save images
      for (const [index, file] of req.files.entries()) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const outputPath = path.join(__dirname, '../uploads', uniqueSuffix + path.extname(file.originalname));
        await sharp(file.buffer)
          .rotate()
          .resize(800, 600)
          .jpeg({ quality: 80 })
          .toFile(outputPath);

        const isMain = req.files.length === 1 || index === 0;
        images.push([propertyId, path.basename(outputPath), isMain, index]);
      }

      // Insert images into the property_images table
      const imageSql = 'INSERT INTO property_images (property_id, image_url, is_main, display_order) VALUES ?';
      db.query(imageSql, [images], (err, result) => {
        if (err) {
          console.error('Error inserting property images:', err);
          return res.status(500).send('Database insertion error');
        }
        res.status(200).send({ message: 'Property added successfully!', propertyId });
      });
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
};

// Get all properties (including old_price and exact_address)
exports.getProperties = async (req, res) => {
  const { type, location, page = 1, limit = 12, lang = 'ar' } = req.query;
  const offset = (page - 1) * limit;

  const titleColumn = `title_${lang}`;
  const descriptionColumn = `description_${lang}`;
  const locationColumn = `location_${lang}`;

  let sql = `
    SELECT 
      p.property_id, 
      p.${titleColumn}, p.${descriptionColumn}, p.${locationColumn}, p.exact_address, 
      p.title_en, p.description_en, p.location_en, 
      p.price, p.old_price, p.bedrooms, p.bathrooms, p.salon, p.kitchen, p.area, 
      p.type, p.available, p.floors, p.availability_date, 
      pi.image_url 
    FROM properties p
    LEFT JOIN (
      SELECT property_id, MIN(image_url) as image_url, MIN(created_at) as oldest_image_date
      FROM property_images
      GROUP BY property_id
    ) pi ON p.property_id = pi.property_id
  `;

  const params = [];

  if (type && type !== 'all') {
    sql += ' WHERE p.type = ?';
    params.push(type);
  }

  if (location) {
    sql += params.length ? ` AND p.${locationColumn} LIKE ?` : ` WHERE p.${locationColumn} LIKE ?`;
    params.push(`%${location}%`);
  }

  sql += ' ORDER BY RAND() LIMIT ? OFFSET ?';
  params.push(parseInt(limit), parseInt(offset));

  db.query(sql, params, (err, result) => {
    if (err) {
      console.error('Error querying properties:', err);
      return res.status(500).send('Database query error');
    }

    let countSql = 'SELECT COUNT(*) as total FROM properties';
    const countParams = [];

    if (type && type !== 'all') {
      countSql += ' WHERE type = ?';
      countParams.push(type);
    }

    if (location) {
      countSql += countParams.length ? ` AND ${locationColumn} LIKE ?` : ` WHERE ${locationColumn} LIKE ?`;
      countParams.push(`%${location}%`);
    }

    db.query(countSql, countParams, (countErr, countResult) => {
      if (countErr) {
        console.error('Error counting properties:', countErr);
        return res.status(500).send('Database count error');
      }

      const totalProperties = countResult[0].total;
      const totalPages = Math.ceil(totalProperties / limit);

      res.status(200).send({
        properties: result,
        totalPages: totalPages,
        currentPage: parseInt(page),
      });
    });
  });
};

// Get a single property by ID (including old_price and exact_address)
exports.getPropertyById = (req, res) => {
  const language = req.query.lang || 'en';
  const titleColumn = `title_${language}`;
  const descriptionColumn = `description_${language}`;
  const locationColumn = `location_${language}`;
  const exactAddressColumn = `exact_address`; // Assuming exact_address is not translated

  const sql = `
    SELECT p.property_id, p.${titleColumn} as title, p.price, p.old_price, p.${locationColumn} as location, 
           p.${exactAddressColumn} as exact_address, 
           p.bedrooms, p.bathrooms, p.salon, p.kitchen, p.area, p.type, p.available, p.floors, 
           p.availability_date, pi.image_url, pi.is_main, pi.display_order, p.${descriptionColumn} as description
    FROM properties p 
    LEFT JOIN property_images pi ON p.property_id = pi.property_id 
    WHERE p.property_id = ?
    ORDER BY pi.is_main DESC, pi.display_order ASC
  `;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.error('Error querying property by ID:', err);
      return res.status(500).send('Database query error');
    }
    if (result.length === 0) {
      return res.status(404).send('Property not found');
    }
    res.status(200).send(result);
  });
};

// Update a property and set old price if new price is lower
exports.updateProperty = async (req, res) => {
  try {
    const updatedProperty = {
      type: req.body.type,
      title_ar: req.body.title_ar,
      description_ar: req.body.description_ar,
      price: req.body.price,
      location_ar: req.body.location_ar,
      exact_address: req.body.exact_address, // <-- Added
      bedrooms: req.body.bedrooms,
      salon: req.body.salon,
      bathrooms: req.body.bathrooms,
      kitchen: req.body.kitchen,
      area: req.body.area,
      available: req.body.available,
      floors: req.body.floors,
      availability_date: req.body.availability_date,
    };

    // Translate property fields if necessary
    const translations = await translateProperty(updatedProperty);
    Object.assign(updatedProperty, translations);

    const getPropertySql = 'SELECT price FROM properties WHERE property_id = ?';
    db.query(getPropertySql, [req.params.id], (err, result) => {
      if (err) {
        console.error('Error fetching property for price update:', err);
        return res.status(500).send('Database query error');
      }

      if (result.length === 0) {
        return res.status(404).send('Property not found');
      }

      const oldPrice = result[0].price;
      if (updatedProperty.price < oldPrice) {
        updatedProperty.old_price = oldPrice; // Set old_price if the new price is lower
      }

      const sql = 'UPDATE properties SET ? WHERE property_id = ?';
      db.query(sql, [updatedProperty, req.params.id], async (err, result) => {
        if (err) {
          console.error('Error updating property:', err);
          return res.status(500).send('Database update error');
        }

        if (req.files && req.files.length) {
          const selectImagesSql = 'SELECT image_url FROM property_images WHERE property_id = ?';
          db.query(selectImagesSql, [req.params.id], async (err, images) => {
            if (err) {
              console.error('Error querying property images:', err);
              return res.status(500).send('Database query error');
            }

            // Delete existing image files
            images.forEach(image => {
              const filePath = path.join(__dirname, '../uploads', image.image_url);
              fs.unlink(filePath, (err) => {
                if (err) console.error(`Error deleting file: ${filePath}`, err);
              });
            });

            // Delete image records from the database
            const deleteImagesSql = 'DELETE FROM property_images WHERE property_id = ?';
            db.query(deleteImagesSql, [req.params.id], async (err, deleteResult) => {
              if (err) {
                console.error('Error deleting property images:', err);
                return res.status(500).send('Database deletion error');
              }

              const newImages = [];
              for (const [index, file] of req.files.entries()) {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const outputPath = path.join(__dirname, '../uploads', uniqueSuffix + path.extname(file.originalname));
                await sharp(file.buffer)
                  .rotate()
                  .resize(800, 600)
                  .jpeg({ quality: 80 })
                  .toFile(outputPath);

                const isMain = req.files.length === 1 || index === 0;
                const displayOrder = index;
                newImages.push([req.params.id, path.basename(outputPath), isMain, displayOrder]);
              }

              if (newImages.length > 0) {
                const imageSql = 'INSERT INTO property_images (property_id, image_url, is_main, display_order) VALUES ?';
                db.query(imageSql, [newImages], (err, insertResult) => {
                  if (err) {
                    console.error('Error inserting property images:', err);
                    return res.status(500).send('Database insertion error');
                  }
                  res.status(200).send({ message: 'Property updated successfully!' });
                });
              } else {
                res.status(200).send({ message: 'Property updated successfully!' });
              }
            });
          });
        } else {
          res.status(200).send({ message: 'Property updated successfully!' });
        }
      });
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
};

// Update property availability
exports.updatePropertyAvailability = (req, res) => {
  const { available, availability_date } = req.body;
  const sql = 'UPDATE properties SET available = ?, availability_date = ? WHERE property_id = ?';
  db.query(sql, [available, available ? null : availability_date, req.params.id], (err, result) => {
    if (err) {
      console.error('Error updating availability:', err);
      return res.status(500).send('Database update error');
    }
    res.status(200).send({ message: 'Property availability updated successfully!' });
  });
};

// Delete a property by ID
exports.deleteProperty = (req, res) => {
  const propertyId = req.params.id;

  // First, retrieve all image URLs associated with the property
  const selectImagesSql = 'SELECT image_url FROM property_images WHERE property_id = ?';
  db.query(selectImagesSql, [propertyId], (err, images) => {
    if (err) {
      console.error('Error querying property images:', err);
      return res.status(500).send('Database query error');
    }

    // Delete image files from the server
    images.forEach(image => {
      const filePath = path.join(__dirname, '../uploads', image.image_url);
      fs.unlink(filePath, (err) => {
        if (err) console.error(`Error deleting file: ${filePath}`, err);
      });
    });

    // Delete image records from the database
    const deleteImagesSql = 'DELETE FROM property_images WHERE property_id = ?';
    db.query(deleteImagesSql, [propertyId], (err, result) => {
      if (err) {
        console.error('Error deleting property images:', err);
        return res.status(500).send('Database deletion error');
      }

      // Delete the property record from the database
      const deletePropertySql = 'DELETE FROM properties WHERE property_id = ?';
      db.query(deletePropertySql, [propertyId], (err, result) => {
        if (err) {
          console.error('Error deleting property:', err);
          return res.status(500).send('Database deletion error');
        }
        res.status(200).send({ message: 'Property deleted successfully!' });
      });
    });
  });
};
