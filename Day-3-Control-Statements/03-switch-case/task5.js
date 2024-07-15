// WAP that uses a switch case to assign a grade('A','B','C','D','E','F') based on the score and log the grade to the console

const marks = 96;

switch (true) {
  case marks >= 90 && marks <= 100:
    console.log("Grade : A");
    break;
  case marks >= 80 && marks < 90:
    console.log("Grade : B");
    break;
  case marks >= 70 && marks < 80:
    console.log("Grade : C");
    break;
  case marks >= 60 && marks < 70:
    console.log("Grade : D");
    break;
  case marks >= 50 && marks < 60:
    console.log("Grade : E");
    break;
  case marks >= 40 && marks < 50:
    console.log("Grade : F");
    break;
  default:
    console.log("Grade : Not Graded");
}
