const path = require('path');

module.exports = {
  entry: {
    login: 'app/web/page/login/index.jsx',
    admin: 'app/web/page/admin/index.jsx'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/web')
    }
  },
  devtool: 'eval-source-map',
  plugins: [{ imagemini: false }]
};
