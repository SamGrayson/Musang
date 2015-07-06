(function() {
  'use strict';
  angular
    .module('musang')
    .factory('ShowsService', function($http) {
      var url = 'http://api.bandsintown.com/artists';
      var url2 = '/events.json?api_version=2.0&app_id=musang';
      var getShows = function(artist) {
        return $http.jsonp(url + '/' + artist + url2 + '&callback=JSON_CALLBACK');
      };
      return {
        read: getShows
      }
    });
})();
