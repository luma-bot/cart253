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

let school = []; // of fish



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

  school[0] = createFish(random(0, width), random(0, height));
  school[1] = createFish(random(0, width), random(0, height));
  school[2] = createFish(random(0, width), random(0, height));
  school[3] = createFish(random(0, width), random(0, height));
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

  moveFish(school[0]);
  moveFish(school[1]);
  moveFish(school[2]);
  moveFish(school[3]);

  displayFish(school[0]);
  displayFish(school[1]);
  displayFish(school[2]);
  displayFish(school[3]);
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

function displayFish(fish) {
  push();
  fill(200, 100, 100);
  noStroke();
  ellipse(fish.x, fish.y, fish.size);
  pop();
}
