/**
Motorcycle Class
*/

class Motorcycle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 10;
    this.vx = 10; // Right
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
    push();
    rectMode(CENTER);
    noStroke();
    fill(255, 255, 0);
    rect(this.x, this.y, this.width, this.height);
    pop();
  }
}
