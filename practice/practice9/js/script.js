/**
Practice 9.1 - 9.5
Anthony Lum
*/
"use strict";

let cars = [];
let numCars = 10;

let motorcycles = [];
let numMotorcycles = 10;

function setup(){
createCanvas(600,600);
for (let i = 0; i < numCars; i++){
  let x = random(0,width);
  let y = random(0, height);
  let car = new Car(x, y); // call class
  cars.push(car); // cars = array, pushes out the car variable, that is from the Car class.
}

for (let i = 0; i < numMotorcycles; i++){
  let x = random(0,width);
  let y = random(0, height);
  let motorcycle = new Motorcycle(x, y); // call class
  motorcycles.push(motorcycle); // cars = array, pushes out the car variable, that is from the Car class.
}
}

function draw(){
background(0);

for (let i = 0; i < cars.length; i++){ // length of array
  let car = cars[i];
  car.move();
  car.wrap();
  car.display();
}

for (let i = 0; i < motorcycles.length; i++){ // length of array
  let motorcycle = motorcycles[i];
  motorcycle.move();
  motorcycle.wrap();
  motorcycle.display();
}
}
