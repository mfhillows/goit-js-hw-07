const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const itemFood = document.createElement("li");

const list = ingredients.map((elem) => {
    const itemFood = document.createElement("li");
    itemFood.textContent = elem;
    return itemFood;
});
const ingredientsRef = document.querySelector("#ingredients");

ingredientsRef.append(...list);