function Quiz (questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
		this.score++;
	}

	this.questionIndex++;
}






function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}






function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

		showProgress();
	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}


function showProgress() {
	var currentQuestionNumber = quiz.questionIndex + 1;
	var element = document.getElementById('progress');
	element.innerHTML = "Questions " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
	var gameOverHTML = "<h1>Result</h1>";
	gameOverHTML += "<h2 id='score'> Your Scores: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("What is the largest planet in our solar system?", ["Earth", "Saturn", "Jupiter", "Uranus"], "Jupiter"),
	new Question("Which planet has the most moons?", ["Jupiter", "Saturn", "Mars", "Neptune"], "Jupiter"),
	new Question("What is the farthest human-made object from Earth?", ["The Moon", "The International Space Station", "Voyager 1", "The Sun"], "Voyager 1"),
	new Question("Which gas giant has a ring system?", ["Uranus", "Neptune", "Saturn", "Jupiter"], "Saturn"),
	new Question("What is the hottest planet in our solar system?", ["Mercury", "Venus", "Mars", "Earth"], "Venus"),
	new Question("How many planets are in our solar system?", ["7", "9", "5", "10"], "8"),
	new Question("Which planet do we call 'the Red Planet'?", ["Jupiter", "Saturn", "Uranus", "Mars"], "Mars"),
	new Question("What is the smallest planet in our solar system?", ["Mercury", "Venus", "Earth", "Mars"], "Mercury"),
];

var quiz = new Quiz (questions);

populate();