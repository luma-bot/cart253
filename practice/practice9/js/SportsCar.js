class SportsCar extends Car {

  constructor(x, y) {
    super(x, y);
    this.vx = 15;
  }

  display() { // override
    super.display();
    push();
    rectMode(CENTER);
    fill(255, 255, 0);
    noStroke();
    rect(this.x, this.y - this.height / 10, this.width, this.height / 20); // stripe - 10
    rect(this.x, this.y + this.height / 10, this.width, this.height / 20); // stripe + 10
    pop();
  }
}
