(function(){
    'use strict';
    angular
        .module('core.directives')
        .controller('UserMenuController', UserMenuController);

    /*@ngInject*/
    function UserMenuController($scope, $ocLazyLoad, SessionUser) {
        var vm = this;

        vm.user = SessionUser;

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from UserMenuController!');
        }
    }
})();
