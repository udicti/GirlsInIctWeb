const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./router/home');
const articleRouter = require('./router/article');
const createArticleRouter = require('./router/create-article');

app.use(express.static(path.join(__dirname, './public')));

app.use('/', homeRouter);

exports.home = {
    path: '/',
    onRequest: app
};

app.use('/article', articleRouter);

exports.article = {
    path: '/article',
    onRequest: app
};

app.use('/article/create', createArticleRouter);

exports.createArticleRouter = {
    path: '/article/create',
    onRequest: app
};
