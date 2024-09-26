const express = require('express');
const router = express.Router();
const { addShare, getShares } = require('../controllers/shareController');

router.post('/api/share', addShare);
router.get('/api/share/total', getShares);

module.exports = router;
