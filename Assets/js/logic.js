var time = quizQuestions.length * 15;

var latestQuestionIndex = 0;

var startButton = document.querySelector("#start");
var questionsFeature = document.querySelector("#questions");
var timerFeature = document.querySelector("#time");
var questionChoices = document.querySelector("#options");
var startScreen = document.querySelector("start-screen");
var titleFeature = document.querySelector("#question-name")
var endScreen = document.querySelector("#end-screen")
var TimerDisplay = document.querySelector(".timer")

function beginQuiz() {
// startScreen.setAttribute("class", "hidden");
// questionsFeature.removeAttribute("class");
timerFunction();
}

//this is the timer function that counts
function timerFunction() {
  var countDown = setInterval(function () {
        time--;
        timerFeature.textContent = time;

        if (time == 0) {
            clearInterval(countDown);
            //send message to let user know time is up
        // endQuiz();
     }
    }, 1000);
}

// function endQuiz() {
//  endScreen.setAttribute("class", "shown");
// TimerDisplay.removeAttribute("class");
// }

function getLatestQuestion() {
    var LatestQuestion = questions[latestQuestionIndex];
    titleFeature.textContent = latestQuestionIndex;
    questionChoices.textContent = "This is a string";
}

for (var i = 0; i < LatestQuestion.choice.length; i++) {
    var userChoices = document.createElement("button");
    userChoices.setAttribute("class", "choice");
    userChoices.setAttribute("value", latestQuestion.choice[i]);

    questionChoices.appendChild(userChoices);
}

startButton.addEventListener("click", beginQuiz);


