(function() {
    'use strict';

    // fixes jshint error "Expected an assignment or function call and instead saw an expression."
    /* jshint expr: true */
    
    angular.module('website')
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
            restrict: 'E',
            link: linkFunction
        };
    });
})();