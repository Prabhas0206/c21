var fixedRect, movingRect;
var cat,mouse;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 350, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  cat = createSprite(200,400,70,50);
  cat.shapeColor="brown";

  rat = createSprite(800,400,30,30);
  rat.shapeColor="grey";
  rat.velocityX=-3;
}

function draw() {
  background(0,0,0);  
  cat.x = World.mouseX;
  cat.y = World.mouseY;

  if(isTouching(cat,rat)){
rat.shapeColor="green";
  }
 else{
 rat.shapeColor="grey";  
 } 
  drawSprites();
}