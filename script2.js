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

var currentQuestion = 0;

var questionEl = document.querySelector("#quiz-question");
var choiceButtons = document.querySelector("#button-wrapper");

var choicesArray = [];

function questionSetUp() {
    questionEl.textContent = questionsArray[currentQuestion].question;
    for (var i = 0; i < questionsArray[currentQuestion].choices.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("data-index", i);
        btn.textContent = questionsArray[currentQuestion].choices[i];
        choicesArray.push(btn);
    };
    for (var i = 0; i < choicesArray.length; i++) {
        choiceButtons.appendChild(choicesArray[i]);
    };
    checkIfCorrect();
}

function checkIfCorrect(){
// if the button's data-index is === to answer then the its correct, else its incorrect 
choiceButtons.addEventListener("click", function (event) {

    if (parseInt(event.target.getAttribute("data-index")) === questionsArray[currentQuestion].answer) {
        alert("correct");
       clearChoices();
       currentQuestion += 1;
       questionSetUp();
    }
    else {
        alert("incorrect");
    }
});
}

function clearChoices(){
    while (choiceButtons.firstChild){
    choiceButtons.removeChild(choiceButtons.firstChild);
}
    choicesArray = [];
}
console.log(currentQuestion);