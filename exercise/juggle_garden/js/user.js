class User {

  constructor(x, y, size, userColor, vx, vy, speed, alive) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.userColor = {
      r: 255,
      g: 255,
      b: 255,
    };
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.alive = true; // The Bee starts out alive!
  }

  move() {
    // Student Movement
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.x -= this.vx;
      console.log('left');
    }
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      this.y -= this.vy;
      console.log('up');
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      this.x += this.vx;
      console.log('right');
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      this.y += this.vy;
      console.log('down');
    }
  }

  display() {
    // User Render
    push();
    fill(this.userColor.r, this.userColor.g, this.userColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
