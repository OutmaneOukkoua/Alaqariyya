  const db = require('../config/db');

  const News = {
    create: (newNews, callback) => {
      const sql = 'INSERT INTO news SET ?';
      db.query(sql, newNews, callback);
    },

    findAll: (callback) => {
      const sql = 'SELECT * FROM news ORDER BY published_at DESC';
      db.query(sql, callback);
    },

    findById: (id, callback) => {
      const sql = 'SELECT * FROM news WHERE id = ?';
      db.query(sql, [id], callback);
    },

    deleteById: (id, callback) => {
      const sql = 'DELETE FROM news WHERE id = ?';
      db.query(sql, [id], callback);
    },
  };

  module.exports = News;
