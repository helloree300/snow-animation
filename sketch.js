function preload(){
  bgImg= loadImage ("images/bgImage.jpeg");
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgImg); 
  drawSprites();
}
