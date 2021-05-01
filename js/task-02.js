const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ulEl = document.querySelector("#ingredients");

const items = ingredients.map((elem) => {
  const liEl = document.createElement("li");
  liEl.textContent = elem;
  return liEl;
});

ulEl.append(...items);
