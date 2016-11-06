(function(){
    'use strict';
    angular
        .module('core.services')
        .service('Endpoint', Endpoint);

    /* @ngInject */
    function Endpoint(Restangular){
        return Restangular.withConfig(function(RestangularConfigurer) {
                //RestangularConfigurer.setPlainByDefault(true);
        });
    }
})();
