/**
Exercise 5: Juggle school
Anthony Lum

I need coffee. Let's go and get coffee.

PLAN:
x Add a(nother) form of user-control
  - Player moves around as the sleep deprived student to collect coffee
  - If he doesn't find coffee in time he gets tired and will fall asleep
x Add a new class and objects
  - user object, student object, coffee object
  - Other students also need coffee but you need it more and need to beat them to it.
- Add at least two endings
  - collect 10 coffees = win?
  - user falls asleep = lose?
*/

"use strict";

let state = `title`; // Options : title, simulation, win, lose

// School environment
let user;

let school = {
  // An array to store the individual students
  students: [],
  // How many students in the school
  numStudents: 30,
  // An array to store our hot bean water
  coffees: [],
  // How much hot bean water there is
  numCoffees: 50,
  // The color of the school (background)
  schoolColor: {
    r: 25,
    g: 28,
    b: 29
  }
};

let winNum = 0;
let winMax = 10;

let coffeeCount = school.numCoffees;

// setup() creates the canvas and the school
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  let userColor = {
    r: 22,
    g: 2,
    b: 4,
  }

  user = new User(userColor); // move to setup

  // Create our students by counting up to the number of the students
  for (let i = 0; i < school.numStudents; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(20, 30);
    let studentColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new student using the arguments
    let student = new Students(x, y, size, studentColor);
    // Add the student to the array of students
    school.students.push(student);
  }

  // Create our coffee by counting up to the number of coffees
  for (let i = 0; i < school.numCoffees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(10, 20);
    let coffeeColor = {
      r: 151,
      g: 111,
      b: 56
    }
    let cupColor = {
      r: 90,
      g: 101,
      b: 105
    }
    let coffee = new Coffee(x, y, size, coffeeColor, cupColor);
    // Add the coffee to the array of coffees
    school.coffees.push(coffee);
  }
}


// draw()
function draw() {
  // Display the school
  background(school.schoolColor.r, school.schoolColor.g, school.schoolColor.b);
  gameState();
} // new draw end


// Game State Start
function gameState() {
  if (state === `title`) {
    title(); // run start screen
  } else if (state === `instructions`) {
    instructions(); // run instructions play screen
  } else if (state === 'simulation') {
    simulation(); // run simulation screen
  } else if (state === 'win') {
    win(); // run simulation screen
  } else if (state === 'lose') {
    lose(); // run simulation screen
  }
}
// Game State End


// Start Screen State Start
function title() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  text(`Drink your Coffee`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`Are you ready?`, width / 2, height / 2 + 64);
  text(`Press 'Spacebar' to Start`, width / 2, height / 2 + 88);
  pop();
}
// Start Screen State End

// instructions Screen Start
function instructions() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`How To Play:`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`Drink as much coffee as you can.`, width / 2, height / 2 + 64);
  text(`Move player with your mouse.`, width / 2, height / 2 + 88);
  text(`Click the coffee to drink it`, width / 2, height / 2 + 112);
  text(`Win: Collect ` + school.numCoffees + ` coffees`, width / 2, height / 2 + 160);
  text(`Lose: Don't collect enough coffee in time...`, width / 2, height / 2 + 184);
  text(`Press space to continue.`, width / 2, height / 2 + 208);
  pop();
}
// instructions Screen End

// Win State Start
function win() {
  push();
  textSize(64);
  fill(0, 153, 51);
  textAlign(CENTER, CENTER);
  text(`You're Caffeinated!`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`Wow, ` + winMax + ' cups of coffee damn.', width / 2, height / 2 + 64);
  text(`Press 'Ctrl + R' to play again`, width / 2, height / 2 + 88);
  pop();
}
// Win State End

// Lose State Start
function lose() {
  push();
  textSize(64);
  fill(200, 100, 100);
  textAlign(CENTER, CENTER);
  text(`You Lose...`, width / 2, height / 2 - 24);
  textSize(24);
  fill(255);
  text(`All the other students drank all the coffee...`, width / 2, height / 2 + 64);
  text(`Press 'Ctrl + R' to try again.`, width / 2, height / 2 + 88);
  pop();
}
// Lose State End

function simulation() {
  // used to clear the screen and have the game continue
  push();
  pop();
  //frameCheck();

  // Loop through all the students in the array and display them
  for (let i = 0; i < school.numStudents; i++) {
    let student = school.students[i];
    student.move();
    student.display();
  }

  // Loop through all the students in the array and display them
  for (let i = 0; i < school.numCoffees; i++) {
    let coffee = school.coffees[i];
    if (coffee.alive) {
      coffee.move();
      coffee.display();
    }

    // Collision Check forloops for students and coffee
    for (let i = 0; i < school.numStudents; i++) {
      let student = school.students[i];
      let d = dist(coffee.x, coffee.y, student.x, student.y);
      if (d < coffee.size / 2 + student.size / 2) {
        console.log('student x coffee');
        coffee.alive = false;
        coffeeCounter();
      }
    }
  }

  // Move user player
  user.move();
  user.display();
} // end of simulation

function mousePressed() {
  // Collision Check forloops
  for (let i = 0; i < school.numCoffees; i++) {
    let coffee = school.coffees[i]; {
      // this function will only run when mouse is pressed, find function above
      let d = dist(user.x, user.y, coffee.x, coffee.y);
      if (d < user.size / 2 + coffee.size / 2) {
        console.log('user x coffee');
        coffee.alive = false;
        coffeeCounter();
        winCounter();
      }
    }

    if (school.numCoffess < 0) {
      console.log('lose');
      state = `lose`;
    }

  }
}

// onKeyPress Start
function keyPressed() {
  if (state === `title` && key === ' ') {
    state = `instructions`; // title screen to insuctions
  } else if (state === `instructions` && key === ' ') {
    state = `simulation`; // instructions screen to simulation
  }
}
// onKeyPress End

// UI Display Start
function winCounter() {
  winNum++;
  console.log(winNum + ' / ' + winMax);
  if (winNum === winMax) { // number of assignments handed in to win
    state = `win`;
  }
}

function coffeeCounter() {
  coffeeCount--;
  console.log(coffeeCount + ' / ' + school.numCoffees);
  if (coffeeCount === 0) { // number of assignments handed in to win
    //state = `lose`;
  }
}
// UI Display End

function frameCheck() {
  console.log(`FrameCount` + frameCount);
  if (frameCount === 300) {
    state = `lose`;
  }
}
