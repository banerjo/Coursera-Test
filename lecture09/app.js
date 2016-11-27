(function () {
  'use strict';


angular.module('DIApp', [])

.controller('DIController', DIController);

function DIController($scope,$filter,$injector) {

$scope.name = "Joydip";

$scope.upper = function(){
var upCase = $filter('uppercase');
$scope.name = upCase($scope.name);

};
console.log($injector.annotate(DIController));
}

function annotate(height,width){

  return "humbug";
}


})();
