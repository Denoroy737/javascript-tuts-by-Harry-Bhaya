console.log("This is tutorial 43");
async function Tena() {
  console.log("Inside Tena function");
  const response = await fetch("https://api.github.com/users");
  console.log("before response");
  const users = await response.json();
  console.log("users resolved");
  return users;
  //   return "tena";
}

console.log("Before calling Tena");
let a = Tena();
console.log("After calling Tena");
console.log(a);
a.then((data) => console.log(data));
console.log("Last line of this js file");
