'use strict';

function SetRouter($stateProvider) {
  $stateProvider
    .state('app.set',{
      url:'/set',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./set.html');
            deferred.resolve(template);
        },'set-tpl');
        return deferred.promise;
      },
      controller:'SetController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./set.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            },'set-ctrl');
          });
        }
      }
    })
}

export default angular
  .module('set.router', [])
  .config(SetRouter);