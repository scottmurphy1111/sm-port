(function() {
    'use strict';

    angular.module('website')
    .directive('vertNavItem', function($document) {
    
        var linkFunction = function(scope, element, attr) {
            element.bind('click', function(e) {
                e.stopPropagation();

                var clickedLiVal = attr.active,
                currentActiveLi = $document[0].querySelectorAll('.vert-nav li.active'),
                allPanels = $document[0].querySelectorAll('.sliding-panel'),
                activatePanel = '',
                enterBtn = $document[0].querySelectorAll('.enter');

                activatePanel = $document[0].querySelectorAll('.'+clickedLiVal);
            
                //loop through nav li's
                for(var i = 0; i < allPanels.length; i++) {
                    allPanels[i].classList.add('fade-out');
                    allPanels[i].classList.remove('fade-in');              
                }
                
                //update active li
                currentActiveLi[0].classList.remove('active');
                element[0].classList.add('active');

                //show/hide clicked section
                activatePanel[0].classList.add('fade-in');
                activatePanel[0].classList.remove('fade-out');
                
                //swipe icon hide/show
                if(clickedLiVal === 'top-panel') {
                    enterBtn[0].classList.add('load-icon-instantly');
                } else {
                    enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                }
            });
        
        };

        return {
            restrict: 'A',
            scope: true,
            link: linkFunction
        };
    });
})();