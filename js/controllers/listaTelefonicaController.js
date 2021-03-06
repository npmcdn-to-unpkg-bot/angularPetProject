// Recovering a module and setting up a new controller
angular.module('listaTelefonica').controller('listaTelefonicaController',
  function ($scope, $filter, contatosAPI, operadorasAPI, serialGenerator){
       $scope.app = 'Lista Telefonica';
       $scope.debug = false;
       $scope.nome = '';
       $scope.telefone = '';
       $scope.subtitulo = 'Subtitulo usando ng-bind' ;
       $scope.operadoras = [];
       $scope.lista = [];

       var carregarContatos = function (){
         contatosAPI.getContatos().success(function (data){
           $scope.lista = data;
         }).error(function (){
           $scope.error = 'Nao foi possivel carregar os dados:controller';
         });
       };

       var carregarOperadoras = function (){
         operadorasAPI.getOperadoras().success(function (data){
         $scope.operadoras = data;
         });
       };

       carregarOperadoras();
       carregarContatos();


       $scope.salvar = function (contato) {
         contato.serial = serialGenerator.generate;
            console.log(contato);
            contatosAPI.salvarContato(contato).success(function (data){
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
