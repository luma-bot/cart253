/**
Exercise 5: Juggle school
Anthony Lum

I need coffee. Let's go and get coffee.

PLAN:
- Add a(nother) form of user-control
  - Player moves around as the sleep deprived student to collect coffee
  - If he doesn't find coffee in time he gets tired and will fall asleep
- Add a new class and objects
  - user object, student object, coffee object
  - Other students also need coffee but you need it more and need to beat them to it.
- Add at least two endings
  - collect 10 coffees = win?
  - user falls asleep = lose?
*/

"use strict";

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
  numCoffees: 20,
  // The color of the school (background)
  schoolColor: {
    r: 120,
    g: 180,
    b: 120
  }
};

// setup() creates the canvas and the school
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Create our students by counting up to the number of the students
  for (let i = 0; i < school.numStudents; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let studentColor = {
      r: random(100, 255),
      g: random(100, 255),
      b: random(100, 255)
    }
    // Create a new student using the arguments
    let student = new Students(x, y, size, studentColor);
    // Add the student to the array of students
    school.students.push(student);
    //student.display();
  }

  // Create our coffee by counting up to the number of coffees
  for (let i = 0; i < school.numCoffees; i++) {
    // Create variables for our arguments for clarity
    let x = random(0, width);
    let y = random(0, height);
    let size = random(50, 80);
    let coffeeColor = {
      r: 151,
      g: 111,
      b: 56
    }
    let cupColor = {
      r: 0,
      g: 93,
      b: 62
    }
    let coffee = new Coffee(x, y, size, coffeeColor, cupColor);
    // Add the coffee to the array of coffees
    school.coffees.push(coffee);
    //coffee.display();
  }

}


// draw()
function draw() {
  // Display the school
  //background(school.schoolColor.r, school.schoolColor.g, school.schoolColor.b);

  // Loop through all the students in the array and display them
  for (let i = 0; i < school.numStudents; i++) {
    let student = school.students[i];
    // Check if this flower is alive
    if (student.alive) {
      student.move();
      student.display();
    }
  }

  // Loop through all the students in the array and display them
  for (let i = 0; i < school.numCoffees; i++) {
    let coffee = school.coffees[i];
    // Check if this flower is alive
    if (coffee.alive) {
      coffee.move();
      coffee.display();
    }
  }
}
