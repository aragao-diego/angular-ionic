(function(){
    "use strict";

    angular.module('menu.filters', []);
    angular.module('menu.controllers', []);
    angular.module('menu.directives', []);
    angular.module('menu.services', []);
    angular.module('menu.routes', []);
    angular.module('menu.test', [] );

    angular
    .module('menu', [
        'menu.filters',
        'menu.directives',
        'menu.services',
        'menu.routes',
		'menu.controllers'
    ]);
})();
