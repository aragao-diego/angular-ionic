
(function(){
    'use strict';
    angular
        .module('core.services')
        .factory('RestService', RestService);

    /* @ngInject */
    function RestService($injector){
        return function(model){
            return $injector.get(model+'RestService')();
        };
    }
})();
