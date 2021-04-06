var mario,obstacleImg;
var groundImage, ground,ma,bg;
var PLAY = 1, END = 0;
var gameState = PLAY;
var obstacleGroup;
var score = 2;

function preload(){
  bg = loadImage("background.JPG");
  ma = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  groundImage = loadImage("ground2.png");
  obstacleImg = loadAnimation("obstacle1.png","obstacle2.png","obstacle3.png","obstacle4.png");

}



function setup() {
 createCanvas(600,350);
 mario = createSprite(50,250,20,50);
  mario.addAnimation("running",ma);
  ground = createSprite(200,330,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width/2;
  ground.velocityX = (-2);

obstacleGroup = new Group();
  
}
function draw() {
  background(bg);
  text("Score:"+score, 480, 30);
  if(gameState === PLAY){
    ground.velocityX = (-2);
    if(keyCode(32)&& ma.y>=250){
ma.velocityY = (-12);

    }
    ma.velocityY = ma.velocityY+0.5;
    if(obstacleGroup.isTouching(ma)){
      gameState =  END;
    }
  }
  
  



  if(ground.x<0){
    ground.x = ground.width/2;
  }

  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%60 === 0){
  var obstacle = createSprite(600,280,10,40);
  obstacle.velocityX = (-5);
  obstacle.addAnimation("obstacles", obstacleImg);
  obstacle.Lifetime = 300;
  }
}
