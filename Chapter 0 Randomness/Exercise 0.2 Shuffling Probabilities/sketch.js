reshuffle_prob = ((4/52)**2)*100;
no_reshuffle_prob = ((4/52)*(3/51))*100;

console.log(`Question 1: ${reshuffle_prob.toFixed(2)}%`)
console.log(`Question 2: ${no_reshuffle_prob.toFixed(2)}%`)



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}