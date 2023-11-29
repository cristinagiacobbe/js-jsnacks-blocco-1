//Snack 8:
//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

//TOOLS
//Prompt to ask user a 4-digit-number
//check lenght of chosen number
//something to divide number into digits (an array?)

const chosen_number = Number(prompt("Scegli un numero di 4 cifre"))

const number_array = [chosen_number]
console.log(number_array);

const digit_array = number_array.toString()
console.log(digit_array);
console.log(digit_array.length);

for (let i = 0; i < 10; i++) {
    
if (digit_array.length !== 4) {
    alert(`Ti avevo chiesto un numero di 4 cifre, non di ${digit_array.length} ! Riprova`)
    const chosen_number = Number(prompt("Scegli un numero di 4 cifre"))
}
}