const db = require('../config/db');

const Property = {
  create: (newProperty, callback) => {
    const sql = 'INSERT INTO properties SET ?';
    db.query(sql, newProperty, callback);
  },

  findById: (id, callback) => {
    const sql = 'SELECT * FROM properties WHERE property_id = ?';
    db.query(sql, [id], callback);
  },

  findAll: (conditions, callback) => {
    const { type, location, limit, offset } = conditions;
    let sql = `
      SELECT * FROM properties 
      WHERE type LIKE ? AND location_ar LIKE ?
      ORDER BY property_id ASC LIMIT ? OFFSET ?
    `;
    db.query(sql, [type, `%${location}%`, limit, offset], callback);
  },

  updateById: (id, updatedProperty, callback) => {
    const sql = 'UPDATE properties SET ? WHERE property_id = ?';
    db.query(sql, [updatedProperty, id], callback);
  },

  deleteById: (id, callback) => {
    const sql = 'DELETE FROM properties WHERE property_id = ?';
    db.query(sql, [id], callback);
  },

  count: (callback) => {
    const sql = 'SELECT COUNT(*) as total FROM properties';
    db.query(sql, callback);
  },
};

module.exports = Property;