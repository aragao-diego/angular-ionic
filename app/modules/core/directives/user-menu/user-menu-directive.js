(function(){
    'use strict';
    angular
        .module('core.directives')
        .directive('userMenu', userMenuDirective);

    /* @ngInject */
    function userMenuDirective(){
        return {
            controller: 'UserMenuController',
            controllerAs: 'vm',
            restrict: 'E',
            templateUrl: 'modules/core/directives/user-menu/user-menu-view.html',
            link: link,
            replace: true
        };
    }
    //////////////////////

    function link($scope, element, $attrs){
        console.log('Hello from userMenuDirective->link()');
    }
})();
