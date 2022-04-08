/* PROCEDIMENTO DELL'ESERCIZIO

  1. Scrivere una linea di codice che visualizzi sulla pagina numeri da 1 a 100 dentro un container con le dovute specifiche
  2. Per i multipli di 3 stampare Fizz,
  3. Per i multipli di 5 stampare Buzz,
  . Per i multi di 3 e 5 stampare FizzBuzz,
  . Creare stili differenti per le 3 situazioni sovrastanti.
  . Dichiarare le variabili,
  . Creare un ciclo For con start 1 e limite 100,
  . Aggiungere le condizioni IF per i multipli con aggiunta classi,
  . Scrivere dentro il container nel DOM i vari div.
*/



// salvare il container (o qualsiasi classe)
const container = document.querySelector ('.container');
console.log(container);

// dichiarare dei valori o altro che a noi interessa affinchè possano servirci per poterli poi visualizzare
const limitCounter = 101
const boxThree = 3 
const boxFive = 5
const boxFinal = 101

//specifica di calcolo
for (let i = 1; i <= limitCounter; i++){