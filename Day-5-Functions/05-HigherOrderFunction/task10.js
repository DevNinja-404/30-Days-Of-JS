// Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result

const addTen = (num) => num + 10;

const multiplyWith10 = (num) => num * 10;

const addTenAndMultiplyWithTen = (fn1, fn2, value) => {
  console.log(`The result is : ${fn2(fn1(value))}`);
};
addTenAndMultiplyWithTen(addTen, multiplyWith10, 5);
