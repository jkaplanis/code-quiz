var initials = JSON.parse(window.localStorage.getItem('initials'));
var score = JSON.parse(window.localStorage.getItem('score'));

var highscoresList = document.querySelector("#highscores-list");
var highscore = document.createElement("li");
highscore.textContent = (initials + "-" + score);
highscoresList.appendChild(highscore);
