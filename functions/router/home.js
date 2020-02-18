const express = require('express');
const {Landing} = require("../ui/landing");
const homeRouter = express.Router();

homeRouter.get('/', (request, response) => {
    response.send(`
        <!Doctype>
        <html lang="en">
           <head>
               <title>SmartGirl</title>
               <link rel="stylesheet" href="/bootstrap4.css">
               <link href="/roboto.css" rel="stylesheet">
               <link rel="stylesheet" href="/style.css">
           </head>
           <body>
                ${Landing()}
                <script src="/js/jquery.js"></script>
                <script src="/js/popper.js"></script>
                <script src="/js/bootstrap.js"></script>
            </body>
        </html>
    `)
});

module.exports = homeRouter;
