var osc;
var freq;

var mod = 1;
var diff = 1;
var count = 0;
var redColor = 0;
var greenColor = 0;
var blueColor = 0;

var leftDownX = 100;
var leftDownY = 500;
var upRightX = 800;
var upRightY = 100;
  
function mousePressed() {
  //var amp = ((upRightX - upRightY) + count) / 1000
  osc.start();
}  

function mouseReleased() {
  osc.stop();
}  
  
function setStyle() {
  
  if (!mouseIsPressed) {
    background(136, 12, 43);
  }
  
  if (count % 5 ==  2) {
    greenColor = random(255);
    blueColor = random(255);
    redColor = random(255);
  }
  
  //ancho
  strokeWeight(10);
  //color linea
  stroke(40, 100, 90);
  fill(redColor, greenColor, blueColor);
  
}  


function toogleCount() {
  
  if (count == 150) {
    mod = -1;
  } else if (count == 0) {
    mod = 1;
  }
  count += mod;

}

function updateFreq() {
  osc.freq(mouseX + 60 + count);
}

function drawQuad() {

  toogleCount();  
  updateFreq();
  quad(
    mouseX - (60 + count), 
    mouseY - (60 + count), 
    
    upRightX + count, 
    upRightY + count, 
    
    mouseX + 60 + count, 
    mouseY + 60 + count, 
    
    leftDownX + count, 
    leftDownY + count);

}
  
function setup() {
  
  createCanvas(1200, 800); 
  background(136, 12, 43);
  
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.5 , 0.05);
  
}

function draw() {
  
  setStyle(count);
  drawQuad();

}