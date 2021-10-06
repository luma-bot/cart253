/**
Exercise 3: Love, Actually
Anthony Lum

Brief
Change the “looking for love” simulation activity. Ideally, you could think of how you want to change the meaning/nature of the simulation (maybe it could be about unrequited love? Or about unwanted love? Or platonic love? Or being a fan of a YouTuber? Or something else?). Make it your simulation of love (or, if you like, change it to be about something completely different!).

Make your changes to the simulation with the following requirements:

x 1) Allow the lover to control one of the circles
- Anything goes, from clicking to position it, to having it follow the mouse, to using the arrow keys, to something else

x 2) Make the non-lover circle move differently
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
let lover = {
  // player
  x: 150,
  y: 250,
  size: 120,
  vx: 0,
  vy: 0,
  speed: 3,
  up: -3,
  down: 3,
  left: -3,
  right: 3,
}

// Love interest
let loveinterest = {
  // Love interest
  x: 350,
  y: 250,
  size: 120,
  vx: 0,
  vy: 0,
  speed: 7.5,
}


// human npc
let human = {
  // Love interest
  x: 350,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 7.5,
}

// Images of Player + Love interest
let loverImage;
let loveinterestImage;
let humanImage;

let state = `title`; // Options : title, simulation, love, sadness, & waitwhatwhy (easteregg)

// -----------------------------------------------------------------------------
// The playbook & setup

function preload() {
  loverImage = loadImage('assets/images/hearteyes.png');
  loveinterestImage = loadImage('assets/images/smile.png');
  humanImage = loadImage('assets/images/slight.png');
}

function setup() {
  // Canvas
  createCanvas(windowWidth, windowHeight); // use once
  setupCircles(); // set up characters
  noCursor(); // hide cursor
}

function setupCircles() {
  // Player Spawn Point
  lover.x = random(0, width);
  lover.y = random(0, height);

  // Love interest Spawn Point
  loveinterest.x = random(0, width);
  loveinterest.y = random(0, height);
  loveinterest.vx = random(-loveinterest.speed, loveinterest.speed);
  loveinterest.vy = random(-loveinterest.speed, loveinterest.speed);

  // NPC Spawn Point
  human.x = random(0, width);
  human.y = random(0, height);
  human.vx = random(-human.speed, human.speed);
  human.vy = random(-human.speed, human.speed);
}

// -----------------------------------------------------------------------------
// Draw & Display the goods
// Display the different states between start, simulation, love, sadness, and why.
// State options
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

// start screen state
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

// game screen state
function simulation() {
  // functions
  move();
  checkOffScreen();
  checkOverlap();
  display();
}

// win screen state
function love() {
  push();
  textSize(64);
  fill(255); // white
  textAlign(CENTER, CENTER);
  text(`I LOVE YOU 3000`, width / 2, height / 2);
  textSize(24);
  text(`Press Space to Replay`, width / 2, height / 2 + 64);
  pop();
}

// lose screen state
function sadness() {
  push();
  textSize(64);
  fill(255); // white
  textAlign(CENTER, CENTER);
  text(`:( 5everalone`, width / 2, height / 2);
  textSize(24);
  text(`Press Space to Replay`, width / 2, height / 2 + 64);
  pop();
}

// I choose self love state
function why() {
  push();
  textSize(24);
  fill(255); // white
  textAlign(CENTER, CENTER);
  text(`Who needs love right? It's all about self love.`, width / 2, height / 2);
  text(`You're an independent person who doesn't need no other!`, width / 2, height / 2 + 24);
  textSize(24);
  text(`Press Space to Replay`, width / 2, height / 2 + 64);
  pop();
}

// -----------------------------------------------------------------------------
// Object Movement
function move() {
  // Move Player
  if (keyIsDown(LEFT_ARROW)) {
    lover.x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    lover.x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    lover.y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    lover.y += 5;
  }

  // circle 2 === Love interest
  loveinterest.x += loveinterest.vx;
  loveinterest.y += loveinterest.vy;

  // human npc
  human.x += human.vx;
  human.y += human.vy;

  //Random love interest movement
  let change = random();
  if (change < 0.01) {
    //speed faster
    // 1% not bad

    loveinterest.vx = random(-loveinterest.speed, loveinterest.speed);
    loveinterest.vy = random(-loveinterest.speed, loveinterest.speed);

    loveinterest.x += loveinterest.vx;
    loveinterest.y += loveinterest.vy;

    human.vx = random(-human.speed, human.speed);
    human.vy = random(-human.speed, human.speed);

    human.x += human.vx;
    human.y += human.vy;
  }
}

// Can't find love
function checkOffScreen() {
  if (isOffscreen(loveinterest)) {
    state = `sadness`;
  }

  // Easter Egg Mode
  if (isOffscreen(lover)) {
    state = `waitwhatwhy`;
  }

}

// Check if circles are in the play zone
function isOffscreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  } else {
    return false;
  }
}

// Check if the circles are overlapping
function checkOverlap() {
  let d = dist(lover.x, lover.y, loveinterest.x, loveinterest.y);
  if (d < lover.size / 2 + loveinterest.size / 2) {
    state = `love`;
  }
}

// -----------------------------------------------------------------------------
function display() {

  // Display player
  imageMode(CENTER);
  image(loverImage, lover.x, lover.y, lover.size, loveinterest.size);

  // Display NPC Love interest
  imageMode(CENTER);
  image(loveinterestImage, loveinterest.x, loveinterest.y, loveinterest.size, loveinterest.size);

  // Display NPC Love interest
  imageMode(CENTER);
  image(humanImage, human.x, human.y, human.size, human.size);
}

// -----------------------------------------------------------------------------
// Mouse click to start game
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
}

// Press Space to start game
function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `simulation` // space to start
  }

  // Reset game at the end
  if (state === `love` && key === ' ' || state === `sadness` && key === ' ' || state === `waitwhatwhy` && key === ' ') {
    resetVariables();
    setupCircles();
    state = `simulation` // space to start
  }

}

//somewhere else, reset variables to continue playing
function resetVariables() {
  lover = {
    // player
    x: 150,
    y: 250,
    size: 120,
    vx: 0,
    vy: 0,
    speed: 3,
    up: -3,
    down: 3,
    left: -3,
    right: 3,
  }

  // Love interest
  loveinterest = {
    // Love interest
    x: 350,
    y: 250,
    size: 120,
    vx: 0,
    vy: 0,
    speed: 7.5,
  }

  // human npc
  let human = {
    // Love interest
    x: 350,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 7.5,
  }
}
// End of Code
// -----------------------------------------------------------------------------
