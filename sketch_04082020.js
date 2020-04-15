var movingRec,fixedRec

function setup() {
  createCanvas(800,400);
  movingRec = createSprite(400, 200, 50, 55);
 fixedRec = createSprite(200,100,70,45);
}

function draw() {
  background(255,255,255);  
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;
if (movingRec.x -fixedRec.x <= movingRec.width/2+fixedRec.width/2 && 
  fixedRec.x -movingRec.x <=movingRec.width/2+fixedRec.width/2 &&
  movingRec.y -fixedRec.y<= movingRec.height/2+fixedRec.height/2 &&
  fixedRec.y -movingRec.y<= movingRec.height/2+fixedRec.height/2){
movingRec.shapeColor = "red";
fixedRec.shapeColor = "red"; 
}
else {
movingRec.shapeColor = "green";
fixedRec.shapeColor = "green";
}

  drawSprites();
}