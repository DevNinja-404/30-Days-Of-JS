// WAP to print the following pattern using nested for loop:
// *
// **
// ***
// ****
// *****

console.log("The pattern is :");
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
}
