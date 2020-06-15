var play =1
var end =0;
var gameState =play;


var runner;
var ground;
var obstacle;
var edges;
//var obstacle =[1,2,3,4];

function setup(){
  createCanvas(600,200);
  runner = createSprite(35,150,20,20);
  runner.shapeColor= 'white';
  //you can remove the below line if you dont want to see the green collider.
  runner.debug = true;
  runner.setCollider("rectangle",0,0,35,40)
  ground =createSprite(200,200,800,20);
  ground.shapeColor ='white';

   obstacle =createSprite(600,155,20,70);
   obstacle.shapeColor ='white';

   //edges = createEdgeSprites()

}

function draw(){
  background('black')

  if(keyDown("space") && runner.y >= 150){
    runner.velocityY = -12 ;
  }

  runner.velocityY = runner.velocityY+1;
  if(gameState === play){
    if(frameCount %60 ===0){
      obstacle.velocityX =-9;
    }
}

runner.collide(edges[3])
  
  //runner.display();
  //ground.display();
  //obstacle.display();
  drawSprites();
}