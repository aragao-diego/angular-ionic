(function(){
    'use strict';

    angular
        .module('app')
        .service('UiRouterInterceptor', UiRouterInterceptor);

    /* @ngInject */
    function UiRouterInterceptor($rootScope){
        var service = this;

        var onStart;
        var onError;
        var onSuccess;
        var onNotFound;
        var onDestroy;

        service.listOfModules = [];
        service.getModules = getModules;

        service.clear = clear;
        service.setUp = setUp;
        service.tearDown = tearDown;

        ///////////
        function setUp(){
            onStart = $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
                var states = toState.name.split('.');
                generateModules(states);
            });

            onError = $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
                service.clear();
            });

            onSuccess = $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
                service.clear();
            });

            onNotFound = $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){

            });
        }

        function clear(){
            service.listOfModules = [];
        }
        function generateModules(states){
        }
        function getModules(){
            return service.listOfModules;
        }

        function tearDown(){
            onStart();
            onError();
            onSuccess();
            onNotFound();
        }
    }


})();
