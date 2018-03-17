(function() {
    'use strict';

    angular
    .module('website')
    .factory('soFactory', soFactory);

    soFactory.$inject =['$http'];

	function soFactory($http) {
        return $http.get('http://api.stackexchange.com/2.2/users/5711949/?site=stackoverflow');
    }

})();