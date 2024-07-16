// WAP to print the numbers from 1 to 10 ,but skip the number 5

console.log("The numbers from 1 to 10 skipping 5 is :");
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i);
}
