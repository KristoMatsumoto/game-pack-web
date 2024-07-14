const data = require('../config').database;

const pgp = require('pg-promise')();
const db = pgp(process.env.DATABASE_URL || `postgres://${data.user}:${data.password}@localhost:${data.port}/${data.name}`);

module.exports = db;
