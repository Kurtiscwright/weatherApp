'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.forecast
 * @description
 * # forecast
 * Factory in the weatherAppApp.
 */
angular.module('weatherAppApp')
  .factory('forecast', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
