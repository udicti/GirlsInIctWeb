const express = require('express');
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const {Landing} = require("../ui/home/landing");
const homeRouter = express.Router();

homeRouter.get('/', (request, response) => {
    response.send(AppHtmlTemplate(Landing()));
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
