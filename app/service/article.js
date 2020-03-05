const { Service } = require('egg');
module.exports = app =>
  class ArticeService extends Service {
    constructor(ctx) {
      super(ctx);

      this.articleModel = ctx.model.Article;
      this.response = ctx.response.serverRes;
    }

    async getArticleList() {
      try {
        const count = await this.articleModel.countDocuments();
        const list = await this.articleModel.find();
        // const list = await articleModel
        //   .find(values)
        //   .limit(+pageSize)
        //   .skip(skip)
        //   .sort({ createdAt: -1 })
        //   .exec();
        const result = {
          data: list,
          count
        };

        return this.response.success(result);
      } catch (error) {
        return this.response.error(error);
      }
    }
  };
