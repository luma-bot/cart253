/**
Practice 7.1 - 7.4
Anthony Lum
*/

"use strict";

// Variables start
let user = {
  x: 0,
  y: 0,
  size: 100,
}

let food1;
let food2;
let food3;
let food4;

// Variables end

/**
Description of preload
*/
function preload() {}


/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  food1 = createFood(250, windowHeight/2);
  food2 = createFood(350, windowHeight/2);
  food3 = createFood(450, windowHeight/2);
  food4 = createFood(550, windowHeight/2);
}


// Function time

function createFood(x,y){
  let food = {
    x: x,
    y: y,
    size: 50,
    eaten: false,
  }; // call
  return food; // returns
}

/**
Description of draw()
*/
function draw() {
  background(0);

  moveUser();
  displayUser();

  checkFood(food1);
  checkFood(food2);
  checkFood(food3);
  checkFood(food4);

  displayFood(food1);
  displayFood(food2);
  displayFood(food3);
  displayFood(food4);

  function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
  }

  function checkFood(food) {
    if (!food.eaten) {
      let d = dist(user.x, user.y, food.x, food.y);
      if (d < user.size / 2 + food.size / 2) {
        food.eaten = true;
      }
    }
  }

  function displayFood(food) {
    if (!food.eaten) {
      push();
      fill(255, 100, 100);
      ellipse(food.x, food.y, food.size);
      pop();
    }
  }

  function displayUser() {
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
  }

}
