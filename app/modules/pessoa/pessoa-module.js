(function(){
    "use strict";

    angular.module('pessoa.filters', []);
    angular.module('pessoa.controllers', []);
    angular.module('pessoa.directives', []);
    angular.module('pessoa.services', []);
    angular.module('pessoa.routes', []);
    angular.module('pessoa.test', [] );

    angular
        .module('pessoa', [
            'pessoa.filters',
            'pessoa.directives',
            'pessoa.services',
            'pessoa.routes',
    		'pessoa.controllers'
        ]);
})();
