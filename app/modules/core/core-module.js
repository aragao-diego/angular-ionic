(function(){
    "use strict";

    angular.module('core.controllers', [] );
    angular.module('core.services', [] );
    angular.module('core.routes', [] );
    angular.module('core.directives', [] );
    angular.module('core.filters', [] );

    angular.module('core', [
        'core.controllers',
        'core.services',
        'core.routes',
        'core.directives',
        'core.filters'
    ]);
})();
