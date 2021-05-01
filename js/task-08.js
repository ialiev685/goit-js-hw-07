let sizeWidth = 30;
let sizeHeight = 30;

const inputNumEl = document.querySelector("input");

const createBtnEl = document.querySelector("button[data-action='render']");
const clearBtnEl = document.querySelector("button[data-action='destroy']");

const boxEl = document.querySelector("#boxes");

createBtnEl.addEventListener("click", () => {
  const amount = inputNumEl.value;

  createBoxes(amount);
});

clearBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const divs = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    let r = Math.random() * (255 - 1) + 1;
    let g = Math.random() * (255 - 1) + 1;
    let b = Math.random() * (255 - 1) + 1;
    div.style.width = sizeWidth + "px";
    div.style.height = sizeHeight + "px";
    div.style.backgroundColor = `rgb(${r},${g},${b})`;
    sizeWidth += 10;
    sizeHeight += 10;
    divs.push(div);
  }
  boxEl.append(...divs);
}

function destroyBoxes() {
  //   boxEl.innerHTML = "";    // другой способ
  boxEl.remove();
}
