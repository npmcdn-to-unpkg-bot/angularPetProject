// Recovering a module and setting up a new controller
angular.module('listaTelefonica').controller('listaTelefonicaController',
  function ($scope, $filter, $http){
       $scope.app = 'Lista Telefonica';
       $scope.debug = false;
       $scope.nome = '';
       $scope.telefone = '';
       $scope.subtitulo = 'Subtitulo' ;
       $scope.operadoras = [];
       $scope.lista = [];

       var carregarContatos = function (){
         $http.get('http://localhost:8000/contatos/').success(function (data){
           $scope.lista = data;
         });
       };

       var carregarOperadoras = function (){
         $http.get('http://localhost:8000/operadoras/').success(function (data){
           $scope.operadoras = data;
         });
       };

       carregarOperadoras();
       carregarContatos();


       $scope.salvar = function (contato) {
            $http.post('http://localhost:8000/contatos/', contato).success(function (data){
              delete $scope.contato;
              $scope.contactForm.$setPristine();
              carregarContatos();
            }).error(function (data, status){
              $scope.message = 'Aconteceu um problema' + data;
            });
       }

       $scope.apagar = function (contatos) {
         $scope.lista = contatos.filter(function (contato){
            if (!contato.selecionado) return contato;
         });
       };

       $scope.isContatoSelecionado = function (contatos) {
            return contatos.some(function (contato){
                return contato.selecionado;
            });
       };

       $scope.ordenarPor = function (campo) {
         $scope.criterioOrdenacao = campo;
         $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
       };
});
