const inputEl = document.querySelector("#name-input") as HTMLElement;
inputEl.addEventListener("input", onInput);

const nameOutputEl = document.querySelector("#name-output") as HTMLElement;



function onInput(event:any) {
  console.log(event);
  if (event.target.value !== "") {
    nameOutputEl.textContent = event.target.value;
  } else {
    nameOutputEl.textContent = "незнакомец";
  }
}

export{}