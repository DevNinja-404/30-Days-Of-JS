// use the filter method to create a new array with only the even numbers and log the array to the console

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = num.filter((eachNum) => eachNum % 2 === 0);
console.log(evenNum);
