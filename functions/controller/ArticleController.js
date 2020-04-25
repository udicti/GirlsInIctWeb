const {BFast} = require('bfastnode');

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
            return await BFast.database.collection('articles').save(article);
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
    async getTotalArticles() {
        try {
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const query = new Parse.Query(ArticleObject);
            const response = await query.count();
            console.log(response);
            return JSON.parse(JSON.stringify(response));
        }catch (e) {
            throw e;
        }
    };
    async getArticles(size, skip, objectId) {
        try {
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const query = new Parse.Query(ArticleObject);
            const queryCount = new Parse.Query(ArticleObject);
            const total = queryCount.count();
            query.include(['updatedAt', 'title', 'objectId']);
            query.notEqualTo('objectId', objectId);
            query.descending('updatedAt');
            query.limit(size);
            query.skip(skip);
            const response = await query.find();
            return JSON.parse(JSON.stringify(response), JSON.parse(JSON.stringify(total)));
        }catch (e) {
            throw e;
        }
    }

    async viewArticle(objectId) {
        try {
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const  query = new Parse.Query(ArticleObject);
            const articleData = await query.get(objectId);
            return JSON.parse(JSON.stringify(articleData));
        }catch (e) {
            throw e;
        }
    }
    async getArticleById(objectId) {
        try {
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const  query = new Parse.Query(ArticleObject);
            const articleData = await query.get(objectId);
            return JSON.parse(JSON.stringify(articleData));
        }catch (e) {
            throw e;
        }
    }
    async updateArticle(objectId, title, content) {
        try {
            console.log(title);
            const ArticleObject = Parse.Object.extend('articles', null, null);
            const  query = new Parse.Query(ArticleObject);
            query.get( objectId).then(object => {
                    console.log(object.title);
                    object.set("title", title);
                    object.set("content", content);
                    return object.save();
                },
                 (error) => {
                    throw error;
            });
        }catch (e) {
            throw e;
        }
    }
    async deleteArticle(objectId) {
        try {
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
