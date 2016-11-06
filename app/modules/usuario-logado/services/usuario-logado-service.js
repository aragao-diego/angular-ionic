(function(){
    'use strict';
    angular
        .module('usuario-logado.services')
        .factory('UsuarioLogado', UsuarioLogado);

    /* @ngInject */
    function UsuarioLogado(){
        return function(){
            var usuario = {};

            usuario.nome = '';
            usuario.email = '';
            usuario.nomeEmpresa = '';
            usuario.permissoes = [];

            usuario.hasInfos = false;

            usuario.isValid = isValid;

            return usuario;
            ////////////////////
            function isValid(){
                return true;
            }
        };
    }
})();
