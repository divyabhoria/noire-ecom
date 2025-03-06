const express = require("express");
const router = express.Router();
const regionController = require("../controllers/regionController");

router.post("/", regionController.create);       // Create a new region
router.get("/", regionController.findAll);       // Get all regions
router.get("/:id", regionController.findOne);    // Get a region by ID
router.put("/:id", regionController.update);     // Update a region by ID
router.delete("/:id", regionController.delete);  // Delete a region by ID

module.exports = router;
