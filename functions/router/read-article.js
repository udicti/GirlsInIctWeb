const express = require('express');
const {ViewArticle} = require("../ui/article/view-article");
const {AppBarAdmin, Footer} = require("../ui/common");
const readArticleRouter = express.Router();

readArticleRouter.get('/', (request, response) => {
    response.send(`
        <!Doctype>
        <html lang="en">
           <head>
               <title>SmartGirl</title>
               <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
               <link rel="stylesheet" href="/bootstrap4.css">
               <link href="/roboto.css" rel="stylesheet">
               <link rel="stylesheet" href="/style.css">
           </head>
           <body>
                ${AppBarAdmin()}
                ${ViewArticle()}
                ${Footer()}
                <script src="/js/jquery.js"></script>
                <script src="/js/popper.js"></script>
                <script src="/js/bootstrap.js"></script>
            </body>
        </html>
    `)
});

module.exports = readArticleRouter;
