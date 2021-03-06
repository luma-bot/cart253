/**
Exercise 1: I Like to Move It.
Anthony Lum

I like to move it move it, you like to move it move it, we like to move it!

PLAN:
- Continue to get comfortable using Git and GitHub when you work on new projects
- Declaring and changing variables (especially JavaScript objects!)

- x Include three shapes
- x Include movement
- x Include size changes
- x Include color changes
- x Use map()
- x Use constrain()
- x Respond to the mouse position using mouseX and mouseY
*/

//Variable setup
let bg = {
  r: 255,
  g: 156,
  b: 0,
  // This is my favorite yellow, for testing purposes, because the color will be randomized and changed upon function draw().
  // But we still need to initialize variables.
};

// circle
let shape1 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  r: 0,
  g: 0,
  b: 0,
}

// rect
let shape2 = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  size: 0,
  speed: 0,
  r: 0,
  g: 0,
  b: 0,
}

// triangle
let shape3 = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  x3: 0,
  y3: 0,
  speed: 0,
  r: 0,
  g: 0,
  b: 0,
}

// backup circle for when the triangle is too random
let shape4 = {
  x: 0,
  y: 0,
  size: 0,
  speed: 0,
  r: 0,
  g: 0,
  b: 0,
}

// text
let text1 = {
  x: 200,
  y: 150,
  fill: 0,
  size: 25,
}

// padding
let padding = {
  xmin: 50,
  ymin: 50,
  right: 335,
  bottom: 50,
}

// It's a trap! No it's a setup.
function setup() {

  // canvas
  createCanvas(windowWidth, windowHeight);
  noStroke();

  // random circle location
  shape1.x = random(0, windowWidth);
  shape1.y = random(0, windowHeight);

  // random circle size
  shape1.size = random(50, 250);

  // random rect location
  shape2.x = random(0, windowWidth);
  shape2.y = random(0, windowHeight);

  // random rect size
  shape2.w = random(0, 500);
  shape2.h = random(0, 500);

  // random triangle shape, 3 points
  shape3.x1 = random(0, windowWidth);
  shape3.x2 = random(0, windowWidth);
  shape3.x3 = random(0, windowWidth);
  shape3.y1 = random(0, windowHeight);
  shape3.y2 = random(0, windowHeight);
  shape3.y3 = random(0, windowHeight);

  // random circle location
  shape4.x = random(0, windowWidth);
  shape4.y = random(0, windowHeight);

  // random circle size
  shape4.size = random(50, 250);


  // random shape colors
  shape1.r = random(0, 255);
  shape1.g = random(0, 255);
  shape1.b = random(0, 255);

  shape2.r = random(0, 255);
  shape2.g = random(0, 255);
  shape2.b = random(0, 255);

  shape3.r = random(0, 255);
  shape3.g = random(0, 255);
  shape3.b = random(0, 255);

  shape4.r = random(0, 255);
  shape4.g = random(0, 255);
  shape4.b = random(0, 255);


  // background color random blue
  bg.b = random(0, 255)

  // random shape speeds
  shape1.speed = random(-1, 2);
  shape2.speed = random(-1, 2);
  shape3.speed = random(-1, 2);
  shape4.speed = random(-1, 2);

  // contrain text location
  text1.x = random(0, windowWidth);
  text1.y = random(0, windowHeight);

  console.log('x is: ', text1.x);
  console.log('y is: ', text1.y);
}

// Drawing Time, please work!
function draw() {

  // background color
  background(bg.r, bg.g, bg.b);
  bg.r = map(mouseX, 0, width, 0, windowWidth);
  bg.g = map(mouseY, 0, height, 0, windowHeight);

  // shape1 render
  shape1.x += shape1.speed;
  shape1.y += shape1.speed;
  shape1.size = map(mouseY, 0, height, 0, windowHeight);
  fill(shape1.r, shape1.g, shape1.b);
  ellipse(shape1.x, shape1.y, shape1.size);

  // shape2 render
  shape2.x += shape2.speed;
  shape2.y += shape2.speed;
  fill(shape2.r, shape2.g, shape2.b);
  rect(shape2.x, shape2.y, shape2.w, shape2.h);

  // shape3 render
  shape3.x1 += shape3.speed;
  shape3.y1 += shape3.speed;
  shape3.x2 += shape3.speed;
  shape3.y2 += shape3.speed;
  shape3.x3 += shape3.speed;
  shape3.y3 += shape3.speed;
  fill(shape3.r, shape3.g, shape3.b);
  triangle(shape3.x1, shape3.y1, shape3.x2, shape3.y2, shape3.x3, shape3.y3);

  // shape4 render
  shape4.x += shape1.speed;
  shape4.y += shape1.speed;
  fill(shape4.r, shape4.g, shape4.b);
  ellipse(shape4.x, shape4.y, shape4.size);


  // text render
  fill(text1.fill);
  textSize(text1.size);
  textStyle(BOLD);
  text('Click to refresh the page', text1.x, text1.y);

  text1.x = map(mouseX, 0, width, 0, windowWidth);
  text1.y = map(mouseY, 0, height, 0, windowHeight);

  text1.x = constrain(mouseX, padding.xmin, windowWidth - padding.right);
  text1.y = constrain(mouseY, padding.ymin, windowHeight - padding.bottom);

}

function mouseClicked() {
  // when clicked, refreshes setup, random shapes ext.
  setup();
}
