(function(){
    'use strict';
    angular
        .module('pessoa.services')
        .factory('PessoaBuilder', PessoaBuilder);

    /* @ngInject */
    function PessoaBuilder(Pessoa, Builder){
        return function(){
            var model = new Pessoa();
            var builder = new Builder().createSetters(this, model);

            this.build = function(){
                return model;
            };
        };
    }
})();
