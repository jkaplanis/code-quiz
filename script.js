var currentQuestion = 0;
var score = 0;

var questionsArray = [
    {
        question: "This is the first question",
        choices: ["choice 1", "choice 2 correct", "choice 3", "choice 4"],
        answer: 1
    },
    {
        question: "This is the second question",
        choices: ["choice 1 correct", "choice 2", "choice 3", "choice 4"],
        answer: 0
    },
    {
        question: "This is the third question",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4 correct"],
        answer: 3
    },
    {
        question: "This is the fourth question",
        choices: ["choice 1", "choice 2", "choice 3", "choice 4 correct"],
        answer: 3
    },
    {
        question: "This is the fifth question",
        choices: ["choice 1", "choice 2", "choice 3 correct", "choice 4"],
        answer: 2
    }
];


var startQuiz = document.querySelector("#start-quiz");

startQuiz.addEventListener("click", function () {
    event.stopPropagation();
    var startWrapper = document.querySelector("#start-wrapper");
    startWrapper.innerHTML = "";
    questionSetUp();
});


var quizWrapper = document.querySelector("#quiz-question");
var questionEl = document.querySelector("#quiz-question");
var choiceButtons = document.querySelector("#button-wrapper");

var choicesArray = [];

function questionSetUp() {
    if (currentQuestion <= (questionsArray.length -1)){

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
        allDone();
    }
}

// if the button's data-index is === to answer then the its correct, else its incorrect 
choiceButtons.addEventListener("click", function (event) {

    if (parseInt(event.target.getAttribute("data-index")) === questionsArray[currentQuestion].answer) {
        alert("correct");
        score += 1;
        clearChoices();
        currentQuestion += 1;
        questionSetUp();

    }
    else {
        alert("incorrect");
        clearChoices();
        currentQuestion += 1;
        questionSetUp();
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

function allDone(){
    questionEl.textContent = "All Done!";
    
    var yourScore = document.createElement("p");
    yourScore.textContent = ("Your final score is " + score);
    questionEl.appendChild(yourScore);
    
    var initialsForm = document.querySelector(".input-group");
    initialsForm.setAttribute("class", "input-group");
}
submit.addEventListener("click", function(event){
    var initials = initialsInput.value.trim();
    event.preventDefault();
    localStorage.setItem("initials", JSON.stringify(initials));
})