(function() {
  'use strict';

  angular
    .module('website')
    .controller('PortfolioController', function($timeout, $log) {
      var portfolio = this;
        
      portfolio.loadMainContent = false;

      portfolio.setUpPage = function() {
        $timeout(function() {
          portfolio.loadMainContent = true;
        }, 200);
        
      }

      portfolio.enterClicked1 = false;
      portfolio.enterClicked2 = false;
      portfolio.enterClicked3 = false;

      portfolio.slideTopPanel1 = function() {
        portfolio.enterClicked1 = true;
        //$log.debug(angular.element('.enter'));
      };

      portfolio.slideTopPanel2 = function() {
        portfolio.enterClicked2 = true;
        portfolio.enterClicked1 = false;
      };

      portfolio.slideTopPanel3 = function() {
        portfolio.enterClicked3 = true;
        portfolio.enterClicked2 = false;
      };
    })

  .directive('continueButton', function($log) {
  
      var linkFunction = function(scope, element, attr) {
        element.bind('click', function() {
          var correctEl;
          var myEl = element.parent().next().children();
          $log.debug(myEl);

          for (var i = 0; i < myEl.length; i++) {
              if (myEl[i].className == 'enter') {
                myEl[i].classList.add('load-icon');
                break;
              }        
          }

          element.removeClass('load-icon');
          element.addClass('next1');
          element.parent().removeClass('load-content show').addClass('hide');
          element.parent().next().addClass('show');
          
          scope.slideTopPanel1 = function() {
            scope.enterClicked1 = true;
            //$log.debug(angular.element('.enter'));
          };

          scope.slideTopPanel1();
        });
      };

      return {
        restrict: 'A',
        link: linkFunction
      };
    });
})();
