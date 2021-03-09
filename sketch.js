var block1,block2,block3,block4;
var box;
var canvas;
var music;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   canvas = createCanvas(450,300);

   

    //create 4 different surfaces
   block1 = createSprite(60,280,100,20);
   block1.shapeColor = rgb(255,128,0);

   block2 = createSprite(170,280,100,20);
   block2.shapeColor = "pink";
  
   block3 = createSprite(280,280,100,20);
   block3.shapeColor = "green";

   block4 = createSprite(390,280,100,20);
   block4.shapeColor = "yellow";

    //create box sprite and give velocity
   ball = createSprite(random(20,430),15,20,20);
   ball.velocityX = 2;
   ball.velocityY = 5; 
   
   music.loop();

   topEdge = createEdgeSprites();
   bottomEdge = createEdgeSprites();
   
  
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
 

    //add condition to check if box touching surface and make it box
   if(ball.isTouching(topEdge)) {
      ball.velocityY = ball.velocityY * (-1);
      ball.velocityX = 2;
   } 

   if(ball.isTouching(bottomEdge)) {
      ball.velocityX = ball.velocityX * (-1); 
      ball.velocityY = 5;
   }

   if(ball.isTouching(block1)) {
      
      ball.velocityY = ball.velocityY * (-1);
      ball.velocityX = 2;
      ball.shapeColor = rgb(255,128,0);
   }

   if(ball.isTouching(block2)) {
      ball.setVelocity(0,0); 
      ball.shapeColor = "pink"; 
      music.stop();
   }
 
   if(ball.isTouching(block3)) {
      
      ball.velocityY = ball.velocityY * (-1);
      ball.velocityX = 2;
      ball.shapeColor = "green";
   }

   if(ball.isTouching(block4)) {
      
      ball.velocityY = ball.velocityY * (-1);
      ball.velocityX = 2;
      ball.shapeColor = "yellow";
   }
   drawSprites(); 
}
