
// const express = require('express');
// const cors = require('cors');
// const productRoutes = require('./routes/productsRoutes');
// const userRoutes = require("./routes/userRoutes");
// const orderRoutes = require("./routes/orderRoutes");

// require('dotenv').config();
// const sequelize = require('./configs/database');
// const { or } = require('sequelize');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // ✅ Required for handling JSON data in POST requests

// // ✅ API Routes
// app.use('/api/products', productRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/order",orderRoutes);


// // Start Server
// const PORT = process.env.PORT || 5000;
// sequelize.sync({ alter: true }).then(() => {
//     console.log("✅ Database Synced!");
//     app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// }).catch(err => console.log("❌ Database Sync Error:", err));




const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productsRoutes');
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");
require('dotenv').config();
const sequelize = require('./configs/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Required for handling JSON data in POST requests

// ✅ API Routes

app.get("/", (req, res) => {
    res.send("Welcome to the Cosmetics E-commerce Website!");
});
app.use('/api/products', productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-items",orderItemRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
sequelize.sync({ alter: true }).then(() => {
    console.log("✅ Database Synced!");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}).catch(err => console.log("❌ Database Sync Error:", err));