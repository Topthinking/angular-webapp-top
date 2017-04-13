'use strict';

class HomeNewsController {
  constructor($scope) {	
  	this.$scope = $scope;

    require('./news.less');

    // 显示welcome
    this.welcome = Math.random();
  }
} 

export default angular
  .module('home.news.controller', [])
  .controller('HomeNewsController', HomeNewsController);
