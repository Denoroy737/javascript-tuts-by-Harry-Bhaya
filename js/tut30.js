const proto = {
  slogan: function () {
    return `This programmer is super Hero`;
  },
  changeName: function (newName) {
    this.name = newName;
  },
};

// This creates Kena's Object
let Kena = Object.create(proto);
Kena.name = "Kena";
Kena.role = "Programmer";
// Kena.changeName("Kena")
console.log(Kena);

// This also creates Kena object
const Kena1 = Object.create(proto, {
  name: { value: "Kena", writable: true },
  role: { value: "Devops" },
});
Kena1.changeName("harry");
console.log(Kena1);

// Employee constructor
function Employee(name, rank, expreience) {
  this.name = name;
  this.rank = rank;
  this.expreience = expreience;
}

// Slogan
Employee.prototype.slogan = function () {
  return `This programmer is the best Regards, ${this.name}`;
};

// Create an object from this constructor now
let KenaObj = new Employee("Kena", 28, 8);
console.log(KenaObj.slogan);

// Programmer
function Programmer(name, rank, expreience, language) {
  Employee.call(this, name, rank, expreience);
  this.language = language;
}

// Inherit the prototupe
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("Rohan", 2, 11, "Javascript");
console.log(rohan);
