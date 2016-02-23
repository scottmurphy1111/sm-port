!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function i(){function i(){return a}var a=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=i}angular.module("website").service("webDevTec",i)}(),function(){"use strict";function i(i){function a(a,t,e,n){var l,o=i(t[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});t.addClass("acme-malarkey"),angular.forEach(a.extraValues,function(i){o.type(i).pause()["delete"]()}),l=a.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(i){o.type(i.login).pause()["delete"]()})}),a.$on("$destroy",function(){l()})}function t(i,a){function t(){return e().then(function(){i.info("Activated Contributors View")})}function e(){return a.getContributors(10).then(function(i){return n.contributors=i,n.contributors})}var n=this;n.contributors=[],t()}var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"};return t.$inject=["$log","githubContributor"],e}angular.module("website").directive("acmeMalarkey",i),i.$inject=["malarkey"]}(),function(){"use strict";function i(){function i(i){var a=this;a.relativeDate=i(a.creationDate).fromNow()}var a={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["moment"],a}angular.module("website").directive("acmeNavbar",i)}(),function(){"use strict";function i(i,a){function t(t){function n(i){return i.data}function l(a){i.error("XHR Failed for getContributors.\n"+angular.toJson(a.data,!0))}return t||(t=30),a.get(e+"/contributors?per_page="+t).then(n)["catch"](l)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:e,getContributors:t};return n}angular.module("website").factory("githubContributor",i),i.$inject=["$log","$http"]}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state","$window",function(i,a,t){var e=this;e.loadMainContent=!1,e.setUpPage=function(){i(function(){e.loadMainContent=!0},200)},e.reloadPage=function(){t.location.reload()}}]).directive("continueButton",["$log","$window","$timeout",function(i,a,t){var e=function(i,a){a.bind("click",function(){var i=a.parent().next().children(),e=a.parent().next(),n=document.querySelectorAll(".bios li"),l=document.querySelectorAll(".skills li"),o=document.querySelectorAll(".panel-wrapper")[0].offsetWidth;if(o>768)for(var s=0;s<i.length;s++)if("enter"===i[s].className){i[s].classList.add("load-icon");break}if(e.hasClass("second-panel")&&t(function(){for(var i=0;i<n.length;i++){var a=0;a+=160*i+150*Math.random(),function(i){t(function(){n[i].classList.add("show-li")},a)}(i)}},400),e.hasClass("third-panel")&&t(function(){for(var i=0;i<l.length;i++){var a=0;a+=160*i+150*Math.random(),function(i){t(function(){l[i].classList.add("show-li")},a)}(i)}},400),e.hasClass("fourth-panel"))for(var r=a.parent().next().children(),c=0;c<r.length;c++)if("enter"===r[c].className){r[c].classList.add("load-icon");break}a.removeClass("load-icon"),a.addClass("hide"),a.parent().removeClass("load-content show").addClass("hide"),a.parent().next().addClass("show")})};return{restrict:"A",link:e}}]).directive("showOnScroll",["$window","$log",function(i,a){var t=function(a,t){t.bind("scroll",function(){var a=t[0].scrollTop,e=t[0].firstElementChild.scrollHeight,n=t[0].offsetWidth,l=i.innerHeight,o=t[0].lastElementChild;768>n&&(a>e-l?o.classList.add("load-icon","mobile"):o.classList.remove("load-icon","mobile"))})};return{restrict:"A",link:t}}]).directive("onScroll",["$window","$log","$timeout",function(i,a,t){var e=function(i,e){e.bind("mousewheel",function(i){var n=document.querySelectorAll(".enter"),l=e.next(),o=document.querySelectorAll(".bios li"),s=document.querySelectorAll(".skills li"),r=(document.querySelectorAll(".panel-wrapper")[0].offsetWidth,document.querySelectorAll(".vert-nav li.active")[0]),c=document.querySelectorAll(".vert-nav li.active")[0].nextElementSibling;a.debug(r),a.debug(c.classList);var d=i.deltaY;if(d>100){r.classList.remove("active"),t(function(){c.classList.add("active")},500);for(var u=0;u<l.length;u++)if(l[u].className.indexOf("second-panel")>-1&&t(function(){for(var i=0;i<o.length;i++){var a=0;a+=160*i+150*Math.random(),function(i){t(function(){o[i].classList.add("show-li")},a)}(i)}},400),l[u].className.indexOf("third-panel")>-1&&t(function(){for(var i=0;i<s.length;i++){var a=0;a+=160*i+150*Math.random(),function(i){t(function(){s[i].classList.add("show-li")},a)}(i)}},400),l[u].className.indexOf("fourth-panel")>-1)for(var p=e.parent().next().children(),v=0;v<p.length;v++)if("enter"===p[v].className){p[v].classList.add("load-icon");break}n[0].classList.remove("load-icon"),e.removeClass("load-content show").addClass("hide"),t(function(){l.addClass("show"),t(function(){n[0].classList.add("load-icon")},400)},100),t(function(){l.addClass("start-scroll")},2e3)}})};return{restrict:"A",link:e}}])}(),function(){"use strict";function i(i,a,t){function e(){l(),i(function(){o.classAnimation="rubberBand"},4e3)}function n(){t.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),o.classAnimation=""}function l(){o.awesomeThings=a.getTec(),angular.forEach(o.awesomeThings,function(i){i.rank=Math.random()})}var o=this;o.awesomeThings=[],o.classAnimation="",o.creationDate=1445875856093,o.showToastr=n,e()}angular.module("website").controller("MainController",i),i.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function i(i){i.debug("runBlock end")}angular.module("website").run(i),i.$inject=["$log"]}(),function(){"use strict";function i(i,a){i.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),a.otherwise("/portfolio")}angular.module("website").config(i),i.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function i(i,a){i.debugEnabled(!0),a.options.timeOut=3e3,a.options.positionClass="toast-top-right",a.options.preventDuplicates=!0,a.options.progressBar=!0}angular.module("website").config(i),i.$inject=["$logProvider","toastr"]}(),angular.module("website").run(["$templateCache",function(i){i.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),i.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><div class="vert-nav"><ul><li class="active panel1" data-active="panel1"><span></span></li><li class="panel2" data-active="panel2"><span></span></li><li class="panel3" data-active="panel3"><span></span></li><li class="panel4" data-active="panel4"><span></span></li><li class="panel5" data-active="panel5"><span></span></li></ul></div><section class="top-panel sliding-panel" on-scroll=""><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>SCOTT MURPHY <span class="title">WEB DEVELOPER</span></h1><p class="tagline">Front-End and User Interface<br class="mobile-only">Design Execution Specialist</p></div></div></section><section class="second-panel sliding-panel" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>ABOUT SCOTT</h2><div class="bios"><ul><li><div class="inner-box"><div class="initial">Hometown</div><div class="reveal">Richmond, VA</div></div></li><li><div class="inner-box"><div class="initial">Education</div><div class="reveal">Appalachain State</div></div></li><li><div class="inner-box"><div class="initial">Experience</div><div class="reveal">7 years+</div></div></li><li><div class="inner-box"><div class="initial">Work Style</div><div class="reveal">Gets Hands Dirty</div></div></li></ul><ul><li><div class="inner-box"><div class="initial">Fav Code Editor</div><div class="reveal">Sublime Text</div></div></li><li><div class="inner-box"><div class="initial">Fav Language</div><div class="reveal">SASS</div></div></li><li><div class="inner-box"><div class="initial">Nickname</div><div class="reveal">Murph</div></div></li><li><div class="inner-box"><div class="initial">Hobbies</div><div class="reveal">Music, Golf</div></div></li></ul></div></div></section><section class="third-panel sliding-panel" on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>SKILLS</h2><div class="what-is-front-end-development"><h3>What is Front End Development?</h3><p class="definition">"The practice of producing HTML, CSS and Javascript for a website or web application so that a user can see and interact with them directly..." ~ Wikipedia</p><p class="definition">...but it\'s so much more.</p><p class="definition">I specialize in the following skills<br class="mobile-only">required to get the job done!</p></div><div class="skills"><ul><li><div class="skill">HTML/CSS/Javascript</div></li><li><div class="skill">Responsive Web Design</div></li><li><div class="skill">CSS Frameworks</div></li><li><div class="skill">Javascript Frameworks</div></li></ul><ul><li><div class="skill">Builds &amp; Automation</div></li><li><div class="skill">Performance &amp; Testing</div></li><li><div class="skill">Version Control</div></li><li><div class="skill">UI &amp; Visual Design</div></li></ul></div></div></section><section class="fourth-panel sliding-panel" on-scroll=""><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>DEPLOY</h2><div class="panel-static"><div class="static-inner" ng-class="{\'load-content\': portfolio.loadMainContent}"><p>In order to get a hold of Scott, please...</p><p class="definition">Call or Text me: <span class="clickable">(336) 602-3121</span></p><p class="definition">Email me: <span class="clickable">scottmurphy1111@gmail.com</span></p><p>to contact me directly</p></div></div></section><div class="bg-image" ng-class="{\'load-image\': portfolio.loadMainContent}"></div><p class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">SCROLL</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></div></div>'),i.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);