// Write a function expression to find the maximum of two numbers and log the result to the console

// A function expression in JavaScript is a way to define a function. Unlike a function declaration, a function expression allows you to create a function and assign it to a variable. Function expressions can be named or anonymous, and they can be used to create immediately invoked function expressions (IIFE).

const findMax = function (num1, num2) {
  num1 > num2
    ? console.log(`${num1} is greatest.`)
    : console.log(`${num2} is greatest.`);
};

findMax(2, 3);
findMax(5, 3);
