const db = require('../config/db');

// Fetch the current visitor count from the database
const getVisitorCount = (callback) => {
    db.query('SELECT count FROM visitor_stats WHERE id = 1', (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Update the visitor count in the database
const updateVisitorCount = (newCount, callback) => {
    db.query('UPDATE visitor_stats SET count = ? WHERE id = 1', [newCount], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Insert the initial visitor count into the database
const insertVisitorCount = (newCount, callback) => {
    db.query('INSERT INTO visitor_stats (count) VALUES (?)', [newCount], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

module.exports = {
    getVisitorCount,
    updateVisitorCount,
    insertVisitorCount
};
