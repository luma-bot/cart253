/**
Exercise: Dodge-em
Anthony Lum

4% of final grade
Section B (Tuesdays): 11:59PM, 28 September 2021
*/

/**
What's the plan stan?

Objectives::
  1) x Change the way the user controls their circle
  2) x Add at least one new if-statement (including at least an else) that changes the nature of the simulation
  3) Change the way the simulation looks
  4) x Use at least one image
*/

// Variables that are relevant and want to keep track of throughout the program
let covid19 = {
  x: 0,
  y: 250,
  size: 120,
  grow: 2,
  shrink: 2,
  passiveGrow: 0.25,
  vx: 0,
  vy: 0,
  speed: 10,
};

let user = {
  x: 100,
  y: 100,
  size: 120,
  shrink: 10,
  //speed start
  up: -10,
  down: 10,
  left: -10,
  right: 10,
  //speed end
};

let vaccine = {
  x: 0,
  y: 0,
  size: 120,
  grow: 2,
  vx: 0,
  vy: 0,
  speed: 10,
  count: 0,
};

// text
let text1 = {
  x: 200,
  y: 150,
  size: 25,
  padding: 150,
  fill: {
    r: 255,
    g: 255,
    b: 255
  }

}

// Bg Static
let numStatic = 1000;

// Images of Player + Virus + Vaccine
let covid19Image;
let userImage;
let vaccineIamge;

/** Making sure things are loaded before the function runs **/
function preload() {
  covid19Image = loadImage('assets/images/virus.png');
  userImage = loadImage('assets/images/mask.png');
  vaccineImage = loadImage('assets/images/needle.png');
}

/** Setting up the Mainframe or the simulation */
function setup() {
  createCanvas(windowWidth, windowHeight);
  covid19.y = random(0, height); // height better than windowHeight incase you change it
  covid19.vx = covid19.speed; //move in pos direction

  noCursor();

  // Vaccine Spawn
  vaccine.x = random(0, windowWidth);
  vaccine.y = random(0, windowHeight);

  // User Spawn
  user.x = windowWidth / 2 + 200;
  user.y = windowHeight / 2;
} /** End of setup() */


/** Displaying the simulation */
function draw() {
  // if (user.x > windowWidth || user.x < 0 || user.y > windowHeight || user.y < 0) {
  //   background(255, 0, 0); // green
  // } else {
  //   background(0); // black
  // }

  background(0); // black

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

  // Display Covid 19
  imageMode(CENTER);
  image(covid19Image, covid19.x, covid19.y, covid19.size, covid19.size);
  // fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
  // ellipse(covid19.x, covid19.y, covid19.size);

  // Display vaccine  imageMode(CENTER);
  image(vaccineImage, vaccine.x, vaccine.y, vaccine.size, vaccine.size);

  // Display user
  imageMode(CENTER);
  image(userImage, user.x, user.y, user.size, user.size);
  // fill(user.fill.r, user.fill.g, user.fill.b);

  // Contrain user
  user.x = constrain(user.x, 0, windowWidth);
  user.y = constrain(user.y, 0, windowHeight);

  //test
  // Check for catching covid19
  // object.size = diameter, object.size/2 = radius
  let distance = dist(user.x, user.y, covid19.x, covid19.y); // only need now and won't need it later, declaring where we need it
  if (distance < covid19.size / 2 + user.size / 2) {
    // noLoop();
    console.log(distance);
    user.size = user.size - user.shrink;
    covid19.size = covid19.size + covid19.grow;
  }

  // Check if vaccinated
  let distance2 = dist(user.x, user.y, vaccine.x, vaccine.y); // only need now and won't need it later, declaring where we need it
  if (distance2 < vaccine.size / 2 + user.size / 2) {
    user.size = user.size + user.shrink; // opposite of grow but you know
    covid19.size = covid19.size - covid19.grow; // same idea, opposite but using the same number
    vaccine.x = random(0, windowWidth);
    vaccine.y = random(0, windowHeight);
    vaccine.count = vaccine.count + 1;
    console.log(vaccine.count);
  }

  if (vaccine.count >= 5) {

    // Text render
    fill(text1.fill.r, fill.g, fill.b);
    textSize(text1.size);
    textStyle(BOLD);
    text('You are super vaccinated', user.x + text1.padding, user.y + text1.padding); // right

    fill(text1.fill.r, fill.g, fill.b);
    textSize(text1.size);
    textStyle(BOLD);
    text('You are immune to Covid19!', user.x - text1.padding, user.y - text1.padding); // left

    fill(text1.fill.r, fill.g, fill.b);
    textSize(text1.size);
    textStyle(BOLD);
    text('Super Soldier Serum', windowWidth / 2, windowHeight / 2); // center

    noLoop();
  }

  // Passive Game End
  if (user.size <= 0) {
    // Text render
    fill(text1.fill.r, fill.g, fill.b);
    textSize(text1.size);
    textStyle(BOLD);
    text('You caught Covid19', user.x + text1.padding, user.y + text1.padding); // right

    fill(text1.fill.r, fill.g, fill.b);
    textSize(text1.size);
    textStyle(BOLD);
    text('You caught Covid19', user.x - text1.padding, user.y - text1.padding); // left

    fill(text1.fill.r, fill.g, fill.b);
    textSize(text1.size);
    textStyle(BOLD);
    text('You caught Covid19', windowWidth / 2, windowHeight / 2); // center

    noLoop();

  } else {
    covid19.size = covid19.size + covid19.passiveGrow;
    covid19.speed = covid19.speed + covid19.passiveGrow;
  }


} /** End of draw() */
