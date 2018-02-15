(function() {
    'use strict';
    angular
    .module('website')
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
    });
})();