(function(){
    "use strict";

    angular.module('usuario-logado.filters', []);
    angular.module('usuario-logado.controllers', []);
    angular.module('usuario-logado.directives', []);
    angular.module('usuario-logado.services', []);
    angular.module('usuario-logado.routes', []);
    angular.module('usuario-logado.test', [] );

    angular
    .module('usuario-logado', [
        'usuario-logado.filters',
        'usuario-logado.directives',
        'usuario-logado.services',
        'usuario-logado.routes',
		'usuario-logado.controllers'
    ]);
})();
