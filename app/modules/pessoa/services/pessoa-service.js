(function(){
    'use strict';
    angular
        .module('pessoa.services')
        .factory('Pessoa', Pessoa);

    /* @ngInject */
    function Pessoa(Endereco, PessoaRestService, Uf, Usuario){
        return function(){
            var pessoa = {};

            pessoa.cpf = '';
            pessoa.email = '';
            // pessoa.endereco = new Endereco();
            pessoa.nome = '';
            pessoa.registro = '';
            pessoa.telefones = [];
            // pessoa.tipo = {};
            pessoa.orgaoRegistro = '';
            pessoa.ufRegistro = new Uf();
            pessoa.user = new Usuario();

            pessoa.adicionarTelefone = adicionarTelefone;
            pessoa.consultar = PessoaRestService.consultar;
            pessoa.deletar = deletar;
            pessoa.deletarTelefone = deletarTelefone;
            pessoa.isValid = isValid;
            pessoa.inserir = inserir;
            pessoa.temTelefone = temTelefone;



            return pessoa;
            ////////////////////
            function adicionarTelefone(telefone){
                pessoa.telefones.push(telefone);
            }
            function deletarTelefone(index){
                pessoa.telefones.splice(index, 1);
            }
            function isValid(){
                return true;
            }
            function inserir(){
                return PessoaRestService.inserir(pessoa);
            }
            function deletar(){
                return PessoaRestService.deletar(pessoa);
            }
            function temTelefone(){
                return pessoa.telefones.length > 0;
            }
        };
    }
})();
