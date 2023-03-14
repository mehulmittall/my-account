const Sequelize = require("sequelize");
const db = require( "../config/Database.js");

const Users = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    department:{
        type:Sequelize.STRING
    },
    gender:{
        type:Sequelize.STRING
    },
    dob:{
        type:Sequelize.INTEGER
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
exports.module=Users;