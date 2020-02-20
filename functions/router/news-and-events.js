const express = require('express');
const {NewsEvents} = require('../ui/news-and-events/news-events');
const {AppBar, Footer} = require('../ui/common');
const newsAndEventsRouter  = express.Router();

newsAndEventsRouter.get('/', (request, response) => {
    response.send (`
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
                ${AppBar()}
                ${NewsEvents()}
                ${Footer()}
                <script src="/js/jquery.js"></script>
                <script src="/js/popper.js"></script>
                <script src="/js/bootstrap.js"></script>
            </body>
        </html>
    `)
});

module.exports = newsAndEventsRouter;
