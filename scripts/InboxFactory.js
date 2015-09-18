angular.module('myApp')
    .factory('InboxFactory', ['$q', '$http', '$location', function($http,$q,$location) {
        var exports = {};
        exports.messages = [];
        
        exports.goToMessage = function(id) {
            if (angular.isNumber(id)) {
                
            }
        }
        
        exports.deleteMessage = function(id, index) {
            this.messages.splice(index,1);
        }
        
        exports.getMessages = function() {
            var deferred = $q.defer();
            $http.get('/json/emails.json')
                .success(function(data) {
                    exports.messages = data;
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
                return deferred.promise;
            };
    }]);
