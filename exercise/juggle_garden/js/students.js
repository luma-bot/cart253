class Students {

  // The constructor() sets up a student's properties
  constructor(x, y, size, studentColor) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.studentColor = studentColor;

    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.jitteriness = 0.05; // How likely the bee is to change direction

    this.alive = true;
  }

  // display()
  // Displays the students at school
  display() {
    push();
    noStroke();
    fill(this.studentColor.r, this.studentColor.g, this.studentColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }

  // move() moves the bee by potentially changing direction
  // and then changing position based on velocity
  move() {
    // First check if we should change direction
    let r = random(0, 1);
    if (r < this.jitteriness) {
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
    }

    // Update position with velocity to actually move
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    // Constrain to the canvas (guess it's a walled garden!)
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}
