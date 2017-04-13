'use strict';

function ViewRouter($urlRouterProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');
}

export default angular
  .module('view.router',(()=>{
  	let router_list=[];
  	[
      'main',
      'set',
      'login',
      'home',
      'home/home.news',
      'home.edit',
    ].forEach((value)=>{
  		router_list.push(require('./'+value+'/_router').name);
  	});
  	return router_list;
  })())
  .config(ViewRouter);