const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputAdd);

function onInputAdd(event) {
  const lenString = Number(inputEl.dataset.length);

  if (event.target.value.length === lenString) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
