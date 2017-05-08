'use strict';

function BbsRouter($stateProvider) {
  $stateProvider
    .state('app.bbs',{
      url:'/bbs',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./bbs.html');
            deferred.resolve(template);
        },'bbs-tpl');
        return deferred.promise;
      },
      controller:'BbsController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./bbs.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            },'bbs-ctrl');
          });
        }
      }
    })
}

export default angular
  .module('bbs.router', [])
  .config(BbsRouter);