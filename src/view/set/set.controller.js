'use strict';

class SetController {
	constructor($scope){				
		this.$scope = $scope;
		
		require('./set.less');
	}
}

export default angular
	.module('set.controller',[])
	.controller('SetController',SetController);