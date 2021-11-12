/**
Exercise 6: Make Some Noise
Anthony Lum
40098555

The core objective of this exercise is to spend time both experimenting with the p5.sound library and its possibilities
(most obviously playing with sound files, oscillators, synthesizers, and audio input)
alongside achieving a milestone in your final project.
*/



"use strict";
let monoSynth;
let nggyu;

function preload() {
  soundFormats('mp3', 'ogg');
  nggyu = loadSound('assets/sounds/nggyu.mp3')
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.mousePressed(playSynth);
  background(220);
  textAlign(CENTER);
  text('type the alphabet', width / 2, height / 2);
  text('or click the canvas', width / 2, height / 2 + 24);

  monoSynth = new p5.MonoSynth();
}

function playSynth() {
  // ensure audio is enabled
  userStartAudio();
  if (nggyu.isPaused) {
    nggyu.play();
    console.log('plz play');
    // sorry Sharon, this isn't working, enjoy hearing "never gunna give you up, multiple times"
  } else {
    // start the loop
    nggyu.stop();
    console.log('plz stop');
  }
}

function C4() {
  let note = 'C4';
  let time = 0;
  let dur = 1 / 6;
  monoSynth.play(note, time, dur);
}

function D4() {
  let note = 'D4';
  let time = 0;
  let dur = 1 / 6;
  monoSynth.play(note, time, dur);
}

function G3() {
  let note = 'G3';
  let time = 0;
  let dur = 1 / 6;
  monoSynth.play(note, time, dur);
}

function fn4() {
  let note = 'f4';
  let time = 0;
  let dur = 1 / 6;
  monoSynth.play(note, time, dur);
}

function G4() {
  let note = 'G4';
  let time = 0;
  let dur = 1 / 6;
  monoSynth.play(note, time, dur);
}

function F4() {
  let note = 'F4';
  let time = 0;
  let dur = 1 / 6;
  monoSynth.play(note, time, dur);
}


function draw() {

}

function keyPressed() {
  if (keyCode === 65) {
    console.log(keyCode + key); // a
    C4();
  } else if (keyCode === 66) {
    console.log(keyCode + key); // b
    D4();
  } else if (keyCode === 67) {
    console.log(keyCode + key); // c
    G3();
  } else if (keyCode === 68) {
    console.log(keyCode + key); // d
    D4();
  } else if (keyCode === 69) {
    console.log(keyCode + key); // e
    fn4();
  } else if (keyCode === 70) {
    console.log(keyCode + key); // f
    G4();
  } else if (keyCode === 71) {
    console.log(keyCode + key); // g
    F4();
  } else if (keyCode === 72) {
    console.log(keyCode + key); // h
    fn4();
  } else if (keyCode === 73) {
    console.log(keyCode + key); // i
    D4();
  } else if (keyCode === 74) {
    console.log(keyCode + key); // j
    G3();
  } else if (keyCode === 75) {
    console.log(keyCode + key); // k
    G4();
  } else if (keyCode === 76) {
    console.log(keyCode + key); // l
    F4();
  } else if (keyCode === 77) {
    console.log(keyCode + key); // m
    fn4();
  } else if (keyCode === 78) {
    console.log(keyCode + key); // n
    D4();
  } else if (keyCode === 79) {
    console.log(keyCode + key); // o
    C4();
  } else if (keyCode === 80) {
    console.log(keyCode + key); // p
    D4();
  } else if (keyCode === 81) {
    console.log(keyCode + key); // q
    G3();
  } else if (keyCode === 82) {
    console.log(keyCode + key); // r
    D4();
  } else if (keyCode === 83) {
    console.log(keyCode + key); // s
    G3();
  } else if (keyCode === 84) {
    console.log(keyCode + key); // t
    D4();
  } else if (keyCode === 85) {
    console.log(keyCode + key); // u
    fn4();
  } else if (keyCode === 86) {
    console.log(keyCode + key); // v
    G4();
  } else if (keyCode === 87) {
    console.log(keyCode + key); // w
    F4();
  } else if (keyCode === 88) {
    console.log(keyCode + key); // x
    fn4();
  } else if (keyCode === 89) {
    console.log(keyCode + key); // y
    D4();
  } else if (keyCode === 90) {
    console.log(keyCode + key); // z
    C4();
  } else if (keyCode === 49) {
    console.log(keyCode + key); // 1
    D4();
  } else if (keyCode === 50) {
    console.log(keyCode + key); // 2
    G3();
  } else if (keyCode === 51) {
    console.log(keyCode + key); // 3
  } else if (keyCode === 52) {
    console.log(keyCode + key); // 4
  } else if (keyCode === 53) {
    console.log(keyCode + key); // 5
  } else if (keyCode === 54) {
    console.log(keyCode + key); // 6
  } else if (keyCode === 55) {
    console.log(keyCode + key); // 7
  } else if (keyCode === 56) {
    console.log(keyCode + key); // 8
  } else if (keyCode === 57) {
    console.log(keyCode + key); // 9
  } else if (keyCode === 48) {
    console.log(keyCode + key); // 0
  }
}

/*
Piano Notes for Never Gunna Give You Up
C4
D4
G3
D4
fn4
G4
F4
fn4
D4
C4
D4
G3
G4
F4
fn4
D4
C4
D4
G3
D4
fn4
G4
F4
fn4
D4
C4
D4
G3
*/
