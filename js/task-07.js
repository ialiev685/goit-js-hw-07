"use strict";

var inputEl = document.querySelector("#font-size-control");
var textEl = document.querySelector("#text");
inputEl.addEventListener("input", onInputChange);
function onInputChange(event) {
  textEl.style.fontSize = event.target.value + "px";
}
