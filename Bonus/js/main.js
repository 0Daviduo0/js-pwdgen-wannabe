// Richiesta nome
let nome = prompt("inserisci qui il tuo nome");

console.log(nome);

// Richiesta cognome
let cognome = prompt("inserisci qui il tuo cognome");

console.log(cognome);

// Richiesta colore preferito
let colore = prompt("inserisci qui il tuo colore preferito");

console.log(colore);

// Print password
document.getElementById("password_container").innerHTML = `${nome}${cognome}${colore}21`;
