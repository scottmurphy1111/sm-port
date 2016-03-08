(function() {
  'use strict';

  angular
    .module('website')
    .controller('PortfolioController', function($timeout, $state, $window, $log) {
      var portfolio = this;
        
      portfolio.loadMainContent = false;

      portfolio.setUpPage = function() {
        $timeout(function() {
          portfolio.loadMainContent = true;
        }, 200);

        var toReveal = document.querySelectorAll('.skills .to-reveal');
        
        $timeout(function() {
          for (var n = 0; n < toReveal.length; n++) {
            var timer = 0;
            timer += 60*n+(Math.random()*60);

            (function(n) {
              $timeout(function() {
                toReveal[n].classList.add('show');
              }, timer);
            })(n);
          }
        }, 4500);
          
      };

      portfolio.reloadPage = function() {
        $window.location.reload();
      };
      
    })

    .directive('continueButton', function($log, $window, $timeout) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          var myEl = element.parent().next().children(),
          panelClass = element.parent().next(),
          bios = document.querySelectorAll('.bios li'),
          skills = document.querySelectorAll('.skills li'),
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

          if(panelClass.hasClass('fourth-panel')) {
            var panelChildren = element.parent().next().children();

            for (var k = 0; k < panelChildren.length; k++) {
              if (panelChildren[k].className === 'enter') {
                panelChildren[k].classList.add('load-icon');
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
    .directive('onScroll', function($window, $log, $timeout) {
        var isWheel = false;
        var movingPanel = false;

        var linkFunction = function(scope, element) {
          element.bind("mousewheel", function(e) {
            var enterBtn = document.querySelectorAll('.enter'),
                nextPanel = element.next(),
                prevPanel = element[0].previousElementSibling,
                bios = document.querySelectorAll('.bios li'),
                skills = document.querySelectorAll('.skills li'),
                panelWidth = document.querySelectorAll('.panel-wrapper')[0].offsetWidth,
                currentNav = document.querySelectorAll('.vert-nav li.active')[0],                
                nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
                prevNav = document.querySelectorAll('.vert-nav li.active')[0].previousElementSibling,
                movement = 0;
            
            movement = e.deltaY;

            if(movement > 100 && nextNav) {
              if(isWheel) {  
                return;
              } 
              
              isWheel = true;
              
              var movePanelDown = function() {
                if(element[0].className.indexOf('top-panel') > -1) {
                  enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                }

                element.removeClass('load-content show').addClass('hideTop');
                
                $timeout(function() {
                  nextPanel.addClass('show').removeClass('hideTop hideBottom');
                }, 100);
                  
                finishMovingDown();
              };

              var finishMovingDown = function() {
                
                if(movingPanel) {
                  return;
                } else {
                  nextNav.classList.add('active');
                  currentNav.classList.remove('active');
                  
                  $timeout(function() {
                    isWheel = false;
                    movingPanel = false;
                  },800);
                }
              };

              movePanelDown();
            }

            if(movement < -100 && prevNav) {
              if(isWheel) {  
                return;
              } 
              
              isWheel = true;
              
              var movePanelUp = function() {
                if(element[0].className.indexOf('second-panel') > -1) {
                  enterBtn[0].classList.add('load-icon-instantly');
                }

                element.removeClass('load-content show').addClass('hideBottom');
                
                $timeout(function() {
                  prevPanel.classList.add('show');
                  prevPanel.classList.remove('hideTop', 'hideBottom');
                }, 100);
                  
                finishMovingUp();
              };

              var finishMovingUp = function() {
                
                if(movingPanel) {
                  return;
                } else {
                  prevNav.classList.add('active');
                  currentNav.classList.remove('active');
                  
                  $timeout(function() {
                    isWheel = false;
                    movingPanel = false;
                  },800);
                }
              };

              movePanelUp();
            }
          });

          var startX,
              startY,
              dist,
              threshold = 150, //required min distance traveled to be considered swipe
              allowedTime = 200, // maximum time allowed to travel that distance
              elapsedTime,
              startTime;
           

          element.bind('touchstart', function(e) {
            e.preventDefault();
            var touchobj = e.changedTouches[0];
            dist = 0,
            startX = touchobj.pageX,
            startY = touchobj.pageY,
            startTime = new Date().getTime();
            

            $log.debug(startY);
          });

          element.bind('touchmove', function(e){
              e.preventDefault();
          });
       
          element.bind('touchend', function(e){
            e.preventDefault()
            var touchobj = e.changedTouches[0],
            dist = touchobj.pageY - startY,
            enterBtn = document.querySelectorAll('.enter'),
            nextPanel = element.next(),
            prevPanel = element[0].previousElementSibling,
            bios = document.querySelectorAll('.bios li'),
            skills = document.querySelectorAll('.skills li'),
            panelWidth = document.querySelectorAll('.panel-wrapper')[0].offsetWidth,
            currentNav = document.querySelectorAll('.vert-nav li.active')[0],
            nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
            prevNav = document.querySelectorAll('.vert-nav li.active')[0].previousElementSibling;

            if(dist < -100 && nextNav) {
              if(isWheel) {  
                return;
              } 
              
              isWheel = true;
              
                var movePanelDown = function() {
                  if(element[0].className.indexOf('top-panel') > -1) {
                    enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                  }
                  //enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                  element.removeClass('load-content show').addClass('hideTop');

                  $timeout(function() {
                    nextPanel.addClass('show').removeClass('hideTop hideBottom');
                  }, 100);
                  
                  finishMovingDown();
                };

                var finishMovingDown = function() {
                  
                  if(movingPanel) {
                    return;
                  } else {       
                    nextNav.classList.add('active');            
                    currentNav.classList.remove('active');

                    $timeout(function() {
                      isWheel = false;
                      movingPanel = false;
                    },800);
                  }
                };

                movePanelDown();
            }

            if(dist > 100 && prevNav) {
              if(isWheel) {  
                return;
              } 
              
              isWheel = true;
              
                var movePanelUp = function() {
                  if(element[0].className.indexOf('second-panel') > -1) {
                    enterBtn[0].classList.add('load-icon-instantly');
                  }
                  
                  element.removeClass('load-content show').addClass('hideBottom');

                  $timeout(function() {
                    prevPanel.classList.add('show');
                    prevPanel.classList.remove('hideTop', 'hideBottom');
                  }, 100);
                  
                  finishMovingUp();
                };

                var finishMovingUp = function() {
                  
                  if(movingPanel) {
                    return;
                  } else {
                    isWheel = false;
                    movingPanel = false;         
                    prevNav.classList.add('active');            
                    currentNav.classList.remove('active');
                  }
                };

                movePanelUp();
            }
          });
        };

        return {
          restrict: 'A',
          link: linkFunction
        };
    });
})();
