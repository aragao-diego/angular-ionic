(function(){
    'use strict';

    angular
        .module('core.routes')
        .config(config);

    /* @ngInject */
    function config($ocLazyLoadProvider, $stateProvider, $urlRouterProvider){
        var MODULE_PATH = 'modules/core/';
        $ocLazyLoadProvider.config({
            modules: [
                {
                    name: 'core.alerts',
                    files: [
                        MODULE_PATH+'services/alerts-service.js'
                    ]
                },
                {
                    name: 'core',
                    files: [
                        MODULE_PATH+'services/http-listener-service.js',
                        MODULE_PATH+'services/builder-service.js',
                        MODULE_PATH+'services/model-service.js',
                        MODULE_PATH+'services/rest-service.js',
                        MODULE_PATH+'directives/custom-validator-messages/custom-validator-messages-directive.js',
                        MODULE_PATH+'directives/custom-validator/custom-validator-directive.js',
                        MODULE_PATH+'services/endpoint-service.js',
                        MODULE_PATH+'directives/paginacao/paginacao-directive.js',
                        MODULE_PATH+'services/dto-service.js',
                        MODULE_PATH+'services/application-service.js'
                    ]
                },
                {
                    name: 'core.autenticacao',
                    files: [
                        MODULE_PATH+'services/autenticacao-endpoint-service.js',
                        MODULE_PATH+'services/autenticacao-service.js',
                        MODULE_PATH+'services/session-user-service.js'
                    ]
                },
                {
                    name: 'core.dto',
                    files: [
                        MODULE_PATH+'services/dto-service.js'
                    ]
                },
                {
                    name: 'core.header',
                    files: [
                        MODULE_PATH+'directives/app-header/app-header-controller.js',
                        MODULE_PATH+'directives/app-header/app-header-directive.js'
                    ]
                },
                {
                    name: 'core.user-menu',
                    files: [
                        MODULE_PATH+'directives/user-menu/user-menu-controller.js',
                        MODULE_PATH+'directives/user-menu/user-menu-directive.js'
                    ]
                }
            ]
        });
    }
})();
