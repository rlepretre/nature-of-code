class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(-0.001, 0.01);;
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
    if (keyIsDown(UP_ARROW)) {
      this.velocity.add(this.acceleration);
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.velocity.sub(this.acceleration);
    }

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
  background(245);

  mover.update();
  mover.checkEdges();
  mover.show();
}