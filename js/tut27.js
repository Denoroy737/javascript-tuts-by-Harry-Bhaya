console.log("Welcome! to internet my tut27.js file");

// Object Literal for creating object
let car = {
  Name: "Maruti 800",
  Topspeed: 89,
  run: function () {
    console.log("Maruti 800 is going to mears to sell car in HIGH price");
  },
};
// We have already seen constructors like these
// new Date();

// Creating a constructor for cars
function GeneralCars(givenName, givenSpeed) {
  this.name = givenName;
  this.Topspeed = givenSpeed;
  this.run = function () {
    console.log(`${this.name} is Running`);
  };
  this.analyze = function () {
    console.log(
      `This car is Awesome by ${200 - this.Topspeed} Km/H than Mercedes`
    );
  };
}

car1 = new GeneralCars("Nissan", 180);
car2 = new GeneralCars("Bugati", 3000);
car3 = new GeneralCars("BMW", 284);
car4 = new GeneralCars("Farare", 780);
car5 = new GeneralCars("Lambergine", 680);
car6 = new GeneralCars("Necobar", 1580);
console.log(car1, car2, car3, car4, car5, car6);
