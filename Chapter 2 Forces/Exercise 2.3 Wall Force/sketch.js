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
  const wallpush = 10;

  let wind       = p5.Vector.random2D();
  wind.normalize()
  wind.mult(0.5)

  let gravity    = createVector(0,0.1)
  let topForce   = createVector(0,wallpush*(1/mover.position.y))
  let botForce   = createVector(0,wallpush*(-1/(height - mover.position.y)))
  let leftForce  = createVector(wallpush*(1/mover.position.x),0)
  let rightForce = createVector(wallpush*(-1/(width - mover.position.x)),0)

  mover.applyForce(wind)
  // mover.applyForce(gravity)
  mover.applyForce(topForce)
  mover.applyForce(botForce)
  mover.applyForce(leftForce)
  mover.applyForce(rightForce)
  
  mover.update();
  mover.show();
}