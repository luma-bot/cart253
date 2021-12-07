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

Artist Commentary:
I know that some of the code could be condensed further and I did not use any classes in this project. I was trying them out earlier and still had a lot of difficulty
in implimenting and figuring out why I was having issues with the classes that I ended up leaving them out and doing it the "long way" so that I wouldn't end up being stuck
I understand that the better option is to utilize classes and hope I can come back to this project in the future to reimpliment them
but for now, I hope to have organized it enough so that it would make the most amount of sense with as many comments as I could add.

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
let state = 'titleScreen'; // starting state
//let state = 'gameOver'; // test state

let mouseUser = {
  x: 0,
  y: 0,
}

// Background Images
let bgImage;
let bgTitleScreen;
let bgStartScreen;
let bgPopUpButton2;
let bgPopUpButtonLeft;
let bgPopUpButtonRight;
let bgGameScreenButtons;
let bgGameScreen;
let bgGameScreenDark;
let bgInstCup;
let bgInstCupMove;
let bgInstCoffee;
let bgInstMilk;
let bgInstSugar;
let bgInstChocolate;
let bgInstVanilla;
let bgInstCash;
let bgInstOrders;

// Images
let loadingGif;
let startGameButton = {
  x: 0,
  y: 0,
}
let instructionsButton = {
  x: 0,
  y: 0,
}
let creditsButton = {
  x: 0,
  y: 0,
}

let playButton;
let helpButton;
let homeButton;

let audioButton;
let musicButton;

// Sounds
let bgSoundCafe; // university undertones
let bgSoundChristmas; // full song
let bgSoundChristmasLoop; // short loopable

let soundCoffee; // coffee coup
let soundCupTable; // cup to table
let soundLiquid; // liquid pours
let soundSquirt; // squirt noise
let soundPickup; // pickup glass

let soundCupTap1; // tap
let soundCupTap2; // tup
let soundTap; // finger tap

let soundWrong; // error wrong choice

// Fonts
let fontBebasNeue;
let fontOpenSans;

// -----------------------------------------------------------------------------

// Set Numbers
let startButtonsW = 377.6;
let startButtonsH = 151.1;

// Game Logic Variables
let mouseCup = {
  hasCup: false,
}

let cupChance;
let milkChance;
let sugarChance;
let chocolateChance;
let vanillaChance;
let cupDisplay;
let requiredCup;

let coffee = {
  count: 0,
  active: false,
}

let milk = {
  count: 0,
  cost: 0,
}

let sugar = {
  count: 0,
  cost: 0,
}

let chocolate = {
  count: 0,
  cost: 0,
}

let vanilla = {
  count: 0,
  cost: 0,
}

// Game Assets Variables
let smallCup = {
  x: 0,
  y: 0,
  acive: false,
  cost: 0,
  filled: 0, // needs to be 1
}
let mediumCup = {
  x: 0,
  y: 0,
  acive: false,
  cost: 0,
  filled: 0, // needs to be 2
}
let largeCup = {
  x: 0,
  y: 0,
  acive: false,
  cost: 0,
  filled: 0, // needs to be 3
}
let selectedCup;
let cupInfo = {
  size: 104.5,
}

let numLevel = 1; // start at level 1
let currentOrders = 0; // start of orders done
let numOrders = 0; // no orders to start
let totalOrders = 0;

let tips = 0;
let subtotal = 0;
let moneyTotal = 0;
let levelBonus = 0;
let levelTotal = 0;

let cupCheck = false;
let vibeCount = 0;
let vibeCountMax = 4;

let displayText;

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
  // Sounds
  bgSoundCafe = loadSound('assets/sounds/music/university-undertones.mp3'); // university undertones
  bgSoundChristmas = loadSound('assets/sounds/music/LofiJazzHipHopChristmas.wav'); // full song
  //bgSoundChristmasLoop = loadSound('assets/sounds/music/ChristmasHipHop_Loop.mp3'); // short loopable

  // Background Images
  bgTitleScreen = loadImage('assets/images/Coffee_Background_CART_TitleScreenDark.png'); // 600 x 325
  bgStartScreen = loadImage('assets/images/Coffee_Background_CART_TitleScreen.png'); // 600 x 325 w/out buttons

  // Assets Images
  loadingGif = loadImage('assets/images/coffee_loading.gif'); // 1:1
  startGameButton = loadImage('assets/images/Coffee_Background_CART_StartGameButton.png'); // 188.8 x 75.55
  instructionsButton = loadImage('assets/images/Coffee_Background_CART_InstructionsButton.png'); // 188.8 x 75.55
  creditsButton = loadImage('assets/images/Coffee_Background_CART_CreditsButton.png'); // 188.8 x 75.55

  playButton = loadImage('assets/images/play.png');
  homeButton = loadImage('assets/images/home.png');
  helpButton = loadImage('assets/images/help.png');

  // Fonts
  fontBebasNeue = loadFont('assets/fonts/BebasNeue-Regular.otf');
}
/** end of preload(); */

/* p5 Function that sets up the main components of the simulation */
function setup() {
  createCanvas(1200, 650); // double the bg size, adds to the pixelated style, all image sizes must be doubled from the OG size to fit
  calculate();

  // Image loading after preload
  // Background Images
  bgPopUpButton2 = loadImage('assets/images/Coffee_Background_CART_PanelScreen2.png'); // 600 x 325 with both Buttons
  bgPopUpButtonLeft = loadImage('assets/images/Coffee_Background_CART_PanelScreenLeft.png'); // 600 x 325 with left button
  bgPopUpButtonRight = loadImage('assets/images/Coffee_Background_CART_PanelScreenRight.png'); // 600 x 325 with right button
  bgGameScreen = loadImage('assets/images/Coffee_Background_CART_GameScreen.png'); // 600 x 325 with both gabe buttons
  bgGameScreenButtons = loadImage('assets/images/Coffee_Background_CART_GameScreenButtons.png'); // 600 x 325 with both buttons
  bgGameScreenDark = loadImage('assets/images/Coffee_Background_CART_NoHighlightInstructions.png');
  bgInstCup = loadImage('assets/images/Coffee_Background_CART_HighlightCups.png');
  bgInstCupMove = loadImage('assets/images/Coffee_Background_CART_HighlightCupSelected.png');
  bgInstCoffee = loadImage('assets/images/Coffee_Background_CART_HighlightCoffee.png');
  bgInstMilk = loadImage('assets/images/Coffee_Background_CART_HighlightMilk.png');
  bgInstSugar = loadImage('assets/images/Coffee_Background_CART_HighlightSugar.png');
  bgInstChocolate = loadImage('assets/images/Coffee_Background_CART_HighlightChocolate.png');
  bgInstVanilla = loadImage('assets/images/Coffee_Background_CART_HighlightVanilla.png');
  bgInstCash = loadImage('assets/images/Coffee_Background_CART_HighlightButtons.png');
  bgInstOrders = loadImage('assets/images/Coffee_Background_CART_HighlightPostIts.png');

  // Assets Images
  smallCup = loadImage('assets/images/Coffee_Background_CART_SmallHighlight.png'); // 209 x 209
  mediumCup = loadImage('assets/images/Coffee_Background_CART_MediumHighlight.png'); // 209 x 209
  largeCup = loadImage('assets/images/Coffee_Background_CART_LargeHighlight.png'); // 209 x 209

  // SFX
  soundCoffee = loadSound('assets/sounds/effects/coffee-in-cup.wav'); // coffee coup
  soundCupTable = loadSound('assets/sounds/effects/cup-on-table.wav'); // cup to table
  soundLiquid = loadSound('assets/sounds/effects/pour.wav'); // liquid pours
  soundSquirt = loadSound('assets/sounds/effects/squirt.wav'); // squirt noise
  soundPickup = loadSound('assets/sounds/effects/pickup.wav'); // pickup

  soundCupTap1 = loadSound('assets/sounds/effects/cup-01.wav'); // tap
  soundCupTap2 = loadSound('assets/sounds/effects/cup-02.wav'); // tup
  soundTap = loadSound('assets/sounds/effects/finger-tap.wav'); // finger tap

  soundWrong = loadSound('assets/sounds/effects/wrong.wav'); // wrong
}
/** end of setup(); */

/* p5 Function that outputs and displays the desired visual design of the simulation */
function draw() {
  background(51); // default grey background, sized exactly to fit canvas
  simState(); // draws the simulation out

  if (state === 'startScreen' || state === 'gameScreen') {
    controlsDisplay();
  }

  if (state === 'gameScreen') {
    cursor('grab');
  }

  if (smallCup.active === true || mediumCup.active === true || largeCup.active === true) {
    spawnCupToMouse();
  }
}
/* end of draw(); */

// All the functions that need numbers to be calculated, stored, initiated
function calculate() {
  // calculating game stats
  numOrders = numLevel * 5;
  currentOrders = 0;
  smallCup.cost = 1;
  mediumCup.cost = 2;
  largeCup.cost = 3;
  milk.cost = 0.5; // for the sake of game mechanics, milk and sugar are additional costs
  sugar.cost = 0.5; // for the sake of game mechanics, milk and sugar are additional costs
  chocolate.cost = 1;
  vanilla.cost = 1;

  smallCup.filled = 0; // 0 of 1
  mediumCup.filled = 0; // 0 of 2
  largeCup.filled = 0; // 0 of 3

  // chance intitiate
  cupChance = 0;
  milkChance = 0;
  sugarChance = 0;
  chocolateChance = 0;
  vanillaChance = 0;
}

// menu controls to display
function controlsDisplay() {
  push();
  imageMode(CENTER);
  image(homeButton, 55, height - 22, 30, 30);
  image(playButton, 95, height - 22, 30, 30);
  image(helpButton, 135, height - 22, 30, 30);
  pop();
}




// script.js file has large ASCII Headers to make navigation easier when using the minimap plugin on Atom.io
// and for organizational sakes




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
  } else if (state === 'instructionsScreen') {
    instructionsScreen(); // welcome intro
  } else if (state === 'instructionsScreen1') {
    instructionsScreen1(); // coffee bar intro
  } else if (state === 'instructionsScreen2') {
    instructionsScreen2(); // cups highlight
  } else if (state === 'instructionsScreen3') {
    instructionsScreen3(); // cup move highlight
  } else if (state === 'instructionsScreen4') {
    instructionsScreen4(); // coffee highlight
  } else if (state === 'instructionsScreen5') {
    instructionsScreen5(); // milk highlight
  } else if (state === 'instructionsScreen6') {
    instructionsScreen6(); // sugar highlight
  } else if (state === 'instructionsScreen7') {
    instructionsScreen7(); // chocolate highlight
  } else if (state === 'instructionsScreen8') {
    instructionsScreen8(); // vanilla highlight
  } else if (state === 'instructionsScreen9') {
    instructionsScreen9(); // cash highlight
  } else if (state === 'instructionsScreen10') {
    instructionsScreen10(); // orders highlight
  } else if (state === 'instructionsScreen11') {
    instructionsScreen11(); // ready intro
  } else if (state === 'creditsScreen') {
    creditsScreen();
  } else if (state === 'gameLevelScreen') {
    gameLevelScreen();
  } else if (state === 'gameScreen') {
    gameScreen();
  } else if (state === 'gameScreenEndLevel') {
    gameScreenEndLevel();
  } else if (state === 'gameOver') {
    gameOver();
  } else if (state === 'helpScreen') {
    helpScreen();
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
  image(loadingGif, width / 2, height / 2 - 32, 200, 200);
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Loading...`, width / 2, height / 2 + 96);
  text(`Click to Continue`, width / 2, height / 2 + 128);
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
// Description: Displaying the insctructions screen
/*
Text: You are a newly hired barista working at "Good Bean Water". They didn't really give you much training to prepare you for your first shift, so there will be a lot of learning on the job!
Try not to mess up people's orders else they'll get mad. Be quick and efficient, and get those orders out so you can get paid!
*/

function instructionsScreen() {
  // display instructions screen
  push();
  background(bgPopUpButton2); // PopUp and two buttons
  textSize(32);
  fill(255);

  textAlign(CENTER, CENTER);
  text(`Oh welcome to "Good Bean Water"!`, width / 2, height / 2 - 64); // subtract font size*2 to be centered higher
  text(`You're new here and first day huh?`, width / 2, height / 2 - 32); // subtract font size to be centered higher
  text(`No worries, here I'll show you around.`, width / 2, height / 2); // neutral center
  pop();

  // left button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Menu`, 164, height - 60); // left button text alignment
  pop();

  // right button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Next`, width - 156, height - 60); // Right button text alignment
  pop();
}

function instructionsScreen1() {
  // display instructions screen
  push();
  background(bgGameScreenDark);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Okay so this is the coffee bar.`, width / 2, height / 2 - 32);
  text(`It should have everything you'll need.`, width / 2, height / 2);
  text(`Oh, and tap our logo for good luck!`, width / 2, height / 2 + 32);
  pop();
}

function instructionsScreen2() {
  // display instructions screen
  push();
  background(bgInstCup);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Great job! We have our cups off on the left.`, width / 2 + 100, height / 2 - 96);
  text(`We offer a small, medium, and large cup.`, width / 2 + 100, height / 2 - 64);
  text(`Let me know when you've found them.`, width / 2 + 100, height / 2 - 32);
  pop();
}

function instructionsScreen3() {
  // display instructions screen
  push();
  background(bgInstCupMove);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Alright, all we serve is coffee.`, width / 2, height / 2 - 64);
  text(`Do you see where our coffee maker is?`, width / 2, height / 2 - 32);
  pop();
}

function instructionsScreen4() {
  // display instructions screen
  push();
  background(bgInstCoffee);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`You will need to pour more if the cup is larger!`, width / 2 + 100, height / 2 - 96);
  text(`Click once for a small, twice for medium, three times for a large`, width / 2 + 100, height / 2 - 64);
  text(`Okay now I bet you can't find the milk...`, width / 2 + 100, height / 2 - 32);
  pop();
}

function instructionsScreen5() {
  // display instructions screen
  push();
  background(bgInstMilk);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Dang... Okay you're fast.`, width / 2 + 100, height / 2 - 64);
  text(`Which do you think is the sugar?`, width / 2 + 100, height / 2 - 32);
  pop();
}

function instructionsScreen6() {
  // display instructions screen
  push();
  background(bgInstSugar);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`See that wasn't so bad!`, width / 2 + 100, height / 2 - 64);
  text(`Alright the chocolate syrup?`, width / 2 + 100, height / 2 - 32);
  pop();
}

function instructionsScreen7() {
  // display instructions screen
  push();
  background(bgInstChocolate);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Okay show off...`, width / 2 + 100, height / 2 - 64);
  text(`Vanilla syrup?`, width / 2 + 100, height / 2 - 32);
  pop();
}

function instructionsScreen8() {
  // display instructions screen
  push();
  background(bgInstVanilla);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Here's a curveball!`, width / 2 + 100, height / 2 - 64);
  text(`... the cash register??`, width / 2 + 100, height / 2 - 32);
  pop();
}

function instructionsScreen9() {
  // display instructions screen
  push();
  background(bgInstCash);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Yeah yeah okay okay good.`, width / 2, height / 2 - 160);
  text(`You serve your drinks here at the top,`, width / 2, height / 2 - 128);
  text(`and if you make a mistake, pour it down there.`, width / 2, height / 2 - 96);

  text(`Okay last step alright?`, width / 2, height / 2 - 32);
  text(`All your orders are on written on post it notes.`, width / 2, height / 2);
  pop();
}

function instructionsScreen10() {
  // display instructions screen
  push();
  background(bgInstOrders);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Great, now get working!`, width / 2, height / 2 - 96);
  text(`I'm not paying you to stand around!`, width / 2, height / 2 - 64);
  text(`One last good luck logo tap!`, width / 2, height / 2 - 32);
  pop();
}

function instructionsScreen11() {
  // display instructions screen
  push();
  background(bgPopUpButtonRight);
  textSize(32);
  fill(255);
  textAlign(CENTER, CENTER);
  text(`Complete coffee orders to get money and tip.`, width / 2, height / 2 - 96);
  text(`At the end of the shift, we'll add up what you earned.`, width / 2, height / 2 - 64);
  text(`Your goal is to earn as much as you can each shift.`, width / 2, height / 2 - 32);
  text(`Just don't forget what you put in the cup.`, width / 2, height / 2);
  text(`and don't make too many mistakes...`, width / 2, height / 2 + 32);
  pop();

  // right button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Next`, width - 156, height - 60); // Right button text alignment
  pop();
}
// Instructions Screen State End

// -----------------------------------------------------------------------------

/*
 ██████ ██████  ███████ ██████  ██ ████████ ███████     ███████  ██████ ██████  ███████ ███████ ███    ██
██      ██   ██ ██      ██   ██ ██    ██    ██          ██      ██      ██   ██ ██      ██      ████   ██
██      ██████  █████   ██   ██ ██    ██    ███████     ███████ ██      ██████  █████   █████   ██ ██  ██
██      ██   ██ ██      ██   ██ ██    ██         ██          ██ ██      ██   ██ ██      ██      ██  ██ ██
 ██████ ██   ██ ███████ ██████  ██    ██    ███████     ███████  ██████ ██   ██ ███████ ███████ ██   ████


*/

// Credits Screen State Start
function creditsScreen() {
  // display instructions screen
  push();
  background(bgPopUpButtonLeft);
  textSize(32);
  fill(255);
  textAlign(LEFT);
  text(`CART253 Project 2: Good Bean Water`, width / 4, height / 2 - 96); // subtract font size*2 to be centered higher
  text(`Project by Anthony Lum, 40098555`, width / 4, height / 2 - 64); // subtract font size to be centered higher
  text(`Background Illustration Designed by Freepik`, width / 4, height / 2 - 32); // neutral center
  text(`Icon Graphics by Icons8`, width / 4, height / 2); // neutral center
  text(`Graphic Design by Anthony Lum`, width / 4, height / 2 + 32); // neutral center
  textSize(12);
  text(`"Beans make you fart"`, width / 4, height / 2 + 64); // neutral center
  pop();

  // left button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Menu`, 164, height - 60); // left button text alignment
  pop();
}
// Credits Screen State End

// -----------------------------------------------------------------------------

/*
 ██████   █████  ███    ███ ███████     ███████  ██████ ██████  ███████ ███████ ███    ██
██       ██   ██ ████  ████ ██          ██      ██      ██   ██ ██      ██      ████   ██
██   ███ ███████ ██ ████ ██ █████       ███████ ██      ██████  █████   █████   ██ ██  ██
██    ██ ██   ██ ██  ██  ██ ██               ██ ██      ██   ██ ██      ██      ██  ██ ██
 ██████  ██   ██ ██      ██ ███████     ███████  ██████ ██   ██ ███████ ███████ ██   ████


*/

// Game Screen State Start
// Game Level Information
function gameLevelScreen() {
  gameLevelDisplay();
}

function gameLevelDisplay() {
  push();
  background(bgPopUpButton2);
  textSize(64);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Good Bean Water: `, width / 2, height / 2 - 96);
  text(`Day ` + numLevel, width / 2, height / 2 - 32);
  textSize(32);
  text(`Orders to Complete: ` + numOrders, width / 2, height / 2 + 32);
  pop();

  // left button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Menu`, 164, height - 60); // left button text alignment
  pop();

  // right button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Next`, width - 156, height - 60); // Right button text alignment
  pop();
}

// -----------------------------------------------------------------------------

// Game Game Time Start
function gameScreen() {
  gameScreenDisplay();
  constrainMouse();
  levelProgress();

  coffeeOrders();
}
// Game Game Time End

// Game Game Time functions Start
function gameScreenDisplay() {
  push();
  background(bgGameScreenButtons);
  pop();
}

// Keep mouse elements on canvas
function constrainMouse() {
  // Mouse constrain
  mouseX = constrain(mouseX, 0, width);
  mouseY = constrain(mouseY, 0, height);
}

// if cup area is clicked, display correct cup
function cupClicked() {
  if (state === 'gameScreen' && mouseX < 224 && mouseY > 508 && mouseY < 554) {
    selectedCup = 'smallCupSelected';
    sfxPickup();
    smallCup.active = true;
    mouseCup.hasCup = true;
    subtotal = subtotal + smallCup.cost;
  } else if (state === 'gameScreen' && mouseX < 224 && mouseY > 410 && mouseY < 468) {
    selectedCup = 'mediumCupSelected';
    sfxPickup();
    mediumCup.active = true;
    mouseCup.hasCup = true;
    subtotal = subtotal + mediumCup.cost;
  } else if (state === 'gameScreen' && mouseX < 224 && mouseY > 304 && mouseY < 372) {
    selectedCup = 'largeCupSelected';
    sfxPickup();
    largeCup.active = true;
    mouseCup.hasCup = true;
    subtotal = subtotal + largeCup.cost;
  }
}

// spawn a cup to the mouse if clicked
function spawnCupToMouse() {
  if (state === 'gameScreen' && selectedCup === 'smallCupSelected') {
    displaySmallCup();
  } else if (state === 'gameScreen' && selectedCup === 'mediumCupSelected') {
    displayMediumCup();
  } else if (state === 'gameScreen' && selectedCup === 'largeCupSelected') {
    displayLargeCup();
  }
}

// display smol cup
function displaySmallCup() {
  smallCup.x = mouseX;
  smallCup.y = mouseY;
  push();
  imageMode(CENTER);
  image(smallCup, smallCup.x, smallCup.y, cupInfo.size, cupInfo.size)
  pop();
}

// display med cup
function displayMediumCup() {
  mediumCup.x = mouseX;
  mediumCup.y = mouseY;
  push();
  imageMode(CENTER);
  image(mediumCup, mediumCup.x, mediumCup.y, cupInfo.size, cupInfo.size)
  pop();
}

// display floof cup
function displayLargeCup() {
  largeCup.x = mouseX;
  largeCup.y = mouseY;
  push();
  imageMode(CENTER);
  image(largeCup, largeCup.x, largeCup.y, cupInfo.size, cupInfo.size)
  pop();
}

// chefs kiss, cup is served, the most complicated and most conditions of all the functions, it is THE FUNCTION that runs the game mechanics...
// serveCup() checks if we are on the correct screen, if the mouse is holding a cup, if there is coffee in the cup, if the mouse is over the correct button
// and checks if the cup has the right amount of milk, sugar, chocolate, and vanilla, and then checks if there is enough coffee with the right cup selected
// before being able to execute to the next order and clear the cup in a boolean
function serveCup() {
  if (state === 'gameScreen' && mouseCup.hasCup === true && coffee.active === true && mouseX > 1005 && mouseX < 1142 && mouseY > 280 && mouseY < 420) {
    if (milkChance === milk.count && sugarChance === sugar.count && chocolateChance === chocolate.count && vanillaChance === vanilla.count) {
      if (selectedCup === 'smallCupSelected' && coffee.count === 1) {
        cupCheck = true;
        servesUp();
      } else if (selectedCup === 'mediumCupSelected' && coffee.count === 2) {
        cupCheck = true;
        servesUp();
      } else if (selectedCup === 'largeCupSelected' && coffee.count === 3) {
        cupCheck = true;
        servesUp();
      }
    } else {
      // if the cup passes the vibe check, do everything above, otherwise do everything below
      cupCheck = false
      sfxWrong();
      vibeCheck();
    }

    // if all the above is true, serve the coffee, calculate the money, the tip, increase the number of order to the next
    // reset mouse and cup values, and re-roll the next coffee order
    function servesUp() {
      sfxCupToTable();
      smallCup.active = false;
      mediumCup.active = false;
      largeCup.active = false;
      mouseCup.hasCup = false;

      moneyTotal = moneyTotal + subtotal;

      getTip();
      moneyTotal = moneyTotal + tips;
      currentOrders += 1;

      console.log('filled: ' + coffee.count);
      console.log('serve cup');
      console.log('money total:' + moneyTotal)
      resetCup();
      coffeeOrders();
      rngOrder(); // every new order, new rng
    }

    // if player FAILS the vibeCheck too many times, game is over...
    function vibeCheck() {
      cupCheck = false;
      vibeCount += 1;
      console.log('cupCheck: ' + cupCheck);

      if (vibeCount === vibeCountMax) {
        console.log('GAME OVER');
        state = 'gameOver';
      }
    }
  }
}

// boo made a mistake, remove cup
function discardCup() {
  if (state === 'gameScreen' && mouseCup.hasCup === true && mouseX > 1005 && mouseX < 1142 && mouseY > 456 && mouseY < 594) {
    console.log('discard cup');
    sfxLiquid();
    resetCup();
  }
}

// reset cup to have no ingredients to it
function resetCup() {
  smallCup.active = false;
  mediumCup.active = false;
  largeCup.active = false;
  mouseCup.hasCup = false;

  coffee.count = 0;
  milk.count = 0;
  sugar.count = 0;
  chocolate.count = 0;
  vanilla.count = 0;
  subtotal = 0; // reset
  coffee.active = false;

  //console.log('cup reset');
}

// Tip time
function getTip() {
  tips = int(random(1, 6)); // whole number with int, 1-5 because int
  console.log('tip is: ' + tips);
}

// Game Game Time functions End

// -----------------------------------------------------------------------------

// Game End of Level Start
function gameScreenEndLevel() {
  gameScreenEndLevelDisplay();

  function gameScreenEndLevelDisplay() {
    // display instructions screen
    push();
    background(bgPopUpButtonRight);
    textSize(64);
    fill(255);
    textFont('BebasNeue-Regular')
    textAlign(CENTER, CENTER);
    text(`Day ` + numLevel + ` complete`, width / 2, height / 2 - 96);
    textSize(32);
    text(`Orders Completed: ` + numOrders, width / 2, height / 2 - 32);
    text(`Money Earned: $` + moneyTotal, width / 2, height / 2);
    text(`Shift Bonus: $` + levelBonus, width / 2, height / 2 + 32);
    text(`Level Score: $` + levelTotal, width / 2, height / 2 + 64);
    pop();

    // right button text
    push();
    textSize(32);
    fill(255);
    textFont('BebasNeue-Regular')
    textAlign(CENTER, CENTER);
    text(`Next`, width - 156, height - 60); // Right button text alignment
    pop();
  }

}
// Game End of Level End

// -----------------------------------------------------------------------------

// Coffee Orders Display and Chance Creation start
function coffeeOrders() {
  displayOrder();

  function displayOrder() {
    // cup chance, most people order a medium, so 50% chance to get a medium
    // 25% chance to get a smol or tol
    if (cupChance === 1) {
      cupDisplay = 'Small';
      // cup required must equal cup selected
    } else if (cupChance === 2 || cupChance === 3) {
      cupDisplay = 'Medium';
    } else if (cupChance === 4) {
      cupDisplay = 'Large';
    }

    push();
    textSize(32);
    fill(0);
    textAlign(LEFT);
    textStyle(BOLD);
    text(`Order: ` + (currentOrders + 1), width - 220, 80);
    textSize(16);
    textStyle(NORMAL);
    text(`Size: ` + cupDisplay, width - 220, 102);
    text(`Milk: ` + milkChance, width - 220, 118);
    text(`Sugar: ` + sugarChance, width - 220, 134);
    text(`Chocolate: ` + chocolateChance, width - 220, 150);
    text(`Vanilla: ` + vanillaChance, width - 220, 166);
    pop();
  }
}

function rngOrder() {
  // sizeChance();
  // milkChance();
  // sugarChance();
  // chocolateChance();
  // vanillaChance();
  cupChance = int(random(1, 5)); // 1 - 4 because int
  milkChance = int(random(0, 4)); // 0 - 3 triple triple is the max
  sugarChance = int(random(0, 4)); // 0 - 3 triple triple is the max
  chocolateChance = int(random(0, 3)); // 0 - 2
  vanillaChance = int(random(0, 3)); // 0 - 2

}
// Coffee Orders Display and Chance Creation end

// GAME OVER FINAL SCORE SCREEN
function gameOver() {
  gameOverDisplay();
  finalCalc();

  function gameOverDisplay() {
    push();
    background(bgPopUpButtonRight);
    textSize(64);
    fill(255);
    textFont('BebasNeue-Regular')
    textAlign(CENTER, CENTER);
    text(`Game Over, You're Fired!`, width / 2, height / 2 - 96);
    text(`Too many mistakes!`, width / 2, height / 2 - 32);
    textSize(32);
    //text(`Orders Completed: ` + totalOrders, width / 2, height / 2 + 32);
    text(`You made it to day ` + numLevel, width / 2, height / 2 + 64);
    text(`Final Score: $` + levelTotal, width / 2, height / 2 + 96);
    pop();

    // right button text
    push();
    textSize(32);
    fill(255);
    textFont('BebasNeue-Regular')
    textAlign(CENTER, CENTER);
    text(`Next`, width - 156, height - 60); // Right button text alignment
    pop();

    resetCup();
    resetMoney();
  }

  // calculates to display the final orders made total, and the amount of money earned minus the current round that the player lost in
  function finalCalc() {
    totalOrders = numOrders;
    levelTotal = moneyTotal;
    // displaying final number of orders a little tricky and not working, need to create another variable to hold it for longer so that it doesn't take over the current number or add the total needed for the round
  }

  // function displayIngredients(){
  //   x = random(0, width);
  //   y = random(0, height);
  //
  //   push();
  //   textSize(16);
  //   fill(255);
  //   stroke(0);
  //   textFont('BebasNeue-Regular')
  //   textAlign(CENTER, CENTER);
  //   text(`+1`, x, y) // Right button text alignment
  //   pop();
  // }


}

// Game Screen State Start









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
  // mousePressed checks on the Title screen
  transitionTitleCheck(); // location:checks

  // mousePressed checks on the Start screen
  startButtonCheck(); // location:checks
  instructionsButtonCheck(); // location:checks
  creditsButtonCheck(); // location:checks

  homeCheck();
  musicCheck();
  helpCheck();


  // mousePressed checks on the Instruction screen
  menuButtonCheck();
  nextButtonCheck();
  introToCups();
  cupsToMoveCup();
  moveCupToCoffee();
  coffeeToMilk();
  milkToSugar();
  sugarToChocolate(); // DID SOMEBODY SAY CHOCOLATEE
  chocolateToVanilla();
  vanillaToCash();
  cashToOrder();
  orderToReady();
  readyToStart();

  //mousePressed Game Screen checks
  gameIntroToGameGame();
  cupClicked();
  serveCup();
  discardCup();

  coffeeClicked();
  milkClicked();
  sugarClicked();
  chocolateClicked();
  vanillaClicked();

  nextLevel();
  gameOverNextButtonCheck();
  // test functions
  testTester(); // location:testing
}









// -----------------------------------------------------------------------------

/*
███    ███  ██████  ██    ██ ███████ ███████     ██████  ███████ ██      ███████  █████  ███████ ███████ ██████
████  ████ ██    ██ ██    ██ ██      ██          ██   ██ ██      ██      ██      ██   ██ ██      ██      ██   ██
██ ████ ██ ██    ██ ██    ██ ███████ █████       ██████  █████   ██      █████   ███████ ███████ █████   ██   ██
██  ██  ██ ██    ██ ██    ██      ██ ██          ██   ██ ██      ██      ██      ██   ██      ██ ██      ██   ██
██      ██  ██████   ██████  ███████ ███████     ██   ██ ███████ ███████ ███████ ██   ██ ███████ ███████ ██████


*/

// p5 mouseReleased Start
function mouseReleased() {

}
// p5 mouseReleased End









// -----------------------------------------------------------------------------

/*
 █████  ██    ██ ██████  ██  ██████       ██████  ██████  ███    ██ ████████ ██████   ██████  ██
██   ██ ██    ██ ██   ██ ██ ██    ██     ██      ██    ██ ████   ██    ██    ██   ██ ██    ██ ██
███████ ██    ██ ██   ██ ██ ██    ██     ██      ██    ██ ██ ██  ██    ██    ██████  ██    ██ ██
██   ██ ██    ██ ██   ██ ██ ██    ██     ██      ██    ██ ██  ██ ██    ██    ██   ██ ██    ██ ██
██   ██  ██████  ██████  ██  ██████       ██████  ██████  ██   ████    ██    ██   ██  ██████  ███████


*/

// Audio control start

function bgAudio() {
  bgMusic();
  bgPassive();
}

function bgMusic() {
  // loop song
  // if (!bgSoundChristmasLoop.isPlaying()){
  //   bgSoundChristmasLoop.loop();
  // }
  // bgSoundChristmasLoop.setVolume(0.1);

  // pick one or the other song

  // full song
  if (!bgSoundChristmas.isPlaying()) {
    bgSoundChristmas.loop();
  }
  bgSoundChristmas.setVolume(0.03);
}

function bgPassive() {
  // university undertones
  if (!bgSoundCafe.isPlaying()) {
    bgSoundCafe.loop();
  }
  bgSoundCafe.setVolume(0.06);
}

function sfxCoffee() {
  soundCoffee.play(0, 1, 1, 2, 1);
  soundCoffee.setVolume(1);
}

function sfxCupToTable() {
  soundCupTable.play();
  soundCupTable.setVolume(0.7);
}

function sfxLiquid() {
  soundLiquid.play(0, 1, 1, 1.2, 1);
  soundLiquid.setVolume(3);
}

function sfxSquirt() {
  soundSquirt.play(0, 1, 1, 0.5, 1);
  soundSquirt.setVolume(1);
}

function sfxPickup() {
  soundPickup.play();
  soundPickup.setVolume(3);
}

function sfxCupTap1() {
  soundCupTap1.play();
  soundCupTap1.setVolume(0.2);
}

function sfxCupTap2() {
  soundCupTap2.play();
  soundCupTap2.setVolume(0.2);
}

function sfxFingerTap() {
  soundTap.play();
  soundTap.setVolume(3);
}

function sfxWrong() {
  soundWrong.play();
  soundWrong.setVolume(1);
}

// Audio control end









// -----------------------------------------------------------------------------

/*
 ██████ ██   ██ ███████  ██████ ██   ██ ███████
██      ██   ██ ██      ██      ██  ██  ██
██      ███████ █████   ██      █████   ███████
██      ██   ██ ██      ██      ██  ██       ██
 ██████ ██   ██ ███████  ██████ ██   ██ ███████


*/

// Game State Transition Checks Start
// Description: if mouse is pressed on title screen, transition to start screen
function transitionTitleCheck() {
  if (state === 'titleScreen') {
    state = 'startScreen';
    bgAudio(); // on user click, start background Audio
  }
}
// Game State Transition Checks End

// startButtons click Checks Start
// Description: if mouse is on start game button, and clicked, start the game screen
function startButtonCheck() {
  if (state === 'startScreen' &&
    mouseX > startGameButton.x - startButtonsW / 2 + 20 &&
    mouseX < startGameButton.x + startButtonsW / 2 - 20 &&
    mouseY > startGameButton.y - startButtonsH / 2 + 35 &&
    mouseY < startGameButton.y + startButtonsH / 2 - 35) {
    state = 'gameLevelScreen';
    sfxCupTap1();
  }
}

// Description: if mouse is on instructions button, and clicked, show instructions screen
function instructionsButtonCheck() {
  if (state === 'startScreen' &&
    mouseX > instructionsButton.x - startButtonsW / 2 + 20 &&
    mouseX < instructionsButton.x + startButtonsW / 2 - 20 &&
    mouseY > instructionsButton.y - startButtonsH / 2 + 35 &&
    mouseY < instructionsButton.y + startButtonsH / 2 - 35) {
    state = 'instructionsScreen';
    sfxCupTap1();
  }
}

// Description: if mouse is on credits, and clicked, show credits
function creditsButtonCheck() {
  if (state === 'startScreen' &&
    mouseX > creditsButton.x - startButtonsW / 2 + 20 &&
    mouseX < creditsButton.x + startButtonsW / 2 - 20 &&
    mouseY > creditsButton.y - startButtonsH / 2 + 35 &&
    mouseY < creditsButton.y + startButtonsH / 2 - 35) {
    state = 'creditsScreen';
    sfxCupTap1();
  }
}

/*
Additional Information about buttons:
the 20px padding to the x-axis is to compensate for the image shadow spacing
the 35px padding to the y-axis is to compensate for the image shawdow spacing
the extra padding adjustments ensure that the click is accurate to the button
startButtons click Checks End
*/

function homeCheck() {
  if (mouseX > 40 && mouseX < 70 && mouseY > 610 && mouseY < 640) {
    sfxFingerTap();
    state = 'startScreen';
  }
}

function musicCheck() {
  if (mouseX > 80 && mouseX < 110 && mouseY > 610 && mouseY < 640) {
    //console.log('home button');
    sfxFingerTap();
    if (bgSoundChristmas.isPlaying()) {
      bgSoundChristmas.pause();
      bgSoundCafe.pause();
    } else {
      bgSoundChristmas.play();
      bgSoundCafe.play();
    }
  }
}

function helpCheck() {
  if (mouseX > 120 && mouseX < 150 && mouseY > 610 && mouseY < 640) {
    sfxFingerTap();
    state = 'helpScreen';
  }
}


// -----------------------------------------------------------------------------

// button Checks
function menuButtonCheck() {
  if (state === 'instructionsScreen' && mouseX > 52 && mouseX < 268 && mouseY > 546 && mouseY < 626) {
    goToMenu();
  } else if (state === 'creditsScreen' && mouseX > 52 && mouseX < 268 && mouseY > 546 && mouseY < 626) {
    goToMenu();
  } else if (state === 'gameLevelScreen' && mouseX > 52 && mouseX < 268 && mouseY > 546 && mouseY < 626) {
    goToMenu();
  } else if (state === 'helpScreen' && mouseX > 52 && mouseX < 268 && mouseY > 546 && mouseY < 626) {
    goToMenu();
  }

  function goToMenu() {
    // if mouse is in the button region and clicked, go to screen
    state = 'startScreen';
    sfxCupTap1();
  }
}

function nextButtonCheck() {
  if (state === 'instructionsScreen' && mouseX > 928 && mouseX < 1145 && mouseY > 546 && mouseY < 626) {
    // if mouse is in the button region and clicked, go to screen
    state = 'instructionsScreen1';
    sfxCupTap2();
  }
}

// -----------------------------------------------------------------------------
// Instructions screen checks
function introToCups() {
  if (state === 'instructionsScreen1' && mouseX < 382 && mouseX > 120 && mouseY > 32 && mouseY < 225) {
    state = 'instructionsScreen2';
    soundTap.play();
  }
}

function cupsToMoveCup() {
  if (state === 'instructionsScreen2' && mouseX < 213 && mouseY > 303 && mouseY < 551) {
    state = 'instructionsScreen3';
    sfxPickup();
  }
}

function moveCupToCoffee() {
  if (state === 'instructionsScreen3' && mouseX > 388 && mouseX < 491 && mouseY > 444 && mouseY < 555) {
    state = 'instructionsScreen4';
    sfxCoffee();
  }
}

function coffeeToMilk() {
  if (state === 'instructionsScreen4' && mouseX > 530 && mouseX < 630 && mouseY > 370 && mouseY < 575) { // 575 is bottom of play area
    state = 'instructionsScreen5';
    sfxLiquid();
  }
}

function milkToSugar() {
  if (state === 'instructionsScreen5' && mouseX > 660 && mouseX < 740 && mouseY > 370 && mouseY < 575) {
    state = 'instructionsScreen6';
    sfxSquirt();
  }
}

function sugarToChocolate() {
  if (state === 'instructionsScreen6' && mouseX > 760 && mouseX < 840 && mouseY > 370 && mouseY < 575) {
    state = 'instructionsScreen7';
    sfxSquirt();
  }
}

function chocolateToVanilla() {
  if (state === 'instructionsScreen7' && mouseX > 860 && mouseX < 940 && mouseY > 370 && mouseY < 575) {
    state = 'instructionsScreen8';
    sfxSquirt();
  }
}

function vanillaToCash() {
  if (state === 'instructionsScreen8' && mouseX > 980 && mouseY > 277 && mouseY < 595) {
    state = 'instructionsScreen9';
    sfxCupToTable();
  }
}

function cashToOrder() {
  if (state === 'instructionsScreen9' && mouseX > 960 && mouseX < 1160 && mouseY < 242) {
    state = 'instructionsScreen10';
    sfxFingerTap();
  }
}

function orderToReady() {
  if (state === 'instructionsScreen10' && mouseX < 382 && mouseX > 120 && mouseY > 32 && mouseY < 225) {
    state = 'instructionsScreen11';
    sfxFingerTap();
  }
}

function readyToStart() {
  if (state === 'instructionsScreen11' && mouseX > 928 && mouseX < 1145 && mouseY > 546 && mouseY < 626) {
    state = 'startScreen';
    sfxCupTap2();
  }
}

function gameIntroToGameGame() {
  if (state === 'gameLevelScreen' && mouseX > 928 && mouseX < 1145 && mouseY > 546 && mouseY < 626) {
    // if mouse is in the button region and clicked, go to screen
    state = 'gameScreen';
    rngOrder(); // first rng order
    sfxCupTap2();
  }
}

// -----------------------------------------------------------------------------

// Game Screen Checks
// if mouse clicks ingredient location, add ingredient Start
function coffeeClicked() {
  if (state === 'gameScreen' &&
    mouseCup.hasCup === true &&
    mouseX > 388 && mouseX < 491 && mouseY > 444 && mouseY < 555) { // coffee location
    sfxCoffee();
    coffee.count += 1;
    coffee.active = true;
    console.log('coffee: ' + coffee.count);
  }
}

function milkClicked() {
  if (state === 'gameScreen' &&
    mouseCup.hasCup === true &&
    mouseX > 530 && mouseX < 630 && mouseY > 370 && mouseY < 575) { // milk location
    sfxLiquid();
    milk.count += 1;
    subtotal = subtotal + milk.cost;
    console.log('milk: ' + milk.count);
  }
}

function sugarClicked() {
  if (state === 'gameScreen' &&
    mouseCup.hasCup === true &&
    mouseX > 660 && mouseX < 740 && mouseY > 370 && mouseY < 575) { // sugar location
    sfxSquirt();
    sugar.count += 1;
    subtotal = subtotal + sugar.cost;
    console.log('sugar: ' + sugar.count);
  }
}

function chocolateClicked() {
  if (state === 'gameScreen' &&
    mouseCup.hasCup === true &&
    mouseX > 760 && mouseX < 840 && mouseY > 370 && mouseY < 575) { // chocolate location
    sfxSquirt();
    chocolate.count += 1;
    subtotal = subtotal + chocolate.cost;
    console.log('chocolate: ' + chocolate.count);
  }
}

function vanillaClicked() {
  if (state === 'gameScreen' &&
    mouseCup.hasCup === true &&
    mouseX > 860 && mouseX < 940 && mouseY > 370 && mouseY < 575) { // vanilla location
    sfxSquirt();
    vanilla.count += 1;
    subtotal = subtotal + vanilla.cost;
    console.log('vanilla: ' + vanilla.count);
  }
}
// if mouse clicks ingredient location, add ingredient End

function levelProgress() {
  if (currentOrders === numOrders && state === 'gameScreen') {
    levelBonusCalc();

    function levelBonusCalc() {
      levelBonus = int(random(1, 11)); // 1-10 because int
      levelTotal = levelBonus + moneyTotal;
    }
    state = 'gameScreenEndLevel';
  }
}

function nextLevel() {
  if (state === 'gameScreenEndLevel' && currentOrders === numOrders && mouseX > 928 && mouseX < 1145 && mouseY > 546 && mouseY < 626) {
    numLevel = numLevel + 1;
    calculate();
    resetMoney();
    state = 'gameLevelScreen';
    sfxCupTap2();
  }
}

function resetMoney() {
  tips = 0;
  subtotal = 0;
  moneyTotal = 0;
  levelBonus = 0;
  vibeCount = 0;
}

function gameOverNextButtonCheck() {
  if (state === 'gameOver' && mouseX > 928 && mouseX < 1145 && mouseY > 546 && mouseY < 626) {
    // if mouse is in the button region and clicked, go to screen
    state = 'creditsScreen';
    sfxCupTap2();
  }
}
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
function testTester() {
  //console.log('mouseX: ' + mouseX + ' ' + 'mouseY: ' + mouseY);
  //console.log(state);

  console.log(moneyTotal);
}

// back to menu escape
function keyReleased() {
  if (keyCode === ESCAPE) {
    state = 'startScreen';
  }
}

// HELP Screen
function helpScreen() {
  // display help screen
  push();
  background(bgPopUpButtonLeft); // PopUp and two buttons
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(64);
  text(`Tips:`, width / 2, height / 2 - 128); // subtract font size*2 to be centered higher
  textSize(32);
  text(`If your cup is SMALL, click the coffee once`, width / 2, height / 2 - 64); // subtract font size*2 to be centered higher
  text(`If your cup is MEDIUM, click the coffee twice`, width / 2, height / 2 - 32); // subtract font size to be centered higher
  text(`If your cup is LARGE, click the coffee thrice`, width / 2, height / 2); // neutral center
  text(`and try not to forget what's in your cup!`, width / 2, height / 2 + 32); // neutral center
  pop();

  // left button text
  push();
  textSize(32);
  fill(255);
  textFont('BebasNeue-Regular')
  textAlign(CENTER, CENTER);
  text(`Back`, 164, height - 60); // left button text alignment
  pop();
}
