/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let randomNumber, 
    min = 1, 
    max = 10, 
    chances = 3;

const UIgame = document.querySelector('#game'),
    UIinputGuess = document.getElementById('input-guess'),
    UIminimum = document.querySelector('.min-num'),
    UImaximum = document.querySelector('.max-num'),
    UIresult = document.querySelector('#result'),
    UIguessButton = document.querySelector('#submit');

UIminimum.textContent = min;
UImaximum.textContent = max;

getRandomNumber();

function getRandomNumber(){
    randomNumber = Math.floor(Math.random() * (max-min + 1)+min);
    console.log(randomNumber);
}

game.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
});

UIguessButton.addEventListener('click', submitGuess);

function submitGuess(e){
    let guess = parseInt(UIinputGuess.value);

    if(guess < min || guess > max || isNaN(guess)){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    if(guess === randomNumber){
        gameOver(true, `${guess} is correct, YOU WIN!`);
    }else{
        chances--;
        if(chances <= 0){
            gameOver(false, `YOU LOST! The correct number was ${randomNumber}. Play again!`);
        } else {
            setMessage(`${guess} is not correct, ${chances} guesses left`);
        }
    }
}

function gameOver(won, message){
    UIinputGuess.disabled = true;
    setMessage(message, won ? 'green' : 'red');
    UIguessButton.textContent = 'Play Again';
    UIguessButton.className += ' play-again';
}

function setMessage(message, color){
    UIresult.textContent = message;
    UIresult.style.color = color;
    UIresult.style.borderColor = color;
}
