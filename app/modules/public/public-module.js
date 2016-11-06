(function(){
    "use strict";

    angular.module('public.filters', []);
    angular.module('public.controllers', []);
    angular.module('public.directives', []);
    angular.module('public.services', []);
    angular.module('public.routes', []);
    angular.module('public.test', [] );

    angular
    .module('public', [
        'public.filters',
        'public.directives',
        'public.services',
        'public.routes',
		'public.controllers'
    ]);
})();
