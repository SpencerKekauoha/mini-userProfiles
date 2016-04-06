angular.module('userProfiles').controller('MainController', function($scope,mainService){

  $scope.getUsers = function() {
    $scope.getUsers = mainService.getUsers()
  }

  $scope.getUsers();














});
