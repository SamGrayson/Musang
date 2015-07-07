(function () {
  'use strict';
  angular
    .module('musang')
    .controller('MainController', function($scope, ShowsService, $location, $routeParams){

      // ShowsService.readOne($routeParams.id).success(function(show) {
      //   $scope.show = show;
      // })

      var promise = ShowsService.read($routeParams.name);
      promise.success(function(shows) {
        $scope.shows = shows
        $scope.coverImg = shows[0].artists[0].image_url
        $scope.facebookLink = shows[0].artists[0].facebook_page_url
        $scope.artist = $routeParams.name.toUpperCase()
      })
    });

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
