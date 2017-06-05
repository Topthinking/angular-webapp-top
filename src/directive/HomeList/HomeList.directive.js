'use strict'

function homelist(){
	require('./HomeList.less');
	return {
		scope:{
			
		},
		restrict:'E',
		template:require('./HomeList.html'),
		replace:true,
		link:function($scope,element,attrs){

		}
	}
}

export default angular
	.module("home.list",[])
	.directive('homelist',homelist);