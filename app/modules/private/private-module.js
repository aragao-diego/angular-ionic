(function(){
    "use strict";

    angular.module('private.filters', []);
    angular.module('private.controllers', []);
    angular.module('private.directives', []);
    angular.module('private.services', []);
    angular.module('private.routes', []);
    angular.module('private.test', [] );

    angular
    .module('private', [
        'private.filters',
        'private.directives',
        'private.services',
        'private.routes',
		'private.controllers'
    ]);
})();
