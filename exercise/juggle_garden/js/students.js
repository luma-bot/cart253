class Students {

  // The constructor() sets up a student's properties
  constructor(x, y, size, studentColor) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.studentColor = studentColor;
  }

  // display()
  // Displays the students at school
  display() {
    push();
    noStroke();
    fill(this.studentColor.r, this.studentColor.g, this.studentColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
    console.log('im displaying students');
  }
}
