(function(){
    'use strict';
    angular
        .module('core.services')
        .service('AutenticacaoService', AutenticacaoService);

    /* @ngInject */
    function AutenticacaoService(AutenticacaoEnpoint, JwtService, $q, SessionUser){
        var service = this;

        service.getUser = getUser;
        service.hasToken = hasToken;
        service.login = login;
        service.logout = logout;

        ////////////////////
        function getUser(){
            return AutenticacaoEnpoint
                .one('auth')
                .customGET('user');
        }
        function hasToken(){
            return JwtService.isValidToken();
        }
        function login(usuario, senha) {
            var retorno = $q.defer();
            var header = JwtService.encodePassword(usuario, senha);
            header['X-Requested-With'] = 'XMLHttpRequest';

            AutenticacaoEnpoint
                .one('auth')
                .withHttpConfig(JwtService.getSkipAuthorizationHeaderConfig())
                .customPOST('', undefined, undefined, header)
                .then(function(result){
                    JwtService.saveToken(result.authctoken);
                    retorno.resolve();
                }, function(error){
                    retorno.reject();
                });

            return retorno.promise;
        }

        function logout(){
            var logout = $q.defer();
            AutenticacaoEnpoint
                .one('auth')
                .customGET('logout')
                .then(
                    function(){
                        JwtService.deleteToken();
                        logout.resolve();
                    },
                    function(){
                        JwtService.deleteToken();
                        logout.reject();
                    }
                );

            return logout.promise;
        }

    }
})();
