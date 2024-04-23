class Mover {
  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector(0, 0);
    this.offset = createVector(0, 10000);
    this.incr = createVector(0.1,0.1);
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
    // acceleration = createVector(noise(this.offset.x), noise(this.offset.y))
    let xaccel = map(noise(this.offset.x),0,1,-0.01,0.01)
    let yaccel = map(noise(this.offset.y),0,1,-0.01,0.01)

    let acceleration = createVector(xaccel, yaccel)
    this.velocity.add(acceleration);
    this.velocity.limit(this.topSpeed)
    this.position.add(this.velocity);
    this.offset.add(this.incr)
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