const Sequelize = require('sequelize'),
sequelize = new Sequelize('projetoIntegrador', 'root', '',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})
 module.exports = sequelize
 