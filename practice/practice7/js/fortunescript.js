"use strict";

let fortunes = [
  'hello',
  'goodbye',
  'goodmorning',
  'goodnight',
  'k.',
];

let currentIndex = 0;

let chosenFortune = 'Click for a random text';

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
}

function draw() {
  background(0);
  text(chosenFortune, width / 2, height / 2);

  text(fortunes[currentIndex], width / 2, height / 2);
}

function mousePressed(){
  chosenFortune = random(fortunes);
  currentIndex += 1;

  if (currentIndex === fortunes.length){
  //currentIndex = fortunes.length - 1; // stop at the end
  currentIndex = 0; // loop to the start again
  }
}
