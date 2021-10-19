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
let bg = {
  r: 0,
  g: 0,
  b: 0,
}

let player = {
  x: 0,
  y: 0,
  size: 20,
  growth: 0,
  vx: 0,
  vy: 0,
  fill: 60,
  r: 255,
  g: 53,
  b: 22,
}

let trauma = {
  x: 0,
  y: 0,
  size: 20,
  growth: 0,
  vx: 2,
  vy: 2,
  fill: 60,
  r: 145,
  g: 22,
  b: 22,
}

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

  // Trauma random spawn location, placed in setup(), so that it spawns once and not in draw() which will spawn it over and over.
  trauma.x = random(0, width);
  trauma.y = random(0, height)
}
/* Setup function End */

// -----------------------------------------------------------------------------

/* Draw function Start
The main force that will display the majority
of the program outputed to the user to view.
*/
function draw() {
  background(0);
  //console.log(state);

  if (state === `title`) {
    title(); // run start screen
  } else if (state === `howto`) {
    howto();
  }
}
/* Draw function End */

// Start Screen State Start
function title() {
  //console.log(state);
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

// howto Screen Start
function howto() {
  //console.log(state);
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`How To Play`, width / 2, height / 2); // Insert Title Here
  textSize(24);
  fill(255);
  text(`Control your mental health "guardian" with your mouse.`, width / 2, height / 2 + 64); // Insert Subtitle Here
  pop();
  console.log(state);
}
// howto Screen End

// Simulation Screen State Start
function simulation() {
  //console.log(state);
  // Simulation & Game Functions Here
  //  display();

  // Player Render
  player.x = mouseX; // player x location = mouse x
  player.y = mouseY; // player y location = mouse y
  push();
  noCursor(); // remove cursor, replace with below
  fill(player.r, player.g, player.b);
  ellipse(player.x, player.y, player.size);
  pop();

  // Trauma Render
  trauma.x += trauma.vx;
  trauma.y += trauma.vy;
  push();
  fill(trauma.r, trauma.g, trauma.b);
  ellipse(trauma.x, trauma.y, trauma.size);
  pop();

}
// Simulation Screen State End

// -----------------------------------------------------------------------------

// Event Functions Start

// onKeyPress Start
function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `howto` // title screen to insuctions
  } else if (state === `howto` && key === ' ') {
    state = `simulation` // howto screen to simulation
  }
}
// onKeyPress End
