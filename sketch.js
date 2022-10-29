
function preload(){

}

function setup(){
  createCanvas(600,600);


sprite = createSprite(200,600,1,3);
sprite2 = createSprite(200,400,200,3);
sprite3 = createSprite(200,300,200,3);
sprite4 = createSprite(100,317.5,3,35);
sprite5 = createSprite(100,384,3,35);
sprite6 = createSprite(89,336,25,3);
sprite7 = createSprite(89,366,25,3);
sprite8 = createSprite(78,350,3,30);
sprite9 = createSprite(300,316,3,35);
sprite10 = createSprite(300,384,3,35);
sprite11 = createSprite(316,366,35,3);
sprite12 = createSprite(316,335,35,3);
sprite13 = createSprite(335,350,3,33);

sprite14 = createSprite(95,350,10,10);
sprite14.shapeColor="red";

spriteenemy = createSprite(200,350,10,10)
spriteenemy2 = createSprite(140,350,10,10)
spriteenemy3 = createSprite(260,350,10,10)


}

function draw(){
background("black");

//drawSprites();Acuerdate que el draw spites va a abajo 

 if(keyDown(UP_ARROW)){  //las condicionales vasn sin "" amenos que sean letras "a"
    changeposition(0,-5);//los valores positivo s no requieren +
  }
  
if(keyDown(DOWN_ARROW)){
    changeposition(0,5);
  }
      
      
if(keyDown(LEFT_ARROW)){
    changeposition(-5,0);
  }
      
if(keyDown(RIGHT_ARROW)){
  changeposition(5,0); //los in no llevan ; en las llaves  
  }
  drawSprites();
}

function changeposition(x,y){
  sprite14.x = sprite14.x+x;
  sprite14.y = sprite14.y+y;
}

//llopezbriones0@gmail.com   


