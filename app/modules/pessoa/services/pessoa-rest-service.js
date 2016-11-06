(function(){
    'use strict';
    angular
        .module('pessoa.services')
        .service('PessoaRestService', PessoaRestService);

    function PessoaRestService(Restangular, Endpoint){
        var service = this;
        var endPoint = Endpoint.one('pessoa');

        service.alterar = alterar;
        service.consultar = consultar;
        service.deletar = deletar;
        service.inserir = inserir;
        service.listaPerfis = listaPerfis;

        ///////////////////
        function alterar(pessoa){
            return Endpoint.one('pessoa', pessoa.id).customPUT(pessoa);
        }
        function consultar(dto){
            return endPoint.post('consultar', dto);
        }
        function deletar(pessoa){
            return endPoint.customDELETE(pessoa.id);
        }
        function inserir(pessoa){
            return Endpoint.one('pessoa').customPUT(pessoa);
        }
        function listaPerfis(){
            return Endpoint.one('owner').customGET('profile');
        }

    }

})();
