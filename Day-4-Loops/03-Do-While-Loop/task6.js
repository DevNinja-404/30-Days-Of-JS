// WAP to find the factorial of a number using the do...while loop

const num = 5;
let temp = num;
let fact = 1;
do {
  fact *= temp;
  temp--;
} while (temp >= 2);

console.log(`The factorial of ${num} is ${fact}.`);
