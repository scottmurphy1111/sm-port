!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=e}angular.module("website").service("webDevTec",e)}(),function(){"use strict";function e(e){function t(t,a,n,s){var l,i=e(a[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});a.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),l=t.$watch("vm.contributors",function(){angular.forEach(s.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){l()})}function a(e,t){function a(){return n().then(function(){e.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(e){return s.contributors=e,s.contributors})}var s=this;s.contributors=[],a()}a.$inject=["$log","githubContributor"];var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}e.$inject=["malarkey"],angular.module("website").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("website").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t){function a(a){function s(e){return e.data}function l(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return a||(a=30),t.get(n+"/contributors?per_page="+a).then(s)["catch"](l)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",s={apiHost:n,getContributors:a};return s}e.$inject=["$log","$http"],angular.module("website").factory("githubContributor",e)}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window","$document",function(e,t,a,n){var s=this;s.loadMainContent=!1,s.setUpPage=function(){e(function(){s.loadMainContent=!0},800);var t=n[0].querySelectorAll(".skills .to-reveal"),a=function(a){var n=0;n+=20*a+5*Math.random(),e(function(){t[a].classList.add("show")},n)};e(function(){for(var e=0;e<t.length;e++)a(e)},3700);var l=n[0].querySelectorAll(".experience-time"),i=(new Date).getFullYear()-2009;l[0].innerHTML=i},s.reloadPage=function(){a.location.reload()},s.closeModal=function(){n[0].querySelectorAll(".modal-window")[0].classList.remove("show"),e(function(){n[0].querySelectorAll(".modal-overlay")[0].classList.remove("show")},100)},s.chosenTemplate="app/portfolio/modal-templates/creditwise.html"}]).directive("vertNavItem",["$document",function(e){var t=function(t,a,n){a.bind("click",function(t){t.stopPropagation();var s=n.active,l=e[0].querySelectorAll(".vert-nav li.active"),i=e[0].querySelectorAll(".sliding-panel"),o="",r=e[0].querySelectorAll(".enter");o=e[0].querySelectorAll("."+s);for(var c=0;c<i.length;c++)i[c].classList.add("fade-out"),i[c].classList.remove("fade-in");l[0].classList.remove("active"),a[0].classList.add("active"),o[0].classList.add("fade-in"),o[0].classList.remove("fade-out"),"top-panel"===s?r[0].classList.add("load-icon-instantly"):r[0].classList.remove("load-icon","load-icon-instantly")})};return{restrict:"A",scope:!0,link:t}}]).directive("onScroll",["$window","$document","$timeout",function(e,t,a){var n=!1,s=!1,l=function(e,l){a(function(){l.bind("wheel",function(e){var i=t[0].querySelectorAll(".enter"),o=l.next(),r=l[0].previousElementSibling,c=t[0].querySelectorAll(".vert-nav li.active")[0],p=t[0].querySelectorAll(".vert-nav li.active")[0].nextElementSibling,d=t[0].querySelectorAll(".vert-nav li.active")[0].previousElementSibling,u=0;if(u=e.deltaY,1===e.deltaMode&&(u=8*u),u>100&&p){if(n)return;n=!0;var v=function(){l[0].className.indexOf("top-panel")>-1&&i[0].classList.remove("load-icon","load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),o.addClass("fade-in").removeClass("fade-out"),m()},m=function(){s||(p.classList.add("active"),c.classList.remove("active"),a(function(){n=!1,s=!1},600))};v()}if(-100>u&&d){if(n)return;n=!0;var g=function(){l[0].className.indexOf("second-panel")>-1&&i[0].classList.add("load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),angular.element(r)[0].classList.add("fade-in"),angular.element(r)[0].classList.remove("fade-out"),f()},f=function(){s||(d.classList.add("active"),c.classList.remove("active"),a(function(){n=!1,s=!1},600))};g()}});var e,i,o,r;l.bind("touchstart",function(t){var a=t.changedTouches[0];o=0,e=a.pageX,i=a.pageY,r=Date.now()}),l.bind("touchmove",function(e){e.preventDefault()}),l.bind("touchend",function(e){var o=e.changedTouches[0],r=o.pageY-i,c=t[0].querySelectorAll(".enter"),p=l.next(),d=l[0].previousElementSibling,u=t[0].querySelectorAll(".vert-nav li.active")[0],v=t[0].querySelectorAll(".vert-nav li.active")[0].nextElementSibling,m=t[0].querySelectorAll(".vert-nav li.active")[0].previousElementSibling;if(-100>r&&v){if(n)return;n=!0;var g=function(){l[0].className.indexOf("top-panel")>-1&&c[0].classList.remove("load-icon","load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),p.addClass("fade-in").removeClass("fade-out"),f()},f=function(){s||(v.classList.add("active"),u.classList.remove("active"),a(function(){n=!1,s=!1},600))};g()}if(r>100&&m){if(n)return;n=!0;var h=function(){l[0].className.indexOf("second-panel")>-1&&c[0].classList.add("load-icon-instantly"),l.removeClass("load-content fade-in").addClass("fade-out"),angular.element(d)[0].classList.add("fade-in"),angular.element(d)[0].classList.remove("fade-out"),b()},b=function(){s||(m.classList.add("active"),u.classList.remove("active"),a(function(){n=!1,s=!1},600))};h()}})},5e3)};return{restrict:"A",link:l}}]).directive("revealContent",["$interval","$document",function(e,t){var a=function(a,n){n.bind("click",function(){var a=n.next(),s=t[0].querySelectorAll(".snippets li .content");if(a.hasClass("show")){for(var l=0;l<s.length;l++)s[l].classList.remove("show");a.removeClass("show")}else{for(var i=0;i<s.length;i++)s[i].classList.remove("show");a.addClass("show");var o=t[0].querySelectorAll(".content.show p")[0].textContent,r=t[0].querySelectorAll(".content.show p")[0],c=0,p=a.children()[0].clientHeight;r.style.height=p+"px",r.innerHTML="",e(function(){c<o.length&&(r.innerHTML+=o[c++])},12)}})};return{restrict:"A",scope:!0,link:a}}]).directive("smModal",["$timeout","$document",function(e,t){var a=function(a,n){n.bind("click",function(){t[0].querySelectorAll(".modal-overlay")[0].classList.add("show"),e(function(){t[0].querySelectorAll(".modal-window")[0].classList.add("show")},200)})};return{restrict:"A",scope:!0,link:a}}])}(),function(){"use strict";function e(e,t,a){function n(){l(),e(function(){i.classAnimation="rubberBand"},4e3)}function s(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function l(){i.awesomeThings=t.getTec(),angular.forEach(i.awesomeThings,function(e){e.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1445875856093,i.showToastr=s,n()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("website").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("website").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),t.otherwise("/portfolio")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("website").config(e)}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}e.$inject=["$logProvider","toastr"],angular.module("website").config(e)}(),angular.module("website").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),e.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav" ng-class="{\'show\': portfolio.loadMainContent}"><ul><li class="active panel1" data-active="top-panel" vert-nav-item=""><span></span></li><li class="panel2" data-active="second-panel" vert-nav-item=""><span></span></li><li class="panel3" data-active="third-panel" vert-nav-item=""><span></span></li><li class="panel4" data-active="fourth-panel" vert-nav-item=""><span></span></li><li class="panel5" data-active="fifth-panel" vert-nav-item=""><span></span></li></ul></div><section class="top-panel sliding-panel fade-in" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logo.svg\'" ng-class="{\'show\': portfolio.loadMainContent}"></span><span class="name" ng-class="{\'show\': portfolio.loadMainContent}">SCOTT MURPHY</span><br class="mobile-only"><span class="title" ng-class="{\'show\': portfolio.loadMainContent}">WEB DEVELOPER</span></h1><p class="tagline" ng-class="{\'show\': portfolio.loadMainContent}">Front-End Development <span class="desktop-only">and&nbsp;</span><br class="mobile-only">User Interface&nbsp;Design Execution</p><div class="skills" ng-class="{\'show\': portfolio.loadMainContent}"><span class="to-reveal">HTML</span><span class="to-reveal pipe">|</span><span class="to-reveal">CSS</span><span class="to-reveal pipe">|</span><span class="to-reveal">JAVASCRIPT</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">RESPONSIVE</span><span class="to-reveal pipe">|</span><span class="to-reveal">ANGULAR</span><span class="to-reveal pipe">|</span><span class="to-reveal">SASS</span><span class="to-reveal desktop-only pipe">|</span><br class="mobile-only"><span class="to-reveal">VERSION CONTROL</span><span class="to-reveal pipe">|</span><span class="to-reveal">PHP &amp; WORDPRESS</span></div></div></div></section><section class="second-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap projects-list"><h2 class="category-title">Projects</h2><ul><li><p><span class="icon" ng-include="\'assets/images/portfolio/c1.svg\'"></span>Capital One - Front End Developer</p><ul><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/personal-loans.html\'" href="">Personal Loans</a></li><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/creditwise.html\'" href="">CreditWise</a></li><li><a class="proj-link" sm-modal="" ng-click="portfolio.chosenTemplate=\'app/portfolio/modal-templates/income-calc.html\'" href="#">Income Calculator</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/rp.svg\'"></span>Rocket Pop Media - Web Developer</p><ul><li><a class="proj-link" href="http://apps.bsv.vcu.edu/RamTech/Index.html" target="_blank">VCU RamTech</a></li><li><a class="proj-link" href="http://willowlawn.com/" target="_blank">Willow Lawn Mall</a></li><li><a class="proj-link" href="https://olli.com/" target="_blank">Olli Salumeria</a></li></ul></li><li><p><span class="icon" ng-include="\'assets/images/portfolio/c9.svg\'"></span>Cloud 9 - Web Developer</p><ul><li><a class="proj-link" href="http://cloud9webdesigns.com/" target="_blank">Cloud 9 Web Designs</a></li><li><a class="proj-link" href="http://1stopministorage.com/" target="_blank">1 Stop Mini Storage</a></li><li><a class="proj-link" href="http://katieadcock.com/" target="_blank">Katie Adcock - Designer</a></li></ul></li></ul></div></div></section><section class="third-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">Coding</h2><ul><li><div class="code-link" reveal-content="">Design Execution</div><div class="content"><p>I utilize HTML/CSS/JAVASCRIPT to implement smooth animations and optimized visual elements into web user interfaces</p><img src="assets/images/portfolio/design-execution.png"></div></li><li><div class="code-link" reveal-content="">Efficient Coding</div><div class="content"><p>I deliver lean, mean and clean front-end code that is ready for use in production environments and custom websites</p><img src="assets/images/portfolio/prod-code.png"></div></li></ul><p>"Scott not only creates phenomenal websites/prototypes from a coding perspective, but he also has a very keen visual design eye." ~ John Jones - Designer</p><br><p>"Scott was easy to work with, very open to trying alternate ideas and developing creative code options for, sometimes challenging, UI intent. His collaboration was very much appreciated." ~ Lance Rogers - Creative Manager</p></div></div></section><section class="fourth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap snippets"><h2 class="category-title">About Scott</h2><ul><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/person.svg\'"></span>Nickname</div><div class="content"><p>Friends call me Murph</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/location.svg\'"></span>Location</div><div class="content"><p>I live in Richmond, VA</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/education.svg\'"></span>School</div><div class="content"><p>I studied Music at App State</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/exp.svg\'"></span>Experience</div><div class="content"><p>I have been coding for <span class="experience-time">7</span>&nbsp;years+</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/work-style.svg\'"></span>Work Style</div><div class="content"><p>I\'m known to get my hands dirty</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/tools.svg\'"></span>Code Editor</div><div class="content"><p>I prefer Sublime Text</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/langs.svg\'"></span>Favorite Code Languages</div><div class="content"><p>I love SASS and Angular</p></div></li><li><div class="code-link" reveal-content=""><span class="bio-icon left" ng-include="\'assets/images/portfolio/golf.svg\'"></span>Hobbies</div><div class="content"><p>Bass/Guitar, golf</p></div></li></ul></div></div></section><section class="fifth-panel sliding-panel fade-out" on-scroll=""><div class="panel-wrapper"><div class="inner-wrap special-note"><h2 class="category-title">A Special Note</h2><p>Thank you for visiting! To put it simply, I love bringing web pages to life. Whether I\'m doing freelance work or embedded into a production team, my strong passion for code keeps me constantly wanting to conquer the daily challenges of front-end development.</p></div><div class="inner-wrap"><div class="block left"><h2 class="category-title">Contact</h2><div class="social"><ul><li>(336) 602-3121</li><li>scottmurphy1111@gmail.com</li></ul></div></div><div class="block right"><h2 class="category-title">Social</h2><div class="inner-wrap"><div class="social"><ul><li><a title="Github" target="_blank" href="http://github.com/scottmurphy1111"><img src="assets/images/portfolio/git.svg"></a></li><li><a title="Stack Overflow" target="_blank" href="http://stackoverflow.com/users/5711949/scott-murphy"><img src="assets/images/portfolio/stk-o.svg"></a></li><li><a title="jsFiddle" target="_blank" href="https://jsfiddle.net/user/scottmurphy1111/fiddles/"><img src="assets/images/portfolio/jsfiddle.svg"></a></li><li><a title="linkedIn" target="_blank" href="https://www.linkedin.com/in/scottmurphy1111"><img src="assets/images/portfolio/linkd-in.svg"></a></li></ul></div></div></div></div></div></section><div class="bg-image load-image"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text"><span class="mobile-only">SWIPE&nbsp;</span><span class="desktop-only">SCROLL&nbsp;</span>UP / DOWN</span><br><span class="icon" ng-include="\'assets/images/finger-swipe.svg\'"></span></p></div><div class="hide">Two Finger Swipe Down by Jeff Portaro from the Noun Project</div><div class="modal-overlay" ng-click="portfolio.closeModal()"></div><div class="modal-window"><div class="modal-inner"><div class="modal-display-data" ng-include="portfolio.chosenTemplate"></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>'),e.put("app/portfolio/modal-templates/creditwise.html",'<p>click outside of box to close</p><h2>Nav - Alerts Indicator</h2><iframe width="100%" height="240" src="http://jsfiddle.net/scottmurphy1111/kuqk3phb/embedded/result,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/portfolio/modal-templates/income-calc.html",'<p>click outside of box to close</p><h2>Income Calculator</h2><iframe width="100%" height="600" src="https://jsfiddle.net/scottmurphy1111/h4y6jqpu/embedded/result,html,css,js" allowfullscreen="allowfullscreen" frameborder="0"></iframe>'),e.put("app/portfolio/modal-templates/personal-loans.html",'<p>click outside of box to close</p><h2>Payment Amount - UI Slider</h2><iframe width="100%" height="480" src="http://jsfiddle.net/scottmurphy1111/15f6dd01/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe><h2>Select Payment Date</h2><iframe width="100%" height="560" src="http://jsfiddle.net/scottmurphy1111/a882kfsv/embedded/result,js,html,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>')}]);