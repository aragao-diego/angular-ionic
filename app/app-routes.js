(function(){
    'use strict';

    angular
        .module('app.routes')
        .config(configRoutes);

    /* @ngInject */
    function configRoutes($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            controller: 'AppController',
            controllerAs: 'appCtrl',
            templateUrl: 'app-view.html',
            resolve:  {
            },
            /* @ngInject */
            onEnter: function($state, UiRouterInterceptor){
                //UiRouterInterceptor.setUp();
            }
        });
    }
})();
