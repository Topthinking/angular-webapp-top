'use strict';

function HomeEditRouter($stateProvider) {
  $stateProvider
    .state('app.home.edit', {
      url: '/edit',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./home.edit.html');
            deferred.resolve(template);
        },'home-edit-tpl');
        return deferred.promise;
      },
      controller: 'HomeEditController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./home.edit.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            },'home-edit-ctrl');
          });
        } 
      }
    });
}

export default angular
  .module('home.edit.router', [])
  .config(HomeEditRouter);