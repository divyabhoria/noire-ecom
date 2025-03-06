const express = require("express");
const router = express.Router();
const departmentsController = require("../controllers/departmentsController");

router.post("/", departmentsController.create);
router.get("/", departmentsController.findAll);
router.get("/:deptid", departmentsController.findOne);
router.put("/:deptid", departmentsController.update);
router.delete("/:deptid", departmentsController.delete);

module.exports = router;
