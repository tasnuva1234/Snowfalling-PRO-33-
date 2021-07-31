const Engine = Matter. Engine;
const World = Matter. World;
const Bodies = Matter. Bodies;

var santa;
var boy;
var snow = [];

function preload(){
  bgImg = loadImage("background.png");
  santaImg = loadImage("santa.png")
  boyImg = loadImage("boy.png")
  santaSound = loadSound("hohoho.mp3")
}

function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  santaSound.play();

  //The santa sprite
  santa = createSprite(10,50,50,50)
  santa. addImage(santaImg);
  santa. scale = 0.3
  santa.velocityX = 2;

  //The boy sprite
  boy = createSprite(880,410,50,50)
  boy. addImage(boyImg)
  boy. scale = 0.3;
  boy. velocityX = -2;

   //For creating the snow
   if (frameCount % 300 === 0){
    for (var i = 0; i < 20; i++){
      snow. push(new Snow(random(0, 900), random(0,100)))
    }
  }

  
 
  

  }
  


function draw() {
  background(bgImg);  
  Engine.update(engine);
  drawSprites();

 
 

  //For returning the santa
  if(santa. x > 1200){
    santa. x = 10
  }

  //For returning the santa
  if(boy. x < -100){
    boy. x = 880
  }

  for (var i = 0; i < 20; i++){
    snow[i].display();
    snow[i].changePosition();
  }

  

}