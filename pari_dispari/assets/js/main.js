//let evenOrOdd = prompt('Pari o Dispari?');
//let userNumber = Number(prompt('Inserisci un numero da 1 a 5'));

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

/**
 * Questa funzione controlla se un numero è pari o dispari
 *
 * @param {number} number - numero
 * @returns {boolean} restituisce true o false
 */
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

if (isEven(sum) && evenOrOdd.toLowerCase() == 'pari') {
    console.log(`Vince l'utente`);
} else if (!isEven(sum) && evenOrOdd.toLowerCase() == 'dispari') {
    console.log(`Vince l'utente`);
} else {
    console.log(`Vince il computer`);
}


console.log(`L' utente ha scelto: ${evenOrOdd}`);
console.log('Utente: ' + userNumber);
console.log('Computer: ' + pcNumber);
console.log('Somma totale: ' + sum);
