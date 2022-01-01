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
var questionArray = 0;
var timeInterval;

//questions container

const questions = [
  {
    question: "What color is the sky?",
    choices: ["1. blue", "2. brown", "3. green", "4. salmon"],
    answer: "1. blue",
  },
  {
    question: "What color is grass?",
    choices: ["1. chartruse", "2. rain", "3. lint", "4. grass"],
    answer: "3. lint",
  },
  {
    question: "How stinky is stinky cheese?",
    choices: [
      "1. very stinky",
      "2. not that stinky",
      "3. stinky",
      "4. peeee-yeeww",
    ],
    answer: "3. stinky",
  },
  {
    question: "Diddly do da?",
    choices: [
      "1. diddly day",
      "2. hey diddle diddle",
      "3. doodly",
      "4. hoohaa",
    ],
    answer: "1. diddly day",
  },
];

//Starting the timer and the game. Clicking on start game populates the first question.

startGame.addEventListener("click", function () {
  var timerEl = document.getElementById("countdown");
  startPage.style.display = "none";
  questionContainer.style.display = "block";

  //Timer function

  function countdown() {
    timeInterval = setInterval(timer, 1000);

    function timer() {
      timeleft -= 1;
      timerEl.textContent = "Timer = " + timeleft;

      if (timeleft <= 0) {
        clearInterval(timeInterval);
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
    questions[questionArray].answer === questions[questionArray].choices[answer]
  ) {
    check.textContent = "correct";
  } else {
    check.textContent = "wronggg";
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
  finalScore.textContent = "Your final score is " + timeleft + "!";
  clearInterval(timeInterval);
}

//TODO: Store scores
//TODO: Clear Highscores
