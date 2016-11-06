(function(){
    'use strict';
    angular
        .module('app')
        .factory('HttpInterceptorService', HttpInterceptorService);

    /* @ngInject */
    function HttpInterceptorService($q, $rootScope) {
        return {
            'request': function(config) {
                return config;
            },
            'requestError': function(rejection) {
                return $q.reject(rejection);
            },
            'response': function(response) {
                return response;
            },
            'responseError': function(rejection) {
                if(rejection.status != 200 ){
                    $rootScope.$broadcast('HTTP_'+rejection.status, rejection);
                }
                return $q.reject(rejection);
            }
        };
    }
})();
