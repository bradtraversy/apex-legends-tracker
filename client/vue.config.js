const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5000'
      }
    }
  }
};
