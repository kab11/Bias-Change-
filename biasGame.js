var messageDisplay = document.getElementById("messageDisplay");
var choice;
var answerChoice = [
	"Yes",
	"No",
	"Depends"
]

var random = Math.floor(Math.random() * answerChoice.length);
var answerResult = answerChoice[random];



messageDisplay.textContent = answerResult;


