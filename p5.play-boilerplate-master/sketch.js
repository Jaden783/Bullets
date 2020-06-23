var bullet,wall
var speed,weight,thickness



function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

speed =random(55,90)
weight=random(400,1500)
thickness=random(22,83)

this.bullet= new Bullet;

bullet.velocityX = speed;

damage = 0.5*speed*speed*speed/(thickness*thickness*thickness)

if(damage >10 ){

  wall.shapeColor = color(255,0,0);

}

if(damage<10){

wall.shapeColor = color(0,255,0);
}

function hasCollided(bullet, wall){

bulletRightEdge = bullet.x + bullet.width;

wallLeftEdge= wall.x;
if(bulletRightEdge>=wallLeftEdge)
{

return true;

}
return false;
}

}


function draw() {
  background(255,255,255);  
  
  this.bullet = new Bullets(50,200,50,50)
 wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = color(80,80,80)


  drawSprites();
}