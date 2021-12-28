

//Timer Function

var timerEl = document.getElementById("countdown");

function countdown() {
    var timeleft = 5;

var timeInterval = setInterval(function () {
    timeleft--;
    timerEl.textContent = "Timer = " + timeleft;

    if(timeleft === 0){
      clearInterval(timeInterval);

      displayMessage();
    }
    //
    // YOUR CODE HERE
    //
  }, 1000);
}

countdown()