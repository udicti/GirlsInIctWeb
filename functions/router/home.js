const express = require('express');
const {ArticleController} = require("../controller/ArticleController");
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const {Landing} = require("../ui/home/landing");
const {Login} = require("../ui/home/login");
const homeRouter = express.Router();
const articleController = new ArticleController();
homeRouter.get('/', (request, response) => {
    articleController.getArticles(2, 0, '').then(articleData => {
        response.send(AppHtmlTemplate(Landing(articleData)));
    }).catch(reason => {
        response.status(400).json(reason);
    });
});

homeRouter.get('/login', (request, response) => {
    response.send(AppHtmlTemplate(Login()));
});

homeRouter.get('/login/1', (request, response) => {
    response.cookie('uid', 'jioyg875iu');
    response.redirect('/admin/article');
});

homeRouter.get('/logout', (request, response) => {
    response.cookies.set('uid', {expires: Date.now()});
    response.redirect('/');
});

module.exports = homeRouter;
