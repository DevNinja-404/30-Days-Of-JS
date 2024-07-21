// task12 -  Create a two dimensional array(matrix) and log the entire array to the console

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("The elements of the array are :");
// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(mat[i][j]);
//   }
// }

// Or for better readability we can use :
mat.forEach((row) => console.log(row));

// task13 - Access and log the specific element from the two-dimensional array

mat[2][2] = 200;
console.log("--------------");
mat.forEach((row) => console.log(row));
