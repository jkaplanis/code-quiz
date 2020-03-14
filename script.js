// Create a timed quiz on JavaDcript fundamentals that stores high scores


var h1El = document.querySelector("#main-text");
var subtext = document.querySelector("#subtext");
var buttonWrapper = document.querySelector("#button-div");
var startQuiz = document.querySelector("#start-quiz");
var quizWrapper = document.querySelector("#quiz-wrapper");
var correctAnswer;
var incorrectAnswer;
var score = 0;

// These are the buttons for the quiz
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
// **The below should be in a function that is called at the beginning of this js file. 
// When the page is loaded, the h1 element should be populated with the title and the p element should have the description. 
// a button should be created (createElement and appendChild) that has the start button

// When the start button is clicked 
// Create an addEventLister "click" on a variable holding my play button element
startQuiz.addEventListener("click", function () {
    question1();

});

// This is the correct function
function correct() {
    // adds a p tag with correct
    correctAnswer = document.createElement("p");
    quizWrapper.appendChild(correctAnswer);
    correctAnswer.textContent = "Correct!";
    score++;
    // removes the p tag with correct after 2 seconds. 
    var displayCorrect = setInterval(function () {
        correctAnswer.parentNode.removeChild(correctAnswer);
        clearInterval(displayCorrect);
    }, 2000);
}

// This is the incorrect function
function incorrect() {
    // adds a p tag with incorrect correct
    incorrectAnswer = document.createElement("p");
    quizWrapper.appendChild(incorrectAnswer);
    incorrectAnswer.textContent = "Incorrect!";
    // removes the p tag with incorrect after 2 seconds. 
    var displayIncorrect = setInterval(function () {
        incorrectAnswer.parentNode.removeChild(incorrectAnswer);
        clearInterval(displayIncorrect);
    }, 2000);
}

// Then a timer starts and I am presented with a question
function question1() {
    // content for first question
    h1El.textContent = "What is javascript?";
    // remove subtext and start quiz button
    subtext.parentNode.removeChild(subtext);
    startQuiz.parentNode.removeChild(startQuiz);
    // add answer buttons
    buttonWrapper.appendChild(ans1);
    buttonWrapper.appendChild(ans2);
    buttonWrapper.appendChild(ans3);
    buttonWrapper.appendChild(ans4);
    // add content to answer buttons
    ans1.textContent = "answer 1 wrong";
    ans2.textContent = "answer 2 correct";
    ans3.textContent = "answer 3 wrong";
    ans4.textContent = "answer 4 wrong";
    // check to see if they clicked the correct or incorrect answer
    ans1.addEventListener("click", function (event) {
        if (event) {
            // question2();
            incorrect();
        }
    });
    ans2.addEventListener("click", function (event) {
        if (event) {
            // question2();
            correct();
        }
    });
    ans3.addEventListener("click", function (event) {
        if (event) {
            // question2();
            incorrect();
        }
    });
    ans4.addEventListener("click", function (event) {
        if (event) {
            // question2();
            incorrect();
        }
    });
};

// When a question is answered
// Then another question is presented

// When a question is answered incorrectly
// Then a 10second penalty is applied, meaning the timer should sudenly jump but 10 more seconds

// When all questions are answered or the timer reaches 0
// Then the game is over

// When the game is over
// Then I can save my initials and score