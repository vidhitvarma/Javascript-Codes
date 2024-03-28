'use strict'
/*Code start*/
// Var declaration
let score = 20;
let highScore = 0;

//DOM vars
let randomNumber = Math.floor(Math.random() * 20) + 1;
const questionMark = document.querySelector('.question__mark')
const submitButton = document.querySelector('.submit__button')
const outputText = document.querySelector('.text')
const scoreOut = document.querySelector('.score')
const highScoreOut = document.querySelector('.highscore')
const gameReset = document.querySelector('.reset_btn')

// Functions

function displayScore(messageToDisplay){
    outputText.textContent = messageToDisplay;
    score--;
    scoreOut.textContent = score;
}

function gameLost(){
    outputText.textContent = 'You lost the game!'
    scoreOut.textContent = 0;
    submitButton.disabled=true;
}


submitButton.addEventListener('click',function(){
    const inputNumber = Number(document.getElementById('input__number').value);
    if(!inputNumber){
        outputText.textContent = "no number"
    }
    else{
        if(randomNumber == inputNumber){
            outputText.textContent = 'Congrats!!!';
            document.querySelector('body').style.backgroundColor = 'green';
            questionMark.style.padding = '1rem 1.5rem'
            if(highScore < score) highScore = score;
            highScoreOut.textContent = highScore
            questionMark.textContent = randomNumber
        }
        else if(inputNumber !== randomNumber){
            if(score > 1){
                inputNumber > randomNumber ? displayScore("Too High...") : displayScore("Too Low...");
            }
            else{
                gameLost();
            }
        }
    }   
});

gameReset.addEventListener('click', function(){
    score = 20;
    scoreOut.textContent = score;
    randomNumber = Math.floor(Math.random() * 20) + 1;
    questionMark.textContent = "?"
    document.querySelector('body').style.backgroundColor='#222';
    document.getElementById('input__number').value='';
    outputText.textContent='Start Guessing.....'
    questionMark.style.padding = 0;
});