class User {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 40;
    this.userColor = userColor;
    this.vx = 0;
    this.vy = 0;
    this.speed = 5;
    this.alive = true; // The Bee starts out alive!
  }

  move() {
    // Student Movement
    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) {
      this.x -= this.vx;
    }
    if (keyIsDown(87) || keyIsDown(UP_ARROW)) {
      this.y -= this.vy;
    }
    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) {
      this.x += this.vx;
    }
    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) {
      this.y += this.vy;
    }

    // Student Constrain
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }

  display(){
    // User Render
    push();
    fill(this.userColor.r, this.userColor.g, this.userColor.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
