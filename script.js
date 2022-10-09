'use strict';

// Proyecr #3 Pig Game

// Selecting elements

// Players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Scores
const score0El = document.querySelector('#score--0'); // Esta es una forma básica de seleccionar un elemento
const score1El = document.getElementById('score--1'); // Con esta forma lo seleccionamos por su ID directamente

// Current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

// Dice
const diceEl = document.querySelector('.dice');

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
let scores, currentScore, activePlayer, playing;

const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    diceEl.classList.add('hidden');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

// 017 Switching the Active Player
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // Si el jugador activo es 0 entonces se cambia el valor a 1. De otra manera se cambia a 0
    player0El.classList.toggle('player--active') // Toggle funciona como un switch. Si la clase no está ahí entonces la agrega. Y si está ahí la remueve.
    player1El.classList.toggle('player--active')
}



// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) { // Mientras que playing sea true el boton sera funcional
        // 1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6 + 1);

        // 2. Display dice
        diceEl.classList.remove('hidden'); // La imagen del dado se despliega.
        diceEl.src = `img/dice-${dice}.png`; // Con .src podemos cambiar dinamicamente la fuente de la imagen

        // 3. Check for rolled 1 
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore; // Con esto guardamos el score para el jugador activo actualmente.
        } else { // Switch player
            switchPlayer();
        }
    }
});

//018 Holding Current Score
btnHold.addEventListener('click', function () {
    if (playing) { // Mientras que playing sea true el boton sera funcional
        // 1. Add current score to active player score.
        scores[activePlayer] += currentScore; // scores[1] = scores[1] + currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if player's score is >=100
        if (scores[activePlayer] >= 100) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden'); // Ocultamos el dado cuando un jugador gana
            // Finish the game
            playing = false; // Con esto los botones dejan de ser funcionales.
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
});

// 019 Resetting the Game
btnNew.addEventListener('click', init);


// Así lo hice yo
// btnNew.addEventListener('click', function () {

//     if (activePlayer === 1) {
//         document.querySelector(`.player--1`).classList.remove('player--winner');
//         document.querySelector(`.player--1`).classList.add('player--active');
//         switchPlayer()
//     } else {
//         document.querySelector(`.player--0`).classList.remove('player--winner');
//         document.querySelector(`.player--0`).classList.add('player--active');
//         document.getElementById(`current--0`).textContent = 0;
//     }
//     score0El.textContent = 0;
//     score1El.textContent = 0;
//     playing = true;
//     scores = [0, 0];
// });