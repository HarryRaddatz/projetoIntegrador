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
    },
    favoriteChampions1: {
        type: DataTypes.STRING
    },
    favoriteChampions2:{
        type: DataTypes.STRING
    },
    favoriteChampions3:{
        type: DataTypes.STRING
    },
    favoriteChampions4:{
        type: DataTypes.STRING
    },
    favoriteChampions5:{
        type: DataTypes.STRING
    }, 
    senha: {
        type: DataTypes.STRING(128),
        allowNull: false,
    }
})

module.exports = User