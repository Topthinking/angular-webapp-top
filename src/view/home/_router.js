'use strict';

function HomeRouter($stateProvider) {
  $stateProvider
    .state('app.home', {
      url: '/home',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./home.html');
            deferred.resolve(template);
        },'home-tpl');
        return deferred.promise;
      },
      controller: 'HomeController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./home.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            },'home-ctrl');
          });
        }
      }
    });
}

export default angular
  .module('home.router', [])
  .config(HomeRouter);