
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof1,bob1,bob2,bob3,bob4,bob5,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
	roof1= new roof (500,100,800,20);

bob3= new bob (500,350);

bob2=new bob(560,350);

bob4=new bob(440,350);

bob5=new bob(620,350);

bob1=new bob(380,350);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
 
roof1.display();

bob3.display();
bob2.display();
bob4.display();
bob5.display();
bob1.display();






}



