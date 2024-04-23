function setup() {
    let v = createVector(1, 5);
    let u = p5.Vector.mult(v, 2);
    let w = p5.Vector.sub(v, u);
    w.div(3);
  }
  
  function draw() {

  }