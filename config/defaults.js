'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const Port = 9999;

function getDefaultModules() {
  return {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate-loader!babel-loader'
      }, 
      {
        test: /\.html$/,
        loader: 'html-withimg-loader!raw-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!postcss-loader!css-loader'
      }, 
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.(png)|(jpg)|(gif)$/,
        loader: "url-loader?limit=10000&name=images/[name].[hash:6].[ext]"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&name=fonts/[name].[ext]&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&name=fonts/[name].[ext]&mimetype=application/font-woff2"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&name=fonts/[name].[ext]&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file-loader?limit=10000&name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url-loader?limit=10000&name=fonts/[name].[ext]&mimetype=image/svg+xml"
      }
    ]
  };
}

function getDefaultentry(){
  return {
    app:'./src/app.js',
    vendor: [
      "angular", 
      'angular-ui-router', 
      'oclazyload'
    ]
  }
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: Port,
  getDefaultModules: getDefaultModules,
  getDefaultentry:getDefaultentry
};