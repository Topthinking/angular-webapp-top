'use strict';

let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let defaultSettings = require('./config/defaults');
let path = require('path');

let config = {
  entry:defaultSettings.getDefaultentry(),
  output:{
    path:__dirname+'/dist/',
    filename: "script/[name].[hash:6].js",
    jsonpFunction:'Topthinking',
    chunkFilename: "script/[name].[chunkhash:6].js"
  },
  devServer:{
    historyApiFallback: true,
    hot:true,
    inline:true,
    port:defaultSettings.port
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options:{
        postcss:()=>{
          return [
            require('autoprefixer')({
              "broswers":["last 5 versions"]
            })
          ];
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebpackPlugin({
      chunks: ['app', 'vendor'],
      template:'./src/app.html',
      favicon:'./src/app.jpg',
      filename:'index.html',
      inject:'body',
      minify:{
            removeEmptyAttributes: true,
            removeAttributeQuotes: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true
          }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      "name":"vendor",
      "filename":"script/vendor.[hash:6].js"
    })
  ],
  module: defaultSettings.getDefaultModules()
};

module.exports = config;