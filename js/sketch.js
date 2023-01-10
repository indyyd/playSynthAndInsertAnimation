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

function playSynth1(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('C3', vel, 0, dur);
    polySynth.play('E3', vel, time += 0, dur);
    polySynth.play('G3', vel, time += 0, dur);
}

function playSynth2(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('D3', vel, 0, dur);
    polySynth.play('F3', vel, time += 0, dur);
    polySynth.play('A4', vel, time += 0, dur);
}

function playSynth3(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('E3', vel, 0, dur);
    polySynth.play('G3', vel, time += 0, dur);
    polySynth.play('B4', vel, time += 0, dur);
}

function playSynth4(){
    userStartAudio();

    var dur = 1.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play('F3', vel, 0, dur);
    polySynth.play('A4', vel, time += 0, dur);
    polySynth.play('C4', vel, time += 0, dur);

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
   if (keyCode === LEFT_ARROW) {
        circleX = 250;
        circleY = 250;
        circleSize = 0;
        playSynth1();
    } else if (keyCode === UP_ARROW) {
        circleX = 50;
        circleY = 50;
        circleSize = 0;
        playSynth2();
    } else if (keyCode === DOWN_ARROW) {
        circleX = 450;
        circleY = 450;
        circleSize = 0;
        playSynth3();
    } else if (keyCode === RIGHT_ARROW) {
        circleX = 300;
        circleY = 300;
        circleSize = 0;
        playSynth4();
    }
}