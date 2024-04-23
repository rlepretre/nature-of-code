class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0)

  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, 48);
  }

  checkEdges() {
    if (this.position.x > width) {
      this.velocity.x *= -1;
    } else if (this.position.x < 0) {
      this.velocity.x *= -1;
    }

    if (this.position.y > height) {
      this.velocity.y *= -1;
    } else if (this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
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
  mouse = createVector(mouseX, mouseY)
  center = createVector(width/2, height/2)
  let wind = p5.Vector.sub(center, mouse)
  wind.normalize()
  wind.mult(0.05)
  mover.applyForce(wind)
  mover.update();
  mover.checkEdges();
  mover.show();
}