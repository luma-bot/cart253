/**
Car subClass
*/

class Car extends Vehicle {
  constructor(x, y) {
    super(x, y);
    this.width = 50;
    this.height = 20;
    this.vx = 5; // Right
    this.drunk = 0.2; // 20% of the time
  }

  move() { // overriding method, use super to call the rest
    this.veer(); // specific to Car.js
    super.move(); // called the super
  }

  veer() {
    let r = random();
    if (r < this.drunk) {
      this.vy = random(-5, 5); // move it down or up
    }
  }

  wrap() { // overriding method, use super to call the rest
    super.wrap(); // called the super

    if (this.y > height){
      this.y -= height;
    }
    else if (this.y < 0){
      this.y += height;
    }
  }

  display() {
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 0, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
