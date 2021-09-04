/* 반복해서 사용가능한 코드 조각 */
function sayHello1() {
  console.log("Hello, My name is ");
}
sayHello1();
sayHello1("jane");

/*  
argument - function을 실행하는 동안 어떠한 정보를 function에게 보내는 것
*/
function sayHello2(name) {
  console.log("Hello, My name is " + name);
}
sayHello2();
sayHello2("jane");

function sayHello3(name, age) {
  console.log("Hello, My name is " + name);
  console.log("I am " + age);
}
sayHello3("jane", 28);

function plus(a, b) {
  console.log(a + b);
}

plus();
plus(1, 1);

// 험수를 호출하고
function minusFive(num) {
  console.log(num - 5);
}
minusFive(5, 4, 3, 2, 1);

const aboutMe = {
  name: "jane",
  comment: function (otherPerson) {
    console.log("Hello! " + otherPerson + ", nice to meet you!");
  },
};
console.log(aboutMe);
console.log(aboutMe.name);
aboutMe.comment("Tommy");
// console.log 괄호내부는 33번 라인에서 실행되었지만, 40번 라인은 실행안됨 - console.log 로 출력x
console.log(aboutMe.comment("John"));

const calculator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  multi: function (a, b) {
    console.log(a * b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};
calculator.add(10, 2);
calculator.minus(10, 2);
calculator.multi(10, 2);
calculator.div(10, 2);
calculator.powerOf(10, 2);
