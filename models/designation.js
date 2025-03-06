const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const Designations = sequelize.define(
  "Designation",
  {
    desigid: {
      type: DataTypes.INTEGER,
      primaryKey: true, // ✅ Corrected typo
      autoIncrement: true, // ✅ Corrected typo
      allowNull: false,
    },
    desigName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Designations",
    timestamps: true,
  }
);

module.exports = Designations;
