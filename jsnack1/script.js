//Snack 4:
//In un array sono contenuti i nomi degli invitati 
//chiedi all’utente il suo nome 
//e comunicagli 
//se può partecipare o no alla festa.

//TOOLS:
//Array with guest names
//Prompt to ask a guest his name
//loop and check(if)
//output with result

const guest_list = ["Giorgio", "Fabio", "Luca", "Giulia", "Chiara"]
const guest = prompt("Il suo nome, prego?")

let check = false

for (let i = 0; (i < guest_list.length && check == false); i++) {
    if (guest == guest_list[i]) {
        check = true
        document.querySelector(".text").innerHTML = `Prego, ${guest}, puoi entrare!`    
    } else {
        document.querySelector(".text").innerHTML = `Mi dispiace, ${guest}, non puoi entrare!` 
    }
}