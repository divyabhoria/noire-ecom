const express = require("express");
const router = express.Router();
const rolePermissionsController = require("../controllers/role_permissionsController");

router.post("/", rolePermissionsController.create);       // Create a new role-permission entry
router.get("/", rolePermissionsController.findAll);       // Get all role-permission entries
router.get("/:id", rolePermissionsController.findOne);    // Get a role-permission entry by ID
router.put("/:id", rolePermissionsController.update);     // Update a role-permission entry by ID
router.delete("/:id", rolePermissionsController.delete);  // Delete a role-permission entry by ID

module.exports = router;
