var currentQuestion = 0;
var score = 0;

// Questions, choices, and answers
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
        if (currentQuestion >= (questionsArray.length - 1)) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// Remove start quiz content, start time, and call question setup
var startQuiz = document.querySelector("#start-quiz");

startQuiz.addEventListener("click", function () {
    event.stopPropagation();
    var startWrapper = document.querySelector("#start-wrapper");
    startWrapper.innerHTML = "";
    questionSetUp();
    setTime();
});


// set up each qeuestion, loop through each questions until last question reached
var questionEl = document.querySelector("#quiz-question");
var choiceButtons = document.querySelector("#button-wrapper");
var choicesArray = [];

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
};

// Check if clicked answer is correct and display a feedback message 
var answerFeedback = document.querySelector("#correct-incorrect");
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
        }, 2000);
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
        }, 2000);
    }
});

// Clear Choices function, used to remove the buttons and question text
function clearChoices() {
    while (choiceButtons.firstChild) {
        choiceButtons.removeChild(choiceButtons.firstChild);
    }
    choicesArray = [];
    questionEl.textContent = "";
};

// Finals score screen with input field to accept user initals
function allDone() {
    questionEl.textContent = "All Done!";
    var yourScore = document.createElement("p");
    yourScore.textContent = ("Your final score is " + score + " points!");
    questionEl.appendChild(yourScore);
    
    var initialsForm = document.querySelector(".input-group");
    initialsForm.setAttribute("class", "input-group");
};

// When submit is clicked, the input is saved in local storage. 
var highscoreList = JSON.parse(localStorage.getItem("highscoreList"));
if (highscoreList === null) {
    highscoreList = [];
};

var submit = document.querySelector("#submit");
var initialsInput = document.querySelector("#initials");

submit.addEventListener("click", function (event) {
    event.preventDefault();
    var newItem = initialsInput.value.trim();
    highscoreList.push(newItem + "-" + score);
    localStorage.setItem("highscoreList", JSON.stringify(highscoreList));
    document.location.href = "./highscores.html";
});

