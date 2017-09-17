var trueButton = document.getElementById("true");
var falseButton = document.getElementById("false");
var answer = "True";

trueButton.addEventListener("click", function() {
	if (this.textContent === answer) {
		alert("Correct!");
	} else {
		alert("Try Again!");
	}
})

falseButton.addEventListener("click", function() {
	if (this.textContent === answer) {
		alert("Correct!");
	} else {
		alert("Try Again!");
	}
})

