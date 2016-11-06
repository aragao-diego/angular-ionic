(function(){
    'use strict';
    angular
        .module('pessoa.controllers')
        .controller('PessoaDeletarController', PessoaDeletarController);

    /*@ngInject*/
    function PessoaDeletarController($scope, pessoa, $uibModalInstance) {
        var vm = this;

        vm.pessoa = {};

        vm.cancelar = cancelar;
        vm.deletar = deletar;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from PessoaDeletarController!');

            vm.pessoa = angular.copy(pessoa);
        }

        function cancelar(){
            $uibModalInstance.dismiss('cancel');
        }
        function deletar(){
            $uibModalInstance.close(vm.pessoa);
        }
    }
})();
