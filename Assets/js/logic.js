//these are global variables 
var time = quizQuestions.length * 15;

var latestQuestionIndex = 0;
var countDown;
var response = document.querySelector(".response");
var startButton = document.querySelector("#start");
var questionsFeature = document.querySelector("#questions");
var timerFeature = document.querySelector("#time");
var questionChoices = document.querySelector("#options");
var startScreen = document.querySelector("#start-screen");
var titleFeature = document.querySelector("#question-name");
var endScreen = document.querySelector("#end-screen");
var submitButton = document.querySelector("#submit");


//this function begins the quiz, and first question appears on the page and the timer begins counting down from 75 seconds 
function beginQuiz() {
    startScreen.setAttribute("class", "hidden");
    questionsFeature.removeAttribute("class", "hidden");
    timerFunction();
    getLatestQuestion();
}
//this is the timer function that counts down from 75 seconds
function timerFunction() {
    var countDown = setInterval(function () {
        time--;
        timerFeature.textContent = time;
        if (time <= 0) {
            clearInterval(countDown);
            console.log(countDown);
        }
    }, 1000);
}

//this function retrieves the question to be displayed on the page
function getLatestQuestion() {
    var latestQuestion = quizQuestions[latestQuestionIndex];
    console.log("latest", latestQuestion);
    titleFeature.textContent = latestQuestion.question;
    questionChoices.textContent = "";

    for (var i = 0; i < latestQuestion.options.length; i++) {
        var choices = document.createElement("button");
        choices.style.display = "flex";
        choices.style.justifyContent = "center";
        choices.setAttribute("value", latestQuestion.options[i]);

        choices.textContent = i + 1 + ". " + latestQuestion.options[i];
        questionChoices.appendChild(choiceNode);
    }
}

//function that checks whether the answer is correct 

function checkAnswer(event) {
    var correctAnswer = event.target;
    console.log(correctAnswer);

    if (correctAnswer.matches("button")) {
        var valueOfAnswer = correctAnswer.getAttribute("value");
    }
    if (valueOfAnswer == quizQuestions[latestQuestionIndex].answer) {
        console.log("Correct answer!");
        response.textContent = "Correct answer!"
        //    setTimeout(function(){
        //     response.setAttribute("class", "hidden");
        //     }, 500)
    }
    else {
        console.log("Wrong Answer!");
        response.textContent = "Wrong Answer!"
        // setTimeout(function(){response.setAttribute("class", "hidden")}, 500)
        time = time - 10;
    }

    response.setAttribute("class", "shown");
    setTimeout(function () { response.setAttribute("class", "hidden") }, 750)

    //loops through to the next question    
    latestQuestionIndex++

    if (latestQuestionIndex === quizQuestions.length) {
        endQuiz();
    } else {
        setTimeout(function () { getLatestQuestion() }, 1000)
    }
}
//display message that lets the user know time is up
//will be called if user runs out of questions or time runs out
// ends the game, end screen is shown and user is prompted to enter initials 
function endQuiz() {
    submitButton = document.getElementById("#initials");
    endScreen.removeAttribute("class", "hidden");
    timerFeature.removeAttribute("class", "shown");
    questionsFeature.setAttribute("class", "hidden");
    clearInterval(countDown);
}

//this will save the high score to local storage
function saveHighScore() {
    var name = document.querySelector("#initials").value.trim()
    var savedScores = JSON.parse(window.localStorage.getItem("saved-score")) || []
    var userScore = {
        score: time,
        userName: name
    }

//saved score in get and set items must match bc they're the keys to store what is in it 
    savedScores.push(userScore)
    window.localStorage.setItem("saved-score", JSON.stringify
    (savedScores))
    window.location.replace("./highscores.html")
}

//event listens for click to run begn quiz function
startButton.addEventListener("click", beginQuiz);
questionChoices.addEventListener("click", checkAnswer);

//event listens for click to run end quiz function 
submitButton.addEventListener("click", saveHighScore);