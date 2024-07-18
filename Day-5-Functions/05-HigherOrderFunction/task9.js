// Write a higher order function that takes a function and a number ,and calls the function that many times

const lowerOrderFunction = () => {
  console.log("Hello World");
};
const higherOrderFunction = (fn, n) => {
  for (let i = 1; i <= n; i++) {
    fn();
  }
};

higherOrderFunction(lowerOrderFunction, 5); //should print Hello World 5 times
higherOrderFunction(lowerOrderFunction, 100); //should print Hello World 100 times
