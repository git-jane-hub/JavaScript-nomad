/* function이 작업을 하고 결과를 알려줘야한다면 return을 사용 */
const myAge = 100;
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}
const myKrAge = calculateKrAge(myAge);
console.log(myKrAge); // 102

// return 뒤에 적은 값을 반환함
const myAge2 = 100;
function calculateKrAge2(ageOfForeigner) {
  ageOfForeigner + 2;
  return "Hello";
}
const myKrAge2 = calculateKrAge2(myAge2);
console.log(myKrAge2); // Hello

const calculatorr = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
const plusResult = calculatorr.plus(2, 3);
const minusResult = calculatorr.minus(plusResult, 10);
const timesResult = calculatorr.times(10, minusResult);
const divideResult = calculatorr.divide(timesResult, plusResult);
const powerResult = calculatorr.power(divideResult, minusResult);
