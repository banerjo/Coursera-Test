(function () {
  'use strict';


angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope){

$scope.name = "Joydip";

$scope.sayhello = function () {
  return "Hello Course";


};


});

})();
