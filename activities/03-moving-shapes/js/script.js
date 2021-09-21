/**
Activity 3: Moving Shapes
Anthony Lum

I like to move it move it, you like to move it move it, we like to move it!

PLAN:
- Figure out what variables we need
- Set up the canvas
- Set the background color, remembering it needs to change over time
- Deal with the left circle coming onto the screen, stopping in the middle, and growing
- Deal with the right circle doing the same thing
*/

//Variable setup
let bg = {
  r: 0,
  g: 0,
  b: 0,
};

let circle1 = {
  x: 0,
  y: 250,
  size: 100,
  growthRate: 1,
  speed: 1,
  fill: 255,
  alpha: 200,
};

let circle2 = {
  x: 500,
  y: 250,
  size: 75,
  sizeRatio: 0.75,
  speed: -1,
  fill: 255,
  alpha: 200,
};

//It's a trap! No it's a setup.
function setup() {
  createCanvas(500, 500);
  noStroke();
}

// Drawing Time
function draw() {
  //Background
  background(bg.r, bg.g, bg.b);
  bg.r = map(circle1.size,100,width,0,255);
  // When circle1.size is = 100, color = 0, when circle1.size = width, color = 255.

  //Left Circle
  circle1.x += circle1.speed;
  circle1.x = constrain(circle1.x, 0, width / 2); // circle1.x, Lowest Value, Highest Value
  circle1.size += circle1.growthRate;
  circle1.size = constrain(circle1.size,0,width); // circle1.size, Lowest Value, Highest Value
  fill(circle1.fill, circle1.alpha);
  ellipse(circle1.x, circle1.y, circle1.size);

  //Right Circle
  circle2.x += circle2.speed;
  circle2.x = constrain(circle2.x, width / 2, width);
  circle2.size = circle1.size * circle2.sizeRatio;
  fill(circle2.fill, circle2.alpha);
  ellipse(circle2.x, circle1.y, circle2.size);
}
