module.exports = app => {
  const { router, controller } = app;

  router.get('/admin/article/list', controller.article.list);
};
