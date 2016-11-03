var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);

var config = {
  entry: APP_DIR + '/adorable-loader.jsx',
  module: {
    loaders: [
      {
        include: APP_DIR,
        loader: 'babel',
        test: /\.jsx?/
      },
      {
        loaders: [ 'style', 'css', 'sass' ],
        test: /\.scss$/
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'adorable-loader.js'
  }
};

module.exports = config;
