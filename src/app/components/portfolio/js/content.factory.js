(function() {
    'use strict';

    angular
    .module('website')
    .factory('contentFactory', contentFactory);

    contentFactory.$inject =['$http'];

	function contentFactory($http) {
        return $http.get('data/data.json');
    }

})();