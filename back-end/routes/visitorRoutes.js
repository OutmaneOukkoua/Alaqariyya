const express = require('express');
const router = express.Router();
const { incrementVisitorCount, getAllVisitorDetails, getVisitorCount } = require('../controllers/visitorController');

// Route to increment visitor count
router.get('/api/visitor/increment', incrementVisitorCount);

// Route to get the unique visitor count (sum of IP addresses)
router.get('/api/visitor/count', getVisitorCount);

// Route to get all visitor details
router.get('/api/visitor/all-details', getAllVisitorDetails);

module.exports = router;
