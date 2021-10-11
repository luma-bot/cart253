/**
Practice 6.1 - 6.2
Anthony Lum
*/

"use strict";

let barkSFX;

/**
Description of preload
*/
function preload() {
  barkSFX = loadSound('assets/sounds/bark.wav');
}


/**
Description of setup
*/
function setup() {
  createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
  background(0);
}

function mousePressed(){
  if (!barkSFX.play()){
    music.loop();
  }
}

function keyPressed(){
  if (!barkSFX.play()){
    music.loop();
  }
}
