console.log("We are in tut10.js");

if (1) {
  let i = 234;
  console.log(i);
}
// console.log(i);

function ui(name) {
  let i = 9;
  console.log(i);
  return `This is a ${name} ui`;
}

// console.log(ui("harry"), i);

const mygreet = function (name, thank = "Thanks You") {
  let msg = `Happy Birthday ${name} How I whish I could fly to you right now `;
  return msg;
};
let name = "Kena";
let name2 = "Gauri";

let val = mygreet(name, "Thanks a lot");
console.log(val)

const myobj ={
  name: "Gauri",
  game: function(){
    return `fuck`;
  }
}
console.log(myobj.game())

arr = ['fruit', 'vagetable', 'coder']

arr.forEach(function(element, index, array) {
  console.log(element,index)
});