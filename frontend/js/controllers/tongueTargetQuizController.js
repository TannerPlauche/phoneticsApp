app = angular.module("Phonetica");

app.controller("TongueTargetQuizController", ["$scope", "QuizMaterialsService", function ($scope, quizMaterialService) {

  //This is set up all wrong is a messy. Most of this should be in the service, or its own service. 
  //refactor later. (?)

  //This is an object of the tongue targets. 
  $scope.tongueTargets = quizMaterialService.tongueTarget;
  //This is the randomized array
  $scope.testTargets = quizMaterialService.randomizedTargets(quizMaterialService.tongueTarget);



  //Page function variables and functions
  $scope.totalQuestions = $scope.testTargets.length;
  $scope.isTakingQuiz = false;
  $scope.quizIsStarted = false;
  $scope.startQuiz = function () {
    $scope.quizIsStarted = true;
    $scope.isTakingQuiz = true;
  };
  $scope.quizEnded = false;
  var correctSoundEffect = new Audio("audio/Bing-Sound.mp3");
  var wrongSoundEffect = new Audio("audio/doh.mp3");
  var victorySoundEffect = new Audio("audio/doh.mp3");
  var failureSoundEffect = new Audio("audio/doh.mp3");


  //Default quiz at 0 position
  $scope.currentTargetNumber = 0;
  $scope.currentTarget = $scope.testTargets[$scope.currentTargetNumber].image;
  $scope.progressMarker = $scope.currentTargetNumber + 1;
  $scope.item = $scope.testTargets[$scope.currentTargetNumber]
  $scope.score = 0;
  $scope.incorrect = 0
  $scope.progress = ($scope.progressMarker / $scope.totalQuestions) * 100;

  //mix up and assign options
  $scope.randomizeOptions = function () {
    var tempArray = [];
    var quizItem = [];
    var item = $scope.item;
    tempArray.push(item.symbol);
    tempArray.push(item.incorrectOption1);
    tempArray.push(item.incorrectOption2);
    var len = tempArray.length;
    for (var i = 0; i < len;) {
      var num = quizMaterialService.getRandomNum(0, len);
      quizItem.push(tempArray[num]);
      //      console.log("randomNumber: " + num + " $ quizitem " + quizItem);

      tempArray.splice(num, 1);
      len = tempArray.length;
      i = 0;
    }
    $scope.currentItem = quizItem;
    $scope.option1 = $scope.currentItem[0];
    $scope.option2 = $scope.currentItem[1];
    $scope.option3 = $scope.currentItem[2];
  };

  //Intialize first question:
  $scope.randomizeOptions();

  //answer question
  $scope.selectedAnswer = null;

  //Move to next quiz item. 
  $scope.incrementQuiz = function (selectedAnswer) {
    if (selectedAnswer === $scope.item.symbol) {
      $scope.score++;
      correctSoundEffect.play();
    } else {
      $scope.incorrect++;
      wrongSoundEffect.play();
    };
    $scope.currentTargetNumber++;
    $scope.progressMarker = $scope.currentTargetNumber + 1;
    $scope.progress = ($scope.progressMarker / $scope.totalQuestions) * 100;
    $scope.currentTarget = $scope.testTargets[$scope.currentTargetNumber].image;
    $scope.currentSymbol = $scope.testTargets[$scope.currentTargetNumber].symbol
    $scope.item = $scope.testTargets[$scope.currentTargetNumber];
    $scope.randomizeOptions();
  }



  //complete quiz - answered all answeres

  var playGameOverSound = function () {
    if (($scope.score / $scope.totalQuestions) > .9) {
      victorySoundEffect.play();
      $scope.gameOverMessage = "Awesome! This is tricky stuff, and you got an A!"
    } else if (($scope.score / $scope.totalQuestions) > .7) {
      victorySoundEffect.play();
      $scope.gameOverMessage = "Good job! Study some more and then play again to get 100%"
    } else {
      failureSoundEffect.play();
      $scope.gameOverMessage = "This is tricky stuff. Good job trying though. Study some more and then come try again!"
    }
  }

  $scope.$watch("progressMarker", function () {
    if ($scope.progressMarker > $scope.totalQuestions) {
      $scope.isTakingQuiz = false;
      $scope.quizEnded = true;
      playGameOverSound();
    }

    $scope.startOver = function () {
      $scope.currentTargetNumber = 0;
      $scope.currentTarget = $scope.testTargets[$scope.currentTargetNumber].image;
      $scope.progressMarker = $scope.currentTargetNumber + 1;
      $scope.item = $scope.testTargets[$scope.currentTargetNumber]
      $scope.score = 0;
      $scope.incorrect = 0;
      $scope.randomizeOptions();
      $scope.isTakingQuiz = false;
      $scope.quizIsStarted = false;
      $scope.quizEnded = false;
    }
  });




      }]);