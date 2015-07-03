(function () {
'use strict';
angular
  .module('musang', [
    'ngRoute'
  ])
  .config(function($routeProvider){
    $routeProvider
     .when('/', {
       templateUrl: 'views/main.html',
       controller: 'MainController'
     })
     .when('/artist/:name', {
       templateUrl: 'views/artist.html',
       controller: 'MainController'
     })
     .when('/404', {
       template: '<h1>Sorry, page not found.</h1>'
     })
     .otherwise({
       redirectTo: '/404'
     })
  });
})();
