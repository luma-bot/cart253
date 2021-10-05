/**
Practice 5, 5.1 - 5.5

Another homework night at 11:57pm.
*/

// Variables
let circle = {
  x: 0,
  y: 250,
  size: 100,
  vx: 1,
  vy: 0,
};

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  move();
  wrap();
  display();
  bars();
}

function display() {
  fill(255, 0, 0);
  ellipse(circle.x, circle.y, circle.size);
}

function bars() {
  let x = 50;
  let y = 250;
  for (let i = 0; i < 20; i++) {
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(x, y, 2, 150);
    x += 10;
  }
}

function move() {
  circle.x += circle.vx;
  circle.y += circle.vy;
}

function wrap() {
  if (circle.x > width) {
    reset();
  }
}

function reset() {
  circle.x = 0;
  circle.vx += 2;
  circle.vy -= 0.25;
  circle.size += 5;
}

function mousePressed() {
  reset();
}
