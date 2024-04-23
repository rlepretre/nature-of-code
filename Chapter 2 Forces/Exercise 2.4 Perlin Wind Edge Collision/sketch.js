class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0)
    this.offset = createVector(0, 10000);
    this.incr = createVector(0.1, 0.1);
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x + 24 > width) {
      this.velocity.x *= -1;
    } else if (this.position.x -24 < 0) {
      this.velocity.x *= -1;
    }

    if (this.position.y + 24 > height) {
      this.velocity.y *= -1;
    } else if (this.position.y - 24 < 0) {
      this.velocity.y *= -1;
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    let xnoise = map(noise(this.offset.x), 0, 1, -0.01, 0.01)
    let ynoise = map(noise(this.offset.y), 0, 1, -0.01, 0.01)

    let wind = createVector(xnoise, ynoise)

    this.applyForce(wind)
    this.velocity.add(this.acceleration);

    this.position.add(this.velocity);
    this.offset.add(this.incr)
    this.acceleration.mult(0)
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