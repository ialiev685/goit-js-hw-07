const listEl = document.querySelector("#categories");
console.log(`В списке ${listEl.children.length} категории.`);

console.log("...");

console.log(`Категория ${listEl.children[0].firstElementChild.textContent}`);
console.log(
  `Количество эелементов ${listEl.children[0].lastElementChild.children.length}`
);

console.log("...");

console.log(`Категория ${listEl.children[1].firstElementChild.textContent}`);
console.log(
  `Количество эелементов ${listEl.children[1].lastElementChild.children.length}`
);

console.log("...");

console.log(`Категория ${listEl.children[2].firstElementChild.textContent}`);
console.log(
  `Количество эелементов ${listEl.children[2].lastElementChild.children.length}`
);
