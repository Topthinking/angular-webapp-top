'use strict';

function HomeNewsRouter($stateProvider) {
  $stateProvider
    .state('app.home.news', {
      url: '/news',
      templateProvider:($q)=>{
        let deferred = $q.defer();
        require.ensure([],()=>{
            let template = require('./news.html');
            deferred.resolve(template);
        },'home-news-tpl');
        return deferred.promise;
      },
      controller: 'HomeNewsController as vm',
      resolve: {
        loadController: ($q, $ocLazyLoad) => {
          return $q((resolve) => {
            require.ensure([], () => {
              let module = require('./news.controller');
              $ocLazyLoad.load({name: module.name});
              resolve(module.controller);
            },'home-news-ctrl');
          });
        }
      }
    });
}

export default angular
  .module('home.news.router', [])
  .config(HomeNewsRouter);