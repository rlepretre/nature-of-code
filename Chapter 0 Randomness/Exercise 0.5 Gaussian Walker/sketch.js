class Walker {
  constructor() {
    this.x = width/2;
    this.y = height/2;
  }
  
  show(){
    stroke(0);
    point(this.x, this.y)
  }
  
  step(){
    let xstep = (floor(random(3)) - 1)*randomGaussian(0,2);
    let ystep = (floor(random(3)) - 1)*randomGaussian(0,2);
    
    this.x += xstep;
    this.y += ystep;
  }
}

let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step()
  walker.show()
}