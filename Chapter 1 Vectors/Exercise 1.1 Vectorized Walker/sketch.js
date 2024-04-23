class Walker {
    constructor() {
      this.position = createVector(width/2,height/2);
      this.offset = createVector(0,10000);
      this.increment = createVector(0.01,0.01)
    }
    
    show(){
      stroke(0);
      point(this.position.x, this.position.y)
    }
    
    step(){
      let stepVec = createVector(map(noise(this.offset.x), 0, 1, -1, 1), 
                                 map(noise(this.offset.y), 0, 1, -1, 1)) 
      
      this.position.add(stepVec)
      this.offset.add(this.increment)
    }
  }
  
  let walker;
  
  function setup() {
    createCanvas(640, 360);
    walker = new Walker();
    background(245);
  }
  
  function draw() {
    walker.step()
    walker.show()
  }