module.exports = app => {
  return class AdminController extends app.Controller {
    async login() {
      const { ctx } = this;
      await ctx.renderClient('login.js', {});
    }

    async render(ctx) {
      if (ctx.query.mode === 'ssr') {
        await ctx.render('home.js', { url: ctx.url });
      } else {
        await ctx.renderClient('home.js', { url: ctx.url });
      }
    }
  };
};
