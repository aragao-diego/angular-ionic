(function(){
    'use strict';
    angular
        .module('app')
        .service('AlertsService', AlertsService);

    /* @ngInject */
    function AlertsService(toastr){
        var service = this;

        service.error = error;
        service.success = success;


        ////////////////////
        function error(message, title){
            return toastr.error(message, title);
        }
        function success(message, title){
            return toastr.success(message, title);
        }
    }
})();
