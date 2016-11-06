(function(){
    'use strict';
    angular
        .module('app')
        .service('HttpListenerService', HttpListenerService);

    /* @ngInject */
    function HttpListenerService($rootScope, AlertsService, JwtService, $state) {
        var service = this;

        service.setUpHttpListeners = setUpHttpListeners;

        ///////////////

        function setUpHttpListeners(){
            $rootScope.$on('HTTP_400', http400Listener);
            $rootScope.$on('HTTP_401', http401Listener);
            $rootScope.$on('HTTP_403', http403Listener);
        }
        function http400Listener($event, rejection){
            if(rejection.data && rejection.data.erros){
                angular.forEach(rejection.data.erros, function(erro, index){
                    AlertsService.error(erro.msg);
                });
            }
        }
        function http401Listener(rejection){
            JwtService.deleteToken();
            AlertsService.error('Sessão expirada, realize o login novamente');
            $state.go('public.login.entrar');
        }
        function http403Listener(rejection){
            AlertsService.error('Você tentou executar um recurso sem a permissão necessária');
        }
    }
})();
