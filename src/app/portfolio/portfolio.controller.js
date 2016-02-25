(function() {
  'use strict';

  angular
    .module('website')
    .controller('PortfolioController', function($timeout, $state, $window) {
      var portfolio = this;
        
      portfolio.loadMainContent = false;

      portfolio.setUpPage = function() {
        $timeout(function() {
          portfolio.loadMainContent = true;
        }, 200);
      };

      portfolio.reloadPage = function() {
        $window.location.reload();
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
    .directive('showOnScroll', function($window, $log) {
        

        var linkFunction = function(scope, element) {

          element.bind("scroll", function() {
            
            var scrollingVal = element[0].scrollTop,
            panelHeight = element[0].firstElementChild.scrollHeight,
            panelWidth = element[0].offsetWidth,
            windowHeight = $window.innerHeight,
            enterBtn = element[0].lastElementChild;

            // $log.debug(element);

            // $log.debug('windowplusscrolltop' + (windowHeight+scrollingVal));
            // $log.debug('panel' + panelHeight);
            

            //$log.debug('scrollTop' + scrollingVal);
            

            if(panelWidth < 768) {
              if(panelHeight - windowHeight < scrollingVal) {
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
    })
    .directive('onScroll', function($window, $log, $timeout) {
        
        var linkFunction = function(scope, element) {

          element.bind("mousewheel", function(e) {
            var enterBtn = document.querySelectorAll('.enter'),
            nextPanel = element.next(),
            bios = document.querySelectorAll('.bios li'),
            skills = document.querySelectorAll('.skills li'),
            panelWidth = document.querySelectorAll('.panel-wrapper')[0].offsetWidth,
            currentNav = document.querySelectorAll('.vert-nav li.active')[0],
            nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling;
          
            $log.debug('curentnav' + currentNav);
            $log.debug('nextNav' + nextNav);
            

            var movement = e.deltaY;

            if(movement > 100) {
              //$log.debug(enterBtn);

              currentNav.classList.remove('active');
              $timeout(function() {
                nextNav.classList.add('active');
              },500);
              

              if(panelWidth > 768) {
                
                // for (var i = 0; i < nextBtn.length; i++) {
                //   if(nextBtn[i].className === 'enter') {
                //     nextBtn[i].classList.add('load-icon');
                //     break;
                //   }
                // }

                // for (var i = 0; i < currentBtn.length; i++) {
                //   $log.debug(currentBtn[i]);
                //   if(currentBtn[i].className === 'enter') {
                //     currentBtn[i].classList.remove('load-icon', 'hide');
                //     break;
                //   }
                // }

              }

              //if element parent is second panel
              for (var b = 0; b < nextPanel.length; b++) {
                if(nextPanel[b].className.indexOf('third-panel') > -1) {
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
                if(nextPanel[b].className.indexOf('fourth-panel') > -1) {
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

                if(nextPanel[b].className.indexOf('fifth-panel') > -1) {
                  var panelChildren = element.parent().next().children();

                  for (var k = 0; k < panelChildren.length; k++) {
                    if (panelChildren[k].className === 'enter') {
                      panelChildren[k].classList.add('load-icon');
                      break;
                    }

                  }
                }
              }

              enterBtn[0].classList.remove('load-icon');
              //element.children().addClass('hide');

              element.removeClass('load-content show').addClass('hide');
              $timeout(function() {
                nextPanel.addClass('show');
                $timeout(function() {
                  enterBtn[0].classList.add('load-icon');
                },400);
              }, 100);
              
              $timeout(function() {
                nextPanel.addClass('start-scroll');
              }, 2000);
              
            }

          });

    //       element.bind("touchmove", function(e) {
    //         var enterBtn = document.querySelectorAll('.enter'),
    //         nextPanel = element.next(),
    //         bios = document.querySelectorAll('.bios li'),
    //         skills = document.querySelectorAll('.skills li'),
    //         panelWidth = document.querySelectorAll('.panel-wrapper')[0].offsetWidth,
    //         currentNav = document.querySelectorAll('.vert-nav li.active')[0],
    //         nextNav = document.querySelectorAll('.vert-nav li.active')[0].nextElementSibling;
          
    //         $log.debug(e);
    //         $log.debug(nextNav.classList);
            

    //         var movement1 = e.touches[0].clientY;
    //         $log.debug(movement1);

    //         $timeout(function() {
    //           var movement2 = e.touches[0].clientY;
    //           $log.debug(movement2);
    //         }, 300);


    //         if(movement1 - movement2 > 100) {
    //           $log.debug('triggered');
    //           //$log.debug(enterBtn); 

    //           currentNav.classList.remove('active');
    //           $timeout(function() {
    //             nextNav.classList.add('active');
    //           },500);
              

    //           if(panelWidth > 768) {
                
    //             // for (var i = 0; i < nextBtn.length; i++) {
    //             //   if(nextBtn[i].className === 'enter') {
    //             //     nextBtn[i].classList.add('load-icon');
    //             //     break;
    //             //   }
    //             // }

    //             // for (var i = 0; i < currentBtn.length; i++) {
    //             //   $log.debug(currentBtn[i]);
    //             //   if(currentBtn[i].className === 'enter') {
    //             //     currentBtn[i].classList.remove('load-icon', 'hide');
    //             //     break;
    //             //   }
    //             // }

    //           }

    //           //if element parent is second panel
    //           for (var b = 0; b < nextPanel.length; b++) {
    //             if(nextPanel[b].className.indexOf('second-panel') > -1) {
    //               $timeout(function() {
    //                   for (var n = 0; n < bios.length; n++) {
    //                     var timer = 0;
    //                     timer += 160*n+(Math.random()*150);
    //                     //$log.debug(timer);
                        
    //                     (function(n) {
    //                       $timeout(function() {
    //                         bios[n].classList.add('show-li');
    //                       }, timer);
    //                     })(n);
    //                   }
    //                 }, 400);
    //             }

    //             //if element parent is third panel
    //             if(nextPanel[b].className.indexOf('third-panel') > -1) {
    //               $timeout(function() {
    //                   for (var j = 0; j < skills.length; j++) {
    //                     var timer = 0;
    //                     timer += 160*j+(Math.random()*150);
    //                     //$log.debug(timer);
                        
    //                     (function(j) {
    //                       $timeout(function() {
    //                         skills[j].classList.add('show-li');
    //                       }, timer);
    //                     })(j);
    //                   }
    //                 }, 400);

    //             }

    //             if(nextPanel[b].className.indexOf('fourth-panel') > -1) {
    //               var panelChildren = element.parent().next().children();

    //               for (var k = 0; k < panelChildren.length; k++) {
    //                 if (panelChildren[k].className === 'enter') {
    //                   panelChildren[k].classList.add('load-icon');
    //                   break;
    //                 }

    //               }
    //             }
    //           }

    //           enterBtn[0].classList.remove('load-icon');
    //           //element.children().addClass('hide');

    //           element.removeClass('load-content show').addClass('hide');
    //           $timeout(function() {
    //             nextPanel.addClass('show');
    //             $timeout(function() {
    //               enterBtn[0].classList.add('load-icon');
    //             },400);
    //           }, 100);
              
            
              

    //           $timeout(function() {
    //             nextPanel.addClass('start-scroll');
    //           }, 2000);
              
    //         }

    //       });
        };

        return {
          restrict: 'A',
          link: linkFunction
        };
    });
})();
