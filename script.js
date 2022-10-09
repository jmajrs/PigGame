'use strict';

// Proyecr #3 Pig Game

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); // Esta es una forma básica de seleccionar un elemento
const score1El = document.getElementById('score--1'); // Con esta forma lo seleccionamos por su ID directamente

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
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
    } else {
        // 017 Switching the Active Player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0; // Si el jugador activo es 0 entonces se cambia el valor a 1. De otra manera se cambia a 0
        player0El.classList.toggle('player--active') // Toggle funciona como un switch. Si la clase no está ahí entonces la agrega. Y si está ahí la remueve.
        player1El.classList.toggle('player--active')
    }
});
