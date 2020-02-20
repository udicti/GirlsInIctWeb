const express = require('express');
const {AppBarAdmin, Footer} = require("../ui/common");
const {ArticleHome} = require("../ui/article/article-home");
const articleRouter = express.Router();

articleRouter.get('/', (request, response) => {
    response.send(`
        <!Doctype>
        <html lang="en">
           <head>
               <title>SmartGirl</title>
               <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
               <link rel="stylesheet" href="/bootstrap4.css">
               <link href="/roboto.css" rel="stylesheet">
               <link rel="stylesheet" href="/style.css">
           </head>
           <body>
                ${AppBarAdmin()}
                ${ArticleHome()}
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

module.exports = articleRouter;
