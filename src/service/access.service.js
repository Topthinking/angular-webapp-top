'use strict';

class AccessService{
	constructor($http,$rootScope,url_param){
		this.$http = $http;
		this.$rootScope = $rootScope;
		this.url_param = url_param;
	}

 	getAccess() {
 		return this.$http({
			url:this.url_param.login,
			method:'POST',
			headers:{
				'Content-Type':'application/x-www-form-urlencoded'
			},
			data:$.param({
				user_name:"18301866067",
				password:"123"
			})
		});
  	}
}

export default angular
	.module('access.service',[])
	.service('AccessService',AccessService);