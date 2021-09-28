/**
Exercise: Dodge-em
Anthony Lum

4% of final grade
Section B (Tuesdays): 11:59PM, 28 September 2021
*/

/**
What's the plan stan?

Objectives::
  1) Change the way the user controls their circle
  2) Add at least one new if-statement (including at least an else) that changes the nature of the simulation
  3) Change the way the simulation looks
  4) Use at least one image
*/

// Variables that are relevant and want to keep track of throughout the program
let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 255,
    g: 42,
    b: 0
  }
};

let user = {
  x: 100,
  y: 100,
  size: 100,
  up: -10,
  down: 10,
  left: -10,
  right: 10,
  fill: {
    r: 50,
    g: 60,
    b: 100
  }
}

let numStatic = 1000;

/** Setting up the Mainframe or the simulation */
function setup() {
  createCanvas(windowWidth, windowHeight);
  covid19.y = random(0, height); // height better than windowHeight incase you change it
  covid19.vx = covid19.speed; //move in pos direction

  noCursor();

} /** End of setup() */


/** Displaying the simulation */
function draw() {
  background(0);

  // Display Static, wrap in for loop, decorative static
  for (let i = 0; i < numStatic; i++) {
    let x = random(0, width); // immediately using them once
    let y = random(0, height); // immediately using them once
    stroke(255);
    point(x, y);
  }

  // Covid 19 Movement
  covid19.x += covid19.vx;
  covid19.y += covid19.vy;

  if (covid19.x > width) { //if it goes past width, do this
    covid19.x = 0;
    covid19.y = random(0, height);
  }

  // User Movement

  // user.x = mouseX;
  // user.y = mouseY;

  if (keyCode === LEFT_ARROW) {
    user.x += user.left;
  }
  if (keyCode === UP_ARROW) {
    user.y += user.up;
  }
  if (keyCode === RIGHT_ARROW) {
    user.x += user.right;
  }
  if (keyCode === DOWN_ARROW) {
    user.y += user.down;
  }

  // Check for catching covid19
  // object.size = diameter, object.size/2 = radius
  let distance = dist(user.x, user.y, covid19.x, covid19.y); // only need now and won't need it later, declaring where we need it
  if (distance < covid19.size / 2 + user.size / 2) {
    noLoop();
    console.log(distance);
  }


  // Display Covid 19
  fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  ellipse(covid19.x, covid19.y, covid19.size);

  // Display user
  fill(user.fill.r, user.fill.g, user.fill.b);
  ellipse(user.x, user.y, user.size);

} /** End of draw() */
