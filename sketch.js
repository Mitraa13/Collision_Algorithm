var rect1, rect2;

function setup() {
  
  createCanvas(1350,650);

  rect1=createSprite(200,300,50,50);
  rect1.shapeColor="blue";
  rect1.velocityY=-5;
  rect1.velocityX=5;

  rect2=createSprite(200,100,50,50);
  rect2.velocityX=5;
  rect2.velocityY=-5;
  rect2.shapeColor="blue";

}

function draw() {

  background("pink");  

  if(rect1.x-rect2.x<(rect1.width
    +rect2.width)/2 && rect2.x-rect1.x<(rect1.width
      +rect2.width)/2 && rect1.y-rect2.y<(rect1.height
        +rect2.height)/2 && rect2.y-rect1.y<(rect1.height
          +rect2.height)/2) {
      
      rect1.shapeColor="red";
      rect2.shapeColor="yellow";
      
      rect2.velocityY=-rect1.velocityY;
      rect2.velocityX=-rect1.velocityX;
      rect1.velocityY=-rect2.velocityY;
      rect1.velocityX=-rect2.velocityX;
    }
  else{
    rect1.shapeColor="blue";
    rect2.shapeColor="blue";
  }

  if(rect1.x===1350 || rect1.x===0 ){
    rect1.velocityX = rect1.velocityX*(-1);
 }
 if(rect1.y===650 || rect1.y===0 ){
   rect1.velocityY = rect1.velocityY*(-1);
}

  if(rect2.x===1350 || rect2.x===0 ){
    rect2.velocityX = rect2.velocityX*(-1);
  }
  if(rect2.y===650 || rect2.y===0 ){
    rect2.velocityY = rect2.velocityY*(-1);
  }

  drawSprites();
}