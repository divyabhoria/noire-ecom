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
const countryRoutes = require('./routes/countryRoutes');
const customerRoutes = require('./routes/customerRoutes');
const permissionsRoutes = require("./routes/permissionsRoutes");
const regionCountryRoutes = require("./routes/region_countryRoutes");
const regionRoutes = require("./routes/regionRoutes");
const rolePermissionsRoutes = require("./routes/role_permissionsRoutes");
// const employeeRoutes = require("./routes/employeeRoutes");
const state_Routes=require("./routes/stateRoutes");


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
app.use('/api/countries', countryRoutes);
app.use('/api/customers', customerRoutes);
app.use("/api/permissions", permissionsRoutes);
app.use("/api/regions", regionRoutes);
app.use("/api/region-country", regionCountryRoutes);
app.use("/api/role-permissions", rolePermissionsRoutes);
// app.use("/api/employees", employeeRoutes);
app.use("/api/state",state_Routes);


// Start Server
const PORT = process.env.PORT || 3000;
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
