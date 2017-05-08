'use strict';

function SetRouter($stateProvider) {
  $stateProvider
    .state('app.project',{
      url:'/project',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./project.html');
            deferred.resolve(template);
        },'project-tpl');
        return deferred.promise;
      },
      controller:'ProjectController as vm',
      resolve:{
        loadController:($q,$ocLazyLoad)=>{
          return $q((resolve)=>{
            require.ensure([],()=>{
              let module = require('./project.controller');
              $ocLazyLoad.load({name:module.name});
              resolve(module.controller);
            },'project-ctrl');
          });
        }
      }
    })
}

export default angular
  .module('set.router', [])
  .config(SetRouter);