!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("website").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return e.$inject=["moment"],a}angular.module("website").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function a(a,t,i,n){var l,o=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){o.type(e).pause()["delete"]()}),l=a.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(e){o.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){l()})}function t(e,a){function t(){return i().then(function(){e.info("Activated Contributors View")})}function i(){return a.getContributors(10).then(function(e){return n.contributors=e,n.contributors})}var n=this;n.contributors=[],t()}var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],i}angular.module("website").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){"use strict";function e(e,a){function t(t){function n(e){return e.data}function l(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return t||(t=30),a.get(i+"/contributors?per_page="+t).then(n)["catch"](l)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:i,getContributors:t};return n}angular.module("website").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window","$log",function(e,a,t,i){var n=this;n.loadMainContent=!1,n.setUpPage=function(){e(function(){n.loadMainContent=!0},200);var a=document.querySelectorAll(".skills .to-reveal");e(function(){for(var t=0;t<a.length;t++){var i=0;i+=60*t+60*Math.random(),function(t){e(function(){a[t].classList.add("show")},i)}(t)}},4500)},n.reloadPage=function(){t.location.reload()}}]).directive("continueButton",["$log","$window","$timeout",function(e,a,t){var i=function(e,a){a.bind("click",function(){var e=a.parent().next().children(),i=a.parent().next(),n=document.querySelectorAll(".bios li"),l=document.querySelectorAll(".skills li"),o=document.querySelectorAll(".panel-wrapper")[0].offsetWidth;if(o>768)for(var s=0;s<e.length;s++)if("enter"===e[s].className){e[s].classList.add("load-icon");break}if(i.hasClass("second-panel")&&t(function(){for(var e=0;e<n.length;e++){var a=0;a+=160*e+150*Math.random(),function(e){t(function(){n[e].classList.add("show-li")},a)}(e)}},400),i.hasClass("third-panel")&&t(function(){for(var e=0;e<l.length;e++){var a=0;a+=160*e+150*Math.random(),function(e){t(function(){l[e].classList.add("show-li")},a)}(e)}},400),i.hasClass("fourth-panel"))for(var r=a.parent().next().children(),c=0;c<r.length;c++)if("enter"===r[c].className){r[c].classList.add("load-icon");break}a.removeClass("load-icon"),a.addClass("hide"),a.parent().removeClass("load-content show").addClass("hide"),a.parent().next().addClass("show")})};return{restrict:"A",link:i}}]).directive("onScroll",["$window","$log","$timeout",function(e,a,t){var i=!1,n=!1,l=function(e,l){l.bind("mousewheel",function(e){var a=document.querySelectorAll(".enter"),o=l.next(),s=l[0].previousElementSibling,r=(document.querySelectorAll(".bios li"),document.querySelectorAll(".skills li"),document.querySelectorAll(".panel-wrapper")[0].offsetWidth,document.querySelectorAll(".vert-nav li.active")[0]),c=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,p=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling,u=0;if(u=e.deltaY,u>100&&c){if(i)return;i=!0;var d=function(){l[0].className.indexOf("top-panel")>-1&&a[0].classList.remove("load-icon","load-icon-instantly"),l.removeClass("load-content show").addClass("hideTop"),t(function(){o.addClass("show").removeClass("hideTop hideBottom")},100),v()},v=function(){n||(c.classList.add("active"),r.classList.remove("active"),t(function(){i=!1,n=!1},800))};d()}if(-100>u&&p){if(i)return;i=!0;var m=function(){l[0].className.indexOf("second-panel")>-1&&a[0].classList.add("load-icon-instantly"),l.removeClass("load-content show").addClass("hideBottom"),t(function(){s.classList.add("show"),s.classList.remove("hideTop","hideBottom")},100),g()},g=function(){n||(p.classList.add("active"),r.classList.remove("active"),t(function(){i=!1,n=!1},800))};m()}});var o,s,r,c;l.bind("touchstart",function(e){e.preventDefault();var t=e.changedTouches[0];r=0,o=t.pageX,s=t.pageY,c=(new Date).getTime(),a.debug(s)}),l.bind("touchmove",function(e){e.preventDefault()}),l.bind("touchend",function(e){e.preventDefault();var a=e.changedTouches[0],o=a.pageY-s,r=document.querySelectorAll(".enter"),c=l.next(),p=l[0].previousElementSibling,u=(document.querySelectorAll(".bios li"),document.querySelectorAll(".skills li"),document.querySelectorAll(".panel-wrapper")[0].offsetWidth,document.querySelectorAll(".vert-nav li.active")[0]),d=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,v=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-100>o&&d){if(i)return;i=!0;var m=function(){l[0].className.indexOf("top-panel")>-1&&r[0].classList.remove("load-icon","load-icon-instantly"),l.removeClass("load-content show").addClass("hideTop"),t(function(){c.addClass("show").removeClass("hideTop hideBottom")},100),g()},g=function(){n||(d.classList.add("active"),u.classList.remove("active"),t(function(){i=!1,n=!1},800))};m()}if(o>100&&v){if(i)return;i=!0;var f=function(){l[0].className.indexOf("second-panel")>-1&&r[0].classList.add("load-icon-instantly"),l.removeClass("load-content show").addClass("hideBottom"),t(function(){p.classList.add("show"),p.classList.remove("hideTop","hideBottom")},100),h()},h=function(){n||(i=!1,n=!1,v.classList.add("active"),u.classList.remove("active"))};f()}})};return{restrict:"A",link:l}}])}(),function(){"use strict";function e(e,a,t){function i(){l(),e(function(){o.classAnimation="rubberBand"},4e3)}function n(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""}function l(){o.awesomeThings=a.getTec(),angular.forEach(o.awesomeThings,function(e){e.rank=Math.random()})}var o=this;o.awesomeThings=[],o.classAnimation="",o.creationDate=1445875856093,o.showToastr=n,i()}angular.module("website").controller("MainController",e),e.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function e(e){e.debug("runBlock end")}angular.module("website").run(e),e.$inject=["$log"]}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),a.otherwise("/portfolio")}angular.module("website").config(e),e.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.options.timeOut=3e3,a.options.positionClass="toast-top-right",a.options.preventDuplicates=!0,a.options.progressBar=!0}angular.module("website").config(e),e.$inject=["$logProvider","toastr"]}(),angular.module("website").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),e.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="panel1" vert-nav-item=""><span></span></li><li class="panel2" data-active="panel2" vert-nav-item=""><span></span></li><li class="panel3" data-active="panel3" vert-nav-item=""><span></span></li><li class="panel4" data-active="panel4" vert-nav-item=""><span></span></li><li class="panel5" data-active="panel5" vert-nav-item=""><span></span></li></ul></div><section class="top-panel sliding-panel" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">SCOTT MURPHY</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">WEB DEVELOPER</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}">Front-End and User Interface<br class="mobile-only">Design Execution Specialist<br></p><p class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">HTML</span><span class="to-reveal pipe">|</span><span class="to-reveal">CSS</span><span class="to-reveal pipe">|</span><span class="to-reveal">JAVASCRIPT</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">RESPONSIVE<span class="to-reveal pipe">|</span></span><span class="to-reveal">ANGULAR</span><span class="to-reveal pipe">|</span><span class="to-reveal">SASS</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">VERSION CONTROL<span class="to-reveal pipe">|</span></span><span class="to-reveal">PHP &amp; WORDPRESS</span></p></div></div></section><section class="second-panel sliding-panel" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>Projects</h2><div class="projects-list"><ul><li>Capital One - Front End Developer<ul><li>Credit Tracker / CreditWise</li><li>Personal Loans</li><li>Interest Eraser</li><li>OneUI Contributor</li><li>Front End 101 Contributor</li><li>Card Servicing</li><li>Card Benefits</li><li>Card Terms</li><li>Account Combination</li><li>Credit Card WWW Redesign</li><li>Add Authorized User</li></ul></li><li>Rocket Pop Media - Wordpress Developer<ul><li>VCU RamTech</li><li>Willow Lawn Mall</li><li>Epitome Networks</li><li>Olli Salumeria</li><li>Keep Virginia Beautiful</li><li>Beth Ahabah Synagogue</li></ul></li><li>Cloud 9 Web Designs - Web Developer<ul><li>Camel City Dispatch</li><li>Cloud 9 Web Designs</li><li>1 Stop Mini Storage</li><li>Element Rentals</li><li>RC Graphics Studio</li><li>Katie Adcock - Designer</li><li>Images by Kuhn</li></ul></li></ul></div></div></section><section class="third-panel sliding-panel" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>Coding</h2><div class="snippets"><div class="snippet1"><h3>Snippets</h3><ul><li>Pixel Perfect Design Execution</li><li>Clean, Production Level Code</li><li>Customized UI Elements</li><ul><li>Forms</li><li>Animation Timing</li></ul><li>Browser Compatible</li><li>Accessibility</li><ul <="" ul=""></ul></ul></div></div></div></section><section class="fourth-panel sliding-panel" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>SKILLS</h2><div class="what-is-front-end-development"><h3>What is Front End Development?</h3><p class="definition">"The practice of producing HTML, CSS and Javascript for a website or web application so that a user can see and interact with them directly..." ~ Wikipedia</p><p class="definition">...but it\'s so much more.</p><p class="definition">I specialize in the following skills<br class="mobile-only">required to get the job done!</p></div><div class="skills"><ul><li><div class="skill">HTML/CSS/Javascript</div></li><li><div class="skill">Responsive Web Design</div></li><li><div class="skill">CSS Frameworks</div></li><li><div class="skill">Javascript Frameworks</div></li></ul><ul><li><div class="skill">Builds &amp; Automation</div></li><li><div class="skill">Performance &amp; Testing</div></li><li><div class="skill">Version Control</div></li><li><div class="skill">UI &amp; Visual Design</div></li></ul></div></div></section><section class="fifth-panel sliding-panel" on-scroll=""><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'"></span>DEPLOY</h2><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><p>In order to get a hold of Scott, please...</p><p class="definition">Call or Text me: <span class="clickable">(336) 602-3121</span></p><p class="definition">Email me: <span class="clickable">scottmurphy1111@gmail.com</span></p><p>to contact me directly</p></div></div></section><div class="bg-image" ng-class="{\'load-image\': portfolio.loadMainContent}"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">TO NAVIGATE THIS SITE, <span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP <span class="pipe">/</span> DOWN</span><br><span class="icon" ng-include="\'assets/images/portfolio/enteralt.svg\'"></span></p></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);