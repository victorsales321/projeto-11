var shipImg1,ship_move;
var seaImg,sea;
function preload(){
  
  seaImg=loadImage("sea.png");
  ship_move=loadAnimation("ship-1.png","ship-2.png","ship-3.png")
  
  
    
}


function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200)
  sea.addImage(seaImg)
  sea.scale=0.25
  sea.velocityX=-2
  //barco
  shipImg1=createSprite(200,230,20,50)
  shipImg1.addAnimation("move",ship_move)
  shipImg1.scale=0.2

  
}
function draw() {
  
  background("blue");
  if(sea.x<0){
  sea.x=width/2
  }
    drawSprites();
    
 
}
