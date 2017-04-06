'use strict';

class LoginController{
	constructor($state,$rootScope,AccessService){
		AccessService.getAccess().then(function(response){
			if(response.data.status){
				$state.go('app.home');
			}else{
				$state.go('login');
			}
		});
		this.$rootScope = $rootScope;
		this.$state = $state;
		require('./login.less');
	}
	login(){
		this.$rootScope.login_state = 1;
		this.$rootScope.user_name = this.name;
		this.$state.go('app.home');
	}
}

export default angular
	.module('login.controller',[])
	.controller('LoginController',LoginController);