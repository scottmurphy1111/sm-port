!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";angular.module("website").directive("vertNavItem",["$document",function(e){var t=function(t,n,s){n.bind("click",function(t){t.stopPropagation();var l=s.active,o=e[0].querySelectorAll(".vert-nav li.active"),a=e[0].querySelectorAll(".sliding-panel"),i="",c=e[0].querySelectorAll(".enter");i=e[0].querySelectorAll("."+l);for(var r=0;r<a.length;r++)a[r].classList.add("fade-out"),a[r].classList.remove("fade-in");o[0].classList.remove("active"),n[0].classList.add("active"),i[0].classList.add("fade-in"),i[0].classList.remove("fade-out"),"top-panel"===l?c[0].classList.add("load-icon-instantly"):c[0].classList.remove("load-icon","load-icon-instantly")})};return{restrict:"A",scope:!0,link:t}}])}(),function(){"use strict";angular.module("website").directive("smModal",["$timeout","$document",function(e,t){var n=function(n,s){s.bind("click",function(){t[0].querySelectorAll(".modal-overlay")[0].classList.add("show"),e(function(){t[0].querySelectorAll(".modal-window")[0].classList.add("show")},200)})};return{restrict:"A",scope:!0,link:n}}])}(),function(){"use strict";angular.module("website").directive("revealContent",["$interval","$document",function(e,t){var n=function(n,s){s.bind("click",function(){var n=s.next(),l=t[0].querySelectorAll(".snippets li .content");if(n.hasClass("show")){for(var o=0;o<l.length;o++)l[o].classList.remove("show");n.removeClass("show")}else{for(var a=0;a<l.length;a++)l[a].classList.remove("show");n.addClass("show");var i=t[0].querySelectorAll(".content.show p")[0].textContent,c=t[0].querySelectorAll(".content.show p")[0],r=0,d=n.children()[0].clientHeight;c.style.height=d+"px",c.innerHTML="",e(function(){r<i.length&&(c.innerHTML+=i[r++])},12)}})};return{restrict:"A",scope:!0,link:n}}])}(),function(){"use strict";function e(e,t,n,s,l,o,a){var i=this;i.loadMainContent=!1,i.setUpPage=function(){e(function(){i.loadMainContent=!0},800);var t=s[0].querySelectorAll(".skills .to-reveal"),n=function(n){var s=0;s+=20*n+5*Math.random(),e(function(){t[n].classList.add("show")},s)};e(function(){for(var e=0;e<t.length;e++)n(e)},3700);var l=function(){var e="336-602-3121",t=s[0].querySelectorAll(".insert-phone"),n="scottmurphy1111",l="gmail.com",o=s[0].querySelectorAll(".insert-email");t[0].innerHTML='<a href="tel:'+e+'">'+e+"</a>",o[0].innerHTML='<a href="mailto:'+n+"@"+l+'">'+n+"@"+l+"</a>"};l(),e(function(){var e=s[0].querySelectorAll(".experience-time"),t=(new Date).getFullYear()-2009;e[0].innerHTML=t},1e3)},i.closeModal=function(){s[0].querySelectorAll(".modal-window")[0].classList.remove("show"),e(function(){s[0].querySelectorAll(".modal-overlay")[0].classList.remove("show")},100)},i.chosenTemplate="app/portfolio/modal-templates/creditwise.html",o.totalSoRep=0,o.totalSoBadges=0,l({method:"GET",url:"http://api.stackexchange.com/2.2/users/5711949/?site=stackoverflow"}).then(function(e){var t=e.data.items[0],n=t.badge_counts;o.totalSoRep=t.reputation,Object.keys(n).forEach(function(e){o.totalSoBadges+=n[e]})},function(e){throw new Error("Error"+e)}),o.content=[],o.coding=[],a.then(function(e){o.content=e.data[0].content[0],o.coding=e.data[0].content[0].coding})}angular.module("website").controller("PortfolioCtrl",e),e.$inject=["$timeout","$state","$window","$document","$http","$scope","contentFactory"]}(),function(){"use strict";angular.module("website").directive("onScroll",["$window","$document","$timeout",function(e,t,n){var s=!1,l=!1,o=function(e,o){n(function(){o.bind("wheel",function(e){var a=t[0].querySelectorAll(".enter"),i=o.next(),c=o[0].previousElementSibling,r=t[0].querySelectorAll(".vert-nav li.active")[0],d=t[0].querySelectorAll(".vert-nav li.active")[0].nextElementSibling,p=t[0].querySelectorAll(".vert-nav li.active")[0].previousElementSibling,u=0;if(u=e.deltaY,1===e.deltaMode&&(u=8*u),u>100&&d){if(s)return;s=!0;var v=function(){o[0].className.indexOf("top-panel")>-1&&a[0].classList.remove("load-icon","load-icon-instantly"),o.removeClass("load-content fade-in").addClass("fade-out"),i.addClass("fade-in").removeClass("fade-out"),m()},m=function(){l||(d.classList.add("active"),r.classList.remove("active"),n(function(){s=!1,l=!1},600))};v()}if(-100>u&&p){if(s)return;s=!0;var f=function(){o[0].className.indexOf("second-panel")>-1&&a[0].classList.add("load-icon-instantly"),o.removeClass("load-content fade-in").addClass("fade-out"),angular.element(c)[0].classList.add("fade-in"),angular.element(c)[0].classList.remove("fade-out"),g()},g=function(){l||(p.classList.add("active"),r.classList.remove("active"),n(function(){s=!1,l=!1},600))};f()}});var e,a,i,c;o.bind("touchstart",function(t){var n=t.changedTouches[0];i=0,e=n.pageX,a=n.pageY,c=Date.now()}),o.bind("touchmove",function(e){e.preventDefault()}),o.bind("touchend",function(e){var i=e.changedTouches[0],c=i.pageY-a,r=t[0].querySelectorAll(".enter"),d=o.next(),p=o[0].previousElementSibling,u=t[0].querySelectorAll(".vert-nav li.active")[0],v=t[0].querySelectorAll(".vert-nav li.active")[0].nextElementSibling,m=t[0].querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-100>c&&v){if(s)return;s=!0;var f=function(){o[0].className.indexOf("top-panel")>-1&&r[0].classList.remove("load-icon","load-icon-instantly"),o.removeClass("load-content fade-in").addClass("fade-out"),d.addClass("fade-in").removeClass("fade-out"),g()},g=function(){l||(v.classList.add("active"),u.classList.remove("active"),n(function(){s=!1,l=!1},600))};f()}if(c>100&&m){if(s)return;s=!0;var h=function(){o[0].className.indexOf("second-panel")>-1&&r[0].classList.add("load-icon-instantly"),o.removeClass("load-content fade-in").addClass("fade-out"),angular.element(p)[0].classList.add("fade-in"),angular.element(p)[0].classList.remove("fade-out"),b()},b=function(){l||(m.classList.add("active"),u.classList.remove("active"),n(function(){s=!1,l=!1},600))};h()}})},5e3)};return{restrict:"E",link:o}}])}(),function(){"use strict";function e(e){return e.get("data/data.json")}angular.module("website").factory("contentFactory",e),e.$inject=["$http"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("website").run(e)}(),function(){"use strict";function e(e,t){e.state("portfolio",{url:"/portfolio",templateUrl:"app/components/portfolio/portfolio.html"}),t.otherwise("/portfolio")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("website").config(e)}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){e.debugEnabled(!0)}e.$inject=["$logProvider"],angular.module("website").config(e)}(),angular.module("website").run(["$templateCache",function(e){e.put("app/components/portfolio/portfolio.html",'<div class="container" ng-controller="PortfolioCtrl as portfolio" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="top-panel" vert-nav-item=""><span></span></li><li class="panel2" data-active="second-panel" vert-nav-item=""><span></span></li><li class="panel3" data-active="third-panel" vert-nav-item=""><span></span></li><li class="panel4" data-active="fourth-panel" vert-nav-item=""><span></span></li><li class="panel5" data-active="fifth-panel" vert-nav-item=""><span></span></li></ul></div><on-scroll class="top-panel sliding-panel fade-in"><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">{{content.name}}</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">{{content.title}}</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}" ng-bind-html="content.subHeading"></p><div class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">{{content.skills[0]}}</span><span class="to-reveal pipe">|</span><span class="to-reveal">{{content.skills[1]}}</span><span class="to-reveal pipe">|</span><span class="to-reveal">{{content.skills[2]}}</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">{{content.skills[3]}}</span><span class="to-reveal pipe">|</span><span class="to-reveal">{{content.skills[4]}}</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">{{content.skills[5]}}</span><span class="to-reveal pipe">|</span><span class="to-reveal">{{content.skills[6]}}</span></div></div></div></on-scroll><on-scroll class="second-panel sliding-panel fade-out"><div class="panel-wrapper"><div class="inner-wrap projects-list"><h2 class="category-title">{{content.projects[0].panelTitle}}</h2><ul><li><p><span class="icon" ng-include="\'assets/images/portfolio/c1.svg\'"></span>{{content.projects[0].companyName}} - {{content.projects[0].role}}</p><ul><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/components/portfolio/modal-templates/personal-loans.html\'" href="#">{{content.projects[0].sites[0].name}}</a></li><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/components/portfolio/modal-templates/creditwise.html\'" href="#">{{content.projects[0].sites[1].name}}</a></li><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/components/portfolio/modal-templates/income-calc.html\'" href="#">{{content.projects[0].sites[2].name}}</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/rp.svg\'"></span>{{content.projects[1].companyName}} - {{content.projects[1].role}}</p><ul><li><a class="proj-link" href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">{{content.projects[1].sites[0].name}}</a></li><li><a class="proj-link" href="http://willowlawn.com/" target="_blank">{{content.projects[1].sites[1].name}}</a></li><li><a class="proj-link" href="https://olli.com/" target="_blank">{{content.projects[1].sites[2].name}}</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/c9.svg\'"></span>{{content.projects[2].companyName}} - {{content.projects[2].role}}</p><ul><li><a class="proj-link" href="http://1stopministorage.com/" target="_blank">{{content.projects[2].sites[0].name}}</a></li><li><a class="proj-link" href="http://katieadcock.com/" target="_blank">{{content.projects[2].sites[1].name}}</a></li></ul></li></ul></div></div></on-scroll><on-scroll class="third-panel sliding-panel fade-out"><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">{{coding[0].panelTitle}}</h2><ul><li ng-repeat="code in coding"><div class="code-link" reveal-content="">{{code.title}}</div><div class="content"><p>{{code.description}}</p><img ng-src="{{code.image}}"></div></li></ul><p>"{{content.testimonials[0].review}}" ~ {{content.testimonials[0].person}} - {{content.testimonials[0].role}}</p><br><p>"{{content.testimonials[1].review}}" ~ {{content.testimonials[1].person}} - {{content.testimonials[1].role}}</p></div></div></on-scroll><on-scroll class="fourth-panel sliding-panel fade-out"><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">{{content.about[0].panelTitle}}</h2><ul><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/person.svg\'"></span>{{content.about[0].heading}}</div><div class="content"><p>{{content.about[0].description}}</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/location.svg\'"></span>{{content.about[1].heading}}</div><div class="content"><p>{{content.about[1].description}}</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/education.svg\'"></span>{{content.about[2].heading}}</div><div class="content"><p>{{content.about[2].description}}</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/exp.svg\'"></span>{{content.about[3].heading}}</div><div class="content"><p ng-bind-html="content.about[3].description"></p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/work-style.svg\'"></span>{{content.about[4].heading}}</div><div class="content"><p>{{content.about[4].description}}</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/tools.svg\'"></span>{{content.about[5].heading}}</div><div class="content"><p>{{content.about[5].description}}</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/langs.svg\'"></span>{{content.about[6].heading}}</div><div class="content"><p>{{content.about[6].description}}</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/golf.svg\'"></span>{{content.about[7].heading}}</div><div class="content"><p>{{content.about[7].description}}</p></div></li></ul></div></div></on-scroll><on-scroll class="fifth-panel sliding-panel fade-out"><div class="panel-wrapper"><div class="inner-wrap"><div class="special-note"><h2 class="category-title">{{content.contact[0].panelTitle}}</h2><p>{{content.contact[0].specialNote[0].description}}</p></div><div class="block left"><h2 class="category-title">{{content.contact[0].contactInfo[0].title}}</h2><div class="social"><ul><li class="insert-phone"></li><li class="insert-email"></li></ul></div></div><div class="block right"><h2 class="category-title">{{content.contact[0].social[0].title}}</h2><div class="inner-wrap"><div class="social"><ul><li><a title="Github" target="_blank" href="http://github.com/scottmurphy1111"><img src="assets/images/portfolio/git.svg"></a></li><li><a title="Stack Overflow" target="_blank" href="http://stackoverflow.com/users/5711949/scott-murphy"><div class="so-info rep" title="Reputation Score">{{totalSoRep}}</div><div class="so-info badges" title="Badge Count">{{totalSoBadges}}</div><img src="assets/images/portfolio/stk-o.svg"></a></li><li><a title="jsFiddle" target="_blank" href="https://jsfiddle.net/user/scottmurphy1111/fiddles/"><img src="assets/images/portfolio/jsfiddle.svg"></a></li><li><a title="linkedIn" target="_blank" href="https://www.linkedin.com/in/scottmurphy1111"><img src="assets/images/portfolio/linkd-in.svg"></a></li></ul></div></div></div></div></div></on-scroll></div><div class="bg-image load-image"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text"><span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP / DOWN</span><br><span class="icon" ng-include="\'assets/images/finger-swipe.svg\'"></span></p><div class="hide">Two Finger Swipe Down by Jeff Portaro from the Noun Project</div><div class="modal-overlay" ng-click="portfolio.closeModal()"></div><div class="modal-window"><div class="modal-inner"><div class="modal-display-data" ng-include="portfolio.chosenTemplate"></div></div></div></div>'),e.put("app/components/portfolio/modal-templates/creditwise.html",'<p>click outside of box to close</p><h2>Nav - Alerts Indicator</h2><iframe width="100%" height="240" src="http://jsfiddle.net/scottmurphy1111/kuqk3phb/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/components/portfolio/modal-templates/income-calc.html",'<p>click outside of box to close</p><h2>Income Calculator</h2><iframe width="100%" height="600" src="https://jsfiddle.net/scottmurphy1111/h4y6jqpu/embedded/result,html,css,js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/components/portfolio/modal-templates/personal-loans.html",'<p>click outside of box to close</p><h2>Payment Amount - UI Slider</h2><iframe width="100%" height="480" src="http://jsfiddle.net/scottmurphy1111/15f6dd01/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe><h2>Select Payment Date</h2><iframe width="100%" height="560" src="http://jsfiddle.net/scottmurphy1111/a882kfsv/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>')}]);