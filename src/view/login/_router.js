'use strict';

function LoginRouter($stateProvider) {
  $stateProvider
    .state('login',{
      url:'/login',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./login.html');
            deferred.resolve(template);
        },'login-tpl');
        return deferred.promise;
      },
      controller:'LoginController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./login.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            },'login-ctrl');
          });
        }
      }
    });
}

export default angular
  .module('login.router', [])
  .config(LoginRouter);