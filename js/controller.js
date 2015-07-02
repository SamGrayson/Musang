(function () {
  'use strict';
  angular
    .module('musang')
    .controller('MainController', function($scope, PostsService, $location, $routeParams){
      // This first argument MUST be named $scope

      // PostsService.read().success(function(posts) {
      //   $scope.posts = posts;
      // });
      // PostsService.readOne($routeParams.id).success(function(post) {
      //   $scope.post = post;
      // });
      // $scope.deletePost = function() {
      //
      // }
      // $scope.createPost = function(newPost) {
      //   PostsService.create(newPost);
      // };


    });
})();
