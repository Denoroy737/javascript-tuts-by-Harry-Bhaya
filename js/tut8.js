console.log("tut8.js");

const age = 293;
const doesDrive = false;
// const vari = 34;

if (age != 19) {
  console.log("Age is not 19");
}
if (age != 65) {
  console.log("Age is not 65");
} else {
  console.log("Age is not 19");
}
if (typeof vari !== "undefined") {
  console.log("Vari is defined");
} else {
  console.log("Vari is not defined");
}
if (doesDrive || age > 18) {
  console.log("You can drive");
} else {
  console.log("You cannot Drive");
}

console.log(age == 45 ? "Age is 45" : "Age is not 45");

switch (age) {
  case 18:
    console.log("you are 18");
    break;
    
  case 28:
    console.log("you are 28");
    break;

  case 38:
    console.log("you are 38");
    break;

  case 48:
    console.log("you are 48");
    break;

  default:
    console.log("Your age is not defined");
    break;
}