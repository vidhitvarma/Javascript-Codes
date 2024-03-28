'use strict'
// variables

// DOM Declaration
const player1 = document.querySelector('.player-1');
const player2 = document.querySelector('.player-2');
const score1 = document.querySelector('.player-1 .player__score');
const score2 = document.querySelector('.player-2 .player__score');
const current1 = document.querySelector('.player-1 .current__point');
const current2 = document.querySelector('.player-2 .current__point');

const newGameBtn = document.getElementById("game__new");
const rollDiceBtn = document.querySelector('.roll__dice');
const holdScoreBtn = document.querySelector('.hold__score');
const dice = document.querySelector('.dice');
let scores = [0,0]
let scoreCount = 0


// overlay
const overlay = document.querySelector('.overlay');
const rulesModal = document.querySelector('.rules');
const closeRules = document.querySelector('.close__window');
const openRules = document.querySelector('.rules__button')

//Functions

function toggleRules(){
    overlay.classList.toggle('hide')
    rulesModal.classList.toggle('hide')
}



function changeActivePlayers(){
    player1.classList.toggle('player__active');
    player2.classList.toggle('player__active');
    current1.textContent = 0;
    current2.textContent = 0;
    scoreCount =0;
}

function gameOverScreen(player){
    player.style.backgroundColor='#333'
    player.style.opacity='0.9';
    player.querySelector('.player__header').style.color='#bf2e34';
    rollDiceBtn.disabled = true;
    holdScoreBtn.disabled = true;
}

function addCurrentScore(diceRoll){
    scoreCount += diceRoll;
    if(player1.classList.contains('player__active')){
        current1.textContent = scoreCount;
    }else{
        current2.textContent = scoreCount;
    }
}

// Dom event handlers
newGameBtn.addEventListener('click', function(){
    dice.classList.add('hidden');
    player1.classList.add('player__active')
    player2.classList.remove('player__active')
    score1.textContent = 0
    score2.textContent = 0
    current1.textContent = 0
    current2.textContent = 0
})


rollDiceBtn.addEventListener('click', function(){
    
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src=`./dice/dice-${diceRoll}.png`
    

    if(diceRoll === 1){
        changeActivePlayers();
    }else{
        addCurrentScore(diceRoll);
    }
   
    
})

holdScoreBtn.addEventListener('click', function(){
    if(player1.classList.contains('player__active')){
        scores[0] += scoreCount;
        score1.textContent = scores[0]
        if(scores[0] >= 100){
            gameOverScreen(player1);
        }else changeActivePlayers();
    }else{
        scores[1] += scoreCount
        score2.textContent = scores[1];
        if(scores[1] >= 100){
            gameOverScreen(player2);
        }else changeActivePlayers();
    }
    
});



overlay.addEventListener('click',toggleRules);
closeRules.addEventListener('click',toggleRules);
openRules.addEventListener('click',toggleRules)