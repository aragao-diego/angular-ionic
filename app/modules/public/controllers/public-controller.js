(function(){
    'use strict';
    angular
        .module('public.controllers')
        .controller('PublicController', PublicController);

    /*@ngInject*/
    function PublicController($scope, $ocLazyLoad) {
        var vm = this;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from PublicController!');
        }
    }
})();
