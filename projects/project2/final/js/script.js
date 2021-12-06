/*

██████  ███████  █████  ██████      ███    ███ ███████
██   ██ ██      ██   ██ ██   ██     ████  ████ ██
██████  █████   ███████ ██   ██     ██ ████ ██ █████
██   ██ ██      ██   ██ ██   ██     ██  ██  ██ ██
██   ██ ███████ ██   ██ ██████      ██      ██ ███████


P2: Good Bean Water
Anthony Lum, 40098555

A barista simulator.
You are a newly hired barista working at "Good Bean Water". They didn't really give you much training to prepare you for your first shift, so there will be a lot of learning on the job!
Try not to mess up people's orders else they'll get mad. Be quick and efficient, and get those orders out so you can get paid!

// -----------------------------------------------------------------------------

Notes:
Winter theme, holiday inspired?
Snow flakes falling on intro screen?
Lofi Xmas Music
Hot drinks only
What is the goal? Collect “x” money to move to the next level? Do 10 drinks > 20 drinks > 30 drinks?
Have a timer, after x frames time runs out, game over if money or drinks is not greater than goal x
Time indicator? Show a clock?
Move onto next level ext
At the end of each level add score, score is how much money made, random tip amount each order
At the end of game = lose, total score is money made for each level
1/10 drinks displayed at the top right into singular post it note, once order 1 is complete, next order until 10/10 drinks is done
All noises must END at the end of it being played, only playable if mouse is over item with a proper check of cup or hand
Music can be continued and looped

To Do List:
-	Start Screen Background / Title Screen
-	Instructions Background / Panel Screen + Left
-	Main Screen Background / Game Screen
-	Score Screen Background / Panel Screen + Left
-	Post it Note Order
-	Object Assets
o	Coffee
o	Milk
o	Sugar
o	Cup Sizes (s, m, l)
o	Chocolate
o	Vanilla
-	Sounds
o	Glass Clink (Pick up glass)
o	Coffee Pour (Pour Liquid)
o	Milk Pour (Pour Liquid)
o	Sugar Squirt (Squirt Sound)
o	Chocolate Squirt (Squirt Sound)
o	Vanilla Squirt (Squirt Sound)
o	Serve Order (Glass Clink or ding noise)
o	Cash Pay (Cha-Ching or coins drop noise)
Game Flow:
	Intro Screen > Title Screen
		Title Screen = (Start + Instructions + Credits)
		Start Screen = Game Screen > End of Level Screen > (Loop)
Instructions + Right bubble Text > Dark Game Screen > Cups > Move Cup > Coffee > Milk > Sugar > Chocolate > Vanilla > Serve + Discard Buttons > Order Post Its >Instructions + Right Bubble > Start Screen
		Credits > Credits + Left Bubble Text
 
Logic:
-	Esc to Fade Back to Menu (Anywhere)
-	Fade into Start Screen (Flashing Click to Start?)
-	Click to start > Title Screen + Music Starts
o	Options of 3 buttons, hover grows or highlights the button?
o	Buttons lead to respective screens via a fade, music can continue
-	If mouse over any ingredients, must have cup or nothing happens (your cup is empty audio?)
-	If mouse over cup, pickup correct cup size
-	If mouse has cup in hand, (mouse cup?), if mouse cup is over ingredients, add +1 ingredient to (counter cup, invisible holds ingredients) (mouse cup and counter cup can be the same)
-	If mouse cup is over serve button check if ingredients are correct, if so +money, else -money
-	If mouse cup is over discard button, (counter cup) is reset to 0 (woops audio?)
-	If drink is successful +money, money = xLevelScore, end of game = xLevelScore added up to equal EndGameTotalScore
-	When x drinks = total drinks, end of level screen (nice work audio?)
-	Check if mouse cup ingredients = order cup ingredients, if yes, order = good, else -money

-	Value & Chance of each ingredient?

o	Small ($1)
o	Medium ($2)
o	Large ($3)
o	Coffee ( + $1)
o	Milk + Sugar ( $0 )
o	Chocolate ( $1)
o	Vanilla ($1)

-	Change of each ingredient?
o	Cups either have Small25% & Large25% + Medium 50% (need to do a random select between small medium medium large = 100% (each has a “25%” chance, random array?)
o	Coffee = 100% obviously
o	All other ingredients have a random (0 – 4) pumps chance
o	Tip = random ($1 - $3) each drink

-	Random end of level bonus? (if time)

Resources:
  - ASCII Art ANSI Regular > https://patorjk.com/software/taag/#p=display&f=ANSI%20Regular&t=testing
*/









// -----------------------------------------------------------------------------

/*
██    ██  █████  ██████  ██  █████  ██████  ██      ███████ ███████
██    ██ ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██      ██
██    ██ ███████ ██████  ██ ███████ ██████  ██      █████   ███████
 ██  ██  ██   ██ ██   ██ ██ ██   ██ ██   ██ ██      ██           ██
  ████   ██   ██ ██   ██ ██ ██   ██ ██████  ███████ ███████ ███████

*/

"use strict";

// Global Variables
let state = 'titleScreen';
let mouseUser = {
  x: 0,
  y: 0,
};

// Background Images
let bgImage;
let bgTitleScreen;
let bgStartScreen;

// Images
let loadingGif;
let startGameButton = {
  x: 0,
  y: 0,
};
let instructionsButton = {
  x: 0,
  y: 0,
};
let creditsButton = {
  x: 0,
  y: 0,
};

// Sounds

// Fonts
let fontBebasNeue;
let fontOpenSans;

// Set Numbers
let startButtonsW = 377.6;
let startButtonsH = 151.1;









// -----------------------------------------------------------------------------

/*
██████  ███████ ███████  █████  ██    ██ ██      ████████     ███████ ██    ██ ███    ██  ██████ ████████ ██  ██████  ███    ██ ███████
██   ██ ██      ██      ██   ██ ██    ██ ██         ██        ██      ██    ██ ████   ██ ██         ██    ██ ██    ██ ████   ██ ██
██   ██ █████   █████   ███████ ██    ██ ██         ██        █████   ██    ██ ██ ██  ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████
██   ██ ██      ██      ██   ██ ██    ██ ██         ██        ██      ██    ██ ██  ██ ██ ██         ██    ██ ██    ██ ██  ██ ██      ██
██████  ███████ ██      ██   ██  ██████  ███████    ██        ██       ██████  ██   ████  ██████    ██    ██  ██████  ██   ████ ███████

*/

/* p5 Function that loads assets */
function preload() {
  // Background Images
  bgTitleScreen = loadImage('assets/images/Coffee_Background_CART_TitleScreenDark.png'); // 600 x 325
  bgStartScreen = loadImage('assets/images/Coffee_Background_CART_TitleScreen.png'); // 600 x 325 w/out buttons

  // Assets Images
  loadingGif = loadImage('assets/images/coffee_loading.gif'); // 1:1
  startGameButton = loadImage('assets/images/Coffee_Background_CART_StartGameButton.png'); // 188.8 x 75.55
  instructionsButton = loadImage('assets/images/Coffee_Background_CART_InstructionsButton.png'); // 188.8 x 75.55
  creditsButton = loadImage('assets/images/Coffee_Background_CART_CreditsButton.png'); // 188.8 x 75.55

  // Sounds

  // Fonts
  fontBebasNeue = loadFont('assets/fonts/BebasNeue-Regular.otf');
}
/** end of preload(); */

/* p5 Function that sets up the main components of the simulation */
function setup() {
  createCanvas(1200, 650); // double the bg size, adds to the pixelated style, all image sizes must be doubled from the OG size to fit
}
/** end of setup(); */

/* p5 Function that outputs and displays the desired visual design of the simulation */
function draw() {
  background(51); // default grey background, sized exactly to fit canvas
  simState(); // draws the simulation out
}
/* end of draw(); */









// -----------------------------------------------------------------------------

/*
███████ ██ ███    ███        ██████  ██████  ███    ██ ████████ ██████   ██████  ██      ██      ███████ ██████
██      ██ ████  ████       ██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██      ██      ██      ██   ██
███████ ██ ██ ████ ██ █████ ██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██      ██      █████   ██████
     ██ ██ ██  ██  ██       ██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██      ██      ██      ██   ██
███████ ██ ██      ██        ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████ ███████ ███████ ██   ██

*/

// Simulation State Controller Start
// Description: Checks and changes the states of the simulation and runs the appropriate function
function simState() {
  if (state === `titleScreen`) {
    titleScreen(); // intro title screen function
  } else if (state === `startScreen`) {
    startScreen(); // start screen with navigation buttons
  } else if (state === 'instructionsScreen'){
    instructionsScreen();
  }
}
// Simulation State Controller End

// -----------------------------------------------------------------------------

/*
████████ ██ ████████ ██      ███████     ███████  ██████ ██████  ███████ ███████ ███    ██
   ██    ██    ██    ██      ██          ██      ██      ██   ██ ██      ██      ████   ██
   ██    ██    ██    ██      █████       ███████ ██      ██████  █████   █████   ██ ██  ██
   ██    ██    ██    ██      ██               ██ ██      ██   ██ ██      ██      ██  ██ ██
   ██    ██    ██    ███████ ███████     ███████  ██████ ██   ██ ███████ ███████ ██   ████


*/

// Title Screen State Start
// Description: Displaying the title screen loading gif and text
function titleScreen() {
  push();
  background(bgTitleScreen); // display cafe background, sized exactly to fit canvas
  imageMode(CENTER);
  image(loadingGif, width / 2, height / 2, 200, 200);
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Loading...`, width / 2, height / 2 + 120);
  text(`Click to Continue`, width / 2, height / 2 + 175);
  pop();
}
// Title Screen State End

// -----------------------------------------------------------------------------

/*
███████ ████████  █████  ██████  ████████     ███████  ██████ ██████  ███████ ███████ ███    ██
██         ██    ██   ██ ██   ██    ██        ██      ██      ██   ██ ██      ██      ████   ██
███████    ██    ███████ ██████     ██        ███████ ██      ██████  █████   █████   ██ ██  ██
     ██    ██    ██   ██ ██   ██    ██             ██ ██      ██   ██ ██      ██      ██  ██ ██
███████    ██    ██   ██ ██   ██    ██        ███████  ██████ ██   ██ ███████ ███████ ██   ████


*/

// Start Screen State Start
// Description: Displaying the start screen of game with interactive buttons
function startScreen() {

  // startGameButton position
  startGameButton.x = width / 2;
  startGameButton.y = height / 2;

  // instructionsButton position
  instructionsButton.x = width / 2;
  instructionsButton.y = height / 2 + 110;

  // creditsButton position
  creditsButton.x = width / 2;
  creditsButton.y = height / 2 + 220;

  // display startScreen
  push();
  background(bgStartScreen); // display cafe background, sized exactly to fit canvas
  imageMode(CENTER, CENTER);
  image(startGameButton, startGameButton.x, startGameButton.y, startButtonsW, startButtonsH);
  image(instructionsButton, instructionsButton.x, instructionsButton.y, startButtonsW, startButtonsH);
  image(creditsButton, creditsButton.x, creditsButton.y, startButtonsW, startButtonsH);
  pop();
}
// Start Screen State End

// -----------------------------------------------------------------------------

/*
██ ███    ██ ███████ ████████ ██████  ██    ██  ██████ ████████ ██  ██████  ███    ██ ███████     ███████  ██████ ██████  ███████ ███████ ███    ██
██ ████   ██ ██         ██    ██   ██ ██    ██ ██         ██    ██ ██    ██ ████   ██ ██          ██      ██      ██   ██ ██      ██      ████   ██
██ ██ ██  ██ ███████    ██    ██████  ██    ██ ██         ██    ██ ██    ██ ██ ██  ██ ███████     ███████ ██      ██████  █████   █████   ██ ██  ██
██ ██  ██ ██      ██    ██    ██   ██ ██    ██ ██         ██    ██ ██    ██ ██  ██ ██      ██          ██ ██      ██   ██ ██      ██      ██  ██ ██
██ ██   ████ ███████    ██    ██   ██  ██████   ██████    ██    ██  ██████  ██   ████ ███████     ███████  ██████ ██   ██ ███████ ███████ ██   ████


*/

// Instructions Screen State Start
// Description: Displaying the title screen loading gif and text
function instructionsScreen() {

  // display startScreen
  push();
  background(bgStartScreen); // display cafe background, sized exactly to fit canvas
  imageMode(CENTER, CENTER);
  image(startGameButton, startGameButton.x, startGameButton.y, startButtonsW, startButtonsH);
  pop();
}
// Instructions Screen State End








// -----------------------------------------------------------------------------

/*
███    ███  ██████  ██    ██ ███████ ███████     ██████  ██████  ███████ ███████ ███████ ███████ ██████
████  ████ ██    ██ ██    ██ ██      ██          ██   ██ ██   ██ ██      ██      ██      ██      ██   ██
██ ████ ██ ██    ██ ██    ██ ███████ █████       ██████  ██████  █████   ███████ ███████ █████   ██   ██
██  ██  ██ ██    ██ ██    ██      ██ ██          ██      ██   ██ ██           ██      ██ ██      ██   ██
██      ██  ██████   ██████  ███████ ███████     ██      ██   ██ ███████ ███████ ███████ ███████ ██████


*/


// Check Functions Start
// Description: p5 when mouse is pressed function, do this
// Main Mouse Pressed Function
function mousePressed() {
  transitionTitleCheck(); // location:checks
  startButtonCheck(); // location:checks
  instructionsButtonCheck(); // location:checks
  creditsButtonCheck(); // location:checks
  mousePos(); // location:testing
}









// -----------------------------------------------------------------------------

/*
 ██████ ██   ██ ███████  ██████ ██   ██ ███████
██      ██   ██ ██      ██      ██  ██  ██
██      ███████ █████   ██      █████   ███████
██      ██   ██ ██      ██      ██  ██       ██
 ██████ ██   ██ ███████  ██████ ██   ██ ███████


*/

// Game State Transition Checks Start
function transitionTitleCheck() {
  if (state === 'titleScreen') {
    state = 'startScreen';
  }
}
// Game State Transition Checks End

// startButtons click Checks Start
function startButtonCheck() {
  if (mouseX > startGameButton.x - startButtonsW / 2 + 20 &&
    mouseX < startGameButton.x + startButtonsW / 2 - 20 &&
    mouseY > startGameButton.y - startButtonsH / 2 + 35 &&
    mouseY < startGameButton.y + startButtonsH / 2 - 35) {
    console.log('start button pressed');
  }
}

function instructionsButtonCheck() {
  if (mouseX > instructionsButton.x - startButtonsW / 2 + 20 &&
    mouseX < instructionsButton.x + startButtonsW / 2 - 20 &&
    mouseY > instructionsButton.y - startButtonsH / 2 + 35 &&
    mouseY < instructionsButton.y + startButtonsH / 2 - 35) {
    console.log('instructions button pressed');
  }
}

function creditsButtonCheck() {
  if (mouseX > creditsButton.x - startButtonsW / 2 + 20 &&
    mouseX < creditsButton.x + startButtonsW / 2 - 20 &&
    mouseY > creditsButton.y - startButtonsH / 2 + 35 &&
    mouseY < creditsButton.y + startButtonsH / 2 - 35) {
    console.log('credits button pressed');
  }
}

// the 20px padding to the x-axis is to compensate for the image shadow spacing
// the 35px padding to the y-axis is to compensate for the image shawdow spacing
// the extra padding adjustments ensure that the click is accurate to the button
// startButtons click Checks End

// Check functions End









// -----------------------------------------------------------------------------

/*
████████ ███████ ███████ ████████ ██ ███    ██  ██████
   ██    ██      ██         ██    ██ ████   ██ ██
   ██    █████   ███████    ██    ██ ██ ██  ██ ██   ███
   ██    ██           ██    ██    ██ ██  ██ ██ ██    ██
   ██    ███████ ███████    ██    ██ ██   ████  ██████


*/

// Testing console.log Functions
function mousePos() {
  //console.log('mouseX: ' + mouseX + ' ' + 'mouseY: ' + mouseY);
}
