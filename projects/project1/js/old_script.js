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
  size: 50,
  growth: 0,
  shrink: 0,
  fill: 60,
  r: 255,
  g: 53,
  b: 22,
}

let trauma = {
  x: 0,
  y: 0,
  radius: 50,
  growth: 0,
  shrink: 0,
  vx: 15,
  vy: 15,
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

let tra = [];
let numTra = 10;
  for (let i = 0; i < numTra; i++){
    let newTra = traumaRender();
    tra.push(newTra);
  }
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
  traumaNPC();
  traumaRender();
  collisionCheck();
  playerRender();
  playerUser();
  gameState();
}
// Simulation Screen State End

// Functions that go inside of the simulation Start
function traumaNPC() {
  // Trauma Movement
  trauma.x += trauma.vx;
  trauma.y += trauma.vy;

  // Trauma constrain bounce
  trauma.x = constrain(trauma.x, 0, width);
  trauma.y = constrain(trauma.y, 0, height);
}

function traumaRender() {
  // Trauma Render
  push();
  fill(trauma.r, trauma.g, trauma.b);
  ellipseMode(RADIUS);
  ellipse(trauma.x, trauma.y, trauma.radius * 2);
  pop();
}

function collisionCheck() {
  // Player collision check
  let d = dist(player.x, player.y, trauma.x, trauma.y);
  if (d < player.size / 2 + trauma.radius * 2) {
    console.log('player-trauma collision');
    traumaShrink();
    traumaLocation();
  }

  // Trauma collision bounce against walls
  if (trauma.x > width - trauma.radius || trauma.x < trauma.radius) {
    trauma.vx = -trauma.vx;
    traumaGrow();
    console.log('trauma-wall collision');
  }
  if (trauma.y > height - trauma.radius || trauma.y < trauma.radius) {
    trauma.vy = -trauma.vy;
    traumaGrow();
    console.log('trauma-wall collision');
  }
}

function traumaLocation() {
  // Trauma random spawn location, placed in setup(), so that it spawns once and not in draw() which will spawn it over and over.
  trauma.x = random(20, width - 20); // away from the wall spawn
  trauma.y = random(20, height - 20); // away from the wall spawn
}

function traumaGrow() {
  trauma.radius += .1;
}

function traumaShrink() {
  trauma.radius -= .1;
}

function playerUser() {
  // Player Movement
  player.x = mouseX;
  player.y = mouseY;

  // Player constrain
  player.x = constrain(player.x, 0, width);
  player.y = constrain(player.y, 0, height);
}

function playerRender() {
  // Player Render
  push();
  noCursor(); // remove cursor, replace with character below
  fill(player.r, player.g, player.b);
  ellipseMode(RADIUS);
  ellipse(player.x, player.y, player.size);
  pop();
}

function gameState() {
  if (trauma.radius < 10) {
    console.log('win');
  }
}
// Functions that go inside of the simulation End

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
