(function(){
    'use strict';

    angular
        .module('public.routes')
        .config(config);

    /* @ngInject */
    function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        var STATE_PATH = 'public';
        var MODULE_PATH = 'modules/public/';

        $stateProvider
            .state(STATE_PATH, {
                url: '/public',
                abstract: true,
                controller: 'PublicController',
                controllerAs: 'publicCtrl',
                templateUrl: MODULE_PATH+'views/public-view.html',
                resolve:  {                    
                }
            });
    }
})();
