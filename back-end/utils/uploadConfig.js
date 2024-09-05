


const multer = require('multer');

const storage = multer.memoryStorage(); // Or diskStorage if saving to disk

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    // Optional file validation logic
    cb(null, true);
  }
});

module.exports = upload;
