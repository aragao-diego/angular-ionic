(function(){
    'use strict';
    angular
        .module('menu.controllers')
        .controller('MenuController', MenuController);

    /*@ngInject*/
    function MenuController($scope, $ocLazyLoad, AutenticacaoEnpoint, MenuService) {
        var vm = this;

        vm.items = [];

        $scope.testeForbidden = function(){

            AutenticacaoEnpoint
                .one('auth')
                .customGET('forbiden');

        };
        $scope.testeError = function(){

            AutenticacaoEnpoint
                .one('auth')
                .customGET('erro');

        };


        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from MenuController!');

            vm.items = MenuService.items;
        }
    }
})();
