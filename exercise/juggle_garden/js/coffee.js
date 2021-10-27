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
}
