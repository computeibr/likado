const Sequelize = require("sequelize");

const connection = new Sequelize('computei_comando','computei_comando','Educacao100',{
    host: '138.128.185.195',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;


