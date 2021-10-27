class User {

  constructor(x, y, size, userColor, alive) {
    this.x = 0;
    this.y = 0;
    this.size = 25;
    this.userColor = {
      r: 255,
      g: 255,
      b: 255,
    };
    this.alive = true; // The Bee starts out alive!
  }

  move() {
    // Student Movement
    this.x = mouseX;
    this.y = mouseY;
  }

  display() {
    // User Render
    push();
    noCursor();
    fill(this.userColor.r, this.userColor.g, this.userColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
