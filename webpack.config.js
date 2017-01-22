var path = require('path');
var webpack = require('webpack');
const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  debug: DEBUG ? true : false,
  devtool: DEBUG ? 'cheap-module-eval-source-map' : 'hidden-source-map',  
  entry: [
    // 'webpack-dev-server/client?http://localhost:3000',
    './src/index'
  ],
  output: {
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    path: path.join(__dirname, 'built'),
    filename: 'bundle.js'   
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loaders: ['ts-loader'],
      include: path.join(__dirname, 'src')
    }]
  }
};