const Sequelize = require("sequelize");

const connection = new Sequelize('computei_comando','computei_comando','Educacao100',{
    host: 'mysql743.umbler.com:41890',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;


