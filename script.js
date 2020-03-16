// Create a timed quiz on JavaDcript fundamentals that stores high scores


var h1El = document.querySelector("#main-text");
var subtext = document.querySelector("#subtext");
var buttonWrapper = document.querySelector("#button-div");
var startQuiz = document.querySelector("#start-quiz");
var quizWrapper = document.querySelector("#quiz-wrapper");
var correctAnswer;
var incorrectAnswer;
var score = 0;

// var questionArray = [
//     [0, "The question", "Answer1", "Answer3"...]
// ]

// var questionArray = [
//     {
//         answer: 0,
//         question: 'What is something',
//         answers: ['answer1', 'answer2', 'answer3', 'answer4']
//     },
//     {}

    // Loop through answers and make an element
    // Each answer element will have a data attribute equal to its attay position data-index="0"
    // append element to the screen
    // When answer is clicked if data-index === answer then it is correct else its wrong
// ]

// These are the buttons for the quiz
var ans1 = document.createElement("button");
var ans2 = document.createElement("button");
var ans3 = document.createElement("button");
var ans4 = document.createElement("button");
var ans1_2 = document.createElement("button");
var ans2_2 = document.createElement("button");
var ans3_2 = document.createElement("button");
var ans4_2 = document.createElement("button");
var ans1_3 = document.createElement("button");
var ans2_3 = document.createElement("button");
var ans3_3 = document.createElement("button");
var ans4_3 = document.createElement("button");
var ans1_4 = document.createElement("button");
var ans2_4 = document.createElement("button");
var ans3_4 = document.createElement("button");
var ans4_4 = document.createElement("button");
var ans1_5 = document.createElement("button");
var ans2_5 = document.createElement("button");
var ans3_5 = document.createElement("button");
var ans4_5 = document.createElement("button");
// **The below should be in a function that is called at the beginning of this js file. 
// When the page is loaded, the h1 element should be populated with the title and the p element should have the description. 
// a button should be created (createElement and appendChild) that has the start button

// When the start button is clicked 
// Create an addEventLister "click" on a variable holding my play button element
startQuiz.addEventListener("click", function () {
    event.stopPropagation();
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
    console.log(score);
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
    
    buttonWrapper.addEventListener("click", function () {
        if (ans2) {
            question2();
            correct();
        }
        else if (ans1 || ans3 || ans4){
            question2();
            incorrect();
        }
    });
    return;
};

// When a question is answered
// Then another question is presented
function question2() {
    // content for question
    h1El.textContent = "This is question 2?";
    // remove question 1 buttons
    buttonWrapper.removeChild(ans1);
    buttonWrapper.removeChild(ans2);
    buttonWrapper.removeChild(ans3);
    buttonWrapper.removeChild(ans4);
    // add answer buttons
    buttonWrapper.appendChild(ans1_2);
    buttonWrapper.appendChild(ans2_2);
    buttonWrapper.appendChild(ans3_2);
    buttonWrapper.appendChild(ans4_2);
    // add content to answer buttons
    ans1_2.textContent = "answer 1 wrong";
    ans2_2.textContent = "answer 2 wrong";
    ans3_2.textContent = "answer 3 wrong";
    ans4_2.textContent = "answer 4 correct";
    // check to see if they clicked the correct or incorrect answer
    buttonWrapper.addEventListener("click", function () {
        if (ans4_2) {
            question3();
            correct();
        }
        else if (ans1_2 || ans2_2 || ans3_2){
            question3();
            incorrect();
        }
    });
    return;
};

// question 3
function question3() {
    // content for question
    h1El.textContent = "This is question 3?";
    // remove question 1 buttons
    ans1_2.parentNode.removeChild(ans1_2);
    ans2_2.parentNode.removeChild(ans2_2);
    ans3_2.parentNode.removeChild(ans3_2);
    ans4_2.parentNode.removeChild(ans4_2);
    // add answer buttons
    buttonWrapper.appendChild(ans1_3);
    buttonWrapper.appendChild(ans2_3);
    buttonWrapper.appendChild(ans3_3);
    buttonWrapper.appendChild(ans4_3);
    // add content to answer buttons
    ans1_3.textContent = "answer 1 correct";
    ans2_3.textContent = "answer 2 wrong";
    ans3_3.textContent = "answer 3 wrong";
    ans4_3.textContent = "answer 4 wrong";
    // check to see if they clicked the correct or incorrect answer
    buttonWrapper.addEventListener("click", function () {
        if (ans1_3) {
            question4();
            correct();
        }
        else if (ans2_3 || ans3_3 || ans4_3){
            question4();
            incorrect();
        }
    });
    return;
};
// question 4
function question4() {
    // content for question
    h1El.textContent = "This is question 4?";
    // remove question 1 buttons
    ans1_3.parentNode.removeChild(ans1_3);
    ans2_3.parentNode.removeChild(ans2_3);
    ans3_3.parentNode.removeChild(ans3_3);
    ans4_3.parentNode.removeChild(ans4_3);
    // add answer buttons
    buttonWrapper.appendChild(ans1_4);
    buttonWrapper.appendChild(ans2_4);
    buttonWrapper.appendChild(ans3_4);
    buttonWrapper.appendChild(ans4_4);
    // add content to answer buttons
    ans1_4.textContent = "answer 1 correct";
    ans2_4.textContent = "answer 2 wrong";
    ans3_4.textContent = "answer 3 wrong";
    ans4_4.textContent = "answer 4 wrong";
    // check to see if they clicked the correct or incorrect answer
    buttonWrapper.addEventListener("click", function () {
        if (ans1_4) {
            question5();
            correct();
        }
        else if (ans2_4 || ans3_4 || ans4_4){
            question5();
            incorrect();
        }
    });
    return;
};

// question 5
function question5() {
    // content for question
    h1El.textContent = "This is question 5?";
    // remove question 1 buttons
    ans1_4.parentNode.removeChild(ans1_4);
    ans2_4.parentNode.removeChild(ans2_4);
    ans3_4.parentNode.removeChild(ans3_4);
    ans4_4.parentNode.removeChild(ans4_4);
    // add answer buttons
    buttonWrapper.appendChild(ans1_5);
    buttonWrapper.appendChild(ans2_5);
    buttonWrapper.appendChild(ans3_5);
    buttonWrapper.appendChild(ans4_5);
    // add content to answer buttons
    ans1_5.textContent = "answer 1 wrong";
    ans2_5.textContent = "answer 2 correct";
    ans3_5.textContent = "answer 3 wrong";
    ans4_5.textContent = "answer 4 wrong";
    // check to see if they clicked the correct or incorrect answer
    buttonWrapper.addEventListener("click", function () {
        if (ans2_5) {
            // question2();
            correct();
        }
        else if (ans1_5 || ans3_5 || ans4_5){
            incorrect();
        }
    });
    return;
};

function allDone(){

}
// When a question is answered incorrectly
// Then a 10second penalty is applied, meaning the timer should sudenly jump but 10 more seconds

// When all questions are answered or the timer reaches 0
// Then the game is over

// When the game is over
// Then I can save my initials and score