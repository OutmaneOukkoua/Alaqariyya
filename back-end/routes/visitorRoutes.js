
const express = require('express');
const router = express.Router();
const { incrementVisitorCount, getVisitorCount } = require('../controllers/visitorController');

// Increment visitor count on any page visit
router.get('/api/visitor/increment', incrementVisitorCount);

// Fetch visitor count without incrementing for Statistique page
router.get('/api/visitor/count', getVisitorCount);

module.exports = router;
