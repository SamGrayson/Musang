(function () {
  'use strict';
  angular
    .module('musang')
    .controller('HomeController', function($scope, ShowsService, $location, $routeParams){
      $scope.inputPlaceholder = 'Enter an artist'

      $scope.artist = {
        name: ""
      }

      $scope.shows = []

      // ShowsService.readOne($routeParams.id).succes(function(show) {
      //   $scope.show = show;
      // })

      $scope.clickEvent = function(artist, $event) {
        if (artist.name.length > 0) {
          $location.path('/artist' + '/' + artist.name)
        }
      }

    });
})();
