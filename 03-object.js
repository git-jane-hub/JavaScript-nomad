const playerName = "jane";
const playerPoints = 121212;
const playerPretty = true;
const playerFat = "nope";

// array로 작성하면 해당 데이터들이 무슨 역할을 하는지 알 수 없음(대괄호)
const player1 = ["jane", 121212, true, "nope"];

// object를 작성하면 데이터의 의미를 알 수 있음(중괄호)
const player2 = {
  name: "jane",
  points: 121212,
  pretty: true,
  fat: "nope",
};
console.log(player2);
// 작성하는 두가지 방법 - 같은 결과
console.log(player2.name);
console.log(player2["name"]);

// const 로 작성된 object 내부의 속성을 변경해도 에러 발생하지 않음
console.log(player2.points);
player2.points = 343434;
console.log(player2.points);

// 속성을 추가
player2.lastName = "choi";
console.log(player2);
