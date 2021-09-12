const title = document.querySelector("div.hello:first-child h1");

/*
    03-cssinjs.js에서 변수를 지정해 
    title을 클릭하면 해당 변수에 대입된 색이 변경된 것과 다르게
    title을 클릭하면 클래스 이름을 바꿔줌 - 클래스 이름에 다른 색이 적용되어있음
    더 간결한 JS 코드로 같은 효과를 얻을 수 있음
    하지만, h1 태그에 또 다른 클래스명이 있으면 해당 클래스명이 없어질 수 있음
    function handleTitleClick() {
        const clickedClass = "clicked";
        if (title.className === clickedClass) {
            title.className = "";
        } else {
            title.className = clickedClass;
        }
    }
    function handleTitleClick() {
        const clickedClass = "clicked";
        if (title.classList.contains(clickedClass)) {
            title.classList.remove(clickedClass);
        } else {
            title.classList.add(clickedClass);
        }
    }
    */
function handleTitleClick() {
  title.classList.toggle("clicked");
}

title.addEventListener("click", handleTitleClick);
