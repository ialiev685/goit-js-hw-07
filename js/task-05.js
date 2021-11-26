"use strict";

var inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", onInput);
var nameOutputEl = document.querySelector("#name-output");
function onInput(event) {
  console.log(event);
  if (event.target.value !== "") {
    nameOutputEl.textContent = event.target.value;
  } else {
    nameOutputEl.textContent = "незнакомец";
  }
}
