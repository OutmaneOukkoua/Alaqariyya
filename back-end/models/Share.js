const db = require('../config/db');

exports.recordShare = (propertyId, callback) => {
    db.query('INSERT INTO share_stats (property_id) VALUES (?)', [propertyId], callback);
};

exports.getTotalShares = (callback) => {
    db.query('SELECT COUNT(*) AS totalShares FROM share_stats', (err, results) => {
        if (err) return callback(err, null);
        callback(null, results[0].totalShares);
    });
};
