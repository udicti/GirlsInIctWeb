const express = require('express');
const {AllArticlesView} = require("../ui/article/articles");
const {ViewArticle} = require("../ui/article/article-read");
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const newsAndEventsRouter = express.Router();

newsAndEventsRouter.get('/', (request, response) => {
    response.send(AppHtmlTemplate(AllArticlesView()));
});

newsAndEventsRouter.get('/:articleId', (request, response) => {
    const articleId = request.params.articleId;
    response.send(AppHtmlTemplate(ViewArticle(articleId)));
});

module.exports = newsAndEventsRouter;
