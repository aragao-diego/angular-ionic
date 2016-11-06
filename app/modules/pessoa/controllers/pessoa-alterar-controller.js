(function(){
    'use strict';
    angular
        .module('pessoa.controllers')
        .controller('PessoaAlterarController', PessoaAlterarController);

    /*@ngInject*/
    function PessoaAlterarController($scope, $ocLazyLoad, pessoa, $state, PessoaCadastroUtilsService, UsuarioService, AlertsService, tipoUsuarios) {
        var vm = this;

        vm.labels = {};
        vm.listaPerfis = listaPerfis.plain();
        vm.listaTipoTelefones = PessoaCadastroUtilsService.listaTipoTelefones;
        vm.ufs = [];

        vm.adicionarTelefone = adicionarTelefone;
        vm.deletarTelefone = deletarTelefone;
        vm.salvar = alterar;
        vm.voltar = voltar;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from PessoaAlterarController!');
            vm.labels = {
                salvar: 'Alterar',
                voltar: 'Voltar'
            };
            vm.ufs = PessoaCadastroUtilsService.ufs();
            vm.pessoa = pessoa;
        }
        function alterar(){
            UsuarioService
                .alterar(usuario)
                .then(
                    function(success){
                        AlertsService.success('Usuário '+usuario.email+'('+usuario.nome+') alterado com sucesso!');
                        $state.go('^.consultar');
                    },
                    function(error){
                        AlertsService.error('Houve algum problema ao inserir o usuário!');
                    }
                );
        }
        function voltar(){
            $state.go('^.consultar');
        }
    }
})();
