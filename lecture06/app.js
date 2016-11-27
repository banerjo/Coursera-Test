(function () {
  'use strict';


var app1 = angular.module('myFirstApp', []);

app1.controller('MyFirstController', function ($scope){
    $scope.name = "";
    $scope.totalValue = 0;
    $scope.displayNumeric = function () {
        var totalNameValue = calculateValue($scope.name);
        $scope.totalValue = totalNameValue;
        };

    function calculateValue(string){
        var temp =0;
        for(var i = 0;i<string.length;i++){
          temp = temp + string.charCodeAt(i);
        };
        return temp;
        };



});

})();
