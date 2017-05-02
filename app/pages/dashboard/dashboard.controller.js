(function () {
	'use strict';

	angular
		.module('App')
		.controller('DashboardController', DashboardController);

	DashboardController.$inject = ['$scope', '$ionicPopup', 'Modals', 'Model'];
	function DashboardController($scope, $ionicPopup, Modals, Model) {
		console.log("called LoginController");
		$scope.users = [];

		$scope.HelloWorld = function () {
			$ionicPopup.alert({
				title: 'Hello World',
				template: '<h1>This is the best template to start with Ionic Framework!</h1>',
     		cssClass: 'animated bounceInDown'
			});
		};
		
		$scope.showUsers = function () {
			Model.Users.getAll().then(function (users) {
				$scope.users = angular.copy(users);
			});
			Modals.openModal($scope, 'templates/modals/users.html', 'animated rotateInDownLeft');
		};
		
		$scope.closeModal = function () {
			Modals.closeModal();
			$scope.users = [];
		};
		
		//Center content
		//1. http://codepen.io/mhartington/pen/gcHeL
		//2. http://codepen.io/anon/pen/meQJvp
	}
})();