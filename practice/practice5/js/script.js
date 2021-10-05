// /**
// Practice 5, 5.1 - 5.5
//
// Another homework night at 11:57pm.
// */
//
// // Variables
// let circle = {
//   x: 0,
//   y: 250,
//   size: 100,
//   vx: 1,
//   vy: 0,
// };
//
// let hello = {
//   string: `Hello, world!`,
//   x: 250,
//   y: 250,
//   vx: 5,
//   vy: 1,
// }
//
// let state = `title`;
//
// function setup() {
//   createCanvas(500, 500);
//   let hotCelsius = toCelsius(100);
//   console.log(`100 degrees Fahrenheit is ${hotCelsius} degress Celsius.`);
//
//   let coldCelsius = toCelsius(10);
//   console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`)
// }
//
// function draw() {
//   background(0);
//
//   hello.x += hello.vx;
//   hello.y += hello.vy;
//
//   move();
//   wrap();
//   display();
//   bars(300, 300, 10, 20, 20, 1);
//   bars(200, 200, 5, 20, 30, 2);
//   bars(100, 100, 20, 30, 30, 10);
//   bars(200, 200, 25, 0.5, 10, 20);
//
//   text(hello.string, hello.x, hello.y);
//
//   ellipse(random(0, width), random(0, height), 100);
//
//   if (state === `title`) {
//     fill(255);
//     text(`Life.`, width / 2, height / 2);
//   } else if (state === `animation`) {
//     circle.x += circle.vx;
//     circle.y += circle.vy;
//     ellipse(random(0, width), random(0, height), 100);
//   } else if (state === `ending`) {
//     fill(127);
//     text(`It's all over.`, width / 2, height / 2);
//   }
//
// }
//
// }
//
// function text() {
//   textAlgin(CENTER, CENTER);
//   textSize(64);
//   textStyle(BOLD);
//   fill(200, 50, 200);
//   stroke(50, 200, 50);
//   strokeWeight(3);
// }
//
// function checkOffScreen() {
//   if (circleIsOffScreen()) {
//     reset();
//   }
// }
//
// function circleIsOffScreen() {
//   if (circle.x < 0 || ciecle.x > width || circle.y < 0 || circle.y > height) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// function display() {
//   fill(255, 0, 0);
//   ellipse(circle.x, circle.y, circle.size);
// }
//
// function toCelsius(fahrenheit) {
//   let celsius = (fahrenheit - 32) * 5 / 9;
//   return celsius;
// }
//
// function bars(x, y, numLines, lineWidth, lineHeight, lineSpacing) {
//   for (let i = 0; i < numLines; i++) {
//     noStroke();
//     fill(255);
//     rectMode(CENTER);
//     rect(x, y, lineWidth, lineHeight);
//     x += lineSpacing;
//   }
// }
//
// function move() {
//   circle.x += circle.vx;
//   circle.y += circle.vy;
// }
//
// function wrap() {
//   if (circle.x > width) {
//     reset();
//   }
// }
//
// function reset() {
//   circle.x = 0;
//   circle.vx += 2;
//   circle.vy -= 0.25;
//   circle.size += 5;
// }
//
// function mousePressed() {
//   reset();
// }

let bg = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(bg);
  // textAlign(CENTER, CENTER);
  // textSize(200);
  // fill(255);
  // text(key, width / 2, height / 2);


  let change = random();
  if (change < 0.01) {
    circle.vx = random(-circle.speed, circle.speed);
    circle.vy = random(-circle.speed, circle.speed);
  }

  circle.x += circle.vx;
  circle.y += circle.vy;

  ellipse(circle.x, circle.y, circle.size);
}

// function keyPressed() {
//   if (key === `a`) {
//     bg = 0;
//   } else if (key === `b`) {
//     bg = 127;
//   } else if (key === `c`) {
//     bg = 200;
//   } else if (keyCode === )
// }
