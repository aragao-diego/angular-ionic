(function(){
    'use strict';
    angular
        .module('private.controllers')
        .controller('PrivateController', PrivateController);

    /*@ngInject*/
    function PrivateController($scope, $ocLazyLoad, ApplicationService) {
        var vm = this;

        vm.state = ApplicationService.state;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from PrivateController!');
            //$ocLazyLoad.load('/assets/js/scripts.js');
        }
    }
})();
