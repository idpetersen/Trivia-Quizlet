//Global Variables

var startGame = document.getElementById("start-button");
var timeleft = 75;
var startPage = document.getElementById("main-content");
var buttonContainer = document.getElementById("button-master");
var questionContainer = document.getElementById("question-container");
var questionTitle = document.getElementById("question-title");
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var choice4 = document.getElementById("button4");
var check = document.getElementById("check");
var checkBox = document.getElementById("check-box");
var gameOver = document.getElementById("game-over");
var finalScore = document.getElementById("final-score");
var submitBtn = document.querySelector("#submit");
var initialsInput = document.querySelector("#initial");
var highScoreList = document.querySelector("#highscores-list");
var scoreReset = document.querySelector("#reset-score");
var highScoreBtn = document.querySelector(".highscore-nav");
var timer = document.getElementById("#countdown");
var questionArray = 0;
var timeInterval;

//questions container

const questions = [
  {
    question: "What is the biggest moon in our solar system?",
    choices: ["1. Ganymede", "2. Titan", "3. Callisto", "4. Io"],
    answer: "1. Ganymede",
  },
  {
    question: "What year was basketball invented?",
    choices: ["1. 1921", "2. 1913", "3. 1891", "4. 1936"],
    answer: "3. 1891",
  },
  {
    question:
      "Which of Newton's Laws states that 'for every action, there is an equal and opposite reaction?'",
    choices: [
      "1. Law of mass and acceleration",
      "2. Law of deceleration",
      "3. Law of motion",
      "4. Law of inertia",
    ],
    answer: "3. Law of motion",
  },
  {
    question: "What is the oldest programming language still used today?",
    choices: ["1. FORTRAN", "2. PASCAL", "3. Visual Basic", "4. LOGO"],
    answer: "1. FORTRAN",
  },
  {
    question: "What is a duel between three people called?",
    choices: ["1. A triad", "2. A tricycle", "3. A truel", "4. A tricomb"],
    answer: "3. A truel",
  },
  {
    question: "What country crosses the most timezones",
    choices: ["1. Russia", "2. The United States", "3. Canada", "4. India"],
    answer: "1. Russia",
  },
];

//Starting the timer and the game. Clicking on start game populates the first question.
function init() {
  startGame.addEventListener("click", function () {
    // var timeleft = 75;
    var timerEl = document.getElementById("countdown");
    startPage.style.display = "none";
    questionContainer.style.display = "block";
    highScoreBtn.classList.add("hide");

    //Timer function

    function countdown() {
      timeInterval = setInterval(timer, 1000);

      function timer() {
        timeleft -= 1;
        timerEl.textContent = "Timer = " + timeleft;

        if (timeleft <= 0) {
          ending();
          clearInterval(timeInterval);
          timerEl.textContent = "Out of time!!!";
        }
      }
    }

    countdown();
    nextQuestion();
  });

  //Populating the next question in the array.

  function nextQuestion() {
    questionTitle.textContent = questions[questionArray].question;
    choice1.textContent = questions[questionArray].choices[0];
    choice2.textContent = questions[questionArray].choices[1];
    choice3.textContent = questions[questionArray].choices[2];
    choice4.textContent = questions[questionArray].choices[3];
  }

  //Checking if answer is right.

  function checkAnswer(answer) {
    check.style.display = "block";
    checkBox.style.display = "";

    if (
      questions[questionArray].answer ===
      questions[questionArray].choices[answer]
    ) {
      check.textContent = "Correct Answer!";
    } else {
      check.textContent = "Wrong :(";
      timeleft -= 10;
    }

    //Checking if next question is the last question, if so, ending function executes.

    questionArray++;

    if (questionArray < questions.length) {
      nextQuestion();
    } else {
      ending();
    }
  }

  //Checking if click is correct answer.

  function option1() {
    checkAnswer(0);
  }
  function option2() {
    checkAnswer(1);
  }
  function option3() {
    checkAnswer(2);
  }
  function option4() {
    checkAnswer(3);
  }

  //Adding event listeners to each choice's button.

  choice1.addEventListener("click", option1);
  choice2.addEventListener("click", option2);
  choice3.addEventListener("click", option3);
  choice4.addEventListener("click", option4);

  //Once final question is answered, this function executes.

  function ending() {
    questionContainer.style.display = "none";
    gameOver.style.display = "";
    if (timeleft <= 0) {
      timeleft = 0;
      finalScore.textContent = "Your final score is " + timeleft + "!";
    } else timeleft > 0;
    {
      finalScore.textContent = "Your final score is " + timeleft + "!";
    }
    clearInterval(timeInterval);
  }
}
//Storing Highscores into local storage.
function highscoresStore(event) {
  event.preventDefault();

  var savedHighscores = localStorage.getItem("highscore");
  var scoresArray = [];

  if (savedHighscores === null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighscores);
  }
  var initialsSub = {
    initials: initialsInput.value,
    final: timeleft,
  };
  scoresArray.push(initialsSub);
  var scoresArraystring = JSON.stringify(scoresArray);

  localStorage.setItem("highscore", scoresArraystring);
}

//Once submit button has been clicked, show highscores page
submitBtn.addEventListener("click", function (event) {
  highscoresStore(event);
  highScorePage.classList.remove("hide");
  gameOver.style.display = "none";

  showHighScores();
});

var highscoresList = document.querySelector("#highscores-list");
var i = 0;
function showHighScores() {
  var savedHighScores = localStorage.getItem("highscore");

  // check if there is any highscores already in local storage, then display what is in storage.
  if (savedHighScores === null) {
    return;
  }
  console.log(savedHighScores);

  var storedHighScores = JSON.parse(savedHighScores);

  for (; i < storedHighScores.length; i++) {
    var eachNewHighScore = document.createElement("li");
    eachNewHighScore.innerHTML =
      storedHighScores[i].initials + ": " + storedHighScores[i].final;
    highscoresList.appendChild(eachNewHighScore);
  }
  questionArray = 0;
  timeleft = 75;
  checkBox.style.display = "none";
  // console.log(storedHighScores)
}

var highScorePage = document.querySelector(".highscores-page");
//added event listeners to highscore button and return home button
highScoreBtn.addEventListener("click", function () {
  questionContainer.style.display = "none";
  startPage.style.display = "none";
  gameOver.style.display = "none";
  highScorePage.classList.remove("hide");
  showHighScores();
});

var returnHome = document.querySelector("#return-home");

returnHome.addEventListener("click", function () {
  highScorePage.classList.add("hide");
  startPage.style.display = "block";
  highScoreBtn.classList.remove("hide");
});

init();

//TODO: Clear Highscores
scoreReset.addEventListener("click", function () {
  window.localStorage.removeItem("highscore");
  highScoreList.innerHTML = "";
  showHighScores();
});
