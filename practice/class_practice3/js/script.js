/*
In class Practice 09/21
Anthony Lum

Practicing and following along with the class

/* Variables */
  let rectangle = {
    x: 0,
    y: 250,
    size: 50,
    speed: 10,
  };

/** Description of setup */
function setup() {
  createCanvas(500,500);
}

/** Where the action is in p5. Gets run once per frame, 60 times per second */
function draw() {
  background(0);

  noFill();
  stroke(255);
  rectMode(CENTER);
  rect(rectangle.x, rectangle.y, rectangle.size);

  rectangle.y -= rectangle.speed;
  console.log();
}
