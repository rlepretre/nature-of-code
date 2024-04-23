class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);

    this.topSpeed = 10;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.position.x = 0;
    } else if (this.position.x < 0) {
      this.position.x = width;
    }

    if (this.position.y > height) {
      this.position.y = 0;
    } else if (this.position.y < 0) {
      this.position.y = height;
    }
  }


  update() {
    let mouse = createVector(mouseX, mouseY);

    let dir = p5.Vector.sub(mouse, this.position);

    let attraction = 1/dir.mag()
    dir.normalize();
    dir.mult(attraction)
    let acceleration = dir

    this.velocity.add(acceleration);
    this.velocity.limit(this.topSpeed)
    this.position.add(this.velocity);
  }
}
let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(235, 10);
  mover.update();
  mover.checkEdges();
  mover.show();
}