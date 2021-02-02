
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,550);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,390,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() {

   if(keyDown("space")){
     monkey.velocityY = -10;
   }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
   food();
   obstacle();
  
  drawSprites();
}

function food() {
  if(frameCount%80 === 0){
    banana = createSprite(100,Math.round(random(120,200)))
    banana.addImage("food",bananaImage)
    banana.velocityX = -4;
    banana.lifetime = 150;
    foodGroup.add(banana)
  }
}


function obstacle() {
  if(frameCount%300 === 0){
    obstacle = createSprite(100,Math.round(random(20,20)))
    obstacle.addImage("obstacle",obstacleImage)
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle)
  }
}



