const express = require('express');
const newsController = require('../controllers/newsController');
const upload = require('../utils/uploadConfig'); // Assuming uploadConfig.js sets up multer

const router = express.Router();

// Route setup
router.post('/news', upload.single('image'), newsController.addNews);
router.get('/news', newsController.getNews);
router.delete('/news/:id', newsController.deleteNews);

router.get('/news/:id', newsController.getNewsById);


module.exports = router;
