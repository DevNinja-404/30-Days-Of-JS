// WAP to find the largest of the three numbers using nested if-else statement

const num1 = 1,
  num2 = 5,
  num3 = 3;

if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is greatest`);
} else if (num2 > num3) {
  console.log(`${num2} is greatest`);
} else {
  console.log(`${num3} is greatest`);
}
