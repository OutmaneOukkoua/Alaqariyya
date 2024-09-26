const express = require('express');
const router = express.Router();
const { recordClick, getTotalClicks } = require('../controllers/clickController');

// Route to record a click on a property
router.post('/clicks/:id', recordClick);

// Route to get total clicks across all properties
router.get('/api/properties/total-clicks', getTotalClicks);

module.exports = router;
