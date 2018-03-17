(function() {
  	'use strict';

	angular
	.module('website')
	.controller('PortfolioCtrl', PortfolioCtrl);

	PortfolioCtrl.$inject =['$timeout', '$state', '$window', '$document', '$http', '$scope', 'contentFactory'];

	function PortfolioCtrl($timeout, $state, $window, $document, $http, $scope, contentFactory) {		
		var portfolio = this;//scope portfolio
	
		portfolio.loadMainContent = false;//flag page load timer

		//dynamic content animations and data loads
		portfolio.setUpPage = function() {
	
			//trigger content load
			$timeout(function() {
				portfolio.loadMainContent = true;
			}, 800);

			$timeout(function() {
				portfolio.removeDelays = true;
			}, 5000);

			//add animation class to home section skills
			console.log('pre-watch', $scope.skills);
			$scope.fireSkills = function() {
				angular.copy($scope.skills);
				$scope.$watch($scope.skills, function() {
					console.log('post-watch', $scope.skills);
					$timeout(function() {
						console.log('in-timeout', $scope.skills);
						var toReveal = $document[0].querySelectorAll('.skills .to-reveal');

						//ripple effect on skills reveal
						var processAll = function(els) {
							console.log('els', els);
							var timer = 0;
							timer += 30*els+(Math.random()*5);
			
							$timeout(function() {
								toReveal[els].classList.add('show');
							}, timer);
						};
			
						$timeout(function() {
							for (var n = 0; n < toReveal.length; n++) {
								processAll(n);//closure
							}
						}, 3400);
					});
				});
			};

			$scope.fireSkills();
		
			//prevents bots from spamming my email/phone
			var loadContact = function() {
				var phone = '336-602-3121',
				phoneDiv = $document[0].querySelectorAll('.insert-phone'),
				user = 'scottmurphy1111',
				domain = 'gmail.com',
				emailDiv = $document[0].querySelectorAll('.insert-email');

				phoneDiv[0].innerHTML = '<a href="tel:' + phone + '">' + phone + '</a>';
				emailDiv[0].innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
			};

			loadContact();

			//updates my experience year amount
			$timeout(function() {
				var setDate = $document[0].querySelectorAll('.experience-time'),
				calcDate = new Date().getFullYear() - 2009;

				setDate[0].innerHTML = calcDate;
			}, 1000);
	

		};

		//close project modal
		portfolio.closeModal = function() {
			$document[0].querySelectorAll('.modal-window')[0].classList.remove('show');
			
			$timeout(function() {
				$document[0].querySelectorAll('.modal-overlay')[0].classList.remove('show');
			}, 100);
		};

		portfolio.showContent = function(index) {
			var codeLinks = $document[0].querySelectorAll('.third-panel .code-link'),
			clicked = codeLinks[index],
			contentAll = $document[0].querySelectorAll('.third-panel .content'),
			clickedContent = clicked.nextElementSibling;

			if(clickedContent.classList.contains('show')) {
				for(var i = 0; i < contentAll.length; i++) {
					contentAll[i].classList.remove('show');
					codeLinks[i].classList.remove('is-open');
				}

				clickedContent.classList.remove('show');
			} else {
				for(var n = 0; n < contentAll.length; n++) {
					codeLinks[n].classList.remove('is-open');
					contentAll[n].classList.remove('show');
				}

				clicked.classList.add('is-open');
				clickedContent.classList.add('show');
			}
			
		};

		//set project jsfiddle var
		portfolio.chosenTemplate = "app/components/portfolio/modal-templates/creditwise.html";

	
		//get Stack Overflow reputation/badge count using API
		$scope.totalSoRep = 0;
		$scope.totalSoBadges = 0;
	
		$http({
			method: 'GET',
			url: 'http://api.stackexchange.com/2.2/users/5711949/?site=stackoverflow'
		})
		.then(function successCallback(response) {
			var allItems = response.data.items[0],
			badgeCounts = allItems.badge_counts;
			
			$scope.totalSoRep = allItems.reputation;

			//loop through badge_counts object
			Object.keys(badgeCounts).forEach(function(badge) {
			$scope.totalSoBadges += badgeCounts[badge];
			});   
			
		}, function errorCallback(response) {
			throw new Error("Error" + response);
		});

		$scope.panelTitles = [];
		$scope.content = [];
		$scope.skills = [];
		$scope.coding = [];
		$scope.about = [];
		$scope.specialNote = '';
		$scope.socials = [];
		$scope.projects = [];
		
		contentFactory.then(function(response) {
			$scope.panelTitles = response.data[0].content[0].panelTitles[0];
			$scope.content = response.data[0].content[0];
			$scope.skills = response.data[0].content[0].skills;
			$scope.coding = response.data[0].content[0].coding;
			$scope.about = response.data[0].content[0].about;
			$scope.specialNote = response.data[0].content[0].contact[0].specialNote[0].description;
			$scope.socials = response.data[0].content[0].contact[0].socials;
			$scope.projects = response.data[0].content[0].projects;
			console.log('service skills', $scope.skills);
		});
	}
})();