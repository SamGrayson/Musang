(function () {
  'use strict';
  angular
    .module('musang')
    .controller('MainController', function($scope, ShowsService, $location, $routeParams){
      $scope.inputPlaceholder = 'Enter an artist';

      $scope.artist = {}

      // ShowsService.readOne($routeParams.id).succes(function(show) {
      //   $scope.show = show;
      // })

      $scope.clickEvent = function(obj) {
        console.log($scope.artist.name);
        $location.path('/artist' + '/' + $scope.artist.name);
        var shows = ShowsService.read($scope.artist.name).success(function(shows) {
          $scope.shows = shows;
          console.log($scope.shows);
        });
      }

    });
})();
