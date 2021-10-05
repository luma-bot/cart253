/**
Exercise 3: Love, Actually
Anthony Lum

Brief
Change the “looking for love” simulation activity. Ideally, you could think of how you want to change the meaning/nature of the simulation (maybe it could be about unrequited love? Or about unwanted love? Or platonic love? Or being a fan of a YouTuber? Or something else?). Make it your simulation of love (or, if you like, change it to be about something completely different!).

Make your changes to the simulation with the following requirements:

x 1) Allow the circle1 to control one of the circles
- Anything goes, from clicking to position it, to having it follow the mouse, to using the arrow keys, to something else

2) Make the non-circle1 circle move differently
- Use random movement or Perlin noise or teleportation or something else!

x 3) Add at least one extra function
- including functions any built-in p5 functions like keyPressed()
- Maybe you could add a function that checks if one circle has grown too large (if they grow) or shrunk too small (if they shrink), or faded too much (if their alpha fades)

x 4) Add at least one extra ending
- Maybe it could be an “easter egg” and hard to discover? (Moving the mouse to a really specific location?)
- Maybe it offers a different dimension of thinking about love and loss?
- Maybe it’s connected to the new function in the previous step?
*/

// add things

// -----------------------------------------------------------------------------
// Global Variables
let circle1 = {
  // player
  x: 150,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  up: -5,
  down: 5,
  left: -5,
  right: 5,
}

// Love Intrest
let circle2 = {
  // Love Intrest
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
}

let circle3 = {
  // NPC
  x: 350,
  y: 250,
  size: 75,
  vx: 0,
  vy: 0,
  speed: 5,
}

// Images of Player + Love Intrest
// let playerImg;
// let loveImg;

let state = `title`; // Options : title, simulation, love, sadness, & waitwhatwhy (easteregg)

// -----------------------------------------------------------------------------
// The playbook & setup

function preload() {
  //  playerImage = loadImage('assets/images/hearteyes.png');
  //  loveImage = loadImage('assets/images/smile.png');
}

function setup() {
  // Canvas
  createCanvas(windowWidth, windowHeight);
  setupCircles();
  noCursor();
}

function setupCircles() {
  // Circle Positions, different from eachother
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

  // Circles moving in a random direction
  circle2.x = random(0, windowWidth);
  circle2.y = random(0, windowHeight);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);

  circle3.x = random(0, windowWidth);
  circle3.y = random(0, windowHeight);
}

// -----------------------------------------------------------------------------
// Draw & Display the goods
function draw() {
  background(0);

  if (state === `title`) {
    title();
  } else if (state === `simulation`) {
    simulation(); // run fate
  } else if (state === `love`) {
    love();
  } else if (state === `sadness`) {
    sadness();
  } else if (state === `waitwhatwhy`) {
    why();
  }
}

function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width / 2, height / 2);
  textSize(24);
  fill(255);
  text(`Press Space to Start`, width / 2, height / 2 + 64);
  pop();
}

function simulation() {
  // functions
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255); // white
  textAlign(CENTER, CENTER);
  text(`I LOVE YOU 3000`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(200, 150, 150); // pink
  textAlign(CENTER, CENTER);
  text(`:( 5everalone`, width / 2, height / 2);
  pop();
}

function why() {
  push();
  textSize(24);
  fill(255); // pink
  textAlign(CENTER, CENTER);
  text(`Who needs love right?`, width / 2, height / 2);
  text(`You're an independent person who doesn't need no other!`, width / 2, height / 2 + 24);
  pop();
}

// -----------------------------------------------------------------------------
function move() {
  // Move circles

  // //circle 1 === player 1
  // circle1.x += circle1.vx;
  // circle1.y += circle1.vy;

  if (keyIsDown(LEFT_ARROW)) {
    circle1.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    circle1.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    circle1.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    circle1.y += 5;
  }

  // circle 2 === Love Intrest
  circle2.x += circle2.vx;
  circle2.y += circle2.vy;

}

function checkOffScreen() {
  // Check if circles have gone off screen
  // if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
  //   sadness();
  // }

  if (isOffscreen(circle2)) {
    state = `sadness`;
  }

  if (isOffscreen(circle1)) {
    state = `waitwhatwhy`;
  }

}

function isOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

function checkOverlap() {
  // Check if the circles are overlapping
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    state = `love`;
  }
}

function display() {
  // Draw circles

  // Player
  push();
  fill(255); // White
  ellipse(circle1.x, circle1.y, circle1.size);
  pop();

  // Love Intrest
  push();
  fill(255, 51, 153); // Pink
  ellipse(circle2.x, circle2.y, circle2.size);
  pop();

  // // Display player
  // imageMode(CENTER);
  // image(playerImage, circle1.x, circle1.y,circle1.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `simulation` // space to start
  }
}
