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
}

module.exports = {
    ArticleController
};
