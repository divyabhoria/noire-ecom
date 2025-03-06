const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables

// ✅ Configure Sequelize with .env variables
const sequelize = new Sequelize(
  process.env.DB_NAME || "cosmetics_ecom",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "DivijSuri@6280951645", // Use an empty string if no password
  {
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    logging: false,
  }
);

// ✅ Test Database Connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `✅ Connected to MySQL database: ${
        process.env.DB_NAME || "cosmetics_ecom"
      }`
    );
    await sequelize.sync(); // 🔹 Only sync without forcing a reset
    console.log("✅ Database Synced!");
  } catch (error) {
    console.error("❌ Database connection error:", error);
  }
})();

module.exports = sequelize;
