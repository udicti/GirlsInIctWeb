const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./router/home');

app.use(express.static(path.join(__dirname, './public')));

app.use('/', homeRouter);

exports.home = {
    path: '/',
    onRequest: app
};
