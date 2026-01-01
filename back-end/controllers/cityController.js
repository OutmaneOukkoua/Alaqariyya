const City = require("../models/City");

// GET cities (existing)
exports.getCities = (req, res) => {
  const activeOnly = req.query.active === "1";

  City.getAll(activeOnly, (err, rows) => {
    if (err) {
      console.error("Error fetching cities:", err);
      return res.status(500).json({ message: "Database query error" });
    }
    res.status(200).json({ cities: rows });
  });
};

// ✅ ADD city
exports.addCity = (req, res) => {
  const { name_ar, name_fr } = req.body;

  if (!name_ar || !name_fr) {
    return res.status(400).json({ message: "name_ar and name_fr are required" });
  }

  const slug = name_fr
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");

  City.create({ name_ar, name_fr, slug }, (err, result) => {
    if (err) {
      console.error("Error inserting city:", err);
      return res.status(500).json({ message: "Database insertion error" });
    }

    res.status(201).json({
      message: "City added successfully",
      cityId: result.insertId,
    });
  });
};

exports.deleteCity = (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!id) return res.status(400).json({ message: "Invalid city id" });

  City.deleteById(id, (err, result) => {
    if (err) {
      console.error("Error deleting city:", err);
      return res.status(500).json({ message: "Database deletion error" });
    }
    if (!result || result.affectedRows === 0) {
      return res.status(404).json({ message: "City not found" });
    }
    return res.status(200).json({ message: "City deleted successfully" });
  });
};