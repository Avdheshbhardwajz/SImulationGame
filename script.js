// Instructions
// Task : Imagine you are developing a simulation game that involves various kinds of vehicles. Using the concepts of inheritance, prototype chains, and object-oriented design patterns learned in class.
// Instructions:
// Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

// Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

// accelerate() should increase the speed of the vehicle.
// brake() should decrease the speed.
// refuel() should log a message indicating the vehicle is refueling.
// Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

// Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

// Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.

function Vehicle(brand, model, speed, fuelType) {
  this.brand = brand;
  this.model = model;
  this.speed = speed;
  this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function () {
  console.log("You Just Increased the Speed");
};

Vehicle.prototype.brake = function () {
  console.log("You Just Decreased The Speed");
};
Vehicle.prototype.refuel = function () {
  console.log("Petrol is Filling Again");
};

function Car(numberOfWheels) {
  this.numberOfWheels = numberOfWheels;
}
Car.prototype.honk = function () {
  console.log("Beep Beep");
};
Car.prototype = Vehicle.prototype;

function Airplane(numberOfEngines, hasLandingGear) {
  this.numberOfWheels = numberOfEngines;
  this.hasLandingGear = hasLandingGear;
}
Airplane.prototype.takeoff = function () {
  console.log("Airplane is taking off");
};
Airplane.prototype = Vehicle.prototype;

const car = new Vehicle("Audi", "Q4", 123, "Petrol");
const airjet = new Airplane(4, true);
airjet.accelerate();

// function Vehicle(brand, model, speed, fuelType) {
//     this.brand = brand;
//     this.model = model;
//     this.speed = speed;
//     this.fuelType = fuelType;
//   }

//   Vehicle.prototype.accelerate = function () {
//     console.log("You Just Increased the Speed");
//   };

//   Vehicle.prototype.brake = function () {
//     console.log("You Just Decreased The Speed");
//   };

//   Vehicle.prototype.refuel = function () {
//     console.log("Petrol is Filling Again");
//   };

//   function Car(brand, model, speed, fuelType, numberOfWheels) {
//     Vehicle.call(this, brand, model, speed, fuelType);
//     this.numberOfWheels = numberOfWheels;
//   }

//   Car.prototype = Object.create(Vehicle.prototype);
//   Car.prototype.constructor = Car;

//   Car.prototype.honk = function () {
//     console.log("Beep Beep");
//   };

//   function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
//     Vehicle.call(this, brand, model, speed, fuelType);
//     this.numberOfEngines = numberOfEngines;
//     this.hasLandingGear = hasLandingGear;
//   }

//   Airplane.prototype = Object.create(Vehicle.prototype);
//   Airplane.prototype.constructor = Airplane;

//   Airplane.prototype.takeoff = function () {
//     console.log("Airplane is taking off");
//   };

//   // Creating instances and invoking methods
//   const car = new Car("Audi", "Q4", 123, "Petrol", 4);
//   const airjet = new Airplane("Boeing", "747", 500, "Jet Fuel", 4, true);

//   car.accelerate(); // Output: You Just Increased the Speed
//   car.honk();       // Output: Beep Beep

//   airjet.accelerate(); // Output: You Just Increased the Speed
//   airjet.takeoff();    // Output: Airplane is taking off
