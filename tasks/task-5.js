const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", addName);
function addName(event) {
  if (event.currentTarget.value.length === 0) {
    outputName.textContent = "незнакомец";
  } else {
    outputName.textContent = event.currentTarget.value;
  }
}
