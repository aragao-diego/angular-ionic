(function(){
    'use strict';

    angular
        .module('private.routes')
        .config(config);

    /* @ngInject */
    function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        var STATE_PATH = 'private';
        var MODULE_PATH = 'modules/private/';

        $stateProvider
            .state(STATE_PATH, {
                url: '/private',
                abstract: false,
                controller: 'PrivateController',
                controllerAs: 'privateCtrl',
                templateUrl: MODULE_PATH+'views/private-view.html',
                resolve:  {

                },
                /* @ngInject */
                onEnter: function(AutenticacaoService, $state, AlertsService, SessionUser){
                    // if(!AutenticacaoService.hasToken()){
                    //     AlertsService.error('Problema de autenticação');
                    //     $state.go('public.login.entrar');
                    // }
                    // if(!SessionUser.hasInfos){
                    //     AutenticacaoService
                    //         .getUser()
                    //         .then(function(userInfos){
                    //             SessionUser.setInfos(userInfos);
                    //         });
                    // }
                }
            });
    }
})();
