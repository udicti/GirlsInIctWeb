const express = require('express');
const {Landing} = require("../ui/home/landing");
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

homeRouter.get('/login', (request, response) => {
    response.send(`
        <body>Login page</body>
    `)
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
