// Write a function that takes a person's name and age and returns a greeting messgae.Provide a default value for the age.

const greet = (name, age = 20) => {
  console.log(`Good Night Mr.${name} of age ${age}`);
};

greet("Ram");
greet("Ram", 100);
