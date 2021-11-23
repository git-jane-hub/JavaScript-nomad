const loginInput = document.querySelector("#login-form input");
//const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

// 해당 함수가 호출되면 브라우저가 event로 어떠한 정보를 넘겨주는지 확인
// EventListener의 첫번째 매개변수는 항상 방금 일어난 submit event에 대한 정보
function onLoginSubmit(event) {
  // preventDefault(): 브라우저의 기본 동작을 막음
  event.preventDefault();
  // loginInput 내부에 입력되는 텍스트를 변수에 저장
  //const username = loginInput.value;
  console.log(info);
  /*
  if (username === "") {
    alert("Please write your name.");
    -> html의 required 속성으로
    */
  /*
  } else if (username.length > 15) {
    alert("Your name is  too long.");
  }
  -> html의 maxlength="15"속성으로
  */
}

//loginButton.addEventListener("click", onLoginBtnClick);
// click event가 아닌 submit을 감지(enter 혹은 button을 누르면 감지)
loginForm.addEventListener("submit", onLoginSubmit);
