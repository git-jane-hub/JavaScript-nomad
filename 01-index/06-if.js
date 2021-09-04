//const age = prompt("How old are you?", 0);
const age = parseInt(prompt("How old are you?", 0));
console.log(age);
console.log(typeof age); // string

if (isNaN(age)) {
  alert("Try again.");
} else if (age < 20) {
  alert("You are too young.");
} else {
  alert("You are " + age + ". So you can drink.");
}
