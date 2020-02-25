const express = require('express');
const {ArticleController} = require("../controller/ArticleController");
const {AllArticlesView} = require("../ui/article/articles");
const {ViewArticle} = require("../ui/article/article-read");
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const newsAndEventsRouter = express.Router();
const articleController = new ArticleController;
newsAndEventsRouter.get('/', (request, response) => {
    let skip = parseInt(request.query.skip);
    articleController.getArticles(20, skip, '').then(articleData => {
        articleController.getTotalArticles().then(totalArticles => {
            response.send(AppHtmlTemplate(AllArticlesView(articleData, totalArticles, skip)));
        }).catch(reason => {
            response.status(400).json(reason);
        });
    }).catch(reason => {
        response.status(400).json(reason);
    });
});

newsAndEventsRouter.get('/:articleId', (request, response) => {
    const articleId = request.params.articleId;
    articleController.viewArticle(articleId).then(articleData => {
        articleController.getArticles(2, 0, articleId).then(readMoreData => {
            response.send(AppHtmlTemplate(ViewArticle(articleData, readMoreData)));
            }).catch(reason => {
                response.status(400).json(reason);
            });
    }).catch(reason => {
        response.status(400).json(reason);
    });
});

module.exports = newsAndEventsRouter;
