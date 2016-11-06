(function(){
    'use strict';
    angular
        .module('pessoa.controllers')
        .controller('PessoaInserirController', PessoaInserirController);

    /*@ngInject*/
    function PessoaInserirController($scope, $ocLazyLoad, Model, $state, PessoaCadastroUtilsService, AlertsService, PessoaRestService, listaPerfis, PessoaBuilder) {
        var vm = this;


        vm.labels = {};
        vm.listaPerfis = listaPerfis.plain();
        vm.listaTipoTelefones = PessoaCadastroUtilsService.listaTipoTelefones;
        vm.ufs = [];
        vm.pessoa = {};

        vm.adicionarTelefone = adicionarTelefone;
        vm.deletarTelefone = deletarTelefone;
        vm.isEditable = true;
        vm.salvar = salvar;
        vm.voltar = voltar;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from UsuarioInserirController!');
            vm.labels = {
                salvar: 'Salvar',
                voltar: 'Voltar'
            };
            PessoaCadastroUtilsService.ufs().then(function(ufs){
              vm.ufs = ufs.plain();
            });
            vm.pessoa = new PessoaBuilder()
                .build();
        }
        function adicionarTelefone(telefone){
            return PessoaCadastroUtilsService.adicionarTelefone(vm, telefone);
        }
        function deletarTelefone(index){
            PessoaCadastroUtilsService.deletarTelefone(vm, index);
        }
        function salvar(){

            $scope.pessoaCadastro['pessoa-telefones'].$setValidity('pelo-menos-um', vm.pessoa.temTelefone());


            if( $scope.pessoaCadastro.$valid ){
                console.log('salvar');

                //vm.pessoa.adicionarEndereco(vm.novoEndereco);
                vm.pessoa
                    .inserir()
                    .then(
                        function(success){
                            AlertsService.success('Pessoa '+vm.pessoa.email+'('+vm.pessoa.nome+') inserido com sucesso!');
                            $state.go('^.consultar');
                        }
                    );

            }
            /*UsuarioService
                .inserir(usuario)
                .then(
                    function(success){
                        AlertsService.success('Usuário '+usuario.email+'('+usuario.nome+') inserido com sucesso!');
                        $state.go('^.consultar');
                    },
                    function(error){
                        AlertsService.error('Houve algum problema ao inserir o usuário!');
                    }
                );
            */
            return true;
        }
        function validaTelefone(model,view){
            console.log(model, view);
            return true;
        }
        function voltar(){
            $state.go('^.consultar');
        }
    }
})();
