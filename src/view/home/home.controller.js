'use strict';

class HomeController {
  constructor($scope,$state) {	
  	this.$scope = $scope;

    require('./home.less');

   	$state.go('app.home.news');
  }
} 

export default angular
  .module('home.controller', [])
  .controller('HomeController', HomeController);
