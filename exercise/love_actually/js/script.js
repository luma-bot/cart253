/**
Exercise 3: Love, Actually
Anthony Lum

Brief
Change the “looking for love” simulation activity. Ideally, you could think of how you want to change the meaning/nature of the simulation (maybe it could be about unrequited love? Or about unwanted love? Or platonic love? Or being a fan of a YouTuber? Or something else?). Make it your simulation of love (or, if you like, change it to be about something completely different!).

Make your changes to the simulation with the following requirements:

1) Allow the user to control one of the circles
- Anything goes, from clicking to position it, to having it follow the mouse, to using the arrow keys, to something else
2) Make the non-user circle move differently
- Use random movement or Perlin noise or teleportation or something else!
3) Add at least one extra function
- including functions any built-in p5 functions like keyPressed()
- Maybe you could add a function that checks if one circle has grown too large (if they grow) or shrunk too small (if they shrink), or faded too much (if their alpha fades)
4) Add at least one extra ending
- Maybe it could be an “easter egg” and hard to discover? (Moving the mouse to a really specific location?)
- Maybe it offers a different dimension of thinking about love and loss?
- Maybe it’s connected to the new function in the previous step?
*/

// -----------------------------------------------------------------------------
// Global Variables
let circle1 = {
  x: 150,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
}

let circle2 = {
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 3,
}

let state = `title`; // Options : title, simulation, love, sadness

// -----------------------------------------------------------------------------
// The playbook & setup
function setup() {
  // Canvas
  createCanvas(500, 500);
  setupCircles();
}

function setupCircles() {
  // Circle Positions, different from eachother
  circle1.x = width / 3;
  circle2.x = 2 * width / 3;

  // Circles moving in a random direction
  circle1.vx = random(-circle1.speed, circle1.speed);
  circle2.vx = random(-circle2.speed, circle2.speed);
  circle1.vy = random(-circle1.speed, circle1.speed);
  circle2.vy = random(-circle2.speed, circle2.speed);
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
  }
}

function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`LOVE?`, width / 2, height / 2);
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
  fill(200, 150, 150);
  textAlign(CENTER, CENTER);
  text(`LOVE!`, width / 2, height / 2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(200, 150, 150);
  textAlign(CENTER, CENTER);
  text(`:(`, width / 2, height / 2);
  pop();
}

// -----------------------------------------------------------------------------
function move() {
  // Move circles
  circle1.x += circle1.vx;
  circle1.y += circle1.vy;

  circle2.x += circle2.vx;
  circle2.y += circle2.vy;
}

function checkOffScreen() {
  // Check if circles have gone off screen
  // if (circle1.x < 0 || circle1.x > width || circle1.y < 0 || circle1.y > height || circle2.x < 0 || circle2.x > width || circle2.y < 0 || circle2.y > height) {
  //   sadness();
  // }

  if (isOffscreen(circle1)|| isOffscreen(circle2)){
    state = `sadness`;
  }
}

function isOffscreen(circle){
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height){
    return true;
  }
  else{
    return false;
  }
}

function checkOverlap() {
  // Check if the circles are overlapping
  let d = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  if (d < circle1.size / 2 + circle2.size / 2) {
    love();
  }
}

function display() {
  // Draw circles
  ellipse(circle1.x, circle1.y, circle1.size);
  ellipse(circle2.x, circle2.y, circle2.size);
}

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}
