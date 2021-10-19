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
  multi: 2,
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
  vx: 0,
  vy: 0,
  multi: 2,
  fill: 60,
  r: 145,
  g: 22,
  b: 22,
  radius: 10,
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
  trauma.vx = random(-1, 1);
  trauma.vy = random(-1, 1);

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
  } else if (state === `howto`) {
    howto(); // run howto play screen
  } else if (state === 'simulation') {
    simulation(); // run simulation screen
  }
}
/* Draw function End */

// Start Screen State Start
function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Mental Health in a Box`, width / 2, height / 2 - 24); // Insert Title Here
  textSize(24);
  fill(255);
  text(`Press 'Spacebar' to Start`, width / 2, height / 2 + 64); // Insert Subtitle Here
  pop();
}
// Start Screen State End

// howto Screen Start
function howto() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`How To Play:`, width / 2, height / 2 - 24); // Insert Title Here
  textSize(24);
  fill(255);
  text(`Control your mental health "guardian" with your mouse.`, width / 2, height / 2 + 64);
  text(`Keep your trauma at bay using your guardian / coping mechanism to fight it.`, width / 2, height / 2 + 88);
  text(`Everytime your trauma touches the edge, you'll be reminded of the trauma.`, width / 2, height / 2 + 112);
  text(`Win: If you successfully cope and shrink down the trauma.`, width / 2, height / 2 + 160);
  text(`Lose: If you unsuccessfully cope and let the trauma grow.`, width / 2, height / 2 + 184);
  pop();
}
// howto Screen End

// Simulation Screen State Start
function simulation() {
  // Simulation & Game Functions Here
  playerUser();
  traumaNPC();
}
// Simulation Screen State End

// Functions that go inside of the simulation Start
function playerUser() {
  // Player Render
  player.x = mouseX;
  player.y = mouseY;
  push();
  noCursor(); // remove cursor, replace with character below
  fill(player.r, player.g, player.b);
  ellipse(player.x, player.y, player.size);
  pop();
}

function traumaNPC() {
  // Trauma Render
  trauma.x += trauma.vx * trauma.multi;
  trauma.y += trauma.vy * trauma.multi;
  push();
  fill(trauma.r, trauma.g, trauma.b);
  ellipse(trauma.x, trauma.y, trauma.size);
  pop();

  // Trauma constrain bounce
  trauma.x = constrain(trauma.x, 0, width);
  trauma.y = constrain(trauma.y, 0, height);

  // Trauma collision bounce
  if (trauma.x > width - trauma.radius || trauma.x < trauma.radius) {
    trauma.vx *= -1;
  }
  if (trauma.y > height - trauma.radius || trauma.y < trauma.radius) {
    trauma.vy *= -1;
  }
}
// Functions that go inside of the simulation Start

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

// Event Functions End
