const title = document.querySelector("div.hello:first-child h1");

// click 하면 두가지 색이 번갈아가면서 변경되게 작성
/*
  curColor와 newColor 모두 title의 색을 나타냄
  - title의 색(curColor)이 royalblue일 때, 
    newColor 는 thistle로 변경
  - title의 색(curColor)이 royalblue가 아닐 때, 
    newColor 는 royalblue로 변경
  - title의 색에 newColor 대입
*/
function handleTitleClick() {
  const curColor = title.style.color;
  let newColor;
  console.log(curColor);
  if (curColor === "royalblue") {
    newColor = "thistle";
  } else {
    newColor = "royalblue";
  }
  title.style.color = newColor;
}

title.addEventListener("click", handleTitleClick);
