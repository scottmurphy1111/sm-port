(function() {
  'use strict';

  angular
    .module('website')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/components/portfolio/portfolio.html'
      });

    $urlRouterProvider.otherwise('/portfolio');
  }

})();
