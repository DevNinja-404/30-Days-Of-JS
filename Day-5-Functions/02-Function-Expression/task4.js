// Write a function expression to concatenate two strings and return the result

const strcat = function concateString(str1, str2) {
  return String(str1) + String(str2);
};
console.log(`The concatenated string is ${strcat("Hel", "lo")}`);
console.log(`The concatenated string is ${strcat("Ste", "van")}`);
