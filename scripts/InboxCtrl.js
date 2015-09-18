angular.module('myApp')
	.controller('InboxCtrl', ['$scope', 'InboxFactory', function($scope, InboxFactory) {
		$scope.title = "This is a title";
		InboxFactory.getMessages()
			.success(function(data, status) {
				console.log('The request was successful', status, data);
				$scope.emails = data;
			})
	}]);