(function(){
    'use strict';

    angular
        .module('pessoa.routes')
        .config(config);

    /* @ngInject */
    function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        var STATE_PATH = 'private.pessoa';
        var MODULE_PATH = 'modules/pessoa/';

        $stateProvider
            .state(STATE_PATH, {
                url: '/pessoa',
                abstract: false,
                controller: 'PessoaController',
                controllerAs: 'pessoaCtrl',
                templateUrl: MODULE_PATH+'views/pessoa-view.html',
                resolve:  {
                    /* @ngInject */
                    'listaPerfis': function(PessoaRestService){
                        return PessoaRestService.listaPerfis();
                    }
                }
            })
            .state(STATE_PATH+'.consultar', {
                url: '/consultar',
                abstract: false,
                controller: 'PessoaConsultarController',
                controllerAs: 'vm',
                templateUrl: MODULE_PATH+'views/pessoa-consultar-view.html',
                resolve:  {

                }
            })
            .state(STATE_PATH+'.inserir', {
                url: '/inserir',
                abstract: false,
                controller: 'PessoaInserirController',
                controllerAs: 'vm',
                templateUrl: MODULE_PATH+'views/pessoa-cadastro-view.html',
                resolve:  {

                }
            })
            .state(STATE_PATH+'.alterar', {
                url: '/alterar/:id',
                abstract: false,
                controller: 'PessoaAlterarController',
                controllerAs: 'vm',
                templateUrl: MODULE_PATH+'views/pessoa-cadastro-view.html',
                resolve:  {
                    /* @ngInject */
                    pessoa: function($stateParams){
                        return $stateParams.pessoa;
                    }
                },
                params:{
                    pessoa: {},
                    id: null
                }
            })
            .state(STATE_PATH+'.visualizar', {
                url: '/visualizar/:id',
                abstract: false,
                controller: 'PessoaVisualizarController',
                controllerAs: 'vm',
                templateUrl: MODULE_PATH+'views/pessoa-cadastro-view.html',
                resolve:  {

                    /* @ngInject */
                    pessoa: function($stateParams){
                        return $stateParams.pessoa;
                    }
                },
                params:{
                    pessoa: {},
                    id: null
                }
            });


        
    }
})();
