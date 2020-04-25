const express = require('express');
const {ArticleController} = require("../controller/ArticleController");
const {AuthMiddleware} = require("../controller/Auth");
const {AppHtmlTemplate} = require("../ui/common/AppHtmlTemplate");
const {Landing} = require("../ui/home/landing");
const {Login} = require("../ui/home/login");
const homeRouter = express.Router();
const authMiddleware = new AuthMiddleware();
const articleController = new ArticleController();

homeRouter.get('/', (request, response) => {
    articleController.getArticles(5, 0, '').then(articleData => {
        response.send(AppHtmlTemplate(Landing(articleData)));
    }).catch(reason => {
        response.status(400).json(reason);
    });
});

homeRouter.get('/login', (request, response) => {
    response.send(AppHtmlTemplate(Login()));
});

homeRouter.post('/login', (request, response) => {
    const body = request.body;
    if (body && body.username && body.password) {
        const username = request.body.username;
        const password = request.body.password;
        AuthMiddleware.userLogin(username, password).then(value => {
            const user = JSON.parse(JSON.stringify(value));
            // console.log(user);
            response.cookie('uid',user.objectId, { maxAge: 3600000});
            response.redirect('/admin/article');
        }).catch(reason => {
            console.log(reason);
            response.status(400).redirect('/login');
        });
    } else {
        response.status(400).redirect('/login');
    }

});

homeRouter.get('/logout', (request, response) => {
    response.cookie('uid', {expires: Date.now()});
    response.redirect('/');
});

module.exports = homeRouter;
