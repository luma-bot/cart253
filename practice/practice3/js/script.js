/*
Introducing Variables
Anthony Lum

Practicing and following along with the Youtube tutorials at 2:30am.
*/

// Variables
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 200;
let circleSpeed = 2; // neg = left, pos = right
let circleAcceleration = 0.25;

/** Description of setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/** Where the action is in p5. Gets run once per frame, 60 times per second */
function draw() {
  background(backgroundShade);
  circleX += circleSpeed;
  // is the same as circleX = circleX + circleSpeed;
  circleSpeed += circleAcceleration;
  ellipse(circleX, circleY, circleSize);
}
