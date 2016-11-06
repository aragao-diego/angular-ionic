(function(){
    'use strict';

    angular
        .module('core.directives')
        .directive('paginacao', paginacaoDirective );

    /* @ngInject */
    function paginacaoDirective(){
        return {
            restrict: 'E',
            // require: ['ngModel'],
            templateUrl: 'modules/core/directives/paginacao/paginacao-view.html',
            scope: {
                dto:"=",
                updateList:'&updateList'
            },
            replace: true,
            compile: function (elem, attrs) {
                return {
                    pre: function(scope, element, attrs, controllers){
                        //scope.dto = controllers[0];
                    },
                    post: function(scope, element, attrs, controllers){
                    }
                };
            }
        };
    }
})();
