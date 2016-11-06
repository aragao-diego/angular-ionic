(function(){
    'use strict';
    angular
        .module('core.directives')
        .controller('SiqfHeaderController', SiqfHeaderController);

    /*@ngInject*/
    function SiqfHeaderController($scope, $ocLazyLoad) {
        var vm = this;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from SiqfHeaderController!');
        }
    }
})();
