'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 9123;

function getDefaultModules() {
  return {
    noParse: [],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'ng-annotate!babel'
      }, 
      {
        test: /\.html$/,
        loader: 'html-withimg-loader!raw'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }, 
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.(png)|(jpg)|(gif)$/,
        loader: "url?limit=10000&name=images/[name].[hash:6].[ext]"
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&name=fonts/[name].[ext]&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&name=fonts/[name].[ext]&mimetype=application/font-woff2"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&name=fonts/[name].[ext]&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "file?limit=10000&name=fonts/[name].[ext]"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        loader: "url?limit=10000&name=fonts/[name].[ext]&mimetype=image/svg+xml"
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '/assets/',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};