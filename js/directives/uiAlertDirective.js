angular.module('listaTelefonica').directive('uiAlert', function(){
  return {
    templateUrl: 'view/alert.html',
    replace: true,
    // restrict: 'A'
    restrict: 'E',
    // restrict: 'C'
    // restrict: 'AE'
  };
});
