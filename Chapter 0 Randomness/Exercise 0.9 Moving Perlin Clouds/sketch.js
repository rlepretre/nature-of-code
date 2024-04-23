let t = 0;

function setup() {
  createCanvas(100, 100);
  background(220)
}

function draw() {
  let d = pixelDensity();
  loadPixels();
  let xoff = 0.0;
  for (let x = 0; x < width*4; x++) {
    let yoff = 0;
    for (let y = 0; y < height*4; y++) {
      let bright = map(noise(xoff, yoff,t), 0, 1, 0, 255);
      let index = (x + y * d * width)*4;
      pixels[index] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
      pixels[index + 3] = 255;
      yoff += 0.01;
    }
    xoff += 0.01;
  }
  updatePixels();
  
 t += 0.02;
}