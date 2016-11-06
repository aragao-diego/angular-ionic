(function(){
    'use strict';

    angular
        .module('login.routes')
        .config(config);

    /* @ngInject */
    function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        var STATE_PATH = 'public.login';
        var MODULE_PATH = 'modules/login/';

        $stateProvider
            .state(STATE_PATH, {
                url: '/login',
                abstract: true,
                controller: 'LoginController',
                controllerAs: 'loginCtrl',
                templateUrl: MODULE_PATH+'views/login-view.html',
                resolve:  {

                }
            })
            .state(STATE_PATH+'.entrar', {
                url: '/entrar',
                abstract: false,
                controller: 'LoginEntrarController',
                controllerAs: 'vm',
                templateUrl: MODULE_PATH+'views/login-entrar-view.html',
                resolve:  {

                }
            })
            .state(STATE_PATH+'.logout', {
                url: '/logout',
                abstract: false,
                resolve:  {
                },
                /* @ngInject */
                onEnter: function(AutenticacaoService, AlertsService, $state, ApplicationService, SessionUser){
                    // AutenticacaoService
                    //     .logout()
                    //     .then(
                    //         function(){
                    //             ApplicationService.setTittle("");
                    //             SessionUser.resetInfos();
                    //             //AlertsService.success('Logout efetuado com sucesso!');
                    //             $state.go('public.login.entrar');
                    //         }
                    //     );
                }
            });
    }
})();
