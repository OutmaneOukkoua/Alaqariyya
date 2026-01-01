// routes/propertyRoutes.js
const express = require("express");
const router = express.Router();
const propertyController = require("../controllers/propertyController");
const multer = require("multer");
const idempotency = require("../middlewares/idempotency");

// Multer setup for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage }).array("images", 25);

// ✅ Important: put /properties/featured BEFORE /properties/:id
router.get("/properties/featured", propertyController.getFeaturedProperties);

// CRUD
router.post("/properties", idempotency, upload, propertyController.addProperty);
router.get("/properties", propertyController.getProperties);
router.get("/properties/:id", propertyController.getPropertyById);
router.put("/properties/:id", idempotency, upload, propertyController.updateProperty);
router.delete("/properties/:id", propertyController.deleteProperty);

// Extra actions
router.put("/properties/:id/availability", propertyController.updatePropertyAvailability);
router.put("/properties/:id/sold", propertyController.updatePropertySoldStatus);
router.put("/properties/:id/featured", propertyController.toggleFeatured);

module.exports = router;
