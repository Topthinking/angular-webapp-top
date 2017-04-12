'use strict';

let htmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
let defaultSettings = require('./config/defaults');
let path = require('path');
let fs = require('fs');

let config = {
  entry:defaultSettings.getDefaultentry(),
  output:{
    path:path.resolve(__dirname, '../blog'),
    filename: "script/[name].[hash:6].js",
    jsonpFunction:'Topthinking',
    chunkFilename: "script/[name].[chunkhash:6].js"
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
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: false
      },
      beautify:false,
      comments:false
    }),
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
    new webpack.ProvidePlugin({
      $:'jquery',
      jQuery:"jquery",
      "window.jQuery":"jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      "name":"vendor",
      "filename":"script/vendor.[hash:6].js"
    })
  ],
  module: defaultSettings.getDefaultModules()
};

var deleteFolder = function(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};
deleteFolder('../blog/script/');
deleteFolder('../blog/images/');
deleteFolder('../blog/fonts/');
deleteFolder('../blog/style/');

module.exports = config;