const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  // loginInput 내부에 입력되는 텍스트를 변수에 저장
  const username = loginInput.value;
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

loginButton.addEventListener("click", onLoginBtnClick);
