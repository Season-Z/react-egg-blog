module.exports = app => {
  require('./router/index')(app);

  app.get('/login', app.controller.home.login);
  app.get('/(.*?)', app.controller.home.render);
};
