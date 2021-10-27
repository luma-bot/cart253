class Coffee {

  // The constructor() sets up a coffee's properties
  constructor(x, y, size, coffeeColor, cupColor, cupThick) {
    // Position and size information
    this.x = x;
    this.y = y;
    this.size = size;
    this.coffeeColor = coffeeColor;
    this.cupColor = cupColor;
    this.cupThick = 5;

    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.jitteriness = 0.1; // How likely the bee is to change direction

    this.alive = true;
  }

  // display()
  // Displays the coffee on the canvas
  display() {
    push();
    strokeWeight(this.cupThick);
    stroke(this.cupColor.r, this.cupColor.g, this.cupColor.b);
    fill(this.coffeeColor.r, this.coffeeColor.g, this.coffeeColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
    console.log('im displaying coffee');
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
    console.log('im moving coffee');
  }
}
