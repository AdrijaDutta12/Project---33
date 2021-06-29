var snow1,snow2,snow;
var bg;

function preload(){
snow1 = loadAnimation("snow1.jpg","snow2.jpg","snow3.jpg");
snow2 = loadAnimation("snow4.webp","snow5.webp");
}

function setup() {

  createCanvas(800,400);
 bg = createSprite(400,200,20,20);
 bg.addAnimation("snowbg", snow1);
}

function draw() {
  background(255);  
  spawnSnow();
  drawSprites();
}

function spawnSnow(){
  if(frameCount % 50 === 0){
    snow = createSprite(Math.round(random(0,800)), 0, 50, 50);
    snow.addAnimation("snowfall",snow2);
  }
}