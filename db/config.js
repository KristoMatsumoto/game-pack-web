const { Sequelize } = require('sequelize');
const path = require('path');

const config = require('../config');

const sequelize = new Sequelize(
    config.database.name, 
    config.database.user, 
    config.database.password, 
    {
        host: config.database.host,
        port: config.database.port,
        dialect: 'postgres',
        logging: false, // SQL-запросы в консоли
    }
);

module.exports = sequelize;
