/**
Vehicle superClass
*/

class Vehicle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = undefined;
    this.height = undefined;
    this.vx = undefined; // Right
    this.vy = 0;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  wrap() {
    if (this.x > width) {
      this.x -= width; // instead of ending up at '0', subtract the whole width to end up at the start, slightly more accurate
    }
  }

  display() {
    // define this in sub classes
  }
}
