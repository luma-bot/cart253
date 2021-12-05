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
    // object.size = diameter, object.size/2 = radius
    let distance = dist(mouseX, mouseY, this.x, this.y); // only need now and won't need it later, declaring where we need it
    if (distance < this.w && this.h) {
      // noLoop();
      this.contact = true;
    } else {
      this.contact = false;
    }
  }
}

// in hover check will have to adapt and add this code
/*

mouseX > milkX - milkBoxSize &&
mouseX < milkX + milkBoxSize &&
mouseY > milkY - milkBoxSize &&
mouseY < milkY + milkBoxSize

*/
