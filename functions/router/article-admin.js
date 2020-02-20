const express = require('express');
const {EditArticle} = require("../ui/article/article-admin-edit");
const {NewArticle} = require("../ui/article/article-admin-new");
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const {ArticleHome} = require("../ui/article/article-admin-home");
const {ArticleController} = require('../controller/ArticleController');

const articleRouter = express.Router();
const articleController = new ArticleController();

articleRouter.get('/', (request, response) => {
    response.send(AppHtmlTemplate(ArticleHome()));
});

articleRouter.get('/create', (request, response) => {
    response.send(AppHtmlTemplate(NewArticle()));
});

articleRouter.post('/create', (request, response) => {
    const article = request.body;
    articleController.saveArticle(article).then(_ => {
        response.redirect('/admin/article');
    }).catch(reason => {
        console.log(reason);
        response.redirect('/admin/article/create');
    })

});

articleRouter.get('/update/:articleId', (request, response) => {
    response.send(AppHtmlTemplate(EditArticle()));
});

module.exports = articleRouter;
