const inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", onInput);

const nameOutputEl = document.querySelector("#name-output");

function onInput(event) {
  if (event.target.value !== "") {
    nameOutputEl.textContent = event.target.value;
  } else {
    nameOutputEl.textContent = "незнакомец";
  }
}
