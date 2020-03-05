module.exports = app => {
  const { Controller } = app;

  return class Article extends Controller {
    constructor(ctx) {
      super(ctx);

      this.article = ctx.service.article;
    }

    async list() {
      const result = await this.article.getArticleList();
      this.ctx.body = result;
    }
  };
};
