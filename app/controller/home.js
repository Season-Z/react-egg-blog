module.exports = app => {
  return class AdminController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login.js', {});
    }

    async render(ctx) {
      const list = ctx.service.article.getList();
      if (ctx.query.mode === 'ssr') {
        await ctx.render('home.js', { url: ctx.url, list });
      } else {
        await ctx.renderClient('home.js', { url: ctx.url, list });
      }
    }
  };
};
