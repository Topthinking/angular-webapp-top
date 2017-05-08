'use strict';

function ContentRouter($stateProvider) {
  $stateProvider
    .state('app.content',{
      url:'/content',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./content.html');
            deferred.resolve(template);
        },'content-tpl');
        return deferred.promise;
      },
      controller:'ContentController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./content.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            },'content-ctrl');
          });
        }
      }
    })
}

export default angular
  .module('content.router', [])
  .config(ContentRouter);