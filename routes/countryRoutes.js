const express = require('express');
const countryController = require('../controllers/countryController');

const router = express.Router();

// COUNTRY ROUTES
router.post('/', countryController.create);
router.get('/', countryController.findAll);
router.get('/:id', countryController.findOne);
router.put('/:id', countryController.update);
router.delete('/:id', countryController.delete);

module.exports = router;
