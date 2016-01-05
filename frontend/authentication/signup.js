var app = angular.module('Phonetica');

app.controller("SignupController", ['$scope', '$location', 'UserService', function ($scope, $location, UserService) {

  $scope.passwordMessage = '';

  $scope.signup = function () {

    $scope.user = {
      name: $scope.name,
      username: $scope.username,
      password: $scope.password,
      email: $scope.email,
    }

    if ($scope.user.password !== $scope.passwordRepeat) {
      $scope.passwordMessage = "Passwords do not match";
    } else {
      UserService.signup($scope.user).then(function (response) {
        $location.path('/');
      }, function (response) {
        alert('There was a problem signing up');
      });
    }
  }

}]);