let randomNumber;

getRandomNumber();

function getRandomNumber(){
    randomNumber = Math.floor(Math.random() * 10 + 1);
    console.log(randomNumber);
}

document.getElementById('submit').addEventListener('click', submitGuess);

function submitGuess(e){
    const UIinputGuess = document.getElementById('input-guess');


}