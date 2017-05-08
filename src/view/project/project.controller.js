'use strict';

class ProjectController {
	constructor($scope){				
		this.$scope = $scope;
		
		require('./project.less');
	}
}

export default angular
	.module('project.controller',[])
	.controller('ProjectController',ProjectController);