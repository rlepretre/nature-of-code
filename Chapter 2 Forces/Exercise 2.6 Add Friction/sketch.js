class Mover {
  constructor(x, y, mass, mu) {
    this.mass = mass;
    this.mu = mu;
    this.radius = mass*8;
    this.position = createVector(x, y);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0)
  }

  show() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    circle(this.position.x, this.position.y, this.radius*2);
  }

  contactEdge() {
    return (this.position.y > height - this.radius - 1);
  }

  computeFriction(){
    if (this.contactEdge()) {
      let friction = this.velocity.copy();
      friction.mult(-1);
      friction.setMag(this.mu);
      this.applyForce(friction);
    }
  }
  

  checkEdges() {
    let bounce = 0.9;
    if (this.position.x + this.radius > width) {
      this.position.x = width - this.radius;
      this.velocity.x *= -bounce;
    } else if (this.position.x - this.radius < 0) {
      this.position.x = this.radius;
      this.velocity.x *= -bounce;
    }
    if (this.position.y + this.radius > height) {
      this.position.y = height - this.radius;
      this.velocity.y *= -bounce;
    } else if (this.position.y - this.radius < 0) {
      this.position.y = this.radius;
      this.velocity.y *= -bounce;
    }
  }

  applyGravity(g){
    this.acceleration.add(g);
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0)
  }
}
let moverA;
let moverB;

let offset;
let incr;

function setup() {
  createCanvas(640, 360);
  moverA = new Mover(random(0,width),random(0,height),random(0,10),random());
  moverB = new Mover(random(0,width),random(0,height),random(0,10), random());

  offset = createVector(0, 10000);
  incr = createVector(0.1, 0.1);
}

function draw() {
  background(235);
  let gravity = createVector(0, 1);
  moverA.applyGravity(gravity)
  moverB.applyGravity(gravity)

  let xnoise = map(noise(offset.x), 0, 1, -0.1, 0.1)
  let ynoise = map(noise(offset.y), 0, 1, -0.1, 0.1)
  let wind = createVector(xnoise, ynoise)
  moverA.applyForce(wind)
  moverB.applyForce(wind)

  moverA.computeFriction()
  moverB.computeFriction()

  moverA.update();
  moverA.checkEdges();
  moverA.show();

  moverB.update();
  moverB.checkEdges();
  moverB.show();

  offset.add(incr)
}