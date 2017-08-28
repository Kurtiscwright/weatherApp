'use strict';

/**
 * @ngdoc service
 * @name weatherAppApp.current
 * @description
 * # current
 * Factory in the weatherAppApp.
 */
 angular.module('weatherApp')
   .factory('current', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=dedd4adbb35222b13f6ad8b45441a303', {}, {
       query: {
         method:'GET',
         params:{
           location: 'Seattle,us'
         },
         isArray:false
       }
     });
   });
