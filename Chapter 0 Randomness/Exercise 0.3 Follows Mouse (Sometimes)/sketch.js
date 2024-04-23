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
    let xstep = floor(random(3)) - 1;
    let ystep = floor(random(3)) - 1;
    
    let r = random()
    if (r < 0.5){
      let dx = mouseX - this.x;
      let dy = mouseY - this.y;
      let magnitude = sqrt(dx * dx + dy * dy);
      
      xstep = dx/magnitude;
      ystep = dy/magnitude;
    }
    
    console.log(xstep)
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