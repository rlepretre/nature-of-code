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
    let choice = floor(random(10));
    if (choice < 3){
      this.x++;
    } else if (choice < 6){
      this.y++;
    } else if (choice < 8) {
      this.x--;
    } else {
      this.y--;
    }
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