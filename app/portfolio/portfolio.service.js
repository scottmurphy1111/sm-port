(function() {
  'use strict';

  angular
    .module('website')
    .factory('getJson', function($timeout, $http) {

    var jsonData = {
      fetch: function() {
        // return $timeout(function() {
        //   return $http.get('#/portfolio/data/data.json').then(function(response) {
        //     return response.data;
        //   });
        // }, 30);
      }
    };

    return jsonData;
  });
})();