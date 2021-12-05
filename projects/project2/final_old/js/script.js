/*
P2: Good Bean Water
Anthony Lum, 40098555

A barista simulator.
You are a newly hired barista working at "Good Bean Water". They didn't really give you much training to prepare you for your first shift, so there will be a lot of learning on the job!
Try not to mess up people's orders else they'll get mad. Be quick and efficient, and get those orders out so you can get paid!
*/

// -----------------------------------------------------------------------------

"use strict";

// Global Variables start
let bgImage;
let cafe = {
  coffee: [],
  numOrders: 2,
};
// Global Variables end

// Classes start
let coffee;
let cup;
// Classes end


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

  cup = new Cup();
  coffee = new Coffee();

}
/** end of setup(); */

// -----------------------------------------------------------------------------

/** Function that outputs and displays the desired visual design of the simulation */
function draw() {
  background(bgImage); // display cafe background, sized exactly to fit canvas

  cup.display();
  coffee.display();
  coffee.hoverCheck();
}
/** end of draw(); */

// -----------------------------------------------------------------------------

/** Test Functions area*/
function mousePressed() {
  mouseLocation();
  coffeePressed();

  function mouseLocation() { // used to output mouse coords
    console.log('mouseX is: ' + mouseX);
    console.log('mouseY is: ' + mouseY);
  } // end of mouseLocation();

  function coffeePressed(){
    if (coffee.contact) {
      coffee.locked = true;
    } else {
      coffee.locked = false;
    }
    coffee.xOffset = mouseX - coffee.x;
    coffee.yOffset = mouseY - coffee.y;
  } // end of coffeePressed();
} // end of mousePressed

function mouseDragged() {
  if (coffee.locked) {
    coffee.x = mouseX - coffee.xOffset;
    coffee.y = mouseY - coffee.yOffset;
  }
} // end of mouseDragged

function mouseReleased() {
  coffee.locked = false;
} // end of mouseReleased
