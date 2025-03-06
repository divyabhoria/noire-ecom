const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Dept_Desig = sequelize.define(
  "Dept_Desig",
  {
    deptid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Departments", // Must match the actual table name in DB
        key: "deptid",
      },
    },
    desigid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Designations", // Must match the actual table name in DB
        key: "desigid",
      },
    },
  },
  {
    tableName: "Dept_Desig", // Ensures Sequelize does not pluralize
    timestamps: false, // No createdAt & updatedAt
    indexes: [
      {
        unique: true,
        fields: ["deptid", "desigid"], // Composite primary key
      },
    ],
  }
);

module.exports = Dept_Desig;
