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

let food1 = {
  x: 250,
  y: 300,
  size: 50,
  eaten: false,
}

let food2 = {
  x: 350,
  y: 300,
  size: 50,
  eaten: false,
}

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
}


/**
Description of draw()
*/
function draw() {
  background(0);

  moveUser();

  checkfood1();
  checkfood2();

  displayUser();
  displayFood1();
  displayFood2();

  function moveUser(){
    user.x = mouseX;
    user.y = mouseY;
  }

  function checkFood1(){
    if (!food1.eaten){
      let d = dist(user.x, user.y, food1.x,food1.y);
      if (d < user.size / 2 + food1.size /2){
        food1.eaten = true;
      }
    }
  }

  function checkFood2(){
    if (!food2.eaten){
      let d = dist(user.x, user.y, food2.x,food2.y);
      if (d < user.size / 2 + food2.size /2){
        food2.eaten = true;
      }
    }
  }

  function displayFood1(){
    if (!food1.eaten){
      push();
      fill(255,100,100);
      ellipse(food1.x, food1.y, food1.size);
      pop();
    }
  }

  function displayFood2(){
    if (!food2.eaten){
      push();
      fill(255,100,100);
      ellipse(food2.x, food2.y, food2.size);
      pop();
    }
  }

}
