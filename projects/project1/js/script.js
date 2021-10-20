/*
P1: Attack of the Assignments
Anthony Lum, 40098555

Assignments are trying to attack you left and right, you must avoid getting hit by the assignments deadline, and submit them on time before it's too late!
Move your student around and avoid having the assignments and their deadlines hit you, and use your mouse to click and submit your assignments on time!
*/

// -----------------------------------------------------------------------------
"use strict";

// Global Variables Start

let state = `title`; // Options : title, simulation, win, lose
let bg = {
  r: 19,
  g: 21,
  b: 22,
}

let studentUserImage;
let mouseUserImage;
let assignmentMobImage;
let assignmentMobImage0;
let assignmentMobImage1;
let gameMusic;

let studentUser = {
  x: 0,
  y: 0,
  size: 50,
  r: 0,
  g: 153,
  b: 255,
  vx: 10,
  vy: 10,
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
  vx: 12,
  vy: 12,
  r: 200,
  g: 0,
  b: 0,
}

let assignmentMob0 = {
  x: 0,
  y: 0,
  size: 50,
  radius: 50,
  vx: 12,
  vy: 12,
  r: 200,
  g: 0,
  b: 0,
}

let assignmentMob1 = {
  x: 0,
  y: 0,
  size: 50,
  radius: 50,
  vx: 12,
  vy: 12,
  r: 200,
  g: 0,
  b: 0,
}

let winNum = 0;
let winMax = 10;
// Global Variables End

// -----------------------------------------------------------------------------

/* Preload function Start
Preloading any assets that need to be called upon @ the start of the program.
*/
function preload() {
  studentUserImage = loadImage('assets/images/studentUser.svg');
  mouseUserImage = loadImage('assets/images/mouseUser.svg');
  assignmentMobImage = loadImage('assets/images/assignmentMob.svg');
  assignmentMobImage0 = loadImage('assets/images/imageMob.svg');
  assignmentMobImage1 = loadImage('assets/images/codeMob.svg');

  gameMusic = loadSound('assets/sounds/Runaway-Food-Truck.mp3');
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
  assignmentMobSpawn0();
  assignmentMobSpawn1();
  scoreReset();

  gameMusic.setVolume(.03); // works!
}
/* Setup function End */

function studentUserSpawn() {
  studentUser.x = width / 2;
  studentUser.y = height / 2;
}

// mob spawns must stay separated to be called properly
function assignmentMobSpawn() {
  // AssignmentMob random spawn location
  assignmentMob.x = random(0, width);
  assignmentMob.y = random(0, height);

  let mobVelocity = [-15 , 15];
  assignmentMob.vx = random(mobVelocity);
  assignmentMob.vy = random(mobVelocity);
}

function assignmentMobSpawn0() {
  // AssignmentMob0 random spawn location
  assignmentMob0.x = random(0, width);
  assignmentMob0.y = random(0, height);

  let mobVelocity = [-15 , 15];
  assignmentMob0.vx = random(mobVelocity);
  assignmentMob0.vy = random(mobVelocity);
}

function assignmentMobSpawn1() {
  // AssignmentMob0 random spawn location
  assignmentMob1.x = random(0, width);
  assignmentMob1.y = random(0, height);

  let mobVelocity = [-15 , 15];
  assignmentMob1.vx = random(mobVelocity);
  assignmentMob1.vy = random(mobVelocity);
}

function scoreReset() {
  winNum = 0;
}

// -----------------------------------------------------------------------------

/* Draw function Start
The main force that will display the majority
of the program outputed to the user to view.
*/
function draw() {
  background(bg.r, bg.g, bg.b);
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
  textStyle(BOLD);
  text(`Attack of the Assignments`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`Are you ready?`, width / 2, height / 2 + 64);
  text(`Press 'Spacebar' to Start`, width / 2, height / 2 + 88);
  pop();
}
// Start Screen State End

// howto Screen Start
function howto() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`How To Play:`, width / 2, height / 2 - 24);
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
  fill(0, 153, 51);
  textAlign(CENTER, CENTER);
  text(`You Win!`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`Wow that was an easy A+ right?`, width / 2, height / 2 + 64);
  text(`Press 'Spacebar' to move to your next semester`, width / 2, height / 2 + 88);
  pop();
}
// Win State End

// Lose State Start
function lose() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`You Lose...`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`That DEADline came out of nowhere huh?`, width / 2, height / 2 + 64);
  text(`Press 'Spacebar' to redo your semester`, width / 2, height / 2 + 88);
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
  scoreDisplay();
  dangerZone();
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
  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
    studentUser.x -= studentUser.vx;
  }
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
    studentUser.y -= studentUser.vy;
  }
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
    studentUser.x += studentUser.vx;
  }
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
    studentUser.y += studentUser.vy;
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
  assignments0();
  assignments1();

  function assignments() {
    // assignmentMob Movement
    assignmentMob.x += assignmentMob.vx;
    assignmentMob.y += assignmentMob.vy;

    // Trauma constrain bounce
    assignmentMob.x = constrain(assignmentMob.x, assignmentMob.radius, width - assignmentMob.radius);
    assignmentMob.y = constrain(assignmentMob.y, assignmentMob.radius, height - assignmentMob.radius);

    // assignmentMob collision bounce against walls
    if (assignmentMob.x >= width - assignmentMob.radius || assignmentMob.x <= assignmentMob.radius) {
      assignmentMob.vx = -assignmentMob.vx;
    }
    if (assignmentMob.y >= height - assignmentMob.radius || assignmentMob.y <= assignmentMob.radius) {
      assignmentMob.vy = -assignmentMob.vy;
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

  function assignments0() {
    // assignmentMob Movement
    assignmentMob0.x += assignmentMob0.vx;
    assignmentMob0.y += assignmentMob0.vy;

    // Trauma constrain bounce
    assignmentMob0.x = constrain(assignmentMob0.x, assignmentMob0.radius, width - assignmentMob0.radius);
    assignmentMob0.y = constrain(assignmentMob0.y, assignmentMob0.radius, height - assignmentMob0.radius);

    // assignmentMob collision bounce against walls
    if (assignmentMob0.x >= width - assignmentMob0.radius || assignmentMob0.x <= assignmentMob0.radius) {
      assignmentMob0.vx = -assignmentMob0.vx;
    }
    if (assignmentMob0.y >= height - assignmentMob0.radius || assignmentMob0.y <= assignmentMob0.radius) {
      assignmentMob0.vy = -assignmentMob0.vy;
    }

    // assignmentMob Render
    push();
    fill(assignmentMob0.r, assignmentMob0.g, assignmentMob0.b);
    ellipseMode(RADIUS);
    ellipse(assignmentMob0.x, assignmentMob0.y, assignmentMob0.size);
    imageMode(CENTER);
    image(assignmentMobImage0, assignmentMob0.x, assignmentMob0.y, assignmentMob0.size)
    pop();
  }

  function assignments1() {
    // assignmentMob Movement
    assignmentMob1.x += assignmentMob1.vx;
    assignmentMob1.y += assignmentMob1.vy;

    // Trauma constrain bounce
    assignmentMob1.x = constrain(assignmentMob1.x, assignmentMob1.radius, width - assignmentMob1.radius);
    assignmentMob1.y = constrain(assignmentMob1.y, assignmentMob1.radius, height - assignmentMob1.radius);

    // assignmentMob collision bounce against walls
    if (assignmentMob1.x >= width - assignmentMob1.radius || assignmentMob1.x <= assignmentMob1.radius) {
      assignmentMob1.vx = -assignmentMob1.vx;
    }
    if (assignmentMob1.y >= height - assignmentMob1.radius || assignmentMob1.y <= assignmentMob1.radius) {
      assignmentMob1.vy = -assignmentMob1.vy;
    }

    // assignmentMob Render
    push();
    fill(assignmentMob1.r, assignmentMob1.g, assignmentMob1.b);
    ellipseMode(RADIUS);
    ellipse(assignmentMob1.x, assignmentMob1.y, assignmentMob1.size);
    imageMode(CENTER);
    image(assignmentMobImage1, assignmentMob1.x, assignmentMob1.y, assignmentMob1.size)
    pop();
  }
}

function scoreDisplay() {
  push();
  textSize(24);
  fill(255);
  textStyle(BOLD);
  text(`Assignments Submitted: ` + winNum + ` /` + winMax, width / 50, height / 25); // Insert Subtitle Here
  pop();
}

function dangerZone() {
  let dZ = dist(assignmentMob.x, assignmentMob.y, studentUser.x, studentUser.y);
  while (dZ < assignmentMob.size + studentUser.size) {
    assignmentMobSpawn();
    dZ = dist(assignmentMob.x, assignmentMob.y, studentUser.x, studentUser.y);
  }

  let dZ0 = dist(assignmentMob0.x, assignmentMob0.y, studentUser.x, studentUser.y);
  while (dZ0 < assignmentMob0.size + studentUser.size) {
    assignmentMobSpawn();
    dZ0 = dist(assignmentMob0.x, assignmentMob0.y, studentUser.x, studentUser.y);
  }

  let dZ1 = dist(assignmentMob1.x, assignmentMob1.y, studentUser.x, studentUser.y);
  while (dZ1 < assignmentMob1.size + studentUser.size) {
    assignmentMobSpawn();
    dZ1 = dist(assignmentMob1.x, assignmentMob1.y, studentUser.x, studentUser.y);
  }
}

// Functions that go inside of the simulation End

// -----------------------------------------------------------------------------

// Event Functions Start

// mousePressed Start
function mousePressed() {
  clickedCollisionCheck();
  clickedCollisionCheck0();
  clickedCollisionCheck1();
}
// mousePressed End

// onKeyPress Start
function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `howto` // title screen to insuctions

    let sampleIsLooping = false;
    gameMusic.play();
    if (!sampleIsLooping) {
      gameMusic.loop();
      sampleIsLooping = true;
    } else {
      gameMusic.stop();
      sampleIsLooping = false;
    }

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
    state = `lose`;
  }
  let d0 = dist(studentUser.x, studentUser.y, assignmentMob0.x, assignmentMob0.y);
  if (d0 < studentUser.size / 2 + assignmentMob0.radius * 2) {
    state = `lose`;
  }
  let d1 = dist(studentUser.x, studentUser.y, assignmentMob1.x, assignmentMob1.y);
  if (d1 < studentUser.size / 2 + assignmentMob1.radius * 2) {
    state = `lose`;
  }
}

function clickedCollisionCheck() {
  // this function will only run when mouse is pressed, find function above
  let d = dist(mouseUser.x, mouseUser.y, assignmentMob.x, assignmentMob.y);
  if (d < assignmentMob0.size * 2) {
    winCounter();
    assignmentMobSpawn();
  }
}

function clickedCollisionCheck0() {
  // this function will only run when mouse is pressed, find function above
  let d0 = dist(mouseUser.x, mouseUser.y, assignmentMob0.x, assignmentMob0.y);
  if (d0 < assignmentMob0.size * 2) {
    winCounter();
    assignmentMobSpawn0();
  }
}

function clickedCollisionCheck1() {
  // this function will only run when mouse is pressed, find function above
  let d1 = dist(mouseUser.x, mouseUser.y, assignmentMob1.x, assignmentMob1.y);
  if (d1 < assignmentMob1.size * 2) {
    winCounter();
    assignmentMobSpawn1();
  }
}
// clickedCollisionCheck End

// UI Display Start
function winCounter() {
  winNum++;
  if (winNum === winMax) { // number of assignments handed in to win
    state = `win`;
  }
}
// UI Display End
// Event Functions End
