var alien1, alien2, alien3, alien4;
var bg, bg1, bg2, bg3;
var gameState = "Intro"

function preload() {
  bg1 = loadImage("bg1.jpg");
  bg2 = loadImage("b2.jpg");
  bg3 = loadImage("b3.jpg");
}

function setup() {
  createCanvas(800,400);
  bg = createSprite (400,200);
  bg.addImage(bg2);
}

function draw() {
  background(255,255,255);  
  if(gameState === "Intro"){
    text ("BEWARE OF THE ALIENS.",150,180);
    if(keyDown("space")){
      gameState = "Level1";
    }
  }
  else if(gameState === "Level1"){
    clear();
    bg.addImage(bg1);
    bg.scale = 1.5;
    bg.x = 600;
    if(keyDown("RIGHT_ARROW")){
      bg.x = bg.x-5;
    }
    if(keyDown("LEFT_ARROW")){
      bg.x = bg.x+5;
    }
  }
  drawSprites();
}