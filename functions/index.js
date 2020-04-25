const {BFast} = require('bfastnode');
const express = require('express');
const app = express();
const path = require('path');
const homeRouter = require('./router/home');
const articleRouter = require('./router/article-admin');
const {AuthMiddleware} = require("./controller/Auth");
const authMiddleware = new AuthMiddleware();
const newsAndEventsRouter = require('./router/article');
BFast.init({applicationId: 'smartgirls', projectId: 'smartgirls', autoDevMode: false});
app.use(express.static(path.join(__dirname, './public')));

app.use('/', homeRouter);
app.use('/article', newsAndEventsRouter);
app.use('/admin/article', authMiddleware.isAdmin, articleRouter);

exports.home = BFast.functions.onHttpRequest('/', app);
