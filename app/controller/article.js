module.exports = app => {
  const { Controller } = app;

  return class Article extends Controller {
    list() {
      const { ctx } = this;
      console.log('123123123123123123');
    }
  };
};
