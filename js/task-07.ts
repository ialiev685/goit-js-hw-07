const inputEl = document.querySelector("#font-size-control") as HTMLElement;
const textEl = document.querySelector("#text") as HTMLElement;
inputEl.addEventListener("input", onInputChange);

function onInputChange(event:any) {
  textEl.style.fontSize = event.target.value + "px";
}

export{}