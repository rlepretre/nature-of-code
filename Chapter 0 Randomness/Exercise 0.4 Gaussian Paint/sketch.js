let slider;

function setup() {
  createCanvas(640, 400);
  
  slider = createSlider(0, 255);
  slider.position(10, 10);
  slider.size(80);
}

function draw() {
    let std = slider.value();
    let x = randomGaussian(320, std);
    let y = randomGaussian(200, std);
    let r = randomGaussian(123, std);
    let g = randomGaussian(123, std);
    let b = randomGaussian(123, std);


  noStroke();
  fill(r, g, b);
  circle(x, y, 16);
  
}