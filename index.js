let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");
let counter = document.getElementById("counter");
let count = 0;

// aggiungere un addEventListener che al click aumenti il counter di 1
incrementButton.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// aggiungere un addEventListener che al click resetti a 0 il counter
resetButton.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// aggiungere un addEventListener che al click diminuisca il counter di 1
decrementButton.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
