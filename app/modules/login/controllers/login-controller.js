(function(){
    'use strict';
    angular
        .module('login.controllers')
        .controller('LoginController', LoginController);

    /*@ngInject*/
    function LoginController($scope, $ocLazyLoad) {
        var vm = this;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from LoginController!');
        }
    }
})();
