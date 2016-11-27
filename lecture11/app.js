(function () {
  'use strict';


angular.module('msgApp', [])

.controller('MessageController', MessageController);

MessageController.$inject = ['$scope'];
function MessageController($scope) {

$scope.state = "happy";
$scope.name = "joydip";
$scope.sayMessage = function(){
  return" this is joydip's state";
};
$scope.tellState = function (){
  if ($scope.state=="happy")
    $scope.state = "sad";
    else $scope.state = "happy";
};



}






})();
