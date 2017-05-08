'use strict';

class BbsController {
	constructor($scope){				
		this.$scope = $scope;
		
		require('./bbs.less');
	}
}

export default angular
	.module('bbs.controller',[])
	.controller('BbsController',BbsController);