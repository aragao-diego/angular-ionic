(function(){
    'use strict';

    angular
        .module('core.directives')
        .directive('customValidator', customValidatorDirective );

    /* @ngInject */
    function customValidatorDirective(){
        return {
            restrict: 'A',
            require:['ngModel','^form'],
            scope: {
                validateValues:'=validateValues'
            },
            compile: function (elem, attrs) {
                return {
                    pre: function(scope, element, attrs, controllers){
                    },
                    post: function(scope, element, attrs, controllers){
                        var ngModel = controllers[0];
                        scope.form  = controllers[1];

                        if( !attrs.disabled ){
                            angular.forEach(scope.validateValues, function(validateFunction, labelErro){
                                console.log(validateFunction, labelErro);
                                ngModel.$validators.labelErro = validateFunction;
                            });
                        }
                    }
                };
            }
        };
    }
})();
