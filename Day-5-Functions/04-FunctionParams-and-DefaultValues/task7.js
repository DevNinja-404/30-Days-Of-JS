// Write a function that takes two parameters and returns their product. Provide a default value for the second parameter

const findProduct = (num1, num2 = 10) => num1 * num2;

console.log(`The product is : ${findProduct(2)}`);
console.log(`The product is : ${findProduct(2, 50)}`);
