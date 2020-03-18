var currentQuestion = 0;
var score = 0;

var questionsArray = [
    {
        question: "Which of the following represents a boolean?",
        choices: ["63", "False", "null", "string"],
        answer: 1
    },
    {
        question: 'What does "===" mean?',
        choices: ["Strictly equal", "Not equal", "Less than", "Greater than"],
        answer: 0
    },
    {
        question: "JavScript and Java are the same.",
        choices: ["True", "False"],
        answer: 1
    },
    {
        question: "Is JavaScript dynamically typed or Statically typed.",
        choices: ["Dynamically", "Statically"],
        answer: 0
    },
    {
        question: "What does var do?",
        choices: ["Prompts the user", "Alerts the user", "Calls a function", "Declares a variable"],
        answer: 3
    },
    {
        question: "What does Confirm return?",
        choices: ["Array", "Number", "Boolean", "String"],
        answer: 2
    },
    {
        question: "How do you add items to the end of an array?",
        choices: ["push()", "pop()", "shift()", "+"],
        answer: 0
    }
];

// timer

var timerEl = document.querySelector("#timer");

var timer = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = "Time: " + timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            clearChoices();
            allDone();
        }
        if (currentQuestion >= (questionsArray.length - 1)){
            clearInterval(timerInterval);
        }
    }, 1000);
}

// start quiz
var startQuiz = document.querySelector("#start-quiz");

startQuiz.addEventListener("click", function () {
    event.stopPropagation();
    var startWrapper = document.querySelector("#start-wrapper");
    startWrapper.innerHTML = "";
    questionSetUp();
    setTime();
});


var quizWrapper = document.querySelector("#quiz-question");
var questionEl = document.querySelector("#quiz-question");
var choiceButtons = document.querySelector("#button-wrapper");

var choicesArray = [];

// set up each qeuestion
function questionSetUp() {
    if (currentQuestion <= (questionsArray.length - 1)) {

        questionEl.textContent = questionsArray[currentQuestion].question;
        for (var i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
            var btn = document.createElement("button");
            btn.setAttribute("data-index", i);
            btn.textContent = questionsArray[currentQuestion].choices[i];
            choicesArray.push(btn);
            choiceButtons.appendChild(choicesArray[i]);
        };
    }
    else {
        score = score + timer;
        allDone();
    }
}
var answerFeedback = document.querySelector("#correct-incorrect");
// if the button's data-index is === to answer then the its correct, else its incorrect 
choiceButtons.addEventListener("click", function (event) {

    if (parseInt(event.target.getAttribute("data-index")) === questionsArray[currentQuestion].answer) {
        score += 10;
        clearChoices();
        currentQuestion += 1;
        questionSetUp();
        answerFeedback.textContent = "Correct! +10 points!";
        var feedbackDisplay = setInterval(function () {
            answerFeedback.textContent = "";
            clearInterval(feedbackDisplay);
        }, 1500);
    }
    else {
        clearChoices();
        currentQuestion += 1;
        questionSetUp();
        timer -= 10;
        answerFeedback.textContent = "Incorrect! -10 seconds!";
        var feedbackDisplay = setInterval(function () {
            answerFeedback.textContent = "";
            clearInterval(feedbackDisplay);
        }, 1500);
    }
});


function clearChoices() {
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    }
    choicesArray = [];
    questionEl.textContent = "";
}

var submit = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");

// This function sets up the final score screen and input field where the user can 
// input their intitials
function allDone() {
    questionEl.textContent = "All Done!";
    var yourScore = document.createElement("p");
    yourScore.textContent = ("Your final score is " + score + " points!");
    questionEl.appendChild(yourScore);

    var initialsForm = document.querySelector(".input-group");
    initialsForm.setAttribute("class", "input-group");
}

// when submit is clicked, the input is saved in local storage. 
var highscoreList = JSON.parse(localStorage.getItem("highscoreList"));
if (highscoreList === null) {
    highscoreList = [];
}

submit.addEventListener("click", function (event) {
    event.preventDefault();
    var newItem = initialsInput.value.trim();
    highscoreList.push(newItem + "-" + score);
    localStorage.setItem("highscoreList", JSON.stringify(highscoreList));
    document.location.href = "./highscores.html";
})

