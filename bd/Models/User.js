const { Sequelize, DataTypes } = require("sequelize"),
database = require('../database')

const User = database.define("Users",
{
    email: {
        type: DataTypes.STRING(264),
        allowNull: false,
        primaryKey: true
    },
    nomeCompleto: {
        type: DataTypes.STRING(128),
        allowNull: false,
    },
    nickname: {
        type: DataTypes.STRING(264),
        allowNull: false,
        primaryKey: true
    },
    dateBorn:{
        type: DataTypes.DATEONLY,
        allowNull: false        
    }
})

module.exports = User