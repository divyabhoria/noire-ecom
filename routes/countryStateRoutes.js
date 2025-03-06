const express = require("express");
const router = express.Router();
const CountryStateController = require("../controllers/countryStateController");

router.post("/", CountryStateController.create);
router.get("/", CountryStateController.findAll);
router.get("/:countryid/:stateid", CountryStateController.findOne);
router.put("/:countryid/:stateid", CountryStateController.update);
router.delete("/:countryid/:stateid", CountryStateController.delete);

module.exports = router;
