
// display the highscores
var highscoreList = JSON.parse(localStorage.getItem("highscoreList"));

if (highscoreList === null) {
    highscoreList = [];
}

var highscoreListDisplay = document.querySelector("#highscores-list"); //This is the ol

for (var i = 0; i < highscoreList.length; i++) {
    var highscore = document.createElement("li");
    highscore.textContent = highscoreList[i];
    highscoreListDisplay.appendChild(highscore);
};

// clear highscores

var clearHighscores = document.querySelector("#clear-highscores");
clearHighscores.addEventListener("click", function () {
    localStorage.clear();
    highscoreList = [];
    highscoreListDisplay.innerHTML = "";
});