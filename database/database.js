const Sequelize = require("sequelize");

const connection = new Sequelize('computei_comando','computei_comando','Educacao100',{
    host: 'mysql743.umbler.com',
    dialect: 'mysql',
    port: '41890',
    timezone: "-03:00"
});

module.exports = connection;


