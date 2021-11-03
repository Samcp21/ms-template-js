const { Sequelize } = require("sequelize");
console.log("process.env.DB_SMS_DATABASE ", process.env.DB_SMS_DATABASE);
const sequelize = new Sequelize(
  process.env.DB_SMS_DATABASE,
  process.env.DB_SMS_USER,
  process.env.DB_SMS_PASSWORD,
  {
    host: process.env.DB_SMS_HOST,
    dialect: "mysql"
  }
);

module.exports = sequelize;
