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

    /**
     *
     * @param size {number}
     * @param skip {number}
     * @returns {Promise<[]>}
     */
    async getArticles(size, skip) {
        try {
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const query = new Parse.Query(ArticleObject);
            query.include(['updatedAt','title','objectId']);
            query.descending('updatedAt');
            query.limit(size);
            query.skip(skip);
            const response = await query.find();
            return JSON.parse(JSON.stringify(response));
        }catch (e) {
            throw e;
        }
    }

    async deleteArticle(objectId) {
        try {
            throw 'f';
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const  query = new Parse.Query(ArticleObject);
            const oldObject = await query.get(objectId);
            const response = await oldObject.destroy();
            return response;
        }catch (e) {
            throw e;
        }
    }
}

module.exports = {
    ArticleController
};
