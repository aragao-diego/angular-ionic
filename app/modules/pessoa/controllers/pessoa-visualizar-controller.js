(function(){
    'use strict';
    angular
        .module('pessoa.controllers')
        .controller('PessoaVisualizarController', PessoaVisualizarController);

    /*@ngInject*/
    function PessoaVisualizarController($scope, $ocLazyLoad, pessoa, $state, PessoaCadastroUtilsService, listaPerfis) {
        var vm = this;

        vm.labels = {};
        vm.listaPerfis = listaPerfis;
        vm.ufs = [];
        vm.pessoa = {};
        vm.isEditable = false;

        vm.salvar = salvar;
        vm.voltar = voltar;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from UsuarioVisualizarController!');
            vm.labels = {
                salvar: 'Alterar',
                voltar: 'Voltar'
            };
            PessoaCadastroUtilsService.ufs().then(function(result){
                vm.ufs = result;
            });
            console.log(pessoa);
            vm.pessoa = angular.copy(pessoa);
        }
        function salvar(){

        }
        function voltar(){
            $state.go('^.consultar');
        }
    }
})();
