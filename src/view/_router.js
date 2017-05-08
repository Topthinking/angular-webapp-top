'use strict';

function ViewRouter($urlRouterProvider,$qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
  $urlRouterProvider.otherwise('/app/home');
}

function httpProvider($httpProvider) {
  $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';  
  $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript, */*; q=0.01';  
  $httpProvider.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';  

  var param = function (obj) {  
      var query = '', name, value, fullSubName, subName, subValue, innerObj, i;  

      for (name in obj) {  
          value = obj[name];  

          if (value instanceof Array) {  
              for (i = 0; i < value.length; ++i) {  
                  subValue = value[i];  
                  fullSubName = name + '[' + i + ']';  
                  innerObj = {};  
                  innerObj[fullSubName] = subValue;  
                  query += param(innerObj) + '&';  
              }  
          }  
          else if (value instanceof Object) {  
              for (subName in value) {  
                  subValue = value[subName];  
                  fullSubName = name + '[' + subName + ']';  
                  innerObj = {};  
                  innerObj[fullSubName] = subValue;  
                  query += param(innerObj) + '&';  
              }  
          }  
          else if (value !== undefined && value !== null)  
              query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';  
      }  

      return query.length ? query.substr(0, query.length - 1) : query;  
  };  

  $httpProvider.defaults.transformRequest = [function (data) {  
      return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;  
  }];  
}

export default angular
  .module('view.router',(()=>{
  	let router_list=[];
  	[
      'main',
      'home',
      'content',
      'project',
      'bbs'
    ].forEach((value)=>{
  		router_list.push(require('./'+value+'/_router').name);
  	});
  	return router_list;
  })())
  .config(ViewRouter)
  .config(httpProvider);