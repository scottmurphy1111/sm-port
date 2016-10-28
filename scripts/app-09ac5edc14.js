!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("website").service("webDevTec",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("website").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){function t(t,a,n,l){var s,o=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){o.type(e).pause()["delete"]()}),s=t.$watch("vm.contributors",function(){angular.forEach(l.contributors,function(e){o.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){s()})}function a(e,t){function a(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(e){return l.contributors=e,l.contributors})}var l=this;l.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}e.$inject=["malarkey"],angular.module("website").directive("acmeMalarkey",e)}(),function(){"use strict";function e(e,t){function a(a){function l(e){return e.data}function s(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(n+"/contributors?per_page="+a).then(l)["catch"](s)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",l={apiHost:n,getContributors:a};return l}e.$inject=["$log","$http"],angular.module("website").factory("githubContributor",e)}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window","$log",function(e,t,a,n){var l=this;l.loadMainContent=!1,l.setUpPage=function(){e(function(){l.loadMainContent=!0},800);var t=document.querySelectorAll(".skills .to-reveal");e(function(){for(var a=0;a<t.length;a++){var n=0;n+=20*a+5*Math.random(),function(a){e(function(){t[a].classList.add("show")},n)}(a)}},3700);var a=document.querySelectorAll(".experience-time"),n=(new Date).getFullYear()-2009;a[0].innerHTML=n},l.reloadPage=function(){a.location.reload()},l.closeModal=function(){document.querySelectorAll(".modal-window")[0].classList.remove("show"),e(function(){document.querySelectorAll(".modal-overlay")[0].classList.remove("show")},100)},l.chosenTemplate="app/portfolio/modal-templates/creditwise.html"}]).directive("vertNavItem",function(){var e=function(e,t,a){t.bind("click",function(e){e.stopPropagation();var n=a.active,l=document.querySelectorAll(".vert-nav li.active"),s=document.querySelectorAll(".sliding-panel"),o="",i=document.querySelectorAll(".enter");o=document.querySelectorAll("."+n);for(var r=0;r<s.length;r++)s[r].classList.add("fade-out"),s[r].classList.remove("fade-in");l[0].classList.remove("active"),t[0].classList.add("active"),o[0].classList.add("fade-in"),o[0].classList.remove("fade-out"),"top-panel"===n?i[0].classList.add("load-icon-instantly"):i[0].classList.remove("load-icon","load-icon-instantly")})};return{restrict:"A",scope:!0,link:e}}).directive("onScroll",["$window","$log","$timeout",function(e,t,a){var n=!1,l=!1,s=function(e,s){a(function(){s.bind("wheel",function(e){var o=document.querySelectorAll(".enter"),i=s.next(),r=s[0].previousElementSibling,c=document.querySelectorAll(".vert-nav li.active")[0],p=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling,d=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling,u=(document.querySelectorAll(".finger-swipe")[0],document.querySelectorAll(".panel")[0],0);if(u=e.deltaY,1===e.deltaMode&&(u=8*u),t.debug(u),u>100&&p){if(n)return;n=!0;var m=function(){s[0].className.indexOf("top-panel")>-1&&o[0].classList.remove("load-icon","load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),i.addClass("fade-in").removeClass("fade-out"),v()},v=function(){l||(p.classList.add("active"),c.classList.remove("active"),a(function(){n=!1,l=!1},600))};m()}if(-100>u&&d){if(n)return;n=!0;var g=function(){s[0].className.indexOf("second-panel")>-1&&o[0].classList.add("load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),angular.element(r)[0].classList.add("fade-in"),angular.element(r)[0].classList.remove("fade-out"),f()},f=function(){l||(d.classList.add("active"),c.classList.remove("active"),a(function(){n=!1,l=!1},600))};g()}});var e,o,i,r;s.bind("touchstart",function(t){var a=t.changedTouches[0];i=0,e=a.pageX,o=a.pageY,r=(new Date).getTime()}),s.bind("touchmove",function(e){e.preventDefault()}),s.bind("touchend",function(e){var t=e.changedTouches[0],i=t.pageY-o,r=document.querySelectorAll(".enter"),c=s.next(),p=s[0].previousElementSibling,d=document.querySelectorAll(".vert-nav li.active")[0],u=(document.querySelectorAll(".finger-swipe")[0],document.querySelectorAll(".modal-overlay")[0],document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling),m=document.querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-100>i&&u){if(n)return;n=!0;var v=function(){s[0].className.indexOf("top-panel")>-1&&r[0].classList.remove("load-icon","load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),c.addClass("fade-in").removeClass("fade-out"),g()},g=function(){l||(u.classList.add("active"),d.classList.remove("active"),a(function(){n=!1,l=!1},600))};v()}if(i>100&&m){if(n)return;n=!0;var f=function(){s[0].className.indexOf("second-panel")>-1&&r[0].classList.add("load-icon-instantly"),s.removeClass("load-content fade-in").addClass("fade-out"),angular.element(p)[0].classList.add("fade-in"),angular.element(p)[0].classList.remove("fade-out"),h()},h=function(){l||(m.classList.add("active"),d.classList.remove("active"),a(function(){n=!1,l=!1},600))};f()}})},5e3)};return{restrict:"A",link:s}}]).directive("revealContent",["$log",function(e){var t=function(e,t){t.bind("click",function(){var e=t.next(),a=document.querySelectorAll(".snippets li .content");if(e.hasClass("show")){for(var n=0;n<a.length;n++)a[n].classList.remove("show");e.removeClass("show")}else{for(var l=0;l<a.length;l++)a[l].classList.remove("show");e.addClass("show");var s=document.querySelectorAll(".content.show p")[0].textContent,o=document.querySelectorAll(".content.show p")[0],i=0,r=e.children()[0].clientHeight,s=s.split("");o.style.height=r+"px",o.innerHTML="",setInterval(function(){i<s.length&&(o.innerHTML+=s[i++])},12)}})};return{restrict:"A",scope:!0,link:t}}]).directive("smModal",["$timeout",function(e){var t=function(t,a){a.bind("click",function(){document.querySelectorAll(".modal-overlay")[0].classList.add("show"),e(function(){document.querySelectorAll(".modal-window")[0].classList.add("show")},200)})};return{restrict:"A",scope:!0,link:t}}])}(),function(){"use strict";function e(e,t,a){function n(){s(),e(function(){o.classAnimation="rubberBand"},4e3)}function l(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""}function s(){o.awesomeThings=t.getTec(),angular.forEach(o.awesomeThings,function(e){e.rank=Math.random()})}var o=this;o.awesomeThings=[],o.classAnimation="",o.creationDate=1445875856093,o.showToastr=l,n()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("website").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("website").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),t.otherwise("/portfolio")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("website").config(e)}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}e.$inject=["$logProvider","toastr"],angular.module("website").config(e)}(),angular.module("website").run(["$templateCache",function(e){e.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="top-panel" vert-nav-item=""><span></span></li><li class="panel2" data-active="second-panel" vert-nav-item=""><span></span></li><li class="panel3" data-active="third-panel" vert-nav-item=""><span></span></li><li class="panel4" data-active="fourth-panel" vert-nav-item=""><span></span></li><li class="panel5" data-active="fifth-panel" vert-nav-item=""><span></span></li></ul></div><section class="top-panel sliding-panel fade-in" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">SCOTT MURPHY</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">WEB DEVELOPER</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}">Front-End Development <span class="desktop-only">and&nbsp;</span><br class="mobile-only">User Interface&nbsp;Design Execution</p><div class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">HTML</span><span class="to-reveal pipe">|</span><span class="to-reveal">CSS</span><span class="to-reveal pipe">|</span><span class="to-reveal">JAVASCRIPT</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">RESPONSIVE</span><span class="to-reveal pipe">|</span><span class="to-reveal">ANGULAR</span><span class="to-reveal pipe">|</span><span class="to-reveal">SASS</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">VERSION CONTROL</span><span class="to-reveal pipe">|</span><span class="to-reveal">PHP &amp; WORDPRESS</span></div></div></div></section><section class="second-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap projects-list"><h2 class="category-title">Projects</h2><ul><li><p><span class="icon" ng-include="\'assets/images/portfolio/c1.svg\'"></span>Capital One - Front End Developer</p><ul><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/personal-loans.html\'" href="">Personal Loans</a></li><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/creditwise.html\'" href="">CreditWise</a></li><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/income-calc.html\'" href="#">Income Calculator</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/rp.svg\'"></span>Rocket Pop Media - Web Developer</p><ul><li><a class="proj-link" href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">VCU RamTech</a></li><li><a class="proj-link" href="http://willowlawn.com/" target="_blank">Willow Lawn Mall</a></li><li><a class="proj-link" href="https://olli.com/" target="_blank">Olli Salumeria</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/c9.svg\'"></span>Cloud 9 - Web Developer</p><ul><li><a class="proj-link" href="http://cloud9webdesigns.com/" target="_blank">Cloud 9 Web Designs</a></li><li><a class="proj-link" href="http://1stopministorage.com/" target="_blank">1 Stop Mini Storage</a></li><li><a class="proj-link" href="http://katieadcock.com/" target="_blank">Katie Adcock - Designer</a></li></ul></li></ul></div></div></section><section class="third-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">Coding</h2><ul><li><div class="code-link" reveal-content="">Design Execution</div><div class="content"><p>I utilize HTML/CSS/JAVASCRIPT to implement smooth animations and optimized visual elements into web user interfaces</p><img src="assets/images/portfolio/design-execution.png"></div></li><li><div class="code-link" reveal-content="">Efficient Coding</div><div class="content"><p>I deliver lean, mean and clean front-end code that is ready for use in production environments and custom websites</p><img src="assets/images/portfolio/prod-code.png"></div></li></ul><p>"Scott not only creates phenomenal websites/prototypes from a coding perspective, but he also has a very keen visual design eye." ~ John Jones - Designer</p><br><p>"Scott was easy to work with, very open to trying alternate ideas and developing creative code options for, sometimes challenging, UI intent. His collaboration was very much appreciated." ~ Lance Rogers - Creative Manager</p></div></div></section><section class="fourth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">About Scott</h2><ul><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/person.svg\'"></span>Nickname</div><div class="content"><p>"Friends call me Murph"</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/location.svg\'"></span>Location</div><div class="content"><p>"I live in Richmond, VA"</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/education.svg\'"></span>School</div><div class="content"><p>I studied Music at App State</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/exp.svg\'"></span>Experience</div><div class="content"><p>"I have been coding for <span class="experience-time">7</span>&nbsp;years+"</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/work-style.svg\'"></span>Work Style</div><div class="content"><p>"I\'m known to get my hands dirty"</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/tools.svg\'"></span>Code Editor</div><div class="content"><p>"I prefer Sublime Text"</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/langs.svg\'"></span>Favorite Code Languages</div><div class="content"><p>"I love SASS and Angular"</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/golf.svg\'"></span>Hobbies</div><div class="content"><p>"Bass/Guitar, golf"</p></div></li></ul></div></div></section><section class="fifth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap special-note"><h2 class="category-title">A Special Note</h2><p>Thank you for visiting! To put it simply, I love bringing web pages to life. Whether I\'m doing freelance work or embedded into a production team, my strong passion for code keeps me constantly wanting to conquer the daily challenges of front-end development.</p></div><div class="inner-wrap"><div class="block left"><h2 class="category-title">Contact</h2><div class="inner-wrap"><div class="social"><ul><li>(336) 602-3121</li><li>scottmurphy1111@gmail.com</li></ul></div></div></div><div class="block right"><h2 class="category-title">Social</h2><div class="inner-wrap"><div class="social"><ul><li><a title="Github" target="_blank" href="http://github.com/scottmurphy1111"><img src="assets/images/portfolio/git.svg"></a></li><li><a title="Stack Overflow" target="_blank" href="http://stackoverflow.com/users/5711949/scott-murphy"><img src="assets/images/portfolio/stk-o.svg"></a></li><li><a title="jsFiddle" target="_blank" href="https://jsfiddle.net/user/scottmurphy1111/fiddles/"><img src="assets/images/portfolio/jsfiddle.svg"></a></li><li><a title="linkedIn" target="_blank" href="https://www.linkedin.com/in/scottmurphy1111"><img src="assets/images/portfolio/linkd-in.svg"></a></li></ul></div></div></div></div></div></section><div class="bg-image load-image"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">TO NAVIGATE THIS SITE, <span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP <span class="pipe">/</span> DOWN</span><br><span class="icon" ng-include="\'assets/images/finger-swipe.svg\'"></span></p></div><div class="hide">Two Finger Swipe Down by Jeff Portaro from the Noun Project</div><div class="modal-overlay" ng-click="portfolio.closeModal()"></div><div class="modal-window"><div class="modal-inner"><div class="modal-display-data" ng-include="portfolio.chosenTemplate"></div></div></div></div>'),e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>'),e.put("app/portfolio/modal-templates/creditwise.html",'<p>click outside of box to close</p><h2>Nav - Alerts Indicator</h2><iframe width="100%" height="240" src="http://jsfiddle.net/scottmurphy1111/kuqk3phb/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/portfolio/modal-templates/income-calc.html",'<p>click outside of box to close</p><h2>Income Calculator</h2><iframe width="100%" height="600" src="https://jsfiddle.net/scottmurphy1111/h4y6jqpu/embedded/result,html,css,js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/portfolio/modal-templates/personal-loans.html",'<p>click outside of box to close</p><h2>Payment Amount - UI Slider</h2><iframe width="100%" height="480" src="http://jsfiddle.net/scottmurphy1111/15f6dd01/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe><h2>Select Payment Date</h2><iframe width="100%" height="560" src="http://jsfiddle.net/scottmurphy1111/a882kfsv/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>')}]);