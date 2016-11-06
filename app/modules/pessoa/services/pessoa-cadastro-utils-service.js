(function(){
    'use strict';
    angular
        .module('pessoa.services')
        .service('PessoaCadastroUtilsService', PessoaCadastroUtilsService);

    function PessoaCadastroUtilsService(Restangular, EnderecoRestService, PessoaRestService, Model){
        var service = this;


        service.listaTipoTelefones = new Model('Telefone').tipos();

        service.adicionarTelefone = adicionarTelefone;
        service.deletarTelefone = deletarTelefone;
        service.ufs = ufs;

        ///////////////////
        function adicionarTelefone(vm, telefone){
            vm.pessoa.adicionarTelefone(angular.copy(telefone));
            vm.novoTelefone = new Model('Telefone');
        }
        function deletarTelefone(vm, index){
            vm.pessoa.deletarTelefone(index);
        }
        function ufs(){
            return new Model('Uf').ufs();
        }
    }

})();
