console.log("tut7.js");
let welcome = "<h1>Hey! we are in Tut7.js</h1>";
document.body.innerHTML = welcome;
let marks = [43, 65, 64, 23, 66, 123, 64];
const fruits = ["Orange", "Apple", "Banana"];
const mixed = ["str", 96, [487, 578]];

const arr = new Array(23, 345, 64, "Orange");
console.log(marks);
console.log(mixed);
console.log(fruits[1]);

console.log(arr.lenght);
console.log(Array.isArray("dkde"));
arr[0] = "div";
let arrelement = arr[0];
console.log("element :", arrelement);
console.log(arr);

let value = marks.indexOf(73);
console.log(value);

// Mutating or Modifying arrays
marks.push(3424);
marks.unshift(488);
marks.pop();
marks.shift();
marks.splice(2, 3);
marks.reverse();
let marks2 = [1, 2, 3, 7];
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    'first name': 'kena',
    channel: 'let__kena',
    isActive: true,
    marks: [1,2,3,4,5]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)