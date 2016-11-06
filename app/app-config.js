(function(){
    'use strict';

    angular
        .module('app')
        .config(configApp)
        .run(configRunApp);

    /* @ngInject */
    function configApp($animateProvider, $httpProvider, $cookiesProvider, RestangularProvider, $urlRouterProvider, toastrConfig, $translateProvider, $ocLazyLoadProvider){
        $animateProvider.classNameFilter(/^(?:(?!ng-animate-disabled).)*$/);

        $httpProvider.defaults.useXDomain = true;
        $cookiesProvider.defaults.path = '/';
        RestangularProvider.setDefaultHttpFields({
            withCredentials: true
        });
        //RestangularProvider.setBaseUrl('http://localhost:8080/app/rest/');
        RestangularProvider.setBaseUrl('http://www.app.com.br/app/rest/');
        RestangularProvider.setDefaultHeaders({'Content-Type': 'application/json'});
        $httpProvider.interceptors.push('JwtHttpInterceptor');
        $httpProvider.interceptors.push('HttpInterceptorService');

        $urlRouterProvider.otherwise('/public/login/entrar');

        $ocLazyLoadProvider.config({
            debug: false
        });

        $translateProvider.useStaticFilesLoader({
            files: [
            {
                prefix: 'language/',
                suffix: '.json'
            }]
        });
        $translateProvider.preferredLanguage('pt-BR');

        angular.extend(toastrConfig, {
            autoDismiss: true,
            closeButton: true,
            containerId: 'toast-container',
            maxOpened: 0,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body'
      });
    }

    /* @ngInject */
    function configRunApp(HttpListenerService){
        HttpListenerService.setUpHttpListeners();
    }
})();
