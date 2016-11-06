(function(){
    'use strict';
    angular
        .module('menu.services')
        .service('MenuService', MenuService);

    /* @ngInject */
    function MenuService($state, AutenticacaoEnpoint){
        var service = this;

        service.items = [
            {
                action: function(){ $state.go('private.fornecedor.consultar'); },
                icon: 'fa-folder-open-o',
                texto: 'Fornecedores'
            },
            {
                action: function(){ $state.go('private.pessoa.consultar'); },
                icon: 'fa-users',
                texto: 'Usuários'
            }

            /*{
                action: function(){
                    AutenticacaoEnpoint
                        .one('auth')
                        .customGET('forbiden');
                },
                icon: 'fa-users',
                texto: 'Teste Permissão'
            },
            {
                action: function(){
                    AutenticacaoEnpoint
                        .one('auth')
                        .customGET('erro');
                },
                icon: 'fa-users',
                texto: 'Teste Negócio Exception'
            }*/
        ];

        //////////////////////
    }
})();
