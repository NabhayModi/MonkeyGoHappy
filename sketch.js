var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png",
    "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");


}




function setup() {
  createCanvas(400, 400);
  
  bananaGroup=new Group()

  monkey = createSprite(100, 300, 20, 20);
  monkey.addAnimation("monkey", monkey_running)
  monkey.scale = 0.1

  ground = createSprite(200, 300, 1000, 10);
}


function draw() {
  background("white");
  monkey.collide(ground);

  ground.velocityX = -10
  if (ground.x < 0) {
    ground.x = ground.width / 2
  }  
  
  if (monkey.isTouching(bananaGroup)){
  bananaGroup.destroyEach();
  }
  
  

  if (keyWentDown("space")) {

    monkey.velocityY = -12

  }

  if (frameCount % 80 === 0) {
    banana = createSprite(300, Math.round(random(120, 280)))
    banana.addImage(bananaImage)
    banana.scale = 0.1
    banana.velocityX = -4
    banana.lifetime = 100

    bananaGroup.add(banana)
  }

  if (frameCount % 200 === 0) {
    obstacle = createSprite(350, ground.y - 20)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityX = -4 
    obstacle.lifetime = 100
  }



    monkey.velocityY = monkey.velocityY + 1
  drawSprites();
}