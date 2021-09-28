/*
Conditionals!
Anthony Lum

Practicing and following along with the Youtube tutorials at 8:30pm this time!!

if (homework.start >= time.midnight){
  coffee(make);
}
*/


// let backgroundShade = 0;
// let circle = {
//   x: 250,
//   y: 250,
//   size: 100,
//   vx: 0,
//   vy: 0,
//   ax: 0,
//   ay: 0,
//   speed: 5,
// }
//
// function setup() {
//   createCanvas(500, 500);
// }
//
// function draw() {
//   background(backgroundShade);
//
//
//   if (mouseX < circle.x) {
//     circle.vx = -circle.speed;
//   } else {
//     circle.vx = circle.speed;
//   }
//
//   if (mouseY < circle.y) {
//     circle.vy = -circle.speed;
//   } else {
//     circle.vy = circle.speed;
//   }
//
//
//   circle.x += circle.vx;
//   circle.y += circle.vy;
//   ellipse(circle.x, circle.y, circle.size);
// }

function setup() {
  createCanvas(500, 500);
}


function draw() {
  background(0);

  fill(255,0,0);
  stroke(0,255,255);
  strokeWeight(10);
  rect(100,100,100,100);
}
