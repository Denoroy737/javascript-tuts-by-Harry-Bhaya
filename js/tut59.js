console.log("This is tutorial 59");

// Symbol
const sym1 = Symbol("My identifier");
const sym2 = Symbol("My identifier");
// console.log("Symbol is", sym1);
// console.log("Type of Symbol is", typeof sym1);
// console.log(sym1 === sym2);

const a = 19;
const b = 19;
// console.log(a === b);
// console.log(null === null);
// console.log(undefined === undefined);

const k1 = Symbol("identifier for k1");
const k2 = Symbol("identifier for k2");

let myObj = {};
myObj[k1] = "Tena";
myObj[k2] = "Kena";
myObj["name"] = "Good Girl";
myObj[4] = "Good init";

// console.log(myObj);
// console.log(myObj[k1]);
// console.log(myObj.k2); // !! ALERT !!: cannot do this to get Kena because it is same as myObj["k2"]

// Symbols are ignored in for in loop
for (key in myObj) {
  console.log(key, myObj[key]);
}

console.log(JSON.stringify(myObj));
