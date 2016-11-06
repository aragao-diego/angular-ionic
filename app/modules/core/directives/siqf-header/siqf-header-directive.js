(function(){
    'use strict';
    angular
        .module('core.directives')
        .directive('appHeader', appHeaderDirective);

    /* @ngInject */
    function appHeaderDirective(){
        return {
            controller: 'SiqfHeaderController',
            restrict: 'E',
            templateUrl: 'modules/core/directives/app-header/app-header-view.html',
            link: link
        };
    }
    //////////////////////

    function link($scope, element, $attrs){
        console.log('Hello from appHeaderDirective->link()');
    }
})();
