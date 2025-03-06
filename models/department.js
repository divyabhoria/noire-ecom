const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Departments = sequelize.define(
  "Department",
  {
    deptid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    dname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Departments", // Ensures the table name doesn't change
    timestamps: true, // Ensures createdAt & updatedAt fields
  }
);

module.exports = Departments;
