//Snack 8:
//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.

//TOOLS
//Prompt to ask user a 4-digit-number
//check lenght of chosen number
//something to divide number into digits (an array?)

const chosen_number = Number(prompt("Scegli un numero di 4 cifre"))
//created array
const number_array = [chosen_number]
//converted array into separeted items
const digit_array = number_array.toString()  
    
    
    let sum_digit_number = 0
    for (let i = 0; i < 4; i++) {            
        sum_digit_number += parseInt(digit_array[i])       
    }
    console.log(sum_digit_number);

