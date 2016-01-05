var app = angular.module("Router", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider.when("/", {
      templateUrl: "mainpages/home.html"
    }).when("/about", {
      templateUrl: "mainpages/about.html"
    }).when("/quizzes", {
      templateUrl: "mainpages/quizzes.html"
    }).when("/learn", {
      templateUrl: "mainpages/learn.html"
    })
    //quiz routes begin here|||||||||||||||||||||||||
    .when("/ipaQuiz", {
      templateUrl: "partials/templates/quizTemplates/ipaQuiz.html"
    }).when("/vowelQuiz", {
      templateUrl: "partials/templates/quizTemplates/vowelQuiz.html"
    }).when("/descriptorsQuiz", {
      templateUrl: "partials/templates/quizTemplates/descriptorsQuiz.html"
    }).when("/tongueTargetQuiz", {
      templateUrl: "partials/templates/quizTemplates/tongueTargetsQuiz.html",
      controller: "TongueTargetQuizController"
    }).when("/wordsQuiz", {
      templateUrl: "partials/templates/quizTemplates/wordsQuiz.html"
    }).when("/signup", {
      templateUrl: "partials/authentication/signup.html"
    }).when("/login", {
      templateUrl: "partials/authentication/login.html"
    })
})