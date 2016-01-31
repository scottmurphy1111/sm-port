!function(){"use strict";angular.module("website",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"])}(),function(){"use strict";function i(){function i(i){var t=this;t.relativeDate=i(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["moment"],t}angular.module("website").directive("acmeNavbar",i)}(),function(){"use strict";function i(){function i(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Sass (Ruby)",url:"http://sass-lang.com/",description:"Original Syntactically Awesome StyleSheets implemented in Ruby",logo:"ruby-sass.png"}];this.getTec=i}angular.module("website").service("webDevTec",i)}(),function(){"use strict";function i(i){function t(t,e,n,a){var o,s=i(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(i){s.type(i).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(a.contributors,function(i){s.type(i.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function e(i,t){function e(){return n().then(function(){i.info("Activated Contributors View")})}function n(){return t.getContributors(10).then(function(i){return a.contributors=i,a.contributors})}var a=this;a.contributors=[],e()}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:e,controllerAs:"vm"};return e.$inject=["$log","githubContributor"],n}angular.module("website").directive("acmeMalarkey",i),i.$inject=["malarkey"]}(),function(){"use strict";function i(i,t){function e(e){function a(i){return i.data}function o(t){i.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return e||(e=30),t.get(n+"/contributors?per_page="+e).then(a)["catch"](o)}var n="https://api.github.com/repos/Swiip/generator-gulp-angular",a={apiHost:n,getContributors:e};return a}angular.module("website").factory("githubContributor",i),i.$inject=["$log","$http"]}(),function(){"use strict";angular.module("website").controller("PortfolioController",["$timeout",function(i){var t=this;t.loadMainContent=!1,t.setUpPage=function(){i(function(){t.loadMainContent=!0},200)},t.enterClicked1=!1,t.enterClicked2=!1,t.enterClicked3=!1,t.slideTopPanel1=function(){t.enterClicked1=!0},t.slideTopPanel2=function(){t.enterClicked2=!0,t.enterClicked1=!1},t.slideTopPanel3=function(){t.enterClicked3=!0,t.enterClicked2=!1}}]).directive("continueButton",function(){var i=function(i,t){t.bind("click",function(){for(var i=t.parent().next().children(),e=0;e<i.length;e++)if("enter"===i[e].className){i[e].classList.add("load-icon");break}t.removeClass("load-icon"),t.addClass("next1"),t.parent().removeClass("load-content show").addClass("hide"),t.parent().next().addClass("show")})};return{restrict:"A",link:i}})}(),function(){"use strict";function i(i,t,e){function n(){o(),i(function(){s.classAnimation="rubberBand"},4e3)}function a(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),s.classAnimation=""}function o(){s.awesomeThings=t.getTec(),angular.forEach(s.awesomeThings,function(i){i.rank=Math.random()})}var s=this;s.awesomeThings=[],s.classAnimation="",s.creationDate=1445875856093,s.showToastr=a,n()}angular.module("website").controller("MainController",i),i.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function i(i){i.debug("runBlock end")}angular.module("website").run(i),i.$inject=["$log"]}(),function(){"use strict";function i(i,t){i.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("portfolio",{url:"/portfolio",templateUrl:"app/portfolio/portfolio.html",controller:"PortfolioController",controllerAs:"portfolio"}),t.otherwise("/portfolio")}angular.module("website").config(i),i.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("website").constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function i(i,t){i.debugEnabled(!0),t.options.timeOut=3e3,t.options.positionClass="toast-top-right",t.options.preventDuplicates=!0,t.options.progressBar=!0}angular.module("website").config(i),i.$inject=["$logProvider","toastr"]}(),angular.module("website").run(["$templateCache",function(i){i.put("app/main/main.html",'<div class="container"><div><acme-navbar creationdate="main.creationDate"></acme-navbar></div><div class="jumbotron"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a class="btn btn-lg btn-success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="col" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div>'),i.put("app/portfolio/portfolio.html",'<div class="container" ng-init="portfolio.setUpPage()"><div class="panel"><section class="top-panel sliding-panel" ng-class="{\'hide\': portfolio.enterClicked1 || portfolio.enterClicked2}"><div class="header"><div class="who" ng-class="{\'load-content\': portfolio.loadMainContent}"><h1><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>SCOTT MURPHY <span class="title">WEB DEVELOPER</span></h1><p class="tagline">Front-End and User Interface Design Execution Specialist</p></div></div><p continue-button="" class="enter" ng-class="{\'load-icon\': portfolio.loadMainContent}"><span class="text">Continue</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></section><section class="second-panel sliding-panel" ng-class="{\'show\': portfolio.enterClicked1, \'hide\': portfolio.enterClicked2}"><div class="panel-wrapper"><h2 class="category-title"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>About Scott</h2><div class="bios"><ul><li><div class="inner-box"><div class="initial">Hometown</div><div class="reveal">Richmond, VA</div></div></li><li><div class="inner-box"><div class="initial">Education</div><div class="reveal">Appalachain State</div></div></li><li><div class="inner-box"><div class="initial">Experience</div><div class="reveal">7 years+</div></div></li><li><div class="inner-box"><div class="initial">Nickname</div><div class="reveal">Murph</div></div></li></ul><ul><li><div class="inner-box"><div class="initial">Work Ethic</div><div class="reveal">Gets Hands Dirty</div></div></li><li><div class="inner-box"><div class="initial">Fav Quote</div><div class="reveal">"All work and no play"</div></div></li><li><div class="inner-box"><div class="initial">Myers-Briggs</div><div class="reveal">INTP</div></div></li><li><div class="inner-box"><div class="initial">Hobbies</div><div class="reveal">Music, Golf</div></div></li></ul></div><div class="work-exp"><p>Work Exp</p></div></div><p continue-button="" class="enter"><span class="text">Continue</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></section><section class="third-panel sliding-panel" ng-class="{\'show\': portfolio.enterClicked2, \'hide\': portfolio.enterClicked3}"><h2 class="category-title"><span class="logo" ng-include="\'assets/images/portfolio/logoalt.svg\'"></span>Skills</h2><div class="skills"><ul><li><div class="initial">HTML/CSS</div><div class="reveal">more about this skill</div></li><li><div class="initial">Javascript/jQuery/Angular</div><div class="reveal">more about this skill</div></li><li><div class="initial">UI and Visual Design</div><div class="reveal">more about this skill</div></li><li><div class="initial">Github</div><div class="reveal">more about this skill</div></li></ul></div><p continue-button="" class="enter"><span class="text">Continue</span><br><span class="icon" ng-include="\'assets/images/portfolio/enter.svg\'"></span></p></section><div class="bg-image" ng-class="{\'load-image\': portfolio.loadMainContent}"></div></div></div>'),i.put("app/components/navbar/navbar.html",'<nav class="navbar"><a href="https://github.com/Swiip/generator-gulp-angular">Gulp Angular</a><ul><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></nav>')}]);