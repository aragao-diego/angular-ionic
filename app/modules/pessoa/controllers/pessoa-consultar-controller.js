(function(){
    'use strict';
    angular
        .module('pessoa.controllers')
        .controller('PessoaConsultarController', PessoaConsultarController);

    /*@ngInject*/
    function PessoaConsultarController($scope, $state, Model, DTO, $uibModal, $ocLazyLoad, AlertsService) {
        var vm = this;

        vm.campos = [];
        vm.dto = {};
        vm.pessoas = [];

        vm.consultar = consultar;
        $scope.consultar = consultar;
        vm.editarPessoa = editarPessoa;
        vm.deletarPessoa = deletarPessoa;
        vm.visualizarPessoa = visualizarPessoa;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from PessoaConsultarController!');


            vm.campos = [
                {
                    titulo: 'Nome',
                    icone: ''
                },
                {
                    titulo: 'Email',
                    icone: ''
                },
                {
                    titulo: 'CPF',
                    icone: ''
                },
                {
                    titulo: 'Perfil',
                    icone: ''
                },
                {
                    titulo: 'Ações',
                    icone: 'fa-cogs'
                }
            ];
            vm.dto = new DTO();


            consultar();
        }
        function consultar(){
            new Model('Pessoa').consultar(vm.dto).then(function(resultado){
                vm.dto.update(resultado);
                vm.pessoas = _.map(resultado.list, function(pessoa){ return angular.merge(new Model('Pessoa'), pessoa);});
            });
        }

        function editarPessoa(pessoa){
            $state.go('^.alterar', {pessoa: pessoa});
        }
        function deletarPessoa(pessoa){
            var modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'modules/pessoa/views/pessoa-deletar-view.html',
                controller: 'PessoaDeletarController',
                controllerAs: 'vm',
                resolve: {
                    pessoa: pessoa,
                    controller: $ocLazyLoad.load('pessoa.deletar')
                }
            });
            modalInstance.result.then(function(pessoa){
                pessoa
                    .deletar()
                    .then(
                        function(resultado){
                            AlertsService.success('Usuário '+ pessoa.email + ' deletado com sucesso!');
                            _.remove(vm.pessoas, {
                                id: pessoa.id
                            });
                        }
                    );
            });
        }
        function visualizarPessoa(pessoa){
            $state.go('^.visualizar', {pessoa: pessoa});
        }
    }
})();
