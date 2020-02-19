const {ArticleTabs} = require("./article-tabs");
const {AppBarAdmin, Footer} = require("../common");



/**
 * Landing page view
 * @returns {string}
 * @constructor
 */
const ArticleHome = () => {
    return `
        
        ${AppBarAdmin()}
        ${ArticleTabs()}
        ${Footer()}
    `
};

module.exports.ArticleHome = ArticleHome;
