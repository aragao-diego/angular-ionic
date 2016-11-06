(function(){
    "use strict";

    angular.module('login.filters', []);
    angular.module('login.controllers', []);
    angular.module('login.directives', []);
    angular.module('login.services', []);
    angular.module('login.routes', []);
    angular.module('login.test', [] );

    angular
    .module('login', [
        'login.filters',
        'login.directives',
        'login.services',
        'login.routes',
		'login.controllers'
    ]);
})();
