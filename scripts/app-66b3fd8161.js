!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function i(){function i(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=i}angular.module("website").service("webDevTec",i)}(),function(){"use strict";function i(){function i(i){var t=this;t.relativeDate=i(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["moment"],t}angular.module("website").directive("acmeNavbar",i)}(),function(){"use strict";function i(i){function t(t,n,e,a){var o,s=i(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(i){s.type(i).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(i){s.type(i.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function n(i,t){function n(){return e().then(function(){i.info("Activated Contributors View")})}function e(){return t.getContributors(10).then(function(i){return a.contributors=i,a.contributors})}var a=this;a.contributors=[],n()}var e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return n.$inject=["$log","githubContributor"],e}angular.module("website").directive("acmeMalarkey",i),i.$inject=["malarkey"]}(),function(){"use strict";function i(i,t){function n(n){function a(i){return i.data}function o(t){i.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(e+"/contributors?per_page="+n).then(a)["catch"](o)}var e="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:e,getContributors:n};return a}angular.module("website").factory("githubContributor",i),i.$inject=["$log","$http"]}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout","$state",function(i,t){var n=this;n.loadMainContent=!1,n.setUpPage=function(){i(function(){n.loadMainContent=!0},200)},n.reloadPage=function(){t.reload()}}]).directive("continueButton",["$log","$window","$timeout",function(i,t,n){var e=function(i,t){t.bind("click",function(){var i=t.parent().next().children(),e=t.parent().next(),a=document.querySelectorAll(".bios li"),o=document.querySelectorAll(".skills li"),s=document.querySelectorAll(".panel-wrapper")[0].offsetWidth;if(s>768)for(var l=0;l<i.length;l++)if("enter"===i[l].className){i[l].classList.add("load-icon");break}e.hasClass("second-panel")&&n(function(){for(var i=0;i<a.length;i++){var t=0;t+=160*i+150*Math.random(),function(i){n(function(){a[i].classList.add("show-li")},t)}(i)}},400),e.hasClass("third-panel")&&n(function(){for(var i=0;i<o.length;i++){var t=0;t+=160*i+150*Math.random(),function(i){n(function(){o[i].classList.add("show-li")},t)}(i)}},400),t.removeClass("load-icon"),t.addClass("hide"),t.parent().removeClass("load-content show").addClass("hide"),t.parent().next().addClass("show")})};return{restrict:"A",link:e}}]).directive("showOnScroll",["$window","$log",function(i,t){var n=function(t,n){n.bind("scroll",function(){var t=n[0].scrollTop,e=n[0].scrollHeight,a=n[0].offsetWidth,o=i.outerHeight,s=n[0].lastElementChild;768>a&&(t>e-o-64?s.classList.add("load-icon","mobile"):s.classList.remove("load-icon","mobile"))})};return{restrict:"A",link:n}}])}(),function(){"use strict";function i(i,t,n){function e(){o(),i(function(){s.classAnimation="rubberBand"},4e3)}function a(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function o(){s.awesomeThings=t.getTec(),angular.forEach(s.awesomeThings,function(i){i.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1445875856093,s.showToastr=a,e()}angular.module("website").controller("MainController",i),i.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function i(i){i.debug("runBlock end")}angular.module("website").run(i),i.$inject=["$log"]}(),function(){"use strict";function i(i,t){i.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),t.otherwise("/portfolio")}angular.module("website").config(i),i.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function i(i,t){i.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}angular.module("website").config(i),i.$inject=["$logProvider","toastr"]}(),angular.module("website").run(["$templateCache",function(i){i.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),i.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><section class="top-panel sliding-panel"><div class="header"><div class="who" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>SCOTT MURPHY <span class="title">WEB DEVELOPER</span></h1><p class="tagline">Front-End and User Interface Design Execution Specialist</p></div></div><p continue-button="" class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">Continue</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></section><section class="second-panel sliding-panel" show-on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>About Scott</h2><div class="bios"><ul><li><div class="inner-box"><div class="initial">Hometown</div><div class="reveal">Richmond, VA</div></div></li><li><div class="inner-box"><div class="initial">Education</div><div class="reveal">Appalachain State</div></div></li><li><div class="inner-box"><div class="initial">Experience</div><div class="reveal">7 years+</div></div></li><li><div class="inner-box"><div class="initial">Work Style</div><div class="reveal">Gets Hands Dirty</div></div></li></ul><ul><li><div class="inner-box"><div class="initial">Preferred Code Lang</div><div class="reveal">SASS</div></div></li><li><div class="inner-box"><div class="initial">Fav Quote</div><div class="reveal">"Strength lies within..."</div></div></li><li><div class="inner-box"><div class="initial">Nickname</div><div class="reveal">Murph</div></div></li><li><div class="inner-box"><div class="initial">Hobbies</div><div class="reveal">Music, Golf</div></div></li></ul></div></div><p continue-button="" class="enter"><span class="text">Skillset</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></section><section class="third-panel sliding-panel" show-on-scroll=""><div class="panel-wrapper"><h2 class="category-title" ng-click="portfolio.reloadPage()"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>Skillset</h2><div class="what-is-front-end-development"><h3>What is Front End Development?</h3><p class="definition">"The practice of producing HTML, CSS and Javascript for a website or web application so that a user can see and interact with them directly..." ~ Wikipedia</p><p class="definition">...but its so much more.</p><p class="definition">Listed below are the skills and tools I use to get the job done!</p></div><div class="skills"><ul><li><div class="skill">HTML/CSS/Javascript</div></li><li><div class="skill">Responsive Web Design</div></li><li><div class="skill">CSS Frameworks</div></li><li><div class="skill">Javascript Frameworks</div></li></ul><ul><li><div class="skill">Building &amp; Automation Tools</div></li><li><div class="skill">Performance &amp; Testing</div></li><li><div class="skill">Version Control</div></li><li><div class="skill">UI and Visual Design</div></li></ul></div></div><p continue-button="" class="enter"><span class="text">Continue</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></section><div class="bg-image" ng-class="{\'load-image\': portfolio.loadMainContent}"></div></div></div>'),i.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);