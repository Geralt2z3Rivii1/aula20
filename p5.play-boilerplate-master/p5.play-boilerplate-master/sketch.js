var retFixo, retMovel;

function setup() {
  createCanvas(800,400);
  retFixo = createSprite(400, 200, 50, 50);
  retFixo.shapeColor = 'red';

  retMovel = createSprite(200,100,100,40);
  retMovel.shapeColor = 'green';
}

function draw() {
  background('black');
  
  retMovel.x = World.mouseX

  retMovel.y = World.mouseY

  if(retMovel.x - retFixo.x < retFixo.width/2 + retMovel.width/2 &&
    retFixo.x - retMovel.x < retFixo.width/2 + retMovel.width/2 &&
    retMovel.y - retFixo.y < retFixo.height/2 + retMovel.height/2 &&
    retFixo.y - retMovel.y < retFixo.height/2 + retMovel.height/2){
    retMovel.shapeColor = 'purple';
    retFixo.shapeColor = 'pink';
  }else{
    retMovel.shapeColor = 'gray';
    retFixo.shapeColor = 'white';
  }



  drawSprites();
}