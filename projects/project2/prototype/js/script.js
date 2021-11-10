/*
P2: Good Bean Water
Anthony Lum, 40098555

A barista simulator.

You are a newly hired barista working at "Good Bean Water". They didn't really give you much training to prepare you for your first shift, so there will be a lot of learning on the job!
Try not to mess up people's orders else they'll get mad. Be quick and efficient, and get those orders out so you can get paid!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas(600, 600);
}


/**
Description of draw()
*/
function draw() {
  background(0);
  let coffee = new Coffee();
  
  coffee.display();
  coffee.mousePressed();
  coffee.mouseDragged();
  coffee.mouseReleased();
}
