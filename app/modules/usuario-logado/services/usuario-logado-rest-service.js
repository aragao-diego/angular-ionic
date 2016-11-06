(function(){
    'use strict';
    angular
        .module('usuario-logado.services')
        .service('UsuarioLogadoRestService', UsuarioLogadoRestService);

    /* @ngInject */
    function UsuarioLogadoRestService(Restangular){
        var service = this;
        var endPoint = Restangular.one('usuario');
        ///////////////////
    }

})();
