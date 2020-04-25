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
            return await BFast.database.collection('articles').query().count();
        } catch (e) {
            throw e;
        }
    };

    async getArticles(size, skip, objectId) {
        try {
            const query = BFast.database.collection('articles').query();
            const total = await BFast.database.collection('articles').query().count();
            query.include(['updatedAt', 'title', 'objectId']);
            query.notEqualTo('objectId', objectId);
            query.descending('updatedAt');
            query.limit(size);
            query.skip(skip);
            const response = await query.find();
            return JSON.parse(JSON.stringify(response), JSON.parse(JSON.stringify(total)));
        } catch (e) {
            throw e;
        }
    }

    async viewArticle(objectId) {
        try {
            return await BFast.database.collection('articles').get(objectId);
        } catch (e) {
            throw e;
        }
    }

    async getArticleById(objectId) {
        try {
            return await BFast.database.collection('articles').get(objectId);
        } catch (e) {
            throw e;
        }
    }

    async updateArticle(objectId, title, content) {
        try {
            return await BFast.database.collection('articles').update(objectId, {
                title,
                content
            });
        } catch (e) {
            throw e;
        }
    }

    async deleteArticle(objectId) {
        try {
            return await BFast.database.collection('articles').delete(objectId);
        } catch (e) {
            throw e;
        }
    }
}

module.exports = {
    ArticleController
};
