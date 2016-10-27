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
        }, 800);

        var toReveal = document.querySelectorAll('.skills .to-reveal');
        
        $timeout(function() {
          for (var n = 0; n < toReveal.length; n++) {
            var timer = 0;
            timer += 20*n+(Math.random()*5);

            (function(n) {
              $timeout(function() {
                toReveal[n].classList.add('show');
              }, timer);
            })(n);
          }
        }, 3700);

        var setDate = document.querySelectorAll('.experience-time'),
        calcDate = new Date().getFullYear() - 2009;

        setDate[0].innerHTML = calcDate;
      };

      portfolio.reloadPage = function() {
        $window.location.reload();
      };

      portfolio.closeModal = function() {
        document.querySelectorAll('.modal-window')[0].classList.remove('show');
        $timeout(function() {
          document.querySelectorAll('.modal-overlay')[0].classList.remove('show');
        }, 100);
      };

      portfolio.chosenTemplate = "app/portfolio/modal-templates/creditwise.html";

    })

    .directive('vertNavItem', function() {
    
      var linkFunction = function(scope, element, attr) {
        element.bind('click', function(e) {
          e.stopPropagation();
          var clickedLiVal = attr.active,
          currentActiveLi = document.querySelectorAll('.vert-nav li.active'),
          allPanels = document.querySelectorAll('.sliding-panel'),
          activatePanel = '',
          enterBtn = document.querySelectorAll('.enter');

          activatePanel = document.querySelectorAll('.'+clickedLiVal);
         
          for(var i = 0; i < allPanels.length; i++) {
            allPanels[i].classList.add('fade-out');
            allPanels[i].classList.remove('fade-in');
              
          }
          
          currentActiveLi[0].classList.remove('active');
          element[0].classList.add('active');

          activatePanel[0].classList.add('fade-in');
          activatePanel[0].classList.remove('fade-out');
          

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
    })
    .directive('onScroll', function($window, $log, $timeout) {
        var isWheel = false;
        var movingPanel = false;

        var iconIsVisible = false;
        var stillShowing = false;

        var linkFunction = function(scope, element) {
          $timeout(function() {
            element.bind("wheel", function(e) {

              var enterBtn = document.querySelectorAll('.enter'),
                  nextPanel = element.next(),
                  prevPanel = element[0].previousElementSibling,
                  currentNav = document.querySelectorAll('.vert-nav li.active')[0],                
                  nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
                  prevNav = document.querySelectorAll('.vert-nav li.active')[0].previousElementSibling,
                  swipeIcon = document.querySelectorAll('.finger-swipe')[0],
                  panel = document.querySelectorAll('.panel')[0],
                  movement = 0;
              
              movement = e.deltaY;
              
              
              
              if(e.deltaMode === 1) {
                movement = movement * 8;
              }
              
              $log.debug(movement);
              // $log.debug(movement);

              // if(movement > 0 && movement <= 100) {
              //   if(iconIsVisible) {
              //     return;
              //   }

              //   iconIsVisible = true;
              
              //   var showIcon = function() {
              //     finishShowingIcon();
              //   };

              //   var finishShowingIcon = function() {
              //     if(stillShowing) {
              //       return;
              //     } else {
              //       iconIsVisible = true;
              //       stillShowing = true;

              //       swipeIcon.classList.add('show');
              //       panel.classList.add('dim');

                    

              //       $timeout(function() {
              //         iconIsVisible = false;
              //         stillShowing = false;
              //         swipeIcon.classList.remove('show');
              //         panel.classList.remove('dim');
                      
                      
              //       }, 1200);
              //     }
              //   };
              //   $log.debug('iconIsVisible ' + iconIsVisible);
              //   $log.debug('stillShowing ' + stillShowing);

              //   showIcon();

              // }

              if(movement > 100 && nextNav) {
                if(isWheel) {  
                  return;
                } 
                
                isWheel = true;

                var movePanelDown = function() {
                  if(element[0].className.indexOf('top-panel') > -1) {
                    enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                  }

                  element.removeClass('load-content fade-in').addClass('fade-out');
                  nextPanel.addClass('fade-in').removeClass('fade-out');  

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
                    },600);
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

                  element.removeClass('load-content fade-in').addClass('fade-out');  
                  angular.element(prevPanel)[0].classList.add('fade-in');
                  angular.element(prevPanel)[0].classList.remove('fade-out');
                
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
                    },600);
                  }
                };

                movePanelUp();
              }
            });

            var startX,
                startY,
                dist,
                // threshold = 150, //required min distance traveled to be considered swipe
                // allowedTime = 200, // maximum time allowed to travel that distance
                // elapsedTime,
                startTime;
             

            element.bind('touchstart', function(e) {
              //e.preventDefault();
              var touchobj = e.changedTouches[0];
              dist = 0,
              startX = touchobj.pageX,
              startY = touchobj.pageY,
              startTime = new Date().getTime();
              
            });

            element.bind('touchmove', function(e){
                e.preventDefault();
            });
         
            element.bind('touchend', function(e){
              //e.preventDefault();
              var touchobj = e.changedTouches[0],
              dist = touchobj.pageY - startY,
              enterBtn = document.querySelectorAll('.enter'),
              nextPanel = element.next(),
              prevPanel = element[0].previousElementSibling,
              currentNav = document.querySelectorAll('.vert-nav li.active')[0],
              swipeIcon = document.querySelectorAll('.finger-swipe')[0],
              overlay = document.querySelectorAll('.modal-overlay')[0],
              nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
              prevNav = document.querySelectorAll('.vert-nav li.active')[0].previousElementSibling;

              if(dist < -10 && dist >= -50) {
                           
                swipeIcon.classList.add('show');
                overlay.classList.add('show');
              
                $timeout(function() {
                  swipeIcon.classList.remove('show');
                  overlay.classList.remove('show');
                }, 800);
              }

              if(dist < -100 && nextNav) {
                if(isWheel) {  
                  return;
                } 
                
                isWheel = true;
                swipeIcon.classList.remove('show');
                overlay.classList.remove('show');

                  var movePanelDown = function() {
                  if(element[0].className.indexOf('top-panel') > -1) {
                    enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                  }

                  element.removeClass('load-content fade-in').addClass('fade-out');
                  nextPanel.addClass('fade-in').removeClass('fade-out');  

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
                    },600);
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

                  element.removeClass('load-content fade-in').addClass('fade-out');  
                  angular.element(prevPanel)[0].classList.add('fade-in');
                  angular.element(prevPanel)[0].classList.remove('fade-out');
                
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
                    },600);
                  }
                };

                  movePanelUp();
              }
            });
          }, 5000);
        };

        return {
          restrict: 'A',
          link: linkFunction
        };
    })
    .directive('revealContent', function($log) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          var content = element.next(),
          allBoxes = document.querySelectorAll('.snippets li .content');
          



          if(content.hasClass('show')){
            for(var i = 0; i < allBoxes.length; i++) {
              allBoxes[i].classList.remove('show');
            }
            content.removeClass('show');
          } else {
            for(var n = 0; n < allBoxes.length; n++) {
              allBoxes[n].classList.remove('show');
            }
            content.addClass('show');

            var contentText = document.querySelectorAll('.content.show p')[0].textContent,
            updatePlace = document.querySelectorAll('.content.show p')[0],
            current = 0,
            height = content.children()[0].clientHeight,
            contentText = contentText.split("");
            
            updatePlace.style.height = height + 'px';
            //$log.debug(height);
            updatePlace.innerHTML = '';

            setInterval(function() {
              if(current < contentText.length) {
                updatePlace.innerHTML += contentText[current++];
              }
            }, 15);

          }

          
         
          
        });
      
      };

      return {
        restrict: 'A',
        scope: true,
        link: linkFunction
      };
    })
    .directive('smModal', function($timeout) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          document.querySelectorAll('.modal-overlay')[0].classList.add('show');
          $timeout(function() {
            document.querySelectorAll('.modal-window')[0].classList.add('show');
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
