
(function(){
    'use strict';
    angular
        .module('core.services')
        .factory('Model', Model);

    /* @ngInject */
    function Model($injector){
        return function(model, instance){
            return $injector.get(model)(instance);
        };
    }
})();
