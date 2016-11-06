(function(){
    'use strict';
    angular
        .module('core.services')
        .factory('AutenticacaoEnpoint', AutenticacaoEnpoint);

    /* @ngInject */
    function AutenticacaoEnpoint(Restangular){
        return Restangular.withConfig(function(RestangularConfigurer) {
            //RestangularConfigurer.setBaseUrl('http://localhost:8080/app/rest/');
            //RestangularConfigurer.setBaseUrl('http://www.com.br/app/rest/');
        });
    }
})();
