!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],a}angular.module("website").directive("acmeNavbar",e)}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("website").service("webDevTec",e)}(),function(){"use strict";function e(e){function a(a,i,n,t){var l,s=e(i[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});i.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){s.type(e).pause()["delete"]()}),l=a.$watch("vm.contributors",function(){angular.forEach(t.contributors,function(e){s.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){l()})}function i(e,a){function i(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return a.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}var t=this;t.contributors=[],i()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:i,controllerAs:"vm"};return i.$inject=["$log","githubContributor"],n}angular.module("website").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,a){function i(i){function t(e){return e.data}function l(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return i||(i=30),a.get(n+"/contributors?per_page="+i).then(t)["catch"](l)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",t={apiHost:n,getContributors:i};return t}angular.module("website").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window",function(e,a,i){var n=this;n.loadMainContent=!1,n.setUpPage=function(){e(function(){n.loadMainContent=!0},400);var a=document.querySelectorAll(".skills .to-reveal");e(function(){for(var i=0;i<a.length;i++){var n=0;n+=60*i+60*Math.random(),function(i){e(function(){a[i].classList.add("show")},n)}(i)}},4500)},n.reloadPage=function(){i.location.reload()}}]).directive("vertNavItem",function(){var e=function(e,a,i){a.bind("click",function(e){e.stopPropagation();var n=i.active,t=document.querySelectorAll(".vert-nav li.active"),l=document.querySelectorAll(".sliding-panel"),s="",o=document.querySelectorAll(".enter");s=document.querySelectorAll("."+n);for(var r=0;r<l.length;r++)l[r].classList.add("fade-out"),l[r].classList.remove("fade-in");t[0].classList.remove("active"),a[0].classList.add("active"),s[0].classList.add("fade-in"),s[0].classList.remove("fade-out"),"top-panel"===n?o[0].classList.add("load-icon-instantly"):o[0].classList.remove("load-icon","load-icon-instantly")})};return{restrict:"A",scope:!0,link:e}}).directive("onScroll",["$window","$log","$timeout",function(e,a,i){var n=!1,t=!1,l=function(e,l){l.bind("mousewheel",function(e){var a=document.querySelectorAll(".enter"),s=l.next(),o=l[0].previousElementSibling,r=document.querySelectorAll(".vert-nav li.active")[0],c=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,d=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling,p=0;if(p=e.deltaY,p>100&&c){if(n)return;n=!0;var u=function(){l[0].className.indexOf("top-panel")>-1&&a[0].classList.remove("load-icon","load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),s.addClass("fade-in").removeClass("fade-out"),v()},v=function(){t||(c.classList.add("active"),r.classList.remove("active"),i(function(){n=!1,t=!1},600))};u()}if(-100>p&&d){if(n)return;n=!0;var g=function(){l[0].className.indexOf("second-panel")>-1&&a[0].classList.add("load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),angular.element(o)[0].classList.add("fade-in"),angular.element(o)[0].classList.remove("fade-out"),m()},m=function(){t||(d.classList.add("active"),r.classList.remove("active"),i(function(){n=!1,t=!1},600))};g()}});var s,o,r,c;l.bind("touchstart",function(e){e.preventDefault();var i=e.changedTouches[0];r=0,s=i.pageX,o=i.pageY,c=(new Date).getTime(),a.debug(o)}),l.bind("touchmove",function(e){e.preventDefault()}),l.bind("touchend",function(e){e.preventDefault();var a=e.changedTouches[0],s=a.pageY-o,r=document.querySelectorAll(".enter"),c=l.next(),d=l[0].previousElementSibling,p=document.querySelectorAll(".vert-nav li.active")[0],u=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,v=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-100>s&&u){if(n)return;n=!0;var g=function(){l[0].className.indexOf("top-panel")>-1&&r[0].classList.remove("load-icon","load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),c.addClass("fade-in").removeClass("fade-out"),m()},m=function(){t||(u.classList.add("active"),p.classList.remove("active"),i(function(){n=!1,t=!1},600))};g()}if(s>100&&v){if(n)return;n=!0;var f=function(){l[0].className.indexOf("second-panel")>-1&&r[0].classList.add("load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),angular.element(d)[0].classList.add("fade-in"),angular.element(d)[0].classList.remove("fade-out"),h()},h=function(){t||(v.classList.add("active"),p.classList.remove("active"),i(function(){n=!1,t=!1},600))};f()}})};return{restrict:"A",link:l}}])}(),function(){"use strict";function e(e,a,i){function n(){l(),e(function(){s.classAnimation="rubberBand"},4e3)}function t(){i.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function l(){s.awesomeThings=a.getTec(),angular.forEach(s.awesomeThings,function(e){e.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1445875856093,s.showToastr=t,n()}angular.module("website").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("website").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),a.otherwise("/portfolio")}angular.module("website").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.options.timeOut=3e3,a.options.positionClass="toast-top-right",a.options.preventDuplicates=!0,a.options.progressBar=!0}angular.module("website").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("website").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),e.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="top-panel" vert-nav-item=""><span></span></li><li class="panel2" data-active="second-panel" vert-nav-item=""><span></span></li><li class="panel3" data-active="third-panel" vert-nav-item=""><span></span></li><li class="panel4" data-active="fourth-panel" vert-nav-item=""><span></span></li><li class="panel5" data-active="fifth-panel" vert-nav-item=""><span></span></li></ul></div><section class="top-panel sliding-panel fade-in" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">SCOTT MURPHY</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">WEB DEVELOPER</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}">Front-End and User Interface<br class="mobile-only">Design Execution Specialist<br></p><p class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">HTML</span><span class="to-reveal pipe">|</span><span class="to-reveal">CSS</span><span class="to-reveal pipe">|</span><span class="to-reveal">JAVASCRIPT</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">RESPONSIVE<span class="to-reveal pipe">|</span></span><span class="to-reveal">ANGULAR</span><span class="to-reveal pipe">|</span><span class="to-reveal">SASS</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">VERSION CONTROL<span class="to-reveal pipe">|</span></span><span class="to-reveal">PHP &amp; WORDPRESS</span></p></div></div></section><section class="second-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>Projects</h2><div class="projects-list"><ul><li>Capital One - Front End Developer<ul><li>Credit Tracker / CreditWise</li><li>Personal Loans</li><li>Interest Eraser</li><li>OneUI Contributor</li><li>Front End 101 Contributor</li><li>Card Servicing</li><li>Account Combination</li><li>Credit Card WWW Redesign</li><li>Add Authorized User</li></ul></li><li>Rocket Pop Media - Wordpress Developer<ul><li>VCU RamTech</li><li>Willow Lawn Mall</li><li>Epitome Networks</li><li>Olli Salumeria</li><li>Keep Virginia Beautiful</li><li>Beth Ahabah Synagogue</li></ul></li><li>Cloud 9 Web Designs - Web Developer<ul><li>Camel City Dispatch</li><li>Cloud 9 Web Designs</li><li>1 Stop Mini Storage</li><li>Element Rentals</li><li>RC Graphics Studio</li><li>Katie Adcock - Designer</li><li>Images by Kuhn</li></ul></li></ul></div></div></section><section class="third-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>Coding</h2><div class="snippets"><div class="snippet1"><h3>Snippets</h3><ul><li>Design Execution</li><li>Clean, Production Level Code</li><li>Customized UI Elements</li><li>Forms</li><li>Animation Timing</li><li>Browser Compatible</li><li>Accessibility</li></ul></div></div></div></section><section class="fourth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>About</h2><div class="bios"><ul><li><div class="inner-box"><div class="initial">Hometown</div><div class="reveal">Richmond, VA</div></div></li><li><div class="inner-box"><div class="initial">Education</div><div class="reveal">Appalachain State</div></div></li><li><div class="inner-box"><div class="initial">Experience</div><div class="reveal">7 years+</div></div></li><li><div class="inner-box"><div class="initial">Work Style</div><div class="reveal">Gets Hands Dirty</div></div></li><li><div class="inner-box"><div class="initial">Fav Code Editor</div><div class="reveal">Sublime Text</div></div></li><li><div class="inner-box"><div class="initial">Fav Language</div><div class="reveal">SASS</div></div></li><li><div class="inner-box"><div class="initial">Nickname</div><div class="reveal">Murph</div></div></li><li><div class="inner-box"><div class="initial">Hobbies</div><div class="reveal">Music, Golf</div></div></li></ul></div></div></section><section class="fifth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>Contact</h2><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><p class="definition">Call / Text: <span class="clickable">(336) 602-3121</span></p><p class="definition">Email: <span class="clickable">scottmurphy1111@gmail.com</span></p></div></div></section><div class="bg-image" ng-class="{\'load-image\': portfolio.loadMainContent}"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">TO NAVIGATE THIS SITE, <span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP <span class="pipe">/</span> DOWN</span><br><span class="icon" ng-include="\'assets/images/portfolio/enteralt.svg\'"></span></p></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);