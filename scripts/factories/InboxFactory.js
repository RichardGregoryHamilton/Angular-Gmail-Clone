angular.module('myApp')
    .factory('InboxFactory', ['$q', '$http', '$location', function($q,$http,$location) {
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
            return $http.get('json/emails.json')
                .success(function(data) {
                    exports.messages = data;
                    deferred.resolve(data);
                })
                .error(function(data) {
                    deferred.reject(data);
                });
                return deferred.promise;
            };
        
        return exports;
    }]);
