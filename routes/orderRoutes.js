// const express = require("express");
// const router = express.Router();
// const OrderController = require("../controllers/OrderController"); // ✅ Correct import

// // ✅ API Routes
// router.get("/", OrderController.getAllOrders);
// router.get("/:id", OrderController.getOrderById);
// router.post("/", OrderController.createOrder);
// router.put("/:id", OrderController.updateOrder);
// router.delete("/:id", OrderController.deleteOrder);

// module.exports = router;
//  orderroutes

const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/OrderController");

// ✅ Create a New Order
router.post("/", OrderController.createOrder);

// ✅ Get All Orders
router.get("/", OrderController.getAllOrders);

// ✅ Get Order by ID
router.get("/:id", OrderController.getOrderById);

// ✅ Update Order Status
router.put("/:id/status", OrderController.updateOrderStatus);

// ✅ Delete Order
router.delete("/:id", OrderController.deleteOrder);

module.exports = router;
