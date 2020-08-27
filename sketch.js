
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:0.2
	}
ls = createSprite(250,620,10,80);
ls.shapeColor = "red";
rs = createSprite(450,620,10,80);
rs.shapeColor = "red";
bs= createSprite(350,655,190,10);
bs.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(250,600,10,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
}


