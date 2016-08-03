angular.module('listaTelefonica').factory('contatosAPI', function ($http){
  var _getContatos = function () {
    return $http.get('http://localhost:8000/contatos/');
  };

  var _salvarContato = function (contato){
    return $http.post('http://localhost:8000/contatos/', contato);
  };

  return {
    getContatos: _getContatos,
    salvarContato: _salvarContato
  }

});
