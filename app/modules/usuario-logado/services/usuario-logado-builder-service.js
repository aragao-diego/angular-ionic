(function(){
    'use strict';
    angular
        .module('usuario-logado.services')
        .factory('UsuarioLogadoBuilder', UsuarioLogadoBuilder);

    /* @ngInject */
    function UsuarioLogadoBuilder(Usuario, Builder){
        return function(){
            var model = new UsuarioLogado();
            var builder = new Builder().createSetters(this, model);

            this.build = function(){
                return model;
            };
        };
    }
})();
