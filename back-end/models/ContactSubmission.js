const db = require('../config/db');

const ContactSubmission = {
  create: (newSubmission, callback) => {
    const sql = 'INSERT INTO contact_submissions SET ?';
    db.query(sql, newSubmission, callback);
  },

  findAll: (callback) => {
    const sql = 'SELECT * FROM contact_submissions ORDER BY created_at DESC';
    db.query(sql, callback);
  },

  deleteById: (id, callback) => {
    const sql = 'DELETE FROM contact_submissions WHERE id = ?';
    db.query(sql, [id], callback);
  },
};

module.exports = ContactSubmission;
