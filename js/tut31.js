class Employee {
  constructor(
    givenName,
    givenExperience,
    givenDivision,
    givenRegion,
    givenPashion
  ) {
    this.Name = givenName;
    this.Experience = givenExperience;
    this.Division = givenDivision;
    this.Region = givenRegion;
    this.Pashion = givenPashion;
  }
  slogan() {
    return `I am ${this.Name} and I live in ${this.Region} My Pashion is ${this.Pashion} So Thats About Me Thank you`;
  }

  JoiningYear() {
    return 2022 - this.Experience;
  }

  static add(a, b) {
    return a + b;
  }
}

class Programmer extends Employee {
  constructor(
    givenName,
    givenExperience,
    givenDivision,
    givenRegion,
    givenPashion,
    Github
  ) {
    super(givenName, givenExperience, givenDivision, givenRegion, givenPashion);
    this.Github = Github;
  }
  EmpRegion() {
    if (this.Region == "USA") {
      return "USA";
    } else {
      return "INDAIN";
    }
  }
  static multiply(a, b) {
    return a * b;
  }
}

Kena = new Employee("Kena", 36, "b", "USA", "Progarmming");
console.log(Kena.JoiningYear())
console.log(Employee.add(34, 5))

Raj = new Programmer("Raj", 16, "b", "INDIAN", "Coding", "Raj737");
console.log(Raj)
console.log(Kena)
console.log(Raj.Github)
console.log(Programmer.multiply(5, 7));

