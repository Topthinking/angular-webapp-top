'use strict';

class ContentController {
	constructor($scope){				
		this.$scope = $scope;
		
		require('./content.less');
	}
}

export default angular
	.module('content.controller',[])
	.controller('ContentController',ContentController);