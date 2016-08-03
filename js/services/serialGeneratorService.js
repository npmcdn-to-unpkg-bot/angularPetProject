angular.module('listaTelefonica').provider('serialGenerator', function () {
  var _length = 10;

  this.setLength = function (length){
    _length = length;
  };

  function gerarSerial(){
    var serial = '';
    while(serial.length < _length){
      serial += String.fromCharCode(Math.floor(Math.random() * 64 ) + 34);
    }
    return serial;
  }

  this.$get = function (){
    return {
      generate: gerarSerial()
    };
  };
});
