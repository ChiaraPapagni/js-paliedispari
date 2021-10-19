let word = prompt('Inserisci una parola');

/**
 * Questa funzione calcola se una parola è palindroma
 * 
 * @param {string} parola - stringa
 * @returns {string} restituisce una frase
 */
function isPalindroma(parola) {
    if (parola.toLowerCase() == parola.split('').reverse().join('').toLowerCase()) {
        return `La parola ${parola} è palindroma`;
    } else {
        return `La parola ${parola} non è palindroma`;
    }
}

document.querySelector('.message').innerHTML = isPalindroma(word);