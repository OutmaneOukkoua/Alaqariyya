// routes/uploadProgress.js
const express = require('express');
const router = express.Router();
const { getProgress } = require('../utils/progressStore');

router.get('/upload-progress/:uploadId', (req, res) => {
  const { uploadId } = req.params;
  return res.json(getProgress(uploadId));
});

module.exports = router;
