const db = require('../config/db');

const User = {
  findByEmail: (email, callback) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  },

  create: (newUser, callback) => {
    const sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, callback);
  },
};

module.exports = User;
