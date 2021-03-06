let sizeWidth = 30;
let sizeHeight = 30;

const inputNumEl = document.querySelector("input") as HTMLInputElement;

const createBtnEl = document.querySelector(
  "button[data-action='render']"
) as HTMLElement;
const clearBtnEl = document.querySelector(
  "button[data-action='destroy']"
) as HTMLElement;

const boxEl = document.querySelector("#boxes") as HTMLElement;

createBtnEl.addEventListener("click", () => {
  const amount: string = inputNumEl.value;

  createBoxes(amount);
});

clearBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount: string) {
  const count = Number(amount);
  const divs = [...Array(count)]
    // .fill()
    .map((elem) => {
      const div = document.createElement("div");
      let r = Math.random() * (255 - 1) + 1;
      let g = Math.random() * (255 - 1) + 1;
      let b = Math.random() * (255 - 1) + 1;
      div.style.width = sizeWidth + "px";
      div.style.height = sizeHeight + "px";
      div.style.backgroundColor = `rgb(${r},${g},${b})`;
      sizeWidth += 10;
      sizeHeight += 10;
      return div;
    });

  boxEl.append(...divs);
}

function destroyBoxes() {
  //   boxEl.innerHTML = "";    // другой способ
  boxEl.remove();
}

export {};
