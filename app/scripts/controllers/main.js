'use strict';

/**
 * @ngdoc function
 * @name weatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weatherAppApp
 */
 angular.module('weatherApp')
   .controller('MainCtrl', function ($scope, current) {
     $scope.current = current.query();

     $scope.refreshCurrent = function(){
        $scope.current = current.query({
            location: $scope.location
        });
    };
   });
