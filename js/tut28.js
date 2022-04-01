console.log(
  "Im tut28.js I born in This Amazing Internet World with help of live Server"
);

// Object literal : Object.prototype
let obj = {
  name: "Kena",
  channel: "nothing",
  address: "Earth",
};

function Obj(givenName) {
  this.name = givenName;
}

Obj.prototype.getName = function () {
  return this.name;
};

Obj.prototype.setName = function (newName) {
  this.name = newName;
};

let Obj2 = new Obj("Kena's Soil");
console.log(Obj2);
