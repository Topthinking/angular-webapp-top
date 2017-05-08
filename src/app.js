'use strict';
import angular from 'angular';

let AppModule = 'app';
require('./app.less');
angular.module(AppModule, [
    require('angular-ui-router'),
    require('oclazyload'),
    require('./view/_router').name
  ]);
angular.bootstrap(document, [AppModule], { strictDi: true });