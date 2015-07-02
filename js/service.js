(function() {
  'use strict';
  angular
    .module('musang')
    .factory('PostsService', function($http) {
      var url = 'http://tiy-free-rest.herokuapp.com/collections/musang';
      var getPosts = function() {
        return $http.get(url);
      };
      var getSinglePost = function(id) {
        return $http.get(url + '/' + id);
      };
      var createPost = function(newPost) {
        $http.post(newPost);
      };
      var updatePost = function(id, post) {
        $http.put(url + '/' + id, post);
      };
      var deletePost = function(id) {
        $http.delete(url + '/' + id);
      };

      return {
        create: createPost,
        read: getPosts,
        readOne: getSinglePost,
        update: updatePost,
        delete: deletePost
      }
    });
})();
