const listEl = document.querySelectorAll("#categories .item");
console.log(`В списке ${listEl.length} категории:`);

listEl.forEach((elem) => {
  console.log("");
  console.log(`Категория ${elem.firstElementChild.textContent}`);
  console.log(`Количество эелементов ${elem.lastElementChild.children.length}`);
});
