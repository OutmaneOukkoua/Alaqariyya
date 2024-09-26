const db = require('../config/db');

// Insert a new click into the `clickCount_stats` table
const recordClick = (propertyId, callback) => {
    db.query('INSERT INTO clickCount_stats (property_id) VALUES (?)', [propertyId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Get the total clicks for a property (if needed)
const getClickCountByPropertyId = (propertyId, callback) => {
    db.query('SELECT COUNT(*) AS click_count FROM clickCount_stats WHERE property_id = ?', [propertyId], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0].click_count);
    });
};

const getTotalClicks = (callback) => {
    db.query('SELECT COUNT(*) AS totalClicks FROM clickCount_stats', (err, result) => {
        if (err) return callback(err, null);
        callback(null, result[0].totalClicks);
    });
};

module.exports = {
    recordClick,
    getClickCountByPropertyId,
    getTotalClicks
};
