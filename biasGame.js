var messageDisplay = document.getElementById("messageDisplay");
var choice;
var answerChoice = [
	"Yes",
	"No",
	"Depends"
]
var questions = [
	"This is a question. Please choose your answer wisely",
	"This is a second question",
	"This is a third question"
]

// var random = Math.floor(Math.random() * answerChoice.length);
// var answerResult = answerChoice[random];

// messageDisplay.textContent = answerResult;

var questionDisplay = document.getElementById("questionDisplay");

var random = Math.floor(Math.random() * questions.length);
var questionResult = questions[random];

questionDisplay.textContent = questionResult;

document.addEventListener("click", function(){
	
})
