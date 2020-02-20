const Parse = require('parse/node');
Parse.initialize('smartgirls', '');
Parse.serverURL = 'https://smartgirls-daas.bfast.fahamutech.com';

class ArticleController {

    /**
     *
     * @param article {{
     *     title: string,
     *     content: string
     * }}
     * @return Promise
     */
    async saveArticle(article) {
        try {
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const articleObject = new ArticleObject();
            return await articleObject.save(article);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = {
    ArticleController
};
