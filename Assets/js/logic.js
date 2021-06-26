var time = quizQuestions.length * 15;

var latestQuestionIndex = 0;

var startButton = document.querySelector("#start");
var questionsFeature = document.querySelector("#questions");
var timerFeature = document.querySelector("#time");
var questionChoices = document.querySelector("#options");
var startScreen = document.querySelector("#start-screen");
var titleFeature = document.querySelector("#question-name")
var endScreen = document.querySelector("#end-screen")



//this function begins the quiz, and first question appears on the page
function beginQuiz() {
startScreen.setAttribute("class", "hidden");
questionsFeature.removeAttribute("class", "hidden");
timerFunction();
}

//this is the timer function that counts down from 75 seconds
function timerFunction() {
  var countDown = setInterval(function () {
        time--;
        timerFeature.textContent = time;

        if (time == 0) {
            clearInterval(countDown);            
            
//display message that lets the user know time is up
endQuiz();

        console.log(countDown);
     }
    }, 1000);
}

function getLatestQuestion() {
var latestQuestion = questions[latestQuestionIndex];
titleFeature.textContent = latestQuestionIndex;
questionChoices.textContent = "This is a string";
console.log(questionChoices);

for (var i = 0; i < latestQuestion.choice.length; i++) {
var userChoices = document.createElement("button");
userChoices.setAttribute("class", "choice");
userChoices.setAttribute("value", latestQuestion.choice[i]);
questionChoices.appendChild(userChoices);
}

function endQuiz() {
endScreen.setAttribute("class", "shown");
TimerDisplay.removeAttribute("class", "shown");
}

}

startButton.addEventListener("click", beginQuiz);


