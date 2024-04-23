
function setup() {
  createCanvas(640, 360);
  background(220)
  let d = pixelDensity();
  loadPixels();
  let xoff = 0.0;
  for (let x = 0; x < width*4; x++) {
    
    let yoff = 10000.0;
    for (let y = 0; y < height*4; y++) {
      noiseDetail(6, 0.50);
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
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
}

function draw() {


}