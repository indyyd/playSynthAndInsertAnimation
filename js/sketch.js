let circleX;
let circleY;
let circleSize;

var polySynth;

function preload() {
    noFill();
    strokeWeight(5);
    circleX = width/2;
    circleY = height/2;
    circleSize = 0;
}

function setup() {
    var canvas = createCanvas(500, 500);
    canvas.parent("p5container");
    
    polySynth = new p5.PolySynth();
}

function draw() {
  background(0, 128, 255);

  circleSize += 10;
    noFill();
    strokeWeight(5);
  stroke(0, 64, 128);
  circle(circleX, circleY, circleSize);
  circle(circleX, circleY, circleSize * .75);
  circle(circleX, circleY, circleSize * .5);
}

function keyPressed(){
   if (keyCode === UP_ARROW) {
  circleX = 250;
  circleY = 250;
  circleSize = 0;
}}