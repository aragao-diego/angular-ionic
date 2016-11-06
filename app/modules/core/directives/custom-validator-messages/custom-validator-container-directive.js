(function(){
    'use strict';
    angular
        .module('core.directives')
        .directive('customValidatorContainer', customValidatorContainerDirective );

    /* @ngInject */
    function customValidatorContainerDirective($compile){
        var DEFAULT_PREFIX = 'msg.error.';

        return {
            restrict: 'A',
            require:'',
            priority:1001, // compiles first
            terminal:true, // prevent lower priority directives to compile after it
            compile: function (elem, attrs) {
                elem.removeAttr('custom-validator-container'); // necessary to avoid infinite compile loop
                //elem.attr('ng-class', "{'has-error': true}");
                var fn = $compile(elem);
                return function(scope){
                    fn(scope);
                };
            }
        };
    }
})();
