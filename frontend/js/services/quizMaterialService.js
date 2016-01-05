angular.module("Phonetica")
  .service("QuizMaterialsService", function () {

    this.getRandomNum = function (min, max) {
      return parseInt(Math.random() * (max - min) + min);
    };

    this.tongueTarget = {
      Y: {
        symbol: "/j/",
        image: "images/Y.png",
        incorrectOption1: "/s/",
        incorrectOption2: "/n/"
      },
      Ch: {
        symbol: "/tʃ/",
        image: "images/Ch_j.png",
        incorrectOption1: "/l/",
        incorrectOption2: "/d/"
      },
      J: {
        symbol: "/dʒ/",
        image: "images/Ch_j.png",
        incorrectOption1: "/n/",
        incorrectOption2: "/k/"
      },
      E: {
        symbol: "/i/",
        image: "images/i.png",
        incorrectOption1: "/ŋ/",
        incorrectOption2: "/r/"
      },
      K: {
        symbol: "/k/",
        image: "images/K_G.png",
        incorrectOption1: "/ɻ/",
        incorrectOption2: "/l/"
      },
      G: {
        symbol: "/g/",
        image: "images/K_G.png",
        incorrectOption1: "/ŋ/",
        incorrectOption2: "/ʒ/"
      },
      L: {
        symbol: "/l/",
        image: "images/L.png",
        incorrectOption1: "/n/",
        incorrectOption2: "/m/"
      },
      N: {
        symbol: "/n/",
        image: "images/N.png",
        incorrectOption1: "/dʒ/",
        incorrectOption2: "/p/"
      },
      Ng: {
        symbol: "/ŋ/",
        image: "images/Ng.png",
        incorrectOption1: "/n/",
        incorrectOption2: "/m/"
      },
      empty: {
        symbol: "//",
        image: "images/none.png",
      },
      P: {
        symbol: "/p/",
        image: "images/P_B_M_W.png",
        incorrectOption1: "/t/",
        incorrectOption2: "/z/"
      },
      B: {
        symbol: "/b/",
        image: "images/P_B_M_W.png",
        incorrectOption1: "/d/",
        incorrectOption2: "/s/"
      },
      M: {
        symbol: "/m/",
        image: "images/P_B_M_W.png",
        incorrectOption1: "/ɻ/",
        incorrectOption2: "/l/"
      },
      W: {
        symbol: "/w/",
        image: "images/P_B_M_W.png",
        incorrectOption1: "/k/",
        incorrectOption2: "/s/"
      },
      R: {
        symbol: "/ɻ/",
        image: "images/R.png",
        incorrectOption1: "/j/",
        incorrectOption2: "/tʃ/"
      },
      S: {
        symbol: "/s/",
        image: "images/S_Z.png",
        incorrectOption1: "/dʒ/",
        incorrectOption2: "/j/"
      },
      Z: {
        symbol: "/z/",
        image: "images/S_Z.png",
        incorrectOption1: "/tʃ/",
        incorrectOption2: "/d/"
      },
      Sh: {
        symbol: "/ʃ/",
        image: "images/Sh_Zh.png",
        incorrectOption1: "/d/",
        incorrectOption2: "/ɻ/"
      },
      Zh: {
        symbol: "/ʒ/",
        image: "images/Sh_Zh.png",
        incorrectOption1: "/ŋ/",
        incorrectOption2: "/l/"
      },
      T: {
        symbol: "/t/",
        image: "images/T_D.png",
        incorrectOption1: "/n/",
        incorrectOption2: "/ʃ/"
      },
      D: {
        symbol: "/d/",
        image: "images/T_D.png",
        incorrectOption1: "/m/",
        incorrectOption2: "/ʒ/"
      },
      Th: {
        symbol: "/θ/",
        image: "images/Th.png",
        incorrectOption1: "/t/",
        incorrectOption2: "/ɻ/"
      },
      Dh: {
        symbol: "/ð/",
        image: "images/Th.png",
        incorrectOption1: "/d/",
        incorrectOption2: "/l/"
      }

    };

    this.randomizedTargets = function (tongueTarget) {
      var newArray = [];
      var randomOrderArray = [];
      for (var key in this.tongueTarget) {
        if (key !== "empty" && this.tongueTarget.hasOwnProperty(key)) {
          newArray.push(this.tongueTarget[key]);
        }
      }
      var len = newArray.length;
      for (var i = 0; i < len;) {
        var randomNum = this.getRandomNum(0, len);
        randomOrderArray.push(newArray[randomNum]);
        newArray.splice(randomNum, 1);
        len = newArray.length;
        i = 0;
      }
      return randomOrderArray;
    };



  });