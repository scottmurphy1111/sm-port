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

      // portfolio.enterClicked1 = false;
      // portfolio.enterClicked2 = false;
      // portfolio.enterClicked3 = false;

      // portfolio.slideTopPanel1 = function() {
      //   portfolio.enterClicked1 = true;
      //   //$log.debug(angular.element('.enter'));
      // };

      // portfolio.slideTopPanel2 = function() {
      //   portfolio.enterClicked2 = true;
      //   portfolio.enterClicked1 = false;
      // };

      // portfolio.slideTopPanel3 = function() {
      //   portfolio.enterClicked3 = true;
      //   portfolio.enterClicked2 = false;
      // };
      
    })

    .directive('continueButton', function($log, $window, $timeout) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          var myEl = element.parent().next().children(),
          panelClass = element.parent().next(),
          bios = document.querySelectorAll('.bios li'),
          skills = document.querySelectorAll('.what-is-front-end-development li'),
          panelWidth = document.querySelectorAll('.panel-wrapper')[0].offsetWidth;

          //$log.debug(element.parent().next().hasClass('second-panel'));

          if(panelWidth > 768) {
            
            for (var i = 0; i < myEl.length; i++) {
              if (myEl[i].className === 'enter') {
                myEl[i].classList.add('load-icon');
                break;
              }

            }
          }

          //if element parent is second panel
          if(panelClass.hasClass('second-panel')) {
            $timeout(function() {
                for (var n = 0; n < bios.length; n++) {
                  var timer = 0;
                  timer += 160*n+(Math.random()*150);
                  //$log.debug(timer);
                  
                  (function(n) {
                    $timeout(function() {
                      bios[n].classList.add('show-li');
                    }, timer);
                  })(n);
                }
              }, 400);
          }

          //if element parent is third panel
          if(panelClass.hasClass('third-panel')) {
            $timeout(function() {
                for (var j = 0; j < skills.length; j++) {
                  var timer = 0;
                  timer += 160*j+(Math.random()*150);
                  //$log.debug(timer);
                  
                  (function(j) {
                    $timeout(function() {
                      skills[j].classList.add('show-li');
                    }, timer);
                  })(j);
                }
              }, 400);
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
            
            if(panelWidth < 768) {
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
