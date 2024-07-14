// Variables and DataTypes :

// Activity-1 : Variable Declaration
// Task-1:
var num = 3;
console.log(`num = ${num}`);

// Task-2:
let name = "Bikash";
console.log(`name = ${name}`);

// Activity-2 : Const Declaration
// Task-3:
const flag = true;
console.log(`flag = ${flag}`);

// Activity-3 : Data Types
// Task-4:
const number = 5;
const str = "Hello World";
const isSatisfied = false;
const cars = {
  modelName: "Porsche",
  number: "NP-XXXX",
};
const arr = ["Apple", null, undefined, 2, true];

console.log(typeof number);
console.log(typeof str);
console.log(typeof isSatisfied);
console.log(typeof cars);
console.log(typeof arr);

// Activity-4 : Reassigning Variables
// Task-5:
let ran = 10;
console.log(`ran = ${ran}`);
ran = 100;
console.log(`After Reassigning, ran = ${ran}`);

// Activity-5 : Understanding Const
// Task-6:
const data = 1000;
console.log(`data = ${data}`);
// data = 0;
// ERROR ON REASSINING : TypeError: Assignment to constant variable.
