/*
P1: Attack of the Assignments
Anthony Lum, 40098555

Assignments are trying to attack you left and right, you must avoid getting hit by the assignments deadline, and submit them on time before it's too late!
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

let studentUserImage;
let mouseUserImage;
let assignmentMobImage;

let studentUser = {
  x: 0,
  y: 0,
  size: 50,
  r: 0,
  g: 153,
  b: 255,
  //speed start
  up: -10,
  down: 10,
  left: -10,
  right: 10,
  //speed end
}

let mouseUser = {
  x: 0,
  y: 0,
  size: 50,
  r: 0,
  g: 153,
  b: 51,
}

let assignmentMob = {
  x: 0,
  y: 0,
  size: 50,
  radius: 50,
  vx: 10,
  vy: 10,
  r: 255,
  g: 0,
  b: 0,
}

let winNum = 0;
// Global Variables End

// -----------------------------------------------------------------------------

/* Preload function Start
Preloading any assets that need to be called upon @ the start of the program.
*/
function preload() {
  studentUserImage = loadImage('assets/images/studentUser.svg');
  mouseUserImage = loadImage('assets/images/mouseUser.svg');
  assignmentMobImage = loadImage('assets/images/assignmentMob.svg');
}
/* Preload function End */

// -----------------------------------------------------------------------------

/** Setup function Start
Setting up the start of the program and where major portions
of the program is stored.
*/
function setup() {
  createCanvas(windowWidth, windowHeight); // use once
  studentUserSpawn();
  assignmentMobSpawn();
  winReset();
}
/* Setup function End */

function studentUserSpawn() {
  studentUser.x = width / 2;
  studentUser.y = height / 2;
}

function assignmentMobSpawn() {
  // AssignmentMob random spawn location
  assignmentMob.x = random(0, width);
  assignmentMob.y = random(0, height);
}

function winReset(){
  winNum = 0;
}

// -----------------------------------------------------------------------------

/* Draw function Start
The main force that will display the majority
of the program outputed to the user to view.
*/
function draw() {
  background(0);
  gameState();
}
/* Draw function End */

// Game State Start
function gameState() {
  if (state === `title`) {
    title(); // run start screen
  } else if (state === `howto`) {
    howto(); // run howto play screen
  } else if (state === 'simulation') {
    simulation(); // run simulation screen
  } else if (state === 'win') {
    win(); // run simulation screen
  } else if (state === 'lose') {
    lose(); // run simulation screen
  }
}
// Game State End

// Start Screen State Start
function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`Attack of the Assignments`, width / 2, height / 2 - 24); // Insert Title Here
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
  text(`Avoid getting hit with assignments.`, width / 2, height / 2 + 64);
  text(`Move player with WASD/ARROW keys.`, width / 2, height / 2 + 88);
  text(`Click to submit your assignments.`, width / 2, height / 2 + 112);
  text(`Win: Submit all your assignments.`, width / 2, height / 2 + 160);
  text(`Lose: You get hit with a DEADline.`, width / 2, height / 2 + 184);
  pop();
}
// howto Screen End

// Win State Start
function win() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`You Win!`, width / 2, height / 2 - 24); // Insert Title Here
  textSize(24);
  fill(255);
  text(`Press 'Spacebar' to play again`, width / 2, height / 2 + 64); // Insert Subtitle Here
  pop();
}
// Win State End

// Lose State Start
function lose() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`You Lose...`, width / 2, height / 2 - 24); // Insert Title Here
  textSize(24);
  fill(255);
  text(`Press 'Spacebar' to play again`, width / 2, height / 2 + 64); // Insert Subtitle Here
  pop();
}
// Lose State End

// Simulation Screen State Start
function simulation() {
  // Simulation & Game Functions Here
  // Ordered this way for z-index purposes
  multipleAssignments(); // on bottom
  student(); // middle
  mouse(); // on top
  studentUserCollisionCheck();
}
// Simulation Screen State End

// Functions that go inside of the simulation Start
function mouse() {
  // Mouse Movement
  mouseUser.x = mouseX;
  mouseUser.y = mouseY;

  // Mouse constrain
  mouseUser.x = constrain(mouseUser.x, 0, width);
  mouseUser.y = constrain(mouseUser.y, 0, height);

  // Temp Mouse render
  push();
  fill(mouseUser.r, mouseUser.g, mouseUser.b);
  ellipseMode(RADIUS);
  ellipse(mouseUser.x, mouseUser.y, mouseUser.size);
  imageMode(CENTER);
  image(mouseUserImage, mouseUser.x, mouseUser.y, mouseUser.size)
  pop();
}

function student() {
  // Student Movement
  if (keyCode === 65 || keyCode === LEFT_ARROW) {
    studentUser.x += studentUser.left;
  }
  if (keyCode === 87 || keyCode === UP_ARROW) {
    studentUser.y += studentUser.up;
  }
  if (keyCode === 68 || keyCode === RIGHT_ARROW) {
    studentUser.x += studentUser.right;
  }
  if (keyCode === 83 || keyCode === DOWN_ARROW) {
    studentUser.y += studentUser.down;
  }

  // Student Constrain
  studentUser.x = constrain(studentUser.x, 0, width);
  studentUser.y = constrain(studentUser.y, 0, height);

  // Student Render
  push();
  fill(studentUser.r, studentUser.g, studentUser.b);
  ellipseMode(RADIUS);
  ellipse(studentUser.x, studentUser.y, studentUser.size);
  imageMode(CENTER);
  image(studentUserImage, studentUser.x, studentUser.y, studentUser.size)
  pop();
}

function multipleAssignments() {
  assignments();

  function assignments() {
    // assignmentMob Movement
    assignmentMob.x += assignmentMob.vx;
    assignmentMob.y += assignmentMob.vy;

    // Trauma constrain bounce
    assignmentMob.x = constrain(assignmentMob.x, 0, width);
    assignmentMob.y = constrain(assignmentMob.y, 0, height);

    // assignmentMob collision bounce against walls
    if (assignmentMob.x > width - assignmentMob.radius || assignmentMob.x < assignmentMob.radius) {
      assignmentMob.vx = -assignmentMob.vx;
      //console.log('assignmentMob-wall collision');
    }
    if (assignmentMob.y > height - assignmentMob.radius || assignmentMob.y < assignmentMob.radius) {
      assignmentMob.vy = -assignmentMob.vy;
      //console.log('assignmentMob-wall collision');
    }

    // assignmentMob Render
    push();
    fill(assignmentMob.r, assignmentMob.g, assignmentMob.b);
    ellipseMode(RADIUS);
    ellipse(assignmentMob.x, assignmentMob.y, assignmentMob.size);
    imageMode(CENTER);
    image(assignmentMobImage, assignmentMob.x, assignmentMob.y, assignmentMob.size)
    pop();
  }
}


// Functions that go inside of the simulation End

// -----------------------------------------------------------------------------

// Event Functions Start

// mousePressed Start
function mousePressed() {
  clickedCollisionCheck();
}
// mousePressed End

// onKeyPress Start
function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `howto` // title screen to insuctions
  } else if (state === `howto` && key === ' ') {
    state = `simulation` // howto screen to simulation
  } else if (state === `win` && key === ' ') {
    setup();
    simulation();
    state = `howto` // howto screen to simulation
  } else if (state === `lose` && key === ' ') {
    setup();
    simulation();
    state = `howto` // howto screen to simulation
  }
}
// onKeyPress End

// studentUserCollisionCheck Start
function studentUserCollisionCheck() {
  // Player collision check
  let d = dist(studentUser.x, studentUser.y, assignmentMob.x, assignmentMob.y);
  if (d < studentUser.size / 2 + assignmentMob.radius * 2) {
    //console.log('studentUser-assignmentMob collision');
    state = `lose`;
  }
}
// studentUserCollisionCheck End

// clickedCollisionCheck Start
function clickedCollisionCheck() {
  // this function will only run when mouse is pressed, find function above
  let d = dist(mouseUser.x, mouseUser.y, assignmentMob.x, assignmentMob.y);
  if (d < assignmentMob.size * 2) {
    console.log("clicked");
    //state = `win`;
    winCounter();
  }
}
// clickedCollisionCheck End

function winCounter() {
  winNum++;
  console.log("winNum is:" + winNum);
  if (winNum > 5) {
    state = `win`;
  }
}
// Event Functions End
