(function() {
  'use strict';

  angular
    .module('website')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html',
        controller: 'PortfolioController',
        controllerAs: 'portfolio'
      });

    $urlRouterProvider.otherwise('/portfolio');
  }

})();
