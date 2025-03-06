const express = require("express");
const router = express.Router();
const OrderItemController = require("../controllers/OrderItemController"); // ✅ Correct import

// ✅ API Routes
router.get("/", OrderItemController.getAllOrderItems); // Get all order items
router.get("/order/:orderId", OrderItemController.getOrderItemsByOrderId); // Get order items by Order ID
router.post("/", OrderItemController.createOrderItem); // Create a new order item
router.put("/:id", OrderItemController.updateOrderItem); // Update an order item
router.delete("/:id", OrderItemController.deleteOrderItem); // Delete an order item

module.exports = router;
