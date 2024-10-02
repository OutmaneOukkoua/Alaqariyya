

// const db = require('../config/db');

// // Fetch visitor by IP address
// const getVisitorByIP = (ip_address, callback) => {
//     db.query('SELECT * FROM visitor_details WHERE ip_address = ?', [ip_address], (err, result) => {
//         if (err) return callback(err, null);
//         callback(null, result);
//     });
// };

// // Insert new visitor details (IP, city, country, visit count)
// const insertVisitorDetails = (ip_address, country, city, callback) => {
//     db.query('INSERT INTO visitor_details (ip_address, country, city, visit_count) VALUES (?, ?, ?, 1)', 
//         [ip_address, country, city], (err, result) => {
//         if (err) return callback(err, null);
//         callback(null, result);
//     });
// };

// // Update visitor visit count by IP address
// const updateVisitCount = (ip_address, visit_count, callback) => {
//     db.query('UPDATE visitor_details SET visit_count = ? WHERE ip_address = ?', 
//         [visit_count, ip_address], (err, result) => {
//         if (err) return callback(err, null);
//         callback(null, result);
//     });
// };

// // Get all visitor details
// const getAllVisitorDetails = (callback) => {
//     db.query('SELECT ip_address, city, country, visit_count FROM visitor_details ORDER BY visit_count DESC', (err, result) => {
//         if (err) return callback(err, null);
//         callback(null, result);
//     });
// };

// // Get the count of unique visitors (unique IP addresses)
// const getUniqueVisitorCount = (callback) => {
//     db.query('SELECT COUNT(DISTINCT ip_address) AS unique_visitors FROM visitor_details', (err, result) => {
//         if (err) return callback(err, null);
//         callback(null, result);
//     });
// };

// module.exports = {
//     getVisitorByIP,
//     insertVisitorDetails,
//     updateVisitCount,
//     getAllVisitorDetails,
//     getUniqueVisitorCount
// };


const db = require('../config/db');

// Fetch visitor by IP address
const getVisitorByIP = (ip_address, callback) => {
    db.query('SELECT * FROM visitor_details WHERE ip_address = ?', [ip_address], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Insert new visitor details (IP, city, country, visit count)
const insertVisitorDetails = (ip_address, country, city, callback) => {
    db.query('INSERT INTO visitor_details (ip_address, country, city, visit_count) VALUES (?, ?, ?, 1)', 
        [ip_address, country, city], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Update visitor visit count by IP address
const updateVisitCount = (ip_address, visit_count, callback) => {
    db.query('UPDATE visitor_details SET visit_count = ? WHERE ip_address = ?', 
        [visit_count, ip_address], (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Get all visitor details
const getAllVisitorDetails = (callback) => {
    db.query('SELECT ip_address, city, country, visit_count FROM visitor_details ORDER BY visit_count DESC', (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

// Get the count of unique visitors (unique IP addresses)
const getUniqueVisitorCount = (callback) => {
    db.query('SELECT COUNT(DISTINCT ip_address) AS unique_visitors FROM visitor_details', (err, result) => {
        if (err) return callback(err, null);
        callback(null, result);
    });
};

module.exports = {
    getVisitorByIP,
    insertVisitorDetails,
    updateVisitCount,
    getAllVisitorDetails,
    getUniqueVisitorCount
};
