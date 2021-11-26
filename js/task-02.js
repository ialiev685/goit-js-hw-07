"use strict";

var ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
var ulEl = document.querySelector("#ingredients");
console.dir(ulEl);
var items = ingredients.map(function (elem) {
  var liEl = document.createElement("li");
  liEl.textContent = elem;
  return liEl;
});
ulEl.append.apply(ulEl, items);

export {};
