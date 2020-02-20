const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./router/home');
const articleRouter = require('./router/article');
const createArticleRouter = require('./router/create-article');
const readArticleRouter = require('./router/read-article');
const updateArticleRouter = require('./router/update-article');
const newsAndEventsRouter = require('./router/news-and-events');

app.use(express.static(path.join(__dirname, './public')));

app.use('/', homeRouter);
app.use('/news-and-events', newsAndEventsRouter);
app.use('/article', articleRouter);
app.use('/article/create', createArticleRouter);
app.use('/article/read', readArticleRouter);
app.use('/article/update', updateArticleRouter);

exports.home = {
    path: '/',
    onRequest: app
};

