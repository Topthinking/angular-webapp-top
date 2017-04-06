'use strict';

class MainController {
	constructor($scope){				
		this.$scope = $scope;
		
		require('./main.less');
	}
}

export default angular
	.module('main.controller',[])
	.controller('MainController',MainController);