const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productsRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const orderItemRoutes = require("./routes/orderItemRoutes");
const countryStateRoutes = require("./routes/countryStateRoutes");
const departmentsRoutes = require("./routes/departmentsRoutes");
const designationsRoutes = require("./routes/designationsRoutes");
const departmentDesigRoutes = require("./routes/departmentDesigRoutes");

require("dotenv").config();
const sequelize = require("./configs/database");

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Required for handling JSON data in POST requests

// API Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Cosmetics E-commerce Website!");
});

// Routes for other features
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/order-items", orderItemRoutes);
app.use("/api/countrystate", countryStateRoutes);
app.use("/api/departments", departmentsRoutes);
app.use("/api/designations", designationsRoutes);
app.use("/api/department-desig", departmentDesigRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database Synced!");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("Database Sync Error:", err));

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

module.exports = app;
