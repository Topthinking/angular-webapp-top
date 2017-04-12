'use strict';

class HomeController {
  constructor($scope) {	
  	this.$scope = $scope;

    require('./home.less');

    // 显示welcome
    this.welcome = Math.random();
  }
} 

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
