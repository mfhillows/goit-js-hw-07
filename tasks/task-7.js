const fontSizeHeight = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
const fontSizeChange = function () {
  text.style.fontSize = `${fontSizeHeight.value}px`;
};

fontSizeHeight.addEventListener("input", fontSizeChange);
