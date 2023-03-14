const { Sequelize } = require("sequelize");
 
const db = new Sequelize('auth_db', 'root', 'Udit1234#', {
    host: "localhost",
    dialect: "mysql"
});
 
module.exports = db;