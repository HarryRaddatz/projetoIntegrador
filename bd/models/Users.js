const Sequelize = require('sequelize'),
database = require('../bd'),

User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nomeCompleto: {
        type: Sequelize.STRING(),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(),
        allowNull: false,
        primaryKey: true
    },
    senha: {
        type: Sequelize.STRING(),
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING(),
        primaryKey: true,
        allowNull: false
    },
})


module.exports = User
