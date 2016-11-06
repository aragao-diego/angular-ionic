(function(){
    'use strict';
    angular
        .module('app.controllers')
        .controller('AppController', AppController);

    /*@ngInject*/
    function AppController($scope, $ocLazyLoad, JwtService, $rootScope, HttpListenerService) {
        var vm = this;

        $scope.$validationContainer = function(ngForm, input){
            return { 'has-error': ngForm[input].$invalid && ngForm.$submitted };
        };

        init();
        //////////////////////////////////////////
        function init(){
            console.log('Hello from AppController!');

            //Configura a função de encriptar o password
            JwtService.encodePassword = function(user,password){
                return {"Authorization": "Basic " + btoa(user + ":" + password)};
            };
            //$ocLazyLoad.load('/assets/js/scripts.js');            
        }
    }

})();
