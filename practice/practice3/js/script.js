/*
Introducing Variables
Anthony Lum

Practicing and following along with the Youtube tutorials at 2:30am.
*/

// Variables
let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 200;

/** Description of setup */
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/** Where the action is in p5. Gets run once per frame, 60 times per second */
function draw() {
  background(backgroundShade);
  ellipse(circleX, circleY, circleSize);
}
