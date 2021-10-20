var fixedRect, movingRect;
var obj3, obj4, obj5, obj6;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj3 = createSprite(200, 400, 60,40);
  obj4 = createSprite(1000, 400, 60,40);
  obj5 = createSprite(100, 100, 60,40);
  obj6 = createSprite(100, 700, 60,40);

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  obj3.velocityX = 5;
  obj4.velocityX = -5;
  obj5.velocityY = 5;
  obj6.velocityY = -5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect, fixedRect);
bounceOff(obj3, obj4);
bounceOff(obj5, obj6);
  drawSprites();
}
function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY * (-1);
    object2.velocityY = object2.velocityY * (-1);
}

}