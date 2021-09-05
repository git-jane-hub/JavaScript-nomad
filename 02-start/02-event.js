const title = document.getElementsByClassName("title")[0];
console.log(title);

function handleTitleClick() {
  alert("Title was clicked!");
  title.style.color = "royalblue";
}

function mouseTitleEnter() {
  title.innerHTML = "Mouse is here!";
}

function mouseTitleLeave() {
  title.innerHTML = "Where is my mouse!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "thistle";
}

function handleWindowCopy() {
  alert("Please don't copy that...");
}

function handleWindowOffline() {
  alert("SOS!!! I need Wi-fi...");
}

function handleWindowOnline() {
  alert("YOU CAN USE FREE-INTERNET!!");
}

console.dir(title);

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", mouseTitleEnter);
title.addEventListener("mouseleave", mouseTitleLeave);

title.removeEventListener("click", handleTitleClick);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
