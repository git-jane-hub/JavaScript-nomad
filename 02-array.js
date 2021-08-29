const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";
const dayOfWeek1 = mon + tue + wed + thu + fri + sat + sun;
console.log(dayOfWeek1);
const dayOfWeek2 = [mon, tue, wed, thu, fri, sat, sun];
console.log(dayOfWeek2);
const dayOfWeek3 = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeek3);
// 해당 인덱스의 데이터 받아오기(0부터)
console.log(dayOfWeek3[4]);
// array에 데이터 추가(array명.push(데이터);)
dayOfWeek3.push("sum");
console.log(dayOfWeek3);
// 특정 인덱스 데이터 변경
dayOfWeek3[6] = "sun";

const array = [1, 10, "hello", true, false, null, undefined, "jane"];
console.log(array);
