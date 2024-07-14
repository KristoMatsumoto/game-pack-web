const data = require('../config').database;

const pgmigrate = require('node-pg-migrate');
const path = require('path');

const config = {
    databaseUrl: process.env.DATABASE_URL || `postgres://${data.user}:${data.password}@localhost:${data.port}/${data.name}`,
    dir: path.resolve(__dirname, 'migrations'),
    direction: process.argv[2] === 'down' ? 'down' : 'up',
    count: process.argv[3] || Infinity
};

pgmigrate.default(config)
    .then(() => {
        console.log('Migrations executed successfully');
    })
    .catch(err => {
        console.error('Error executing migrations', err);
    });
