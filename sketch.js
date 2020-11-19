


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	background ("black")

	engine = Engine.create();
	world = engine.world;

	ground=new Ground (400,500,800,20)
	



    rectangle2= new Rectangle (500,450,20,100)
	rectangle3= new Rectangle (700,450,20,100)
	rectangle1= new Rectangle (600,490,200,20)

	paper=new Paper (100,473,20)

	Engine.run(engine);
  
}


function draw() {

background("black");

paper.display ();
ground.display ();
rectangle2.display ();
rectangle3.display (); 
rectangle1.display ();

}

function keyPressed() {
if (keyCode===UP_ARROW) 
Matter.Body.applyForce(paper.body,paper.body.position, {x:45,y:-85})
}