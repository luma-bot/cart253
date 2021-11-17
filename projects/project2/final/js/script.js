/*
P2: Good Bean Water
Anthony Lum, 40098555

A barista simulator.
You are a newly hired barista working at "Good Bean Water". They didn't really give you much training to prepare you for your first shift, so there will be a lot of learning on the job!
Try not to mess up people's orders else they'll get mad. Be quick and efficient, and get those orders out so you can get paid!
*/

// -----------------------------------------------------------------------------

// Global Variables start
"use strict";

let bgImage;

// Global Variables end

// -----------------------------------------------------------------------------

/** Function that loads assets */
function preload() {
  bgImage = loadImage('assets/images/bg_coffeebar-01.png');
}
/** end of preload(); */

// -----------------------------------------------------------------------------

/**
Function that sets up the main components of the simulation
*/
function setup() {
  createCanvas(600, 326);
}
/** end of setup(); */

// -----------------------------------------------------------------------------

/** Function that outputs and displays the desired visual design of the simulation */
function draw() {
  background(bgImage);
}
/** end of draw(); */

// -----------------------------------------------------------------------------
