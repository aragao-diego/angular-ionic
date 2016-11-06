(function(){
    "use strict";

    angular.module('app.filters', []);
    angular.module('app.controllers', []);
    angular.module('app.directives', []);
    angular.module('app.services', []);
    angular.module('app.routes', ['ui.router', 'oc.lazyLoad']);
    angular.module('app.test', ['restangular', 'ui.router', 'oc.lazyLoad', 'ui.bootstrap', 'toastr'] );

    angular
    .module('app', [
        'app.filters',
        'app.directives',
        'app.services',
        'app.routes',
		'app.controllers',
		'app.test',

        'core',
        'public',
        'private',
        'login',
        'menu',
        'pessoa',
        'usuario-logado',

        'ui.mask',
        'pascalprecht.translate',
        'ngMessages',
        'ngCookies',
        'ngStorage',
        'angular-jwt',
        'da-jwtauth'
    ]);
})();
