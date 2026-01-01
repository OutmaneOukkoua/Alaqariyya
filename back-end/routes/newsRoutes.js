// routes/newsRoutes.js
const express = require('express');
const newsController = require('../controllers/newsController');
const upload = require('../utils/uploadConfig');
const idempotency = require('../middlewares/idempotency');

const router = express.Router();

router.post('/news', idempotency, upload.single('image'), newsController.addNews);

router.get('/news', newsController.getNews);
router.get('/news/:id', newsController.getNewsById);
router.delete('/news/:id', newsController.deleteNews);

module.exports = router;

