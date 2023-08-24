const name = "Hero";
const age = 34;
const personDetail = { name, age };
// console.log(person);

const adventurer = { name: "Alice", cat: { name: "Lucy" } };
const ratName = adventurer?.rat?.name;
// console.log(ratName);

let person = null;
console.log(typeof person);
console.log(person ? person : "person is null");

const obj = { a: 1 };
console.log(Object.keys(obj).length === 0);
