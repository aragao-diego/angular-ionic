(function(){
    'use strict';
    angular
        .module('login.controllers')
        .controller('LoginEntrarController', LoginEntrarController);

    /*@ngInject*/
    function LoginEntrarController($scope, UsuarioBuilder, AutenticacaoService, $state, SessionUser, AlertsService) {
        var vm = this;
        vm.usuario = {};

        vm.login = login;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from LoginEntrarController!');
            vm.usuario = new UsuarioBuilder()
                //.comUserName('sauloesdras@gmail.com')
                //comPassword('123456')
                .build();
        }

        function login(){
            if(vm.usuario.isValid()){
                AutenticacaoService
                    .login(vm.usuario.userName, vm.usuario.password)
                    .then(function(success){
                        $state.go('private.fornecedor.consultar');
                    }, function(error){
                        AlertsService.error('Usuário/senha incorretos');
                    });
            }
        }
    }
})();
