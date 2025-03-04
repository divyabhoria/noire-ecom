const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Country = sequelize.define('Country', {
            countryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
        
    },
    CountryName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Country;



