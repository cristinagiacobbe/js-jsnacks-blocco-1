//Snack 5:
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

//TOOLS:
//Array
//Prompt to ask user to choose a number
//loop (six times)
//condition (if)
//unshift/push


const number_box = []


for (let i = 0; i < 6; i++) {
    const number_chosen = Number(prompt("Scegli un numero"))
    if ( number_chosen % 2 !== 0) {
      number_box.push(number_chosen) 
      console.log(number_box);
    }

}