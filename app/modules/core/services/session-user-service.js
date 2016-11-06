(function(){
    'use strict';
    angular
        .module('core.services')
        .service('SessionUser', SessionUser);

    /* @ngInject */
    function SessionUser(UsuarioLogado){
        var service = angular.merge(this, new UsuarioLogado());

        service.setInfos = setInfos;
        service.resetInfos = resetInfos;

        ///////////////////////////

        function setInfos(userInfos){
            angular.merge(service, userInfos);
            service.hasInfos = true;
        }

        function resetInfos(){
            angular.merge(service, new UsuarioLogado());
            service.hasInfos = false;
        }
    }
})();
