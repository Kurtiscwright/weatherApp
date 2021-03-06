'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
 /*angular.module('weatherAppApp')
   .controller('MainCtrl', function ($scope, current) {
     $scope.current = current.query();

     $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
  });*/

   angular.module('weatherAppApp')
  .controller('MainCtrl', function ($scope, citysearch, $localStorage) {
    $scope.citiesFound = citysearch.find();
    $scope.storage = $localStorage;

    $scope.findCities = function(){
        $scope.citiesFound = citysearch.find({
            query: $scope.location
        });
        $scope.searchQuery = $scope.location;
    };
  });
