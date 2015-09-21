angular.module('myApp')
    .controller('InboxCtrl', ['$scope', 'InboxFactory', function($scope, InboxFactory) {
        InboxFactory.getMessages()
            .success(function(data, status) {
                console.log('The request was successful', status, data);
                $scope.emails = data;
            });
    }]);
    