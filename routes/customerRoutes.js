const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

// CUSTOMER ROUTES
router.post('/', customerController.create);  // Create a new customer
router.get('/', customerController.findAll);  // Get all customers
router.get('/:id', customerController.findOne);  // Get a customer by ID
router.put('/:id', customerController.update);  // Update a customer by ID
router.delete('/:id', customerController.delete);  // Delete a customer by ID

module.exports = router;
