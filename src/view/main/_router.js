'use strict';

function MainRouter($stateProvider) {
  $stateProvider
    .state('app',{
      abstract:true,
      url:'/app',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./main.html');
            deferred.resolve(template);
        },'main-tpl');
        return deferred.promise;
      },
      controller:'MainController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./main.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            },'main-ctrl');
          });
        }
      }
    })
}

export default angular
  .module('main.router', [])
  .config(MainRouter);