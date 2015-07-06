(function () {
  'use strict';
  angular
    .module('musang')
    .controller('MainController', function($scope, ShowsService, $location, $routeParams){
      $scope.inputPlaceholder = 'Enter an artist'

      $scope.artist = {
      }

      $scope.shows = []

      // ShowsService.readOne($routeParams.id).succes(function(show) {
      //   $scope.show = show;
      // })

      $scope.clickEvent = function(artist, $event) {
        $event.stopPropagation();
        $event.preventDefault();
        var promise = ShowsService.read(artist.name);
        promise.success(function(shows) {
          $scope.shows = shows
          console.log($scope.shows);
          $location.path('/artist' + '/' + artist.name)
        });
      }

    });
})();
