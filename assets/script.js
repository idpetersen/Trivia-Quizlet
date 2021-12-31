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
var questionIndex = 0;
// var finalTime = timeleft
const questions = [
    {
        question: "What color is the sky?",
        choices: ["1. blue","2. brown", "3. green", "4. salmon"],
        answer: "1. blue"
    },
    {
        question: "What color is grass?",
        choices: ["1. chartruse", "2. rain", "3. lint", "4. grass"],
        answer: "3. lint"
    },
    {
        question: "How stinky is stinky cheese?",
        choices: ["1. very stinky", "2. not that stinky", "3. stinky", "4. peeee-yeeww"],
        answer: "3. stinky"
    },
    {
        question: "Diddly do da?",
        choices: ["1. diddly day", "2. hey diddle diddle", "3. doodly", "4. hoohaa"],
        answer: "1. diddly day"
    }

];

startGame.addEventListener("click", function(){
    
    var timerEl = document.getElementById("countdown");
    startPage.style.display = "none";
    questionContainer.style.display = "block";



    function countdown() {
        var timeInterval = setInterval(function () {
            timeleft--;
            timerEl.textContent = "Timer = " + timeleft;

            if(timeleft <= 0){
            clearInterval(timeInterval); 
            }

        }, 1000);
        };

        countdown();
        nextQuestion();


});


function nextQuestion() {
    questionTitle.textContent = questions[questionIndex].question;
    choice1.textContent = questions[questionIndex].choices[0];
    choice2.textContent = questions[questionIndex].choices[1];
    choice3.textContent = questions[questionIndex].choices[2];
    choice4.textContent = questions[questionIndex].choices[3];
}

function checkAnswer(answer) {
    
    check.style.display= "block";
    checkBox.style.display= "";
    
    // console.log(button1)

    if (questions[questionIndex].answer === questions[questionIndex].choices[answer]) {
        check.textContent = "correct";
    }

    else{
        check.textContent = "wronggg";
        timeleft -= 30;
    };

    questionIndex++;

    if (questionIndex < questions.length) {
        nextQuestion ();
    } else {
        ending();
        }
    
};


function option1() {checkAnswer (0)};
function option2() {checkAnswer (1)};
function option3() {checkAnswer (2)};
function option4() {checkAnswer (3)};

choice1.addEventListener("click", option1);
choice2.addEventListener("click", option2);
choice3.addEventListener("click", option3);
choice4.addEventListener("click", option4);


function ending(){
    var finalTime = timeleft
    questionContainer.style.display = "none";
    gameOver.style.display = "";
    finalScore.textContent = "Your final score is " + finalTime + "!";
    // if(timeleft === finalTime){
    //     clearInterval()
    // }
    //TODO: stop the timer!!!!
}

//TODO: No negative timer
//TODO: Store scores
//TODO: Clear Highscores
