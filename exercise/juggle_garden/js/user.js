class User {

  constructor(userColor) {
    this.x = 0;
    this.y = 0;
    this.size = 50;
    this.userColor = userColor;
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
