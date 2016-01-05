var app = angular.module("Phonetica", ["Router", "ui.bootstrap"]);

app.controller("MainController", ["$scope", "QuizMaterialsService", function ($scope, QuizMaterialsService) {
  $scope.testTarget = QuizMaterialsService.tongueTarget.Ch.image;
  $scope.testSymbol = QuizMaterialsService.tongueTarget.Ch.symbol;
  $scope.test = QuizMaterialsService.test;
}]);