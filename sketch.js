var aw, awImg, zumbi;
var edges;
var tiro;
var zumbiGroup, zumbiImg;

function preload(){
  zumbiImg = loadAnimation("zumbi.gif");
}

function setup() {
  createCanvas(1000,400);
  
  edges = createEdgeSprites();

  aw = createSprite(30,350,20,20);
}

function draw() {
  background("black");

  aw.bounceOff(edges);
  awMove();
  shoot();
  geraZumbi();geraZumbi

  zumbiGroup = new Group();

  drawSprites();
}

function awMove(){
  if(keyDown(UP_ARROW)){
    aw.y -= 5;
  }

  if(keyDown(DOWN_ARROW)){
    aw.y += 5;
  }
  if(keyDown(RIGHT_ARROW)){
    aw.x += 5;
  }

  if(keyDown(LEFT_ARROW)){
    aw.x -= 5;
  }
}

function shoot(){
  if(keyWentDown("space")){
    var tiro = createSprite(aw.x,aw.y,5,5);
    tiro.velocityX = 10;
  }
}

function geraZumbi(){
  if(frameCount % 100 == 0){
    zumbi = createSprite(990, random(20,380),10,10);
    zumbi.addAnimation(zumbiImg);
    zumbi.velocityX = -2;
    zumbiGroup.add(zumbi);
  }
}