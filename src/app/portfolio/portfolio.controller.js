(function() {
  'use strict';
  
  // fixes jshint error "Expected an assignment or function call and instead saw an expression."
  /* jshint expr: true */

  angular
    .module('website')
    .controller('PortfolioController', function($timeout, $state, $window, $document, $http, $scope) {

      var portfolio = this;//scope to portfolio
        
      portfolio.loadMainContent = false;//flag page load timer

      //dynamic content animations and data loads
      portfolio.setUpPage = function() {
        //trigger content load
        $timeout(function() {
          portfolio.loadMainContent = true;
        }, 800);

        //add animation class to home section skills
        var toReveal = $document[0].querySelectorAll('.skills .to-reveal');
        
        //ripple effect on skills reveal
        var processAll = function(els) {
          var timer = 0;
          timer += 20*els+(Math.random()*5);

          $timeout(function() {
            toReveal[els].classList.add('show');
          }, timer);
        };

        $timeout(function() {
          for (var n = 0; n < toReveal.length; n++) {
            processAll(n);//closure
          }
        }, 3700);

        //prevents bots from spamming my email/phone
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

        //updates my experience year amount
        var setDate = $document[0].querySelectorAll('.experience-time'),
        calcDate = new Date().getFullYear() - 2009;

        setDate[0].innerHTML = calcDate;

      };

      //close project modal
      portfolio.closeModal = function() {
        $document[0].querySelectorAll('.modal-window')[0].classList.remove('show');
        $timeout(function() {
          $document[0].querySelectorAll('.modal-overlay')[0].classList.remove('show');
        }, 100);
      };

      //set project jsfiddle var
      portfolio.chosenTemplate = "app/portfolio/modal-templates/creditwise.html";

      
      //get Stack Overflow reputation count
      $scope.totalSo = 0;
      
      $http({
        method: 'GET',
        url: 'http://api.stackexchange.com/2.2/users/5711949/reputation?site=stackoverflow'
        
        
      }).then(function successCallback(response) {
        var allItems = response.data.items,
        totalRep = 0;

        allItems.forEach(function(rep) {
          totalRep += rep.reputation_change;
        });

        $scope.totalSo = totalRep;
        
      }, function errorCallback(response) {
        throw new Error("Error" + response);
      });
    })

    //right side vertical navigation
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
    })

    //scroll through sections
    .directive('onScroll', function($window, $document, $timeout) {
        var isWheel = false,//detect scroll wheel (PC)/swipe (Mac)
        movingPanel = false;//detects if animation is in progress

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
              
              //measure mousewheel/swipe distance
              movement = e.deltaY;
              
              //firefox needs a little help to get correct distance
              if(e.deltaMode === 1) {
                movement = movement * 8;
              }
                     
              //swap panels down     
              if(movement > 100 && nextNav) {
                
                //won't animate until false
                if(isWheel) {  
                  return;
                } 
                
                //allow animation
                isWheel = true;

                //mousewheel/swipe down
                var movePanelDown = function() {

                  //hide swipe icon
                  if(element[0].className.indexOf('top-panel') > -1) {
                    enterBtn[0].classList.remove('load-icon', 'load-icon-instantly');
                  }

                  //show next panel/hide current panel
                  element.removeClass('load-content fade-in').addClass('fade-out');
                  nextPanel.addClass('fade-in').removeClass('fade-out');  

                  finishMovingDown();
                };

                //callback to prevent rapid animation
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

              //swap panels up
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

            //mobile swiping swap panels
            var startX,
            startY,
            dist,
            startTime;
             
            //inital touch
            element.bind('touchstart', function(e) {
              var touchobj = e.changedTouches[0];

              dist = 0,
              startX = touchobj.pageX,
              startY = touchobj.pageY,
              startTime = Date.now();
              
            });

            //prevent swipe end
            element.bind('touchmove', function(e){
                e.preventDefault();
            });
         
            //measure touch distance
            element.bind('touchend', function(e){
              var touchobj = e.changedTouches[0],
              dist = touchobj.pageY - startY,
              enterBtn = $document[0].querySelectorAll('.enter'),
              nextPanel = element.next(),
              prevPanel = element[0].previousElementSibling,
              currentNav = $document[0].querySelectorAll('.vert-nav li.active')[0],
              nextNav = $document[0].querySelectorAll('.vert-nav li.active')[0].nextElementSibling,
              prevNav = $document[0].querySelectorAll('.vert-nav li.active')[0].previousElementSibling;

              //show/hide panel up
              if(dist < -100 && nextNav) {
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

              //show/hide panel down
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

    //third & fourth panels content reveals
    .directive('revealContent', function($interval, $document) {
    
      var linkFunction = function(scope, element) {
        element.bind('click', function() {
          var content = element.next(),
          allContent = $document[0].querySelectorAll('.snippets li .content');
          
          //hide content divs
          if(content.hasClass('show')){
            for(var i = 0; i < allContent.length; i++) {
              allContent[i].classList.remove('show');
            }

            content.removeClass('show');

          } else {

            //hide all revealed content
            for(var n = 0; n < allContent.length; n++) {
              allContent[n].classList.remove('show');
            }

            //show clicked content
            content.addClass('show');

            //reveal letters one at a time
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
