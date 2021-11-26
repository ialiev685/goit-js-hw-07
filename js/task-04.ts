let counterValue: number = 0;

const counterValueEl = document.querySelector("#value") as HTMLElement;

const decBtnEl = document.querySelector("button[data-action='decrement']");
decBtnEl?.addEventListener("click", onDecBtnClick) ;

function onDecBtnClick():void {
  counterValue -= 1;
  counterValueEl.textContent = String(counterValue);
}

const incBtnEl = document.querySelector("button[data-action='increment']");
incBtnEl?.addEventListener("click", onIncBtnClick);

function onIncBtnClick():void {
  counterValue += 1;
  counterValueEl.textContent = String(counterValue) ;
}

export{}