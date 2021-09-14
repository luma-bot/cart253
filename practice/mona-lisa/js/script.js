/**
Will I make the Mona Lisa? Maybe I will, maybe I won't.
Anthony Lum

Week 2 in class practice activity.

Plan:
  x Create a a reasonable sized canvas
  x fill the background
  x
*/


// Masterpiece Setup
function setup() {

  // Initial bg
  createCanvas(300,400); // (w,h)
  background(125, 134, 91); // rgb

  // Secondary bg
  noStroke();
  fill(85, 84, 54); // rgb
  rect(0,100,400,300); // (x,y,w,h)

  // Tertiary bg
  noStroke();
  fill(84, 64, 57); // rgb
  rect(0,200,400,200); // (x,y,w,h)

  // Head
  fill(222,182,93);
  ellipse(120,85,60,80);

  // Smile
  stroke(0);
  line(100,100,120,105);
}
