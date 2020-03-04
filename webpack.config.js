const path = require('path');

module.exports = {
  entry: {
    login: 'app/web/page/login/index.jsx',
    home: 'app/web/page/home/index.jsx'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app/web')
    }
  },
  devtool: 'eval-source-map',
  plugins: [{ imagemini: false }]
};
