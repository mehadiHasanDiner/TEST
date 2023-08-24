console.log("first");
console.log("second");
console.log("third");
let num = 0;
const intervalId = setInterval(() => {
  console.log("seventh " + num++);
}, 1000);
console.log("fourth");
console.log("fifth");
console.log("sixth");

setTimeout(() => {
  clearInterval(intervalId);
}, 8000);
