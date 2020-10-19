
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
paper1 = new Paper(200,450,40);	
ground1 = new Ground(width/2,670,width,20);
ls = createSprite(1050,620,10,80);
ls.shapeColor = "red";
rs = createSprite(1250,620,10,80);
rs.shapeColor = "red";
bs= createSprite(1150,655,190,10);
bs.shapeColor="red";

	

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
}
}


