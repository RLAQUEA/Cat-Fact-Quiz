//this displays the scores and saves them to local storage

function displayScores() {
    var savedScores = JSON.parse(window.localStorage.getItem("saved-score")) || [] 
    savedScores.sort(function(a, b){
        return b.score-a.score
    })
    //compares each score to another and sorts them greatest to smallest
    savedScores.forEach(function(score){
        var row = document.createElement("li")
        row.textContent=score.userName + " :" + score.score
        var scoresDiv = document.querySelector("#highscores")
        scoresDiv.appendChild(row)
    })
    }
    displayScores();


