// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = require('../configs/database');

// const Users = sequelize.define('User', {
//     userid: {
//         type: DataTypes.STRING,
//         primaryKey: true  
        
//     },
//    Password: {
//         type: DataTypes.STRING,
//         allowNull: false

//     },
//     username:{
//             type:DataTypes.STRING,
//             allowNull: false
//     },
//     emailid:{
//             type: DataTypes.STRING,
//             allowNull: false
//     },
//     phoneno:{
//             type: DataTypes.STRING,
//             allowNull: false
//     },
//     DOB:{
//             type: DataTypes.DATE,
//             allowNull: false
//     },

//     roleid:{
//             type: DataTypes.INTEGER,
//             allowNull: false
// }
// });
// module.exports = Users;




const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../configs/database');

const User = sequelize.define('User', {
    id: {  // ✅ Auto-incrementing Primary Key
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true  
    },
    userid: {  
        type: DataTypes.STRING,
        allowNull: false,
        unique: true 
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailid: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneno: {
        type: DataTypes.STRING,
        allowNull: false
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: false
    },
    roleid: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = User;

