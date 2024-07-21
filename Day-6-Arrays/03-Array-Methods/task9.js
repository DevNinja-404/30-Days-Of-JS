// use the reduce method to calculate the sum of all numbers in the array and log the result

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = num.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(`The sum is : ${sum}`);
