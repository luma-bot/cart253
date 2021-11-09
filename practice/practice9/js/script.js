/**
Practice 9.1 - 9.5
Anthony Lum
*/
"use strict";

let vehicles = [];
// let cars = []; // can remove because we're doing a vehicle array
let numCars = 10;
// let motorcycles = []; // can remove because we're doing a vehicle array
let numMotorcycles = 10;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < numCars; i++) { // four loop for car because different number of motorcycles
    let x = random(0, width);
    let y = random(0, height);
    let car = new Car(x, y); // call class
    vehicles.push(car); // cars = array, pushes out the car variable, that is from the Car class.
  }

  for (let i = 0; i < numMotorcycles; i++) { // four loop for motorcycle because different number of cars
    let x = random(0, width);
    let y = random(0, height);
    let motorcycle = new Motorcycle(x, y); // call class
    vehicles.push(motorcycle); // cars = array, pushes out the car variable, that is from the Car class.
  }
}

function draw() {
  background(0);

  for (let i = 0; i < vehicles.length; i++) { // length of array
    let vehicle = vehicles[i];
    vehicle.move(); // won't find in car, but will then look at the extend and go into the superClass
    vehicle.wrap(); // same
    vehicle.display(); // is in vehicle
  }
}
