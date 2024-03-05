let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const guessSlot = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess) || guess<1 || guess>100) {
        alert(`Please enter a correct number`)
    }
    else {
        prevGuess.push();
        
        if(numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed it right!`)
        endGame();
    } else if(guess < randomNumber) {
        displayMessage(`Guess is too low`)
    } else {
        displayMessage(`Guess is too high`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(guess) {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(guess) {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        playGame = true;
    });
}