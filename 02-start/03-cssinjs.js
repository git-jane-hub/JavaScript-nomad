const title = document.querySelector("div.hello:first-child h1");

// click 하면 두가지 색이 번갈아가면서 변경되게
/*
    curColor와 newColor를 각각 변수로 지정해야하는 이유
    : 
*/
function handleTitleClick() {
  const curColor = title.style.color;
  let newCoolor;
  console.log(curColor);
  if (curColor === "royalblue") {
    newCoolor = "thistle";
  } else {
    newCoolor = "royalblue";
  }
  title.style.color = newCoolor;
}

title.addEventListener("click", handleTitleClick);
