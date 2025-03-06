const express = require("express");
const router = express.Router();
const departmentDesigController = require("../controllers/departmentDesigController");

router.post("/", departmentDesigController.create);
router.get("/", departmentDesigController.findAll);
router.get("/:deptid/:desigid", departmentDesigController.findOne);
router.put("/:deptid/:desigid", departmentDesigController.update);
router.delete("/:deptid/:desigid", departmentDesigController.delete);

module.exports = router;
