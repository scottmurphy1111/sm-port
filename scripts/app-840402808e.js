!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("website").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],a}angular.module("website").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function a(a,t,n,i){var s,l=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){l.type(e).pause()["delete"]()}),s=a.$watch("vm.contributors",function(){angular.forEach(i.contributors,function(e){l.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){s()})}function t(e,a){function t(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return a.getContributors(10).then(function(e){return i.contributors=e,i.contributors})}var i=this;i.contributors=[],t()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],n}angular.module("website").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,a){function t(t){function i(e){return e.data}function s(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return t||(t=30),a.get(n+"/contributors?per_page="+t).then(i)["catch"](s)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",i={apiHost:n,getContributors:t};return i}angular.module("website").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window",function(e,a,t){var n=this;n.loadMainContent=!1,n.setUpPage=function(){e(function(){n.loadMainContent=!0},400);var a=document.querySelectorAll(".skills .to-reveal");e(function(){for(var t=0;t<a.length;t++){var n=0;n+=20*t+5*Math.random(),function(t){e(function(){a[t].classList.add("show")},n)}(t)}},3200)},n.reloadPage=function(){t.location.reload()}}]).directive("vertNavItem",function(){var e=function(e,a,t){a.bind("click",function(e){e.stopPropagation();var n=t.active,i=document.querySelectorAll(".vert-nav li.active"),s=document.querySelectorAll(".sliding-panel"),l="",o=document.querySelectorAll(".enter");l=document.querySelectorAll("."+n);for(var r=0;r<s.length;r++)s[r].classList.add("fade-out"),s[r].classList.remove("fade-in");i[0].classList.remove("active"),a[0].classList.add("active"),l[0].classList.add("fade-in"),l[0].classList.remove("fade-out"),"top-panel"===n?o[0].classList.add("load-icon-instantly"):o[0].classList.remove("load-icon","load-icon-instantly")})};return{restrict:"A",scope:!0,link:e}}).directive("onScroll",["$window","$log","$timeout",function(e,a,t){var n=!1,i=!1,s=function(e,s){s.bind("mousewheel",function(e){var a=document.querySelectorAll(".enter"),l=s.next(),o=s[0].previousElementSibling,r=document.querySelectorAll(".vert-nav li.active")[0],c=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,p=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling,d=0;if(d=e.deltaY,d>100&&c){if(n)return;n=!0;var u=function(){s[0].className.indexOf("top-panel")>-1&&a[0].classList.remove("load-icon","load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),l.addClass("fade-in").removeClass("fade-out"),v()},v=function(){i||(c.classList.add("active"),r.classList.remove("active"),t(function(){n=!1,i=!1},600))};u()}if(-100>d&&p){if(n)return;n=!0;var m=function(){s[0].className.indexOf("second-panel")>-1&&a[0].classList.add("load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),angular.element(o)[0].classList.add("fade-in"),angular.element(o)[0].classList.remove("fade-out"),g()},g=function(){i||(p.classList.add("active"),r.classList.remove("active"),t(function(){n=!1,i=!1},600))};m()}});var l,o,r,c;s.bind("touchstart",function(e){var t=e.changedTouches[0];r=0,l=t.pageX,o=t.pageY,c=(new Date).getTime(),a.debug(o)}),s.bind("touchmove",function(e){e.preventDefault()}),s.bind("touchend",function(e){var a=e.changedTouches[0],l=a.pageY-o,r=document.querySelectorAll(".enter"),c=s.next(),p=s[0].previousElementSibling,d=document.querySelectorAll(".vert-nav li.active")[0],u=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,v=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-100>l&&u){if(n)return;n=!0;var m=function(){s[0].className.indexOf("top-panel")>-1&&r[0].classList.remove("load-icon","load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),c.addClass("fade-in").removeClass("fade-out"),g()},g=function(){i||(u.classList.add("active"),d.classList.remove("active"),t(function(){n=!1,i=!1},600))};m()}if(l>100&&v){if(n)return;n=!0;var f=function(){s[0].className.indexOf("second-panel")>-1&&r[0].classList.add("load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),angular.element(p)[0].classList.add("fade-in"),angular.element(p)[0].classList.remove("fade-out"),h()},h=function(){i||(v.classList.add("active"),d.classList.remove("active"),t(function(){n=!1,i=!1},600))};f()}})};return{restrict:"A",link:s}}]).directive("revealContent",function(){var e=function(e,a,t){a.bind("click",function(){var e=a.next(),t=document.querySelectorAll(".snippets li .content");if(e.hasClass("show")){for(var n=0;n<t.length;n++)t[n].classList.remove("show");e.removeClass("show")}else{for(var n=0;n<t.length;n++)t[n].classList.remove("show");e.addClass("show")}})};return{restrict:"A",scope:!0,link:e}})}(),function(){"use strict";function e(e,a,t){function n(){s(),e(function(){l.classAnimation="rubberBand"},4e3)}function i(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),l.classAnimation=""}function s(){l.awesomeThings=a.getTec(),angular.forEach(l.awesomeThings,function(e){e.rank=Math.random()})}var l=this;l.awesomeThings=[],l.classAnimation="",l.creationDate=1445875856093,l.showToastr=i,n()}angular.module("website").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("website").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),a.otherwise("/portfolio")}angular.module("website").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.options.timeOut=3e3,a.options.positionClass="toast-top-right",a.options.preventDuplicates=!0,a.options.progressBar=!0}angular.module("website").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("website").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),e.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="top-panel" vert-nav-item=""><span></span></li><li class="panel2" data-active="second-panel" vert-nav-item=""><span></span></li><li class="panel3" data-active="third-panel" vert-nav-item=""><span></span></li><li class="panel4" data-active="fourth-panel" vert-nav-item=""><span></span></li><li class="panel5" data-active="fifth-panel" vert-nav-item=""><span></span></li></ul></div><section class="top-panel sliding-panel fade-in" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">SCOTT MURPHY</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">WEB DEVELOPER</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}">Front-End and User Interface<br class="mobile-only">Design Execution Specialist<br></p><div class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">HTML</span><span class="to-reveal pipe">|</span><span class="to-reveal">CSS</span><span class="to-reveal pipe">|</span><span class="to-reveal">JAVASCRIPT</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">RESPONSIVE</span><span class="to-reveal pipe">|</span><span class="to-reveal">ANGULAR</span><span class="to-reveal pipe">|</span><span class="to-reveal">SASS</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">VERSION CONTROL</span><span class="to-reveal pipe">|</span><span class="to-reveal">PHP &amp; WORDPRESS</span></div></div></div></section><section class="second-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title">Projects</h2><div class="projects-list"><ul><li><span class="icon" ng-include="\'assets/images/portfolio/c1.svg\'"></span>Capital One - Front End Developer<br class="mobile-only">(Digital Design | Card)<ul><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Credit Tracker / CreditWise</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Personal Loans</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Interest Eraser</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Income Calculator</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">OneUI Contributor</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Front End 101 Contributor</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Card Servicing</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Account Combination</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Credit Card WWW Redesign</a></li><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">Add Authorized User</a></li></ul></li><li><span class="icon" ng-include="\'assets/images/portfolio/rp.svg\'"></span>Rocket Pop Media - Wordpress Developer<ul><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">VCU RamTech</a></li><li><a href="http://willowlawn.com/" target="_blank">Willow Lawn Mall</a></li><li><a href="https://olli.com/" target="_blank">Olli Salumeria</a></li></ul></li><li><span class="icon" ng-include="\'assets/images/portfolio/c9.svg\'"></span>Cloud 9 Web Designs - Web Developer<ul><li><a href="http://cloud9webdesigns.com/" target="_blank">Cloud 9 Web Designs</a></li><li><a href="http://1stopministorage.com/" target="_blank">1 Stop Mini Storage</a></li><li><a href="http://katieadcock.com/" target="_blank">Katie Adcock - Designer</a></li></ul></li></ul></div></div></section><section class="third-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title">Coding</h2><div class="snippets"><ul><li><span reveal-content="">Design Execution</span><div class="content"><p>I use HTML/CSS/JAVASCRIPT to implement animations, designs and visual elements into web user interfaces</p><img src="assets/images/portfolio/design-execution.png"></div></li><li><span reveal-content="">Production Level Code</span><div class="content"><p>I produce clean, efficient front end code that\'s ready for use in production</p><img src="assets/images/portfolio/prod-code.png"></div></li><li>Customized UI Elements</li><li>Forms</li><li>Animation Timing</li><li>Browser Compatible</li><li>Accessibility</li></ul></div></div></section><section class="fourth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title">About</h2><div class="bios"><ul><li><div class="inner-box"><div class="initial">Hometown</div><div class="reveal">Richmond, VA</div></div></li><li><div class="inner-box"><div class="initial">Education</div><div class="reveal">Appalachain State</div></div></li><li><div class="inner-box"><div class="initial">Experience</div><div class="reveal">7 years+</div></div></li><li><div class="inner-box"><div class="initial">Work Style</div><div class="reveal">Gets Hands Dirty</div></div></li><li><div class="inner-box"><div class="initial">Fav Code Editor</div><div class="reveal">Sublime Text</div></div></li><li><div class="inner-box"><div class="initial">Fav Languages</div><div class="reveal">SASS, Angular</div></div></li><li><div class="inner-box"><div class="initial">Nickname</div><div class="reveal">Murph</div></div></li><li><div class="inner-box"><div class="initial">Hobbies</div><div class="reveal">Music, Golf</div></div></li></ul></div></div></section><section class="fifth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><h2 class="category-title">Testimonials</h2><p>Murph is the bomb dot com ~Reliable Person #1</p><p>Murph is the bomb dot com ~Reliable Person #1</p><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h2 class="category-title">Contact</h2><p class="definition">Call / Text:</p><p class="clickable">(336) 602-3121</p><p class="definition">Email:</p><p class="clickable">scottmurphy1111@gmail.com</p></div></div></section><div class="bg-image" ng-class="{\'load-image\': portfolio.loadMainContent}"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">TO NAVIGATE THIS SITE, <span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP <span class="pipe">/</span> DOWN</span><br><span class="icon" ng-include="\'assets/images/portfolio/enteralt.svg\'"></span></p></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);