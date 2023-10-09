/***
const boxes = document.querySelectorAll('.box');
const body = document.querySelector("body");
boxes.forEach(function (box) {
	box.addEventListener('click', function (eve) {
		console.log(eve);
		console.log(eve.target);
		if (eve.target.id === 'grey') {
			body.style.background = eve.target.id;
		}
		if (eve.target.id === 'red') {
			body.style.background = eve.target.id;
		}
		if (eve.target.id === 'blue') {
			body.style.background = eve.target.id;
		}
		if (eve.target.id === 'purple') {
			body.style.background = eve.target.id;
		}
		if (eve.target.id === 'yellow') {
			body.style.background = eve.target.id;
		}
	});
});
**/

// const form = document.querySelector('form')

// form.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	const height = parseInt(document.querySelector('#height').value);
// 	const weight = parseInt(document.querySelector('#weight').value);
// 	const results = document.querySelector('#results');

// 	if (height === '' || height < 0 || isNaN(height)) {
// 		results.innerHTML = `Please give a valid height ${height}`
// 	} else if (weight === '' || weight < 0 || isNaN(weight)) {
// 		results.innerHTML = `Please give a valid weight ${weight}`
// 	}
// 	else {
// 		const bmi = (weight / ((height * height) / 10000)).toFixed(2);
// 		results.innerHTML = `<span> ${bmi} </span>`;
// 		if (bmi <= 18.6) {
// 			precau.innerHTML = 'Under weight';
// 		}
// 		else if (bmi > 18.6 && bmi <= 24.9) {
// 			precau.innerHTML = 'Normal weight';
// 		}
// 		else {
// 			precau.innerHTML = 'Over weight';
// 		}
// 	}


	
// })


// const clock = document.getElementById('#clock')
// setInterval(function () {
// 	let date = new Date();
// 	// console.log(date.toLocaleTimeString());
// 	clock.innerHTML = date.toLocaleTimeString();
// }, 1000)

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const UserInput = document.querySelector('#guessField');
const guessSlot = document.querySelector
	('.guesses');
const remaining = document.querySelector
	('.lastResult');
const LowOrHigh = document.querySelector
	('.lowOrHi');
const startOver = document.querySelector
	('.resultParse');


const p = document.createElement('p');
let prevGuess = []
let playGame = true;
let numGuess = 1;

if (playGame) {
	submit.addEventListener('click', function (e) {
		e.preventDefault();
		const guess = parseInt(UserInput.value);
		console.log(guess);
		validateGuess(guess);
	});
}

function validateGuess(guess) {
	if (isNaN(guess)) {
		alert('Please enter a valid number.');
	} else if (guess < 1) {
		alert('Please enter a number more than 1.');
	} else if (guess > 100) {
		alert('Please enter a number less than 100.');
	} else {
		prevGuess.push(guess);
		if (numGuess === 10) {
			displayGuess(guess);
			displayMessage(`Game Over. Random number was ${randomNumber}`);
			endGame();
		}
		else {
			displayGuess(guess);
			checkGuess(guess);
		}
	}
}

function checkGuess(guess) {
	if (guess === randomNumber) {
		displayMessage(`You guessted right`);
		endGame();
	} else if(guess < randomNumber) {
		displayMessage(`Number is Too low`);
	} else if (guess > randomNumber) {
		displayMessage(`Number is Too high`);
	}
}

function displayGuess(guess) {
	UserInput.value = '';
	guessSlot.innerHTML += `${guess}    `;
	numGuess++;
	remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(guess){
	LowOrHigh.innerHTML = `<h2>${guess}</h2>`

}

function endGame() {
	UserInput.value = '';
	UserInput.setAttribute('disabled', '');
	p.classList.add('button');
	p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
	startOver.appendChild(p);
	playGame = false;
	newGame();
}


function newGame() {
	const newGameBtn = document.querySelector('#newGame');
	newGameBtn.addEventListener('click', function (e) {
		randomNumber = parseInt(Math.random() * 100 + 1);
		prevGuess = []
		numGuess = 1;
		guessSlot.innerHTML = ''
		remaining.innerHTML = `${10 - numGuess}`;
		UserInput.removeAttribute('disabled');
		startOver.removeChild(p);
		playGame = true;
	})
}