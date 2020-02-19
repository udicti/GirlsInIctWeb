const express = require('express');
const {NewArticle} = require("../ui/article/new-article");
const {AppBarAdmin, Footer} = require("../ui/common");
const createArticleRouter = express.Router();

createArticleRouter.get('/', (request, response) => {
    response.send(`
        <!Doctype>
        <html lang="en">
           <head>
               <title>SmartGirl</title>
               <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
               <link rel="stylesheet" href="/bootstrap4.css">
               <link href="/roboto.css" rel="stylesheet">
               <link rel="stylesheet" href="/style.css">
                 <script src="https://cdn.ckeditor.com/4.13.1/standard-all/ckeditor.js"></script>
           </head>
           <body>
                ${AppBarAdmin()}
                ${NewArticle()}
                ${Footer()}
                <script src="/js/jquery.js"></script>
                <script src="/js/popper.js"></script>
                <script src="/js/bootstrap.js"></script>
                <script>
                 $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                  })
                </script>
            </body>
        </html>
    `)
});

module.exports = createArticleRouter;
