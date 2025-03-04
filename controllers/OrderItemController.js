const OrderItem = require("../models/orderitems");

// ✅ Get all order items
exports.getAllOrderItems = async (req, res) => {
    try {
        const orderItems = await OrderItem.findAll();
        res.json(orderItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Get order items by Order ID
exports.getOrderItemsByOrderId = async (req, res) => {
    try {
        const orderItems = await OrderItem.findAll({ where: { order_id: req.params.orderId } });
        res.json(orderItems);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Create a new order item
exports.createOrderItem = async (req, res) => {
    try {
        const { order_id, product_id, quantity, price } = req.body;

        if (!order_id || !product_id || !quantity || !price) {
            return res.status(400).json({ message: "All fields (order_id, product_id, quantity, price) are required" });
        }

        const orderItem = await OrderItem.create({ order_id, product_id, quantity, price });
        res.status(201).json({ message: "Order item created successfully", orderItem });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// ✅ Update an order item
exports.updateOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItem.findByPk(req.params.id);
        if (!orderItem) return res.status(404).json({ message: "Order item not found" });

        await orderItem.update(req.body);
        res.json({ message: "Order item updated successfully", orderItem });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// ✅ Delete an order item
exports.deleteOrderItem = async (req, res) => {
    try {
        const orderItem = await OrderItem.findByPk(req.params.id);
        if (!orderItem) return res.status(404).json({ message: "Order item not found" });

        await orderItem.destroy();
        res.json({ message: "Order item deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
