/*
Activity 2: Draw an alien
Anthony Lum

Drawing an alien of my choice
*/

/*
Plan:
1) First we’ll set up the canvas
2) Then we’ll fill in the background color
3) We’ll draw an ellipse for the body and other for the head
4) Then we’ll draw eyes, nostrils, and a mouth on top of the head
*/

// Setup Minion
function setup() {
  createCanvas(640, 480);
  background(255, 100, 100);
  noStroke();

  // Draw Body
  fill(243, 199, 56);
  ellipse(320, 480, 500, 600);

  // Draw Goggles
  fill(112, 109, 110);
  ellipse(250, 300, 150);

  fill(112, 109, 110);
  ellipse(390, 300, 150);

  stroke(112, 109, 110);
  strokeWeight(10);
  rectMode(CENTER);
  rect(320, 300, 430, 50);

  // Draw White of Eyes
  noStroke(); //ends stroke weight from cont.
  fill(255, 255, 255);
  ellipse(250, 300, 120);
  ellipse(390, 300, 120);

  // Draw Brown of Eyes
  fill(164, 99, 83);
  ellipse(250, 300, 40);
  ellipse(390, 300, 40);

  // Draw Black of Iris
  fill(19, 21, 22);
  ellipse(250, 300, 15);
  ellipse(390, 300, 15);

  // Draw Mouth
  ellipseMode(CENTER);
  ellipse(320, 500, 200);

  // Draw Tongue
  fill(205, 131, 139);
  ellipseMode(CENTER);
  ellipse(320, 480, 100, 50);

  // Draw Hair
  noFill();
  stroke(0, 0, 0);
  curve(100, 400, 220, 210, 150, 120, 50, 50);
  stroke(0, 0, 0);
  curve(200, 100, 320, 210, 300, 120, 220, 600);
  stroke(0, 0, 0);
  curve(500, 300, 420, 210, 450, 120, 150, 250);
}

// Execute draw()
function draw() {

}
