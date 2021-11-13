var questions = [
    {
        test: "Commonly used data types DO Not Include:",
        choice: ["CSS", "HTML", "Javascript", "Spanish"],
        answer: "CSS",
    }, 
    {
        test: "String values must be enclosed within _____ when being assigned to variables.",
        choice: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "parenthesis",
    }, 
    {
        test: "A very useful too used dureing development and debugging for printing content to the debugger is:",
        choice: ["Javascript", "terminal/bash", "for loops", "console.log"],
        answer: "console.log",
    }, 
    {
        test: "The condition in an if/else statement is enclosed with ___",
        choice: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "curly brackets",
    },
    {
      test: "Arrays in Javascript can be used to store ____",
      choice: ["numbers", "other arrays", "booleans", "all of the above"],
      answer: "all of the above",
  }, 
];



var timeleft = 60;
var time = function() {
  var timer = setInterval(function(){

  if(timeleft <= 0){
    clearInterval(timer);
    resultScreen();

  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);
}

var removeStartScreen = function() {
var removeStart = document.getElementById("startScreen");
removeStart.classList.add("display");
}


var currentQuestionIndex = 0;
var currentQuestion;
let pointBank = 0;

var startingFunction = function() {
  removeStartScreen();
  time();
  displayQuestion();

}

var displayQuestion = function() {
  currentQuestion = questions[currentQuestionIndex];
  if (currentQuestionIndex > 0) {
    var removeQuestion = document.getElementById("questionTitle");
    removeQuestion.removeChild(removeQuestion.firstChild);
    var removeAnswer = document.getElementById("demo");
    while (removeAnswer.firstChild) {
      removeAnswer.removeChild(removeAnswer.firstChild);
    } 
  }
  if (currentQuestionIndex < 5) {
  var titleNode = document.createElement("h2");
  titleNode.textContent = currentQuestion.test;
  document.getElementById("questionTitle").appendChild(titleNode);
  answerList();
  } else {
    timeleft = 0;
  }
}

var answerList = function() {
for (let i = 0; i < currentQuestion.choice.length; i++) {

                var liNode = document.createElement("li");
                liNode.addEventListener("click", myFunction);
                liNode.textContent = currentQuestion.choice[i];
                function myFunction(event) {
                    //if statement regarding whether the option is right or wrong
                    if (event.target.innerHTML === currentQuestion.answer) {
                        var answerChoice = document.getElementById("result");
                        answerChoice.innerHTML = "<p>Correct !</p>";

                        pointBank++;

                    } else {
                        var answerChoice = document.getElementById("result");
                        answerChoice.innerHTML = "<p>Wrong !</p>";
                        timeleft -= 10;

                    }
                    currentQuestionIndex++;
                    console.log(pointBank)
                    localStorage.setItem("points", pointBank);

                    displayQuestion();

                  }
                document.getElementById("demo").appendChild(liNode);
  }
}

var resultScreen = function(){
  var savedTasks = localStorage.getItem("points");
  document.getElementById("questionScreen").classList.add("display");
  var finalScore = document.getElementById("finalScore");
  finalScore.classList.remove("display");
  var createFinalScore = document.createElement("h2");
  createFinalScore.textContent = "Your final score is " + savedTasks + ".";
  finalScore.appendChild(createFinalScore);
}

var highScoreFunction = function(){
  window.location.href = "highscore.html";
  var initials = document.getElementById("initial").value;
  localStorage.setItem("initial", initials);
  var loadInitials = localStorage.getItem("inital");
  var scorePage = document.getElementById("score");
  var createScore = document.createElement("h2");
  createScore.textContent = loadInitials;
  console.log(createScore);
  scorePage.appendChild(createScore);
}

var goBack = function(){
  window.location.href = "index.html";
}

var start = document.getElementById("startButton")
start.addEventListener("click", startingFunction);

