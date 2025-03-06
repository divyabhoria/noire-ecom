const sequelize = require("../configs/database");
const Product = require("./products");
const User = require("./users");
const Order = require("./order");
const OrderItem = require("./orderitems");

// ✅ Define Relationships

// One User can have many Orders
User.hasMany(Order, { foreignKey: "userId", onDelete: "CASCADE" });
Order.belongsTo(User, { foreignKey: "userId" });

// One Order can have multiple Order Items
Order.hasMany(OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

// One Product can be part of multiple Order Items
Product.hasMany(OrderItem, { foreignKey: "productId", onDelete: "CASCADE" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully!");
    await sequelize.sync({ alter: true });
    console.log("✅ Database synced successfully!");
  } catch (error) {
    console.error("❌ Database sync error:", error);
  }
})();

module.exports = { Product, Order, OrderItem, User };
