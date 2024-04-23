function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

class Terrain {

  constructor(scl, w, h) {
    this.scl = scl;
    this.w = w; 
    this.h = h;

    this.cols = floor(w/scl);
    this.rows = floor(h/scl);

    this.z = make2DArray(this.cols,this.rows);
    
    this.t = 0;
  }
  
  calculate(){
    let xoff = 0.0;
    for (let i = 0; i < this.cols; i++) {
      let yoff = 0;
      for (let j = 0; j < this.rows; j++) {
        this.z[i][j] = map(noise(xoff, yoff,this.t), 0, 1, 0, 255);
        yoff += 0.1;
      }
      xoff += 0.1;
    }
    this.t += 0.005;
  }
  render(){
    for (let x = 0; x < this.cols-1; x++) {
      beginShape(QUAD_STRIP)
      for (let y = 0; y < this.rows; y++) {
        stroke(0)
        let currentElevation = this.z[x][y];
        let currentShade = currentElevation;
        fill(floor(currentShade));
        let xCoordinate = x*this.scl-this.w/2;
        let yCoordinate = y*this.scl-this.h/2;
        vertex(xCoordinate,yCoordinate,this.z[x][y]-120)
        vertex(xCoordinate + this.scl,yCoordinate,this.z[x+1][y]-120)
      }
      endShape();
    }
  }
}

let land;
let theta = 0.0;

function setup() {
  createCanvas(640, 360, WEBGL);  
  land = new Terrain(20, 800, 400);
}

function draw() {
  // Ok, visualize the landscape space
  land.calculate();
  background(255);
  push();
  translate(0, 20, -200);
  rotateX(PI / 3);
  rotateZ(theta);
  land.render();
  pop();

  theta += 0.0025;
}