const player0El = document.querySelector('.player0');
const player1El = document.querySelector('.player1');
const score0El = document.querySelector('#score0');
const score1El = document.getElementById('score1');
const current0El = document.getElementById('current0');
const current1El = document.getElementById('current1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.buttonNew');
const btnRoll = document.querySelector('.buttonRoll);
const btnHold = document.querySelector('.buttonHold');

let scores, currentScore, activePlayer, playing;