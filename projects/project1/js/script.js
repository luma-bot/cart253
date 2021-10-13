/*
P1: Mental Health in a Box
Anthony Lum, 40098555

A game about mental health, turned into a visual metaphor where your traumas are stored in a box, and the box is your mind. Everytime the trauma hits a side of the box you are reminded of it.
There are ways and coping mechanismns that you can do to shrink the trauma until it is gone or is so small it does not remind you as often as it used to, at this point you have processed your trauma and are able to better handle it and move on.
*/

// -----------------------------------------------------------------------------
"use strict";

// Global Variables Start

let state = `title`; // Options : title, simulation, win, lose

// Global Variables End

// -----------------------------------------------------------------------------

/* Preload function Start
Preloading any assets that need to be called upon @ the start of the program.
*/
function preload() {

  // images belong here

}
/* Preload function End */

// -----------------------------------------------------------------------------

/** Setup function Start
Setting up the start of the program and where major portions
of the program is stored.
*/
function setup() {
  createCanvas(windowWidth, windowHeight); // use once
}
/* Setup function End */

// -----------------------------------------------------------------------------

/* Draw function Start
The main force that will display the majority
of the program outputed to the user to view.
*/
function draw() {
  background(0);

  if (state === `title`) {
    title(); // run start screen
  } else if (state === `simulation`) {
    simulation(); // run game
  }
}
/* Draw function End */

// Start Screen State Start
function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Mental Health in a Box`, width / 2, height / 2); // Insert Title Here
  textSize(24);
  fill(255);
  text(`Press 'Spacebar' to Start`, width / 2, height / 2 + 64); // Insert Subtitle Here
  pop();
}
// Start Screen State End

// Simulation Screen State Start
function simulation() {
  // Simulation & Game Functions Here
  //  display();
}
// Simulation Screen State End

// -----------------------------------------------------------------------------

// Event Functions Start
// onMousePress Start
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
// onMousePress End

// onKeyPress Start
function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `simulation` // space to start
  }
}
// onKeyPress End
