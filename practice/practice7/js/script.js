/**
Practice 7.1 - 7.4
Anthony Lum
*/

"use strict";

// Variables start
let user = {
  x: 0,
  y: 0,
  size: 100,
}

let fish1;
let fish2;
let fish3;
let fish4;

// Variables end

/**
Description of preload
*/
function preload() {}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  fish1 = createFish(random(0, width), random(0, height));
  fish2 = createFish(random(0, width), random(0, height));
  fish3 = createFish(random(0, width), random(0, height));
  fish4 = createFish(random(0, width), random(0, height));
}


// Function time

function createFish(x, y) {
  let food = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
  }; // call
  return food; // returns
}

/**
Description of draw()
*/
function draw() {
  background(0);

  moveFish(fish1);
  moveFish(fish2);
  moveFish(fish3);
  moveFish(fish4);

  displayFish(fish1);
  displayFish(fish2);
  displayFish(fish3);
  displayFish(fish4);
}

function moveFish(fish) {
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  fish.x += fish.vx;
  fish.y += fish.vy;

  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);

}
