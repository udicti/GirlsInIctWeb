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
            return 'Done';
        } catch (e) {
            throw e;
        }
    }
}

module.exports = {
    ArticleController
};
