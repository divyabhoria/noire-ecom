const express = require("express");
const router = express.Router();
const regionCountryController = require("../controllers/region_countryController");

router.post("/", regionCountryController.create);       // Create
router.get("/", regionCountryController.findAll);       // Get all
router.get("/:id", regionCountryController.findOne);    // Get one by ID
router.put("/:id", regionCountryController.update);     // Update
router.delete("/:id", regionCountryController.delete);  // Delete

module.exports = router;
