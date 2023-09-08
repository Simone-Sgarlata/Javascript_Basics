let counterElement = document.createElement("div"); // creo l'elemento counterElement per visualizzare il counter
counterElement.textContent = "0"; // assegno un valore al counterElement
document.body.appendChild(counterElement); // aggiungo l'elemento counterElement al corpo della pagina per renderlo visibile
counterElement.id = "counter"; // aggiungo un id all'elemento counterElement per assegnargli lo stile nel file css

const container = document.createElement("div"); // creo l'elemento container per contenere il counter
document.body.appendChild(container); // aggiungo l'elemento container al corpo della pagina per renderlo visibile
container.id = "container"; // aggiungo un id all'elemento container per assegnargli lo stile nel file css

const incrementButton = document.createElement("button"); // creo l'elemento incrementButton per aumentare il counter
incrementButton.textContent = "+"; // assegno un valore al bottone incrementButton
document.body.appendChild(incrementButton); // aggiungo l'elemento incrementButton al corpo della pagina per renderlo visibile
incrementButton.id = "increment"; // aggiungo un id all'elemento incrementButton per assegnargli lo stile nel file css

const decrementButton = document.createElement("button");
decrementButton.textContent = "-"; // assegno un valore al bottone decrementButton
document.body.appendChild(decrementButton); // aggiungo l'elemento countdecrementButtonerElement al corpo della pagina per renderlo visibile
decrementButton.id = "decrement"; // aggiungo un id all'elemento decrementButton per assegnargli lo stile nel file css

const resetButton = document.createElement("button");
resetButton.textContent = "RESET"; // assegno un valore al bottone resetButton
document.body.appendChild(resetButton); // aggiungo l'elemento resetButton al corpo della pagina per renderlo visibile
resetButton.id = "reset"; // aggiungo un id all'elemento resetButton per assegnargli lo stile nel file css

container.appendChild(incrementButton); // aggiungo l'elemento incrementButton come figlio dell'elemento container
//container.appendChild(counterElement); // aggiungo l'elemento counterElement come figlio dell'elemento container
container.appendChild(decrementButton); // aggiungo l'elemento decrementButton come figlio dell'elemento container
container.appendChild(resetButton); // aggiungo l'elemento resetButton come figlio dell'elemento container

let counter = 0; // inizializzo la variabile counter a 0

// aggiungere un addEventListener che al click aumenti il counter di 1
incrementButton.addEventListener("click", () => {
  counter++;
  counterElement.textContent = counter;
});

// aggiungere un addEventListener che al click resetti a 0 il counter
resetButton.addEventListener("click", () => {
  counter = 0;
  counterElement.textContent = counter;
});

// aggiungere un addEventListener che al click diminuisca il counter di 1
decrementButton.addEventListener("click", () => {
  counter--;
  counterElement.textContent = counter;
});
