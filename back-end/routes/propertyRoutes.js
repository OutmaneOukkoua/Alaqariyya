const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const multer = require('multer');

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage }).array('images', 25); // Adjust field name and limit as necessary

// Routes for property management
router.post('/properties', upload, propertyController.addProperty);
router.get('/properties', propertyController.getProperties);
router.get('/properties/:id', propertyController.getPropertyById);
router.put('/properties/:id', upload, propertyController.updateProperty);
router.put('/properties/:id/availability', propertyController.updatePropertyAvailability);
router.delete('/properties/:id', propertyController.deleteProperty);

module.exports = router;
