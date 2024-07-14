const express = require('express');
const app = express();

const config = require('./config');

const host = config.database.host;
const port = config.server.port;

// Подключение к базе данных
const db = require('./db/connect');

// Обработка JSON-данных в теле входящих запросов. 
// Преобразование в javascript-объект, доступный через req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Подключение маршрутов
const routes = require('./routes');
app.use('/', routes);

// Подключение шаблонов
app.set('view engine', 'ejs');

// Включение сервера
app.listen(port, host, () => {
    console.log(`Listening http://${host}:${port}`);
});
