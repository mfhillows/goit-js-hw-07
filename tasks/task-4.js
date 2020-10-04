
const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
};

const counter = document.querySelector("#value");
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

function decrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

refs.incrementBtn.addEventListener("click", increment);
refs.decrementBtn.addEventListener("click", decrement);

