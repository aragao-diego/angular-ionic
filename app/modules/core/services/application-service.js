(function(){
    'use strict';
    angular
        .module('core.services')
        .service('ApplicationService', ApplicationService);

    /* @ngInject */
    function ApplicationService(){
        var service = angular.merge(this, {state:{tittle:""}});

        service.setTittle = setTittle;

        ///////////////////////////

        function setTittle(title){
            service.state.tittle = title;
        }
    }
})();
