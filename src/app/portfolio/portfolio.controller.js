(function() {
  'use strict';

  angular
    .module('website')
    .controller('PortfolioController', function($timeout, $state) {
      var portfolio = this;
        
      portfolio.loadMainContent = false;

      portfolio.setUpPage = function() {
        $timeout(function() {
          portfolio.loadMainContent = true;
        }, 200);
      };

      portfolio.reloadPage = function() {
        $state.reload();
      };

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

    .directive('continueButton', function($log, $window) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          var myEl = element.parent().next().children();
          $log.debug($window.outerWidth);
          
          if($window.outerWidth > 768) {
            
            for (var i = 0; i < myEl.length; i++) {
                if (myEl[i].className === 'enter') {
                  myEl[i].classList.add('load-icon');
                  break;
                }        
            }

          } 
          
          element.removeClass('load-icon');
          element.addClass('hide');
          element.parent().removeClass('load-content show').addClass('hide');
          element.parent().next().addClass('show');
          
        });
        
      };

      return {
        restrict: 'A',
        link: linkFunction
      };
    })
    .directive('showOnScroll', function($window, $log) {
        

        var linkFunction = function(scope, element) {

          element.bind("scroll", function() {
            
            var scrollingVal = element[0].scrollTop,
            panelHeight = element[0].scrollHeight,
            panelWidth = element[0].offsetWidth,
            windowHeight = $window.outerHeight,
            enterBtn = element[0].lastElementChild;
            
            $log.debug(panelWidth);
            if(panelWidth < 768) {
              $log.debug('mobile');
              $log.debug(panelHeight - windowHeight);
              $log.debug(scrollingVal);
              if(panelHeight - windowHeight - 64 < scrollingVal) {
                enterBtn.classList.add('load-icon', 'mobile');
              } else {
                enterBtn.classList.remove('load-icon', 'mobile');
              }
            }

          });
        };

        return {
          restrict: 'A',
          link: linkFunction
        };
    });
})();
