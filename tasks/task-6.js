const mainInput = document.querySelector("#validation-input");
mainInput.addEventListener("focus", baseColor);
function baseColor() {
  mainInput.classList.remove("invalid");
  mainInput.classList.remove("valid");
}

mainInput.addEventListener("blur", changeColor);
function changeColor() {
  if (mainInput.value.length == mainInput.dataset.length) {
    mainInput.classList.add("valid");
  } else {
    mainInput.classList.remove("valid");
    mainInput.classList.add("invalid");
  }
}

// Variable 2
// mainInput.addEventListener("blur", changeColor);
// function changeColor() {
//   if (mainInput.value.length > mainInput.dataset.length) {
//     mainInput.classList.add("invalid");
//   } else if (mainInput.value.length < mainInput.dataset.length) {
//     mainInput.classList.add("invalid");
//   } else {
//     mainInput.classList.add("valid");
//     mainInput.classList.remove("invalid");
//   }
// }
