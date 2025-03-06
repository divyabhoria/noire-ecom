// const express = require("express");
// const router = express.Router();
// const permissionsController = require("../controllers/permissionsController");

// router.post("/", permissionsController.create);       // Create a new permission
// router.get("/", permissionsController.findAll);       // Get all permissions
// router.get("/:id", permissionsController.findOne);    // Get a permission by ID
// router.put("/:id", permissionsController.update);     // Update a permission by ID
// router.delete("/:id", permissionsController.delete);  // Delete a permission by ID

// module.exports = router;


const express = require("express");
const router = express.Router();
const permissionsController = require("../controllers/permissionsController");

router.post("/", permissionsController.create);       // Create a new permission
router.get("/", permissionsController.findAll);       // Get all permissions
router.get("/:id", permissionsController.findOne);    // Get a permission by ID
router.put("/:id", permissionsController.update);     // Update a permission by ID
router.delete("/:id", permissionsController.delete);  // Delete a permission by ID

module.exports = router;
