let evenOrOdd = prompt('Pari o Dispari?');
let userNumber = Number(prompt('Inserisci un numero da 1 a 5'));

let sum = 0;

/**
 * Questa funzione genera un numero random tra 1 e 5
 *
 * @returns {number} restituisce un numero
 */
function generateRandomIntegerForPc() {
    return Math.floor((Math.random() * 5) + 1);
}

let pcNumber = generateRandomIntegerForPc();

sum = pcNumber + userNumber;

