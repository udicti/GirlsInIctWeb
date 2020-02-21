const express = require('express');
const {EditArticle} = require("../ui/article/article-admin-edit");
const {NewArticle} = require("../ui/article/article-admin-new");
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const {ArticleHome} = require("../ui/article/article-admin-home");
const {ArticleController} = require('../controller/ArticleController');

const articleRouter = express.Router();
const articleController = new ArticleController();

articleRouter.get('/', (request, response) => {
    const err = request.query.err;
    articleController.getArticles(1000, 0).then(value => {
        response.send(AppHtmlTemplate(ArticleHome(value, err)));
    }).catch(reason => {
        response.status(400).json(reason);
    });
});

articleRouter.get('/create', (request, response) => {
    response.send(AppHtmlTemplate(NewArticle()));
});

articleRouter.get('/delete/:objectId', (request, response) => {
    const objectId = request.params.objectId;
    articleController.deleteArticle(objectId).then(value => {
            response.redirect('/admin/article');
        }
    ).catch(reason => {
        response.redirect('/admin/article?err=jhguyuyfhjf');
    })
});

articleRouter.post('/create', (request, response) => {
    const article = request.body;
    articleController.saveArticle(article).then(_ => {
        response.json({message: 'done saving article'});
    }).catch(reason => {
        console.log(reason);
        response.status(400).json(reason);
    })

});

articleRouter.get('/update/:articleId', (request, response) => {
    response.send(AppHtmlTemplate(EditArticle()));
});

module.exports = articleRouter;
