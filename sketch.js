var Chao

var Corredor
var CorredorAnimacao

var BordaEsquerda
var BordaDireita


function preload(){
  //imagens pré-carregadas
   
     path = loadImage ("path.png");

     CorredorAnimacao=loadAnimation ("Runner-1.png","Runner-2.png");
  
}

function setup(){

  createCanvas(400,400);
  
  //crie sprite aqui
   Chao = createSprite (200,180,400,20);
   Chao.addImage(path);
   Chao.velocityY=5;


   Corredor = createSprite (131,300,10,10);
   Corredor.addAnimation("Correndo",CorredorAnimacao);
   Corredor.scale=0.07;
   

   BordaEsquerda = createSprite (60,200,21,350);
   BordaEsquerda.visible=false;

   BordaDireita = createSprite (342,200,15,350);
   BordaDireita.visible=false;
}

function draw() {
  background(0);

  if (Chao.y > 400 ){
    Chao.y = height/2;
 }
 Corredor.x=World.mouseX;

  Corredor.collide(BordaEsquerda);
  Corredor.collide(BordaDireita);
  drawSprites();
}
