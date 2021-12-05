class Cup {
  constructor() {
    this.x = 328;
    this.y = 212;

    this.w = 30;
    this.h = 40;

    this.r = 215;
    this.g = 218;
    this.b = 215;

    this.contact = false;
    this.locked = false;
    this.xOffset = 0.0;
    this.yOffset = 0.0;
  }

  display() {
    push();
    noStroke();
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
