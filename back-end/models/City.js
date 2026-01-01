const db = require("../config/db");

const City = {
  create: (data, callback) => {
    const sql = `
      INSERT INTO cities (name_ar, name_fr, slug)
      VALUES (?, ?, ?)
    `;
    db.query(sql, [data.name_ar, data.name_fr, data.slug], callback);
  },

  getAll: (activeOnly, callback) => {
    let sql = `
      SELECT id, name_ar, name_fr, slug
      FROM cities
    `;
    if (activeOnly) {
      sql += " WHERE is_active = 1";
    }
    sql += " ORDER BY name_fr ASC";
    db.query(sql, callback);
  },
  deleteById: (id, callback) => {
    const sql = "DELETE FROM cities WHERE id = ?";
    db.query(sql, [id], callback);
  },
};

module.exports = City;
