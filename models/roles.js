const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Roles = sequelize.define("Roles", {
  roleid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoincrement: true,
  },
  roleName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = Country;
