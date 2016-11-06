(function(){
    'use strict';
    angular
        .module('pessoa.controllers')
        .controller('PessoaController', PessoaController);

    /*@ngInject*/
    function PessoaController($scope, $ocLazyLoad, ApplicationService) {
        var vm = this;

        ApplicationService.setTittle("Gerenciar Usuários");

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from PessoaController!');
        }
    }
})();
