(function(){
    'use strict';
    angular
        .module('menu.directives')
        .directive('menu', MenuDirective);

    /* @ngInject */
    function MenuDirective(MenuService){
        return {
            controller: 'MenuController',
            controllerAs: 'menu',
            restrict: 'E',
            templateUrl: 'modules/menu/views/menu-view.html',
            link: link,
            bindToController: true
        };
    }
    //////////////////////

    function link($scope, element, $attrs){
        console.log('Hello from MenuDirective->link()');
    }
})();
