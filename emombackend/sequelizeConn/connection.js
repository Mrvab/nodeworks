const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize_test", "root", "Mysql123pwd", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: 0,
});

module.exports = sequelize;
// global.sequelize = sequelize;
