const express = require("express");
const router = express.Router();
const designationsController = require("../controllers/designationsController");

router.post("/", designationsController.create);
router.get("/", designationsController.findAll);
router.get("/:desigid", designationsController.findOne);
router.put("/:desigid", designationsController.update);
router.delete("/:desigid", designationsController.delete);

module.exports = router;
