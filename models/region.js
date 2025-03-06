const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const Region = sequelize.define('Region', {
            regionid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
        
    },
    RegionName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
module.exports = Region;



