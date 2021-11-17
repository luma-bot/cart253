class Coffee {
  constructor() {
    this.x = 39;
    this.y = 228;

    this.w = 30;
    this.h = 40;

    this.r = 89;
    this.g = 63;
    this.b = 41;

    this.contact = false;
    this.locked = true;
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

  hoverCheck() {
    // Test if the cursor is over the box
    if (
      mouseX > this.x - this.w &&
      mouseX < this.x + this.w &&
      mouseY > this.y - this.h &&
      mouseY < this.y + this.h
    ) {
      this.over = true;
      if (!this.locked) {
        //console.log('hovering');
      }
    } else {
      //console.log('not hovering');
      this.over = false;
    }
  }
}
