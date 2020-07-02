var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,300,50,100);
  movingRect.shapeColor = "pink";
  fixedRect.shapeColor = "pink";
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "lightblue";
    fixedRect.shapeColor = "lightblue";
  }
  else{
    movingRect.shapeColor = "pink";
    fixedRect.shapeColor = "pink";
  }

  drawSprites();
}