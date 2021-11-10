/*
P2: Good Bean Water
Anthony Lum, 40098555

A barista simulator.

You are a newly hired barista working at "Good Bean Water". They didn't really give you much training to prepare you for your first shift, so there will be a lot of learning on the job!
Try not to mess up people's orders else they'll get mad. Be quick and efficient, and get those orders out so you can get paid!
*/

"use strict";

let coffeeX;
let coffeeY;
let coffeeBoxSize = 75;
let coffeeoverBox = false;
let coffeeLocked = false;
let coffeeXoffset = 0.0;
let coffeeYoffset = 0.0;



let milkX;
let milkY;
let milkBoxSize = 75;
let milkoverBox = false;
let milkLocked = false;
let milkXoffset = 0.0;
let milkYoffset = 0.0;
/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
  coffeeX = width / 2.0;
  coffeeY = height / 2.0;
  rectMode(RADIUS);
  strokeWeight(2);
  milkX = width / 5.0;
  milkY = height / 5.0;
  rectMode(RADIUS);
  strokeWeight(2);
}

/**
Description of draw()
*/
function draw() {
  background(0);

  coffee();
  milk();
}

// Coffee Functions Start
function coffee() {

  // Test if the cursor is over the box
  if (
    mouseX > coffeeX - coffeeBoxSize &&
    mouseX < coffeeX + coffeeBoxSize &&
    mouseY > coffeeY - coffeeBoxSize &&
    mouseY < coffeeY + coffeeBoxSize
  ) {
    coffeeoverBox = true;
    if (!coffeeLocked) {
      stroke(255);
      fill(94, 68, 47);
    }
  } else {
    stroke(170, 123, 85);
    fill(94, 68, 47);
    coffeeoverBox = false;
  }

  // Draw the box
  rect(coffeeX, coffeeY, coffeeBoxSize, coffeeBoxSize);
}
// Coffee Functions End

// Milk Functions Start
function milk() {

  // Test if the cursor is over the box
  if (
    mouseX > milkX - milkBoxSize &&
    mouseX < milkX + milkBoxSize &&
    mouseY > milkY - milkBoxSize &&
    mouseY < milkY + milkBoxSize
  ) {
    milkoverBox = true;
    if (!milkLocked) {
      stroke(255);
      fill(94, 68, 47);
    }
  } else {
    stroke(170, 123, 85);
    fill(94, 68, 47);
    milkoverBox = false;
  }

  // Draw the box
  rect(milkX, milkY, milkBoxSize, milkBoxSize);
}
// Milk Functions End

function mousePressed() {
  if (coffeeoverBox) {
    coffeeLocked = true;
    fill(255, 255, 255);
  } else {
    coffeeLocked = false;
  }
  coffeeXoffset = mouseX - coffeeX;
  coffeeYoffset = mouseY - coffeeY;

  if (milkoverBox) {
    milkLocked = true;
    fill(255, 255, 255);
  } else {
    milkLocked = false;
  }
  milkXoffset = mouseX - milkX;
  milkYoffset = mouseY - milkY;
}

function mouseDragged() {
  if (coffeeLocked) {
    coffeeX = mouseX - coffeeXoffset;
    coffeeY = mouseY - coffeeYoffset;
  }
  if (milkLocked) {
    milkX = mouseX - milkXoffset;
    milkY = mouseY - milkYoffset;
  }
}

function mouseReleased() {
  coffeeLocked = false;
  milkLocked = false;
}
