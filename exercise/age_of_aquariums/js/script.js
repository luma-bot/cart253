/**
Exercise 4: The Age of Aquariums.
Anthony Lum
40098555

Fish are friends not fish...
Making an aquarium simulation.

Goal is to feed the fish but not to over feed them

To Do List:
- Add a user-controlled shape (or image)
- Make the user interact with the fish (or whatever they are in your simulation)
- Change the fish (or whatever) creation
- Add at least two endings
*/

// -----------------------------------------------------------------------------

"use strict";

// Variables start
//let state = `simulation`; // Options : title, howto, simulation, win, lose
let bg = {
  r: 19,
  g: 21,
  b: 22,
}

let user = {
  x: 0,
  y: 0,
  size: 100,
}

let school = []; // of fish
let schoolSize = 10; // number of fish

let foodGood = [];
// Variables end

// -----------------------------------------------------------------------------

// Preload images and sounds Start
function preload() {

}
// Preload images and sounds End

// -----------------------------------------------------------------------------

// Setup Start
function setup() {
  createCanvas(windowWidth, windowHeight);

  // for loop of four fish for fish
  for (let i = 0; i < schoolSize; i++) { // define once
    //school[i] = createFish(random(0, width), random(0, height));
    // code above is the same as the code below
    let fish = createFish(random(0, width), random(0, height));
    school.push(fish); // add a number at the end of the array is push
  }
}
// Setup End

// -----------------------------------------------------------------------------

// Draw Start
function draw() {
  background(0);
  //gameState();
  fishAlive();

  function fishAlive() {
    // for loop of four fish for fish to swim and spawn
    for (let i = 0; i < school.length; i++) { // use length from then on
      moveFish(school[i]);
      displayFish(school[i]);
    }
  }
}
// Draw End

// // Game State Start
// function gameState() {
//   if (state === 'simulation') {
//     simulation(); // run simulation screen
//   }
// }
// // Game State End

// -----------------------------------------------------------------------------

// // Simulation Screen State Start
// function simulation() {
//   createFish();
//   moveFish();
// }
// // Simulation Screen State End

// Fishies Functions
// Make le fish
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  }; // call
  return fish; // returns
}

// Move le fish
function moveFish(fish) {

  // Chance le fish changes le mind and moves
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // fish velocity
  fish.x += fish.vx;
  fish.y += fish.vy;

  // fish stay in aquarium
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// Display le fish
function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}

// Make le fish food
function createFood(x, y) {
  let food = {
    x: x,
    y: y,
    size: 25,
    vx: 0,
    vy: 0,
    speed: 2,
  }; // call
  return food; // returns
}

// Display le fish
function displayFood(food) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(food.x, food.y, food.size);
  pop();
}

// Spawn le fish food
function mousePressed() {
  let food = createFood(mouseX, mouseY);
  foodGood.push(food); // push will take the fish in the school and add it to the end of the array
  console.log('food is made');
}
