!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function e(){function e(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("website").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var a=this;a.relativeDate=e(a.creationDate).fromNow()}e.$inject=["moment"];var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return a}angular.module("website").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function a(a,t,s,l){var o,i=e(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(e){i.type(e).pause()["delete"]()}),o=a.$watch("vm.contributors",function(){angular.forEach(l.contributors,function(e){i.type(e.login).pause()["delete"]()})}),a.$on("$destroy",function(){o()})}function t(e,a){function t(){return s().then(function(){e.info("Activated Contributors View")})}function s(){return a.getContributors(10).then(function(e){return l.contributors=e,l.contributors})}var l=this;l.contributors=[],t()}t.$inject=["$log","githubContributor"];var s={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"};return s}e.$inject=["malarkey"],angular.module("website").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,a){function t(t){function l(e){return e.data}function o(a){e.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return t||(t=30),a.get(s+"/contributors?per_page="+t).then(l)["catch"](o)}var s="https://api.github.com/repos/Swiip/generator-gulp-angular",l={apiHost:s,getContributors:t};return l}e.$inject=["$log","$http"],angular.module("website").factory("githubContributor",e)}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window",function(e,a,t){var s=this;s.loadMainContent=!1,s.setUpPage=function(){e(function(){s.loadMainContent=!0},800);var a=document.querySelectorAll(".skills .to-reveal");e(function(){for(var t=0;t<a.length;t++){var s=0;s+=20*t+5*Math.random(),function(t){e(function(){a[t].classList.add("show")},s)}(t)}},3700)},s.reloadPage=function(){t.location.reload()},s.closeModal=function(){document.querySelectorAll(".modal-window")[0].classList.remove("show"),e(function(){document.querySelectorAll(".modal-overlay")[0].classList.remove("show")},100)},s.chosenTemplate="app/portfolio/modal-templates/creditwise.html"}]).directive("vertNavItem",function(){var e=function(e,a,t){a.bind("click",function(e){e.stopPropagation();var s=t.active,l=document.querySelectorAll(".vert-nav li.active"),o=document.querySelectorAll(".sliding-panel"),i="",n=document.querySelectorAll(".enter");i=document.querySelectorAll("."+s);for(var r=0;r<o.length;r++)o[r].classList.add("fade-out"),o[r].classList.remove("fade-in");l[0].classList.remove("active"),a[0].classList.add("active"),i[0].classList.add("fade-in"),i[0].classList.remove("fade-out"),"top-panel"===s?n[0].classList.add("load-icon-instantly"):n[0].classList.remove("load-icon","load-icon-instantly")})};return{restrict:"A",scope:!0,link:e}}).directive("onScroll",["$window","$log","$timeout",function(e,a,t){var s=!1,l=!1,o=function(e,a){t(function(){a.bind("wheel",function(e){var o=document.querySelectorAll(".enter"),i=a.next(),n=a[0].previousElementSibling,r=document.querySelectorAll(".vert-nav li.active")[0],c=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,p=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling,d=document.querySelectorAll(".finger-swipe")[0],u=document.querySelectorAll(".modal-overlay")[0],v=0;if(v=e.deltaY,v>10&&60>=v&&(d.classList.add("show"),u.classList.add("show"),t(function(){d.classList.remove("show"),u.classList.remove("show")},800)),v>60&&c){if(s)return;s=!0,d.classList.remove("show"),u.classList.remove("show");var m=function(){a[0].className.indexOf("top-panel")>-1&&o[0].classList.remove("load-icon","load-icon-instantly"),a.removeClass("load-content fade-in").addClass("fade-out"),i.addClass("fade-in").removeClass("fade-out"),f()},f=function(){l||(c.classList.add("active"),r.classList.remove("active"),t(function(){s=!1,l=!1},600))};m()}if(-100>v&&p){if(s)return;s=!0;var g=function(){a[0].className.indexOf("second-panel")>-1&&o[0].classList.add("load-icon-instantly"),a.removeClass("load-content fade-in").addClass("fade-out"),angular.element(n)[0].classList.add("fade-in"),angular.element(n)[0].classList.remove("fade-out"),h()},h=function(){l||(p.classList.add("active"),r.classList.remove("active"),t(function(){s=!1,l=!1},600))};g()}});var e,o,i,n;a.bind("touchstart",function(a){var t=a.changedTouches[0];i=0,e=t.pageX,o=t.pageY,n=(new Date).getTime()}),a.bind("touchmove",function(e){e.preventDefault()}),a.bind("touchend",function(e){var i=e.changedTouches[0],n=i.pageY-o,r=document.querySelectorAll(".enter"),c=a.next(),p=a[0].previousElementSibling,d=document.querySelectorAll(".vert-nav li.active")[0],u=document.querySelectorAll(".finger-swipe")[0],v=document.querySelectorAll(".modal-overlay")[0],m=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,f=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-10>n&&n>=-100&&(u.classList.add("show"),v.classList.add("show"),t(function(){u.classList.remove("show"),v.classList.remove("show")},800)),-100>n&&m){if(s)return;s=!0,u.classList.remove("show"),v.classList.remove("show");var g=function(){a[0].className.indexOf("top-panel")>-1&&r[0].classList.remove("load-icon","load-icon-instantly"),a.removeClass("load-content fade-in").addClass("fade-out"),c.addClass("fade-in").removeClass("fade-out"),h()},h=function(){l||(m.classList.add("active"),d.classList.remove("active"),t(function(){s=!1,l=!1},600))};g()}if(n>100&&f){if(s)return;s=!0;var b=function(){a[0].className.indexOf("second-panel")>-1&&r[0].classList.add("load-icon-instantly"),a.removeClass("load-content fade-in").addClass("fade-out"),angular.element(p)[0].classList.add("fade-in"),angular.element(p)[0].classList.remove("fade-out"),w()},w=function(){l||(f.classList.add("active"),d.classList.remove("active"),t(function(){s=!1,l=!1},600))};b()}})},5e3)};return{restrict:"A",link:o}}]).directive("revealContent",function(){var e=function(e,a){a.bind("click",function(){var e=a.next(),t=document.querySelectorAll(".snippets li .content");if(e.hasClass("show")){for(var s=0;s<t.length;s++)t[s].classList.remove("show");e.removeClass("show")}else{for(var l=0;l<t.length;l++)t[l].classList.remove("show");e.addClass("show")}})};return{restrict:"A",scope:!0,link:e}}).directive("smModal",["$timeout",function(e){var a=function(a,t){t.bind("click",function(){document.querySelectorAll(".modal-overlay")[0].classList.add("show"),e(function(){document.querySelectorAll(".modal-window")[0].classList.add("show")},200)})};return{restrict:"A",scope:!0,link:a}}])}(),function(){"use strict";function e(e,a,t){function s(){o(),e(function(){i.classAnimation="rubberBand"},4e3)}function l(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function o(){i.awesomeThings=a.getTec(),angular.forEach(i.awesomeThings,function(e){e.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1445875856093,i.showToastr=l,s()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("website").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("website").run(e)}(),function(){"use strict";function e(e,a){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),a.otherwise("/portfolio")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("website").config(e)}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,a){e.debugEnabled(!0),a.options.timeOut=3e3,a.options.positionClass="toast-top-right",a.options.preventDuplicates=!0,a.options.progressBar=!0}e.$inject=["$logProvider","toastr"],angular.module("website").config(e)}(),angular.module("website").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),e.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="top-panel" vert-nav-item=""><span></span></li><li class="panel2" data-active="second-panel" vert-nav-item=""><span></span></li><li class="panel3" data-active="third-panel" vert-nav-item=""><span></span></li><li class="panel4" data-active="fourth-panel" vert-nav-item=""><span></span></li><li class="panel5" data-active="fifth-panel" vert-nav-item=""><span></span></li></ul></div><section class="top-panel sliding-panel fade-in" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">SCOTT MURPHY</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">WEB DEVELOPER</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}">Front-End Development <span class="desktop-only">and&nbsp;</span><br class="mobile-only">User Interface&nbsp;Design Execution</p><div class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">HTML</span><span class="to-reveal pipe">|</span><span class="to-reveal">CSS</span><span class="to-reveal pipe">|</span><span class="to-reveal">JAVASCRIPT</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">RESPONSIVE</span><span class="to-reveal pipe">|</span><span class="to-reveal">ANGULAR</span><span class="to-reveal pipe">|</span><span class="to-reveal">SASS</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">VERSION CONTROL</span><span class="to-reveal pipe">|</span><span class="to-reveal">PHP &amp; WORDPRESS</span></div></div></div></section><section class="second-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap projects-list"><h2 class="category-title">Projects</h2><ul><li><p><span class="icon" ng-include="\'assets/images/portfolio/c1.svg\'"></span>Capital One - Front End Developer</p><ul><li><a sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/personal-loans.html\'" href="">Personal Loans</a></li><li><a sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/creditwise.html\'" href="">CreditWise</a></li><li><a ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/income-calc.html\'" sm-modal="" href="#">Income Calculator</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/rp.svg\'"></span>Rocket Pop Media - Web Developer</p><ul><li><a href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">VCU RamTech</a></li><li><a href="http://willowlawn.com/" target="_blank">Willow Lawn Mall</a></li><li><a href="https://olli.com/" target="_blank">Olli Salumeria</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/c9.svg\'"></span>Cloud 9 - Web Developer</p><ul><li><a href="http://cloud9webdesigns.com/" target="_blank">Cloud 9 Web Designs</a></li><li><a href="http://1stopministorage.com/" target="_blank">1 Stop Mini Storage</a></li><li><a href="http://katieadcock.com/" target="_blank">Katie Adcock - Designer</a></li></ul></li></ul></div></div></section><section class="third-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">Coding</h2><ul><li><div class="code-link" reveal-content="">Design Execution</div><div class="content"><p>I use HTML/CSS/JAVASCRIPT to implement animations, designs and visual elements into web user interfaces</p><img src="assets/images/portfolio/design-execution.png"></div></li><li><div class="code-link" reveal-content="">Production Level Code</div><div class="content"><p>I produce clean, efficient front end code that\'s ready for use in production</p><img src="assets/images/portfolio/prod-code.png"></div></li><li>UI &amp; Web Animation</li><li>Responsive, Browser Compatible</li><li>Accessibility / Form Validation</li></ul><p>"Scott not only creates phenomenal websites/prototypes from a coding perspective, but he also has a very keen visual design eye."</p><p>"Scott was easy to work with, very open to trying alternate ideas and developing creative code options for, sometimes challenging, UI intent. His collaboration was very much appreciated."</p></div></div></section><section class="fourth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap bios"><h2 class="category-title">About Scott</h2><ul><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/location.svg\'"></span>Lives in Richmond, VA</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/education.svg\'"></span>Studied at Appalachain State</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/exp.svg\'"></span>7 years+ of Experience</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/work-style.svg\'"></span>Work Style: Gets Hands Dirty</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/tools.svg\'"></span>Prefers Sublime Text Code Editor</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/langs.svg\'"></span>Favorite Code Language: SASS</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/person.svg\'"></span>Friends call me Murph</div></div></li><li><div class="inner-box"><div class="reveal"><span class="bio-icon left" ng-include="\'assets/images/portfolio/golf.svg\'"></span>Loves to play Golf</div></div></li></ul></div></div></section><section class="fifth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap special-note"><h2 class="category-title">A Special Note</h2><p>Thank you for visiting! To put it simply, I love bringing web pages to life. Whether I\'m doing freelance work or embedded into a production team, my strong passion for code keeps me constantly wanting to conquer the daily challenges of front-end development.</p></div><div class="inner-wrap"><div class="block left"><h2 class="category-title">Contact</h2><div class="inner-wrap"><div class="social"><ul><li>(336) 602-3121</li><li>scottmurphy1111@gmail.com</li></ul></div></div></div><div class="block right"><h2 class="category-title">Social</h2><div class="inner-wrap"><div class="social"><ul><li><a target="_blank" href="http://github.com/scottmurphy1111">Github</a></li><li><a target="_blank" href="http://stackoverflow.com/users/5711949/scott-murphy">Stack Overflow</a></li><li><a target="_blank" href="https://jsfiddle.net/user/scottmurphy1111/fiddles/">jsFiddle</a></li><li><a target="_blank" href="https://www.linkedin.com/in/scottmurphy1111">LinkedIn</a></li></ul></div></div></div></div></div></section><div class="finger-swipe"><p><span class="desktop-only">Scroll&nbsp;</span><span class="mobile-only">Swipe&nbsp;</span>like you mean it!</p><div class="finger-swipe-icon"></div></div><div class="bg-image load-image"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">TO NAVIGATE THIS SITE, <span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP <span class="pipe">/</span> DOWN</span><br><span class="icon" ng-include="\'assets/images/portfolio/enteralt.svg\'"></span></p></div><div class="modal-overlay" ng-click="portfolio.closeModal()"></div><div class="modal-window"><div class="modal-inner"><div class="modal-display-data" ng-include="portfolio.chosenTemplate"></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>'),e.put("app/portfolio/modal-templates/creditwise.html",'<p>click outside of box to close</p><h2>Nav - Alerts Indicator</h2><iframe width="100%" height="240" src="http://jsfiddle.net/scottmurphy1111/kuqk3phb/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/portfolio/modal-templates/income-calc.html",'<p>click outside of box to close</p><h2>Income Calculator</h2><iframe width="100%" height="600" src="https://jsfiddle.net/scottmurphy1111/h4y6jqpu/embedded/result,html,css,js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/portfolio/modal-templates/personal-loans.html",'<p>click outside of box to close</p><h2>Payment Amount - UI Slider</h2><iframe width="100%" height="480" src="http://jsfiddle.net/scottmurphy1111/15f6dd01/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe><h2>Select Payment Date</h2><iframe width="100%" height="560" src="http://jsfiddle.net/scottmurphy1111/a882kfsv/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>')}]);