var path,pathImg;
var runner, runnerani;
var invisibleBoundary,invisibleBoundary2 ;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerani = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(280,400);
  //create sprites here
  path = createSprite(150,200,10,10);
  path.addImage("path",pathImg);
  path.velocityY = 4;
  path.scale = 1;
  runner = createSprite(150,200,5,5);
  runner.addAnimation("runner", runnerani);
  runner.scale = 0.05;
  
  
  invisibleBoundary = createSprite(-10,200,10,400);
  invisibleBoundary.visible = false;
  invisibleBoundary2 = createSprite(280,200,10,400);
  invisibleBoundary2.visible = false;
}

function draw() {
 
  background("white");
  if(path.y > 400 ) {
    path.y = height/2;
  }
  /*if(runner.x <= 25) {
    runner.x = 30
  }*/
  runner.collide(invisibleBoundary);
  runner.collide(invisibleBoundary2);
  drawSprites();
  runner.x = World.mouseX;
}
