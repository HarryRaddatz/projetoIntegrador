const { Sequelize } = require("sequelize");
require("dotenv").config({ path: "../.env" });

const sequelize = new Sequelize(
  process.env.BD_NAME,
  process.env.BD_USER,
  process.env.BD_PASSWORD,
  {
    host: process.env.BD_HOSTNAME,
    dialect: "mysql",
  }
);

module.exports = sequelize