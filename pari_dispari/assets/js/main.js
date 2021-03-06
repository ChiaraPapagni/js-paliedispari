//seleziono elementi dalla DOM
const userNumber = document.getElementById('user_number');
const evenOrOdd = document.getElementById('even_odd');

const playButton = document.getElementById('play');

let pcNumber = 0;
let sum = 0;
let winner;

//al click genera dati numero pc 
//controlla pari o dispari
//controlla vincitore
playButton.addEventListener('click', function () {

    //controllo se il numero inserito è maggiore di 5 o uguale a 0
    if (parseInt(userNumber.value) > 5 || parseInt(userNumber.value) == 0) {
        alert('Devi inserire un numero tra 1 e 5');
        document.querySelector('.message').innerHTML = ` `;
        document.querySelector('.winner').innerHTML = ` `;
    } else {

        pcNumber = generateRandomIntegerForPc();

        sum = pcNumber + parseInt(userNumber.value);

        //controllo il vincitore
        if (isEven(sum) && evenOrOdd.value == 'pari') {
            winner = `Vince l'utente!`;
        } else if (!isEven(sum) && evenOrOdd.value == 'dispari') {
            winner = `Vince l'utente!`;
        } else {
            winner = `Vince il computer!`;
        }

        document.querySelector('.message').innerHTML =
            `Il computer ha scelto il numero ${pcNumber} - La somma totale è ${sum}`;
        document.querySelector('.winner').innerHTML = winner;

    }

});

/**
        * Questa funzione genera un numero random tra 1 e 5
        *
        * @returns {number} restituisce un numero
        */
function generateRandomIntegerForPc() {
    return Math.floor((Math.random() * 5) + 1);
}


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