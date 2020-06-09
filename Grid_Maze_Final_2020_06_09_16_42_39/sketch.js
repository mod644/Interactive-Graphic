let bg;
let capture;
let grid;
let theta = 0;

function preload() {
  grid = loadImage('data/grid.png');
 bg = loadImage('data/black.png');
}

function setup() {
  createCanvas(794, 794, WEBGL);
   
  
  capture = createCapture(VIDEO);
  capture.hide();
}

function draw() {
  background(255);
  
  image(bg,-397,-397,794,794);
  //tint(255, 80);
  image(grid, -397, -50);
  
  translate(0, -67, 0);
  push();
  rotateZ(theta *  0.001);
  rotateX(theta * mouseY * 0.001);
  rotateY(theta * mouseX * 0.001);
  strokeWeight(1);
  stroke(140);
  texture(capture);
  sphere(210);
  pop(); 

  theta += 0.05;
}