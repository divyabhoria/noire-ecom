const express = require("express");
const router = express.Router();
const StateController = require("../controllers/stateController");

// ✅ API Routes
router.get("/", StateController.getAllStates);
router.get("/:id", StateController.getStateById);
router.post("/", StateController.createState);
router.put("/:id", StateController.updateState);
router.delete("/:id", StateController.deleteState);

module.exports = router;
