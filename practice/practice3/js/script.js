/*
Introducing Variables
Anthony Lum

Practicing and following along with the Youtube tutorials at 2:30am.
*/

// Variables
let backgroundShade = 0;
// let circleX = 0;
// let circleY = 250;
// let circleSize = 200;
// let circleSpeed = 2; // neg = left, pos = right
// let circleAcceleration = 0.25;

let circle = {
  x:0,
  y:250,
  size: 200,
  speed: 2,
};

/** Description of setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/** Where the action is in p5. Gets run once per frame, 60 times per second */
function draw() {
  background(backgroundShade);
  circle.x += circle.speed;
  // is the same as circleX = circleX + circleSpeed;
  ellipse(circle.x, circle.y, circle.size);
}
