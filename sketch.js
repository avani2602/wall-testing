var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);

  thickness = random(10,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(200,200,70,15);
  bullet.shapeColor = "white";

  wall  = createSprite(1200, 200, thickness, height/2);

}

function draw() {
  background(0);

  bullet.velocityX = speed;

  if(isTouching(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
  
    if(damage>10){
      fill("white");
      textSize(50);
      text("WEAK WALL", 280, 200);
      wall.shapeColor = color(225,0,0);
    }

    if(damage<10){
      fill("white");
      textSize(50);
      text("STRONG WALL", 280, 200);
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
