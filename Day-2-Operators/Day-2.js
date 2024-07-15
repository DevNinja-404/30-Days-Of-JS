// Day-2 : Operators

// Activity-1 : Arithmetic Operations

// Task-1 :
const num1 = 20,
  num2 = 5;

const sum = num1 + num2;

console.log(`Sum of ${num1} and ${num2} is ${sum}`);

// Task-2 :
const difference = num1 - num2;
console.log(`Difference of ${num1} and ${num2} is ${difference}`);

// Task-3 :
const product = num1 * num2;
console.log(`Product of ${num1} and ${num2} is ${product}`);

// Task-4 :
const quotient = num1 / num2;
console.log(`Quotient of ${num1} and ${num2} is ${quotient}`);

// Task-5 :
const remainder = num1 % num2;
console.log(`Remiander of ${num1} and ${num2} is ${remainder}\n`);

// Activity-2 : Assignment Operators

let data = 20;
console.log(`data = ${data}`);

// Task-6 :
data += 30;
console.log(`data = ${data}`);

// Task-7 :
data -= 40;
console.log(`data = ${data}\n`);

// Activity-3 : Comparision Operators
let x1 = 29;
const x2 = 38;
console.log(`x1 = ${x1}`);
console.log(`x2 = ${x2}\n`);

// Task-8 :
console.log(`x1 > x2 : ${x1 > x2}`);
console.log(`x1 < x2 : ${x1 < x2}\n`);

// Task-9 :
x1 = 38;
console.log(`x1 = ${x1}`);
console.log(`x1 >= x2 : ${x1 >= x2}`);
console.log(`x1 <= x2 : ${x1 <= x2}\n`);

// Task-10 :
const x3 = "29";
x1 = 29;
console.log(`x3 = ${x3}`);
console.log(`x1 = ${x1}`);
console.log(`x1 == x3 : ${x1 == x3}`);
console.log(`x1 === x3 : ${x1 === x3}\n`);

// Activity-4 : Logical Operators
const condition1 = true;
let condition2 = true;

console.log(`condition1 = ${condition1}`);
console.log(`condition2 = ${condition2}\n`);

// Task-11:
if (condition1 && condition2) console.log("Both conditions are true\n");

// Task-12:
condition2 = false;
console.log(`condition2 = ${condition2}`);
if (condition1 || condition2) console.log("Either of the conditions is true\n");

// Task-13:
if (!condition2) console.log(`Condition2 is ${condition2}\n`);

// Activity-5 : Ternary Operator
// Task-14:
let number = 200;
const result = number > 0 ? `${number} is Positive` : `${number} is Neagtive`;
console.log(result);
