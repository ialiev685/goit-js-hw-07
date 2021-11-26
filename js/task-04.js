"use strict";

var counterValue = 0;
var counterValueEl = document.querySelector("#value");
var decBtnEl = document.querySelector("button[data-action='decrement']");
decBtnEl === null || decBtnEl === void 0
  ? void 0
  : decBtnEl.addEventListener("click", onDecBtnClick);
function onDecBtnClick() {
  counterValue -= 1;
  counterValueEl.textContent = String(counterValue);
}
var incBtnEl = document.querySelector("button[data-action='increment']");
incBtnEl === null || incBtnEl === void 0
  ? void 0
  : incBtnEl.addEventListener("click", onIncBtnClick);
function onIncBtnClick() {
  counterValue += 1;
  counterValueEl.textContent = String(counterValue);
}
