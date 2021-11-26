"use strict";
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };

var sizeWidth = 30;
var sizeHeight = 30;
var inputNumEl = document.querySelector("input");
var createBtnEl = document.querySelector("button[data-action='render']");
var clearBtnEl = document.querySelector("button[data-action='destroy']");
var boxEl = document.querySelector("#boxes");
createBtnEl.addEventListener("click", function () {
  var amount = inputNumEl.value;
  createBoxes(amount);
});
clearBtnEl.addEventListener("click", function () {
  destroyBoxes();
});
function createBoxes(amount) {
  var count = Number(amount);
  var divs = __spreadArrays(Array(count)).map(function (elem) {
    var div = document.createElement("div");
    var r = Math.random() * (255 - 1) + 1;
    var g = Math.random() * (255 - 1) + 1;
    var b = Math.random() * (255 - 1) + 1;
    div.style.width = sizeWidth + "px";
    div.style.height = sizeHeight + "px";
    div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    sizeWidth += 10;
    sizeHeight += 10;
    return div;
  });
  boxEl.append.apply(boxEl, divs);
}
function destroyBoxes() {
  //   boxEl.innerHTML = "";    // другой способ
  boxEl.remove();
}
