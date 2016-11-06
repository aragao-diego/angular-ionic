
(function(){
    'use strict';
    angular
        .module('core.services')
        .provider('ModelLoader', ModelLoader);

    /* @ngInject */
    function ModelLoader($ocLazyLoadProvider, $injector){

        this.get = function(model){
            var MODULE_PATH = 'modules/'+model+'/';
            return {
                name: ''+model+'.service',
                files: [
                    MODULE_PATH+'services/'+model+'-service.js',
                    MODULE_PATH+'services/'+model+'-rest-service.js',
                    MODULE_PATH+'services/'+model+'-builder-service.js',
                ]
            };
        };

        this.$get = function(){
            return function(model){
                return $injector.get(model)();
            };
        };

    }
})();
