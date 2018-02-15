(function() {
    'use strict';
    angular.module('website')
    //show modal window
    .directive('smModal', function($timeout, $document) {
        
        var linkFunction = function(scope, element) {
            element.bind('click', function() {
                $document[0].querySelectorAll('.modal-overlay')[0].classList.add('show');
                $timeout(function() {
                    $document[0].querySelectorAll('.modal-window')[0].classList.add('show');
                }, 200);
                
            });
        };

        return {
            restrict: 'A',
            scope: true,
            link: linkFunction
        };
    });
})();