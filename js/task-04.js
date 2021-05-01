let counterValue = 0;

const counterValueEl = document.querySelector("#value");

const decBtnEl = document.querySelector("button[data-action='decrement']");
decBtnEl.addEventListener("click", onDecBtnClick);

function onDecBtnClick() {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
}

const incBtnEl = document.querySelector("button[data-action='increment']");
incBtnEl.addEventListener("click", onIncBtnClick);

function onIncBtnClick() {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
}
