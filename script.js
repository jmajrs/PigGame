'use strict';

// Proyecr #3 Pig Game

// Selecting elements
const score0El = document.querySelector('#score--0'); // Esta es una forma básica de seleccionar un elemento
const score1El = document.getElementById('score--1'); // Con esta forma lo seleccionamos por su ID directamente
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


