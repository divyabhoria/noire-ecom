const Order = require("../models/order");

// ✅ Create a New Order
exports.createOrder = async (req, res) => {
    try {
        const { user_id, total_price } = req.body;

        if (!user_id || !total_price) {
            return res.status(400).json({ message: "user_id and total_price are required" });
        }

        const newOrder = await Order.create({ user_id, total_price });

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("❌ Error creating order:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Get All Orders
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        console.error("❌ Error fetching orders:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Get Order by ID
exports.getOrderById = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json(order);
    } catch (error) {
        console.error("❌ Error fetching order:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Update Order Status
exports.updateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const validStatuses = ["pending", "confirmed", "shipped", "delivered", "cancelled"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ message: "Invalid status" });
        }

        const order = await Order.findByPk(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        await order.update({ status });

        res.status(200).json({ message: "Order status updated successfully", order });
    } catch (error) {
        console.error("❌ Error updating order status:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// ✅ Delete Order
exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        await order.destroy();
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting order:", error);
        res.status(500).json({ message: "Server error", error });
    }
};
