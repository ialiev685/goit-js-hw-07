const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
inputEl.addEventListener("change", onInputChange);

function onInputChange(event) {
  textEl.style.fontSize = event.target.value + "px";
}
