const express = require("express");
const router = express.Router();
const cityController = require("../controllers/cityController");

router.get("/cities", cityController.getCities);
router.post("/cities", cityController.addCity); // ✅ NEW
router.delete("/cities/:id", cityController.deleteCity); // ✅ NEW

module.exports = router;
