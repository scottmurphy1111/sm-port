(function() {
  'use strict';
  
  /* jshint expr: true */

  angular
    .module('website')
    .controller('PortfolioController', function($timeout, $state, $window, $document) {

      var portfolio = this;
        
      portfolio.loadMainContent = false;

      portfolio.setUpPage = function() {
        $timeout(function() {
          portfolio.loadMainContent = true;
        }, 800);

        var toReveal = $document[0].querySelectorAll('.skills .to-reveal');
        
        var processAll = function(els) {
          var timer = 0;
            timer += 20*els+(Math.random()*5);

            $timeout(function() {
              toReveal[els].classList.add('show');
            }, timer);
        };

        var loadContact = function() {
          var phone = '336-602-3121',
          phoneDiv = $document[0].querySelectorAll('.insert-phone'),
          user = 'scottmurphy1111',
          domain = 'gmail.com',
          emailDiv = $document[0].querySelectorAll('.insert-email');


          phoneDiv[0].innerHTML = '<a href="tel:' + phone + '">' + phone + '</a>';
          emailDiv[0].innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';

        };

        loadContact();

        $timeout(function() {
          for (var n = 0; n < toReveal.length; n++) {
            processAll(n);
          }
        }, 3700);

        var setDate = $document[0].querySelectorAll('.experience-time'),
        calcDate = new Date().getFullYear() - 2009;

        setDate[0].innerHTML = calcDate;
      };

      portfolio.reloadPage = function() {
        $window.location.reload();
      };

      portfolio.closeModal = function() {
        $document[0].querySelectorAll('.modal-window')[0].classList.remove('show');
        $timeout(function() {
          $document[0].querySelectorAll('.modal-overlay')[0].classList.remove('show');
        }, 100);
      };

      portfolio.chosenTemplate = "app/portfolio/modal-templates/creditwise.html";

    })

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
    .directive('onScroll', function($window, $document, $timeout) {
        var isWheel = false;
        var movingPanel = false;

        var linkFunction = function(scope, element) {
          $timeout(function() {
            element.bind("wheel", function(e) {

              var enterBtn = $document[0].querySelectorAll('.enter'),
                  nextPanel = element.next(),
                  prevPanel = element[0].previousElementSibling,
                  currentNav = $document[0].querySelectorAll('.vert-nav li.active')[0],                
                  nextNav = $document[0].querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
                  prevNav = $document[0].querySelectorAll('.vert-nav li.active')[0].previousElementSibling,
                  movement = 0;
              
              movement = e.deltaY;
              
              
              
              if(e.deltaMode === 1) {
                movement = movement * 8;
              }
                           
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
              startTime = Date.now();
              
            });

            element.bind('touchmove', function(e){
                e.preventDefault();
            });
         
            element.bind('touchend', function(e){
              //e.preventDefault();
              var touchobj = e.changedTouches[0],
              dist = touchobj.pageY - startY,
              enterBtn = $document[0].querySelectorAll('.enter'),
              nextPanel = element.next(),
              prevPanel = element[0].previousElementSibling,
              currentNav = $document[0].querySelectorAll('.vert-nav li.active')[0],
              nextNav = $document[0].querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
              prevNav = $document[0].querySelectorAll('.vert-nav li.active')[0].previousElementSibling;

              if(dist < -10 && dist >= -50) {
                           
                // swipeIcon.classList.add('show');
                // overlay.classList.add('show');
              
                // $timeout(function() {
                //   swipeIcon.classList.remove('show');
                //   overlay.classList.remove('show');
                // }, 800);
              }

              if(dist < -100 && nextNav) {
                if(isWheel) {  
                  return;
                } 
                
                isWheel = true;
                // swipeIcon.classList.remove('show');
                // overlay.classList.remove('show');

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
    .directive('revealContent', function($interval, $document) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          var content = element.next(),
          allBoxes = $document[0].querySelectorAll('.snippets li .content');
          
          if(content.hasClass('show')){
            for(var i = 0; i < allBoxes.length; i++) {
              allBoxes[i].classList.remove('show');
            }
            content.removeClass('show');
            //content.css('height', 0 +'px');

          } else {
            for(var n = 0; n < allBoxes.length; n++) {
              allBoxes[n].classList.remove('show');
            }
            content.addClass('show');


            var contentText = $document[0].querySelectorAll('.content.show p')[0].textContent,
            updatePlace = $document[0].querySelectorAll('.content.show p')[0],
            current = 0,
            height = content.children()[0].clientHeight;
            
            updatePlace.style.height = height + 'px';            
            updatePlace.innerHTML = '';

            $interval(function() {
              if(current < contentText.length) {
                updatePlace.innerHTML += contentText[current++];
              }
            }, 12);

          }
          
        });
      
      };

      return {
        restrict: 'A',
        scope: true,
        link: linkFunction
      };
    })
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
