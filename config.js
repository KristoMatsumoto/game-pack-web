const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db/properties.json'), 'utf8'));

module.exports = {
    database: {
        user: data.user,
        password: data.password,
        host: 'localhost',
        port: data.port,
        name: data.name,
    },
    server: {
        port: process.env.PORT || 3000,
    }
};
