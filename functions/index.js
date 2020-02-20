const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./router/home');
const articleRouter = require('./router/article');
const createArticleRouter = require('./router/create-article');
const updateArticleRouter = require('./router/update-article');
const {AuthMiddleware} = require("./controller/Auth");
const authMiddleware = new AuthMiddleware();

app.use(express.static(path.join(__dirname, './public')));

app.use('/', homeRouter);
app.use('/admin/article', authMiddleware.isAdmin, articleRouter);
app.use('/admin/article/create', authMiddleware.isAdmin, createArticleRouter);
app.use('/admin/article/update', authMiddleware.isAdmin, updateArticleRouter);


exports.home = {
    path: '/',
    onRequest: app
};
