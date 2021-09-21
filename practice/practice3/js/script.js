/*
Introducing Variables
Anthony Lum

Practicing and following along with the Youtube tutorials at 2:30am.
*/

/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth , windowHeight);

}


/** Where the action is in p5. Gets run once per frame, 60 times per second */
function draw() {
  background(255, 0, 0);
  rectMode(CENTER);
  rect(mouseX, mouseY, 100, 100);
}
